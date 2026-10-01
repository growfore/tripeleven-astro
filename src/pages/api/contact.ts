import type { APIRoute } from "astro";

const RESEND_URL = "https://api.resend.com/emails";
const FROM = "TripEleven <noreply@tripeleven.com>";
const TO = "noreply@tripeleven.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The honeypot only stops naive bots. Without a throttle this endpoint is an
// open relay: anyone who can reach it can have us send email from
// noreply@tripeleven.com, repeatedly, and burn the Resend quota. In-memory on
// a single serverless instance, which is the right size for this: the goal is
// to blunt a script, not to be a distributed rate limiter. Behind a load
// balancer it degrades to per-instance counting, still better than nothing.
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;
const hits = new Map<string, number[]>();

function throttled(key: string): boolean {
  const now = Date.now();
  const recent = (hits.get(key) ?? []).filter((at) => now - at < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    hits.set(key, recent);
    return true;
  }
  recent.push(now);
  hits.set(key, recent);
  // Opportunistic cleanup so the map cannot grow without bound.
  if (hits.size > 5000) {
    for (const [k, v] of hits) {
      if (v.every((at) => now - at >= WINDOW_MS)) hits.delete(k);
    }
  }
  return false;
}

const ipOf = (request: Request): string => {
  const forwarded = request.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first || request.headers.get("x-real-ip") || "unknown";
};

export const POST: APIRoute = async ({ request }) => {
  const ip = ipOf(request);

  if (throttled(ip)) {
    return new Response(
      JSON.stringify({ ok: false, error: "too many requests" }),
      { status: 429, headers: { "Retry-After": String(WINDOW_MS / 1000) } },
    );
  }

  let data: Record<string, string>;
  try {
    data = (await request.json()) as Record<string, string>;
  } catch {
    return new Response(
      JSON.stringify({ ok: false, error: "invalid body" }),
      { status: 400 },
    );
  }

  if (data["_honey"]) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const { name, email, agency, topic, message } = data;
  if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
    return new Response(
      JSON.stringify({ ok: false, error: "missing fields" }),
      { status: 400 },
    );
  }

  // `topic` reaches the Subject header, which the email address regex does not
  // cover — a raw CRLF there is header injection into the outbound mail. Strip
  // newlines and cap the length; the full value still appears in the body.
  const headerSafe = (value: string, max = 120) =>
    value.replace(/[\r\n]+/g, " ").trim().slice(0, max);

  const res = await fetch(RESEND_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env["RESEND_API_KEY"]}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: `TripEleven contact — ${headerSafe(topic || "General question")}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        agency ? `Agency: ${agency}` : null,
        topic ? `Topic: ${topic}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ ok: false, error: "send failed" }), {
      status: 502,
    });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};

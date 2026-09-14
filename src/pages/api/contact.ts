import type { APIRoute } from "astro";

const RESEND_URL = "https://api.resend.com/emails";
const FROM = "TripEleven <noreply@tripeleven.com>";
const TO = "noreply@tripeleven.com";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const POST: APIRoute = async ({ request }) => {
  const data = (await request.json()) as Record<string, string>;

  if (data["_honey"]) {
    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  }

  const { name, email, agency, topic, message } = data;
  if (!name?.trim() || !email || !EMAIL_RE.test(email) || !message?.trim()) {
    return new Response(JSON.stringify({ ok: false, error: "missing fields" }), { status: 400 });
  }

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
      subject: `TripEleven contact — ${topic ?? "General question"}`,
      text: [`Name: ${name}`, `Email: ${email}`, agency ? `Agency: ${agency}` : null, topic ? `Topic: ${topic}` : null, "", message]
        .filter(Boolean)
        .join("\n"),
    }),
  });

  if (!res.ok) {
    return new Response(JSON.stringify({ ok: false, error: "send failed" }), { status: 502 });
  }
  return new Response(JSON.stringify({ ok: true }), { status: 200 });
};
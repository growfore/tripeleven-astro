// Generates the 1200x630 Open Graph images in public/og/ for the hub, feature
// and integration pages. Renders an HTML card per page in headless Chrome so
// the real fonts are used, then saves a JPEG.
//
// Run after changing a headline or screenshot, then commit public/og:
//   npx tsx scripts/og.ts
// Needs Google Chrome installed locally (set CHROME to override the path).
import { execFileSync } from "node:child_process";
import { mkdirSync, mkdtempSync, writeFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join, resolve } from "node:path";
import { features, featureGroups, sectionOf } from "../src/lib/features";
import { integrations } from "../src/lib/integrations";

const root = resolve(import.meta.dirname, "..");
const chrome = process.env.CHROME ?? "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const font = (pkg: string, file: string) => `file://${root}/node_modules/@fontsource-variable/${pkg}/files/${file}`;
const asset = (path: string) => `file://${root}/src/assets${path}`;

const panels = {
  blue: "#8ecbff",
  green: "#a2e6b0",
  yellow: "#ffe07a",
  red: "#ffa391",
} as const;

interface Card {
  out: string;
  label: string;
  title: string;
  image: string;
  panel: keyof typeof panels;
}

const flagOf = (slug: string) => featureGroups.find((g) => g.slugs.includes(slug))?.flag ?? "blue";

const cards: Card[] = [
  { out: "home", label: "All-in-one travel agency software", title: "Booking website software for tour and trekking agencies", image: "/mockups/hero-image.webp", panel: "blue" },
  { out: "product", label: "Product", title: "All-in-one travel booking software for small agencies", image: "/mockups/itinerary-form.webp", panel: "yellow" },
  { out: "integration", label: "Integrations", title: "Connect the tools your agency already uses", image: "/mockups/help/integrations.png", panel: "blue" },
  { out: "pricing", label: "Pricing", title: "Tour operator software pricing", image: "/mockups/help/bookings.png", panel: "green" },
  ...features.map((f) => ({
    out: `${sectionOf(f)}/${f.slug}`,
    label: f.eyebrow,
    title: f.headline,
    image: f.image,
    panel: flagOf(f.slug),
  })),
  ...integrations.map((i) => ({
    out: `integration/${i.slug}`,
    label: `${i.category} integration`,
    title: i.headline,
    image: "/mockups/help/integrations.png",
    panel: "blue" as const,
  })),
];

const escape = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;");

const html = (c: Card) => `<!doctype html><html><head><meta charset="utf-8"><style>
@font-face { font-family: "Mona"; src: url("${font("mona-sans", "mona-sans-latin-wght-normal.woff2")}"); font-weight: 200 900; }
@font-face { font-family: "Mono"; src: url("${font("geist-mono", "geist-mono-latin-wght-normal.woff2")}"); font-weight: 100 900; }
html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; background: #f1f0ee; }
.card { position: relative; display: grid; grid-template-columns: 520px 1fr; width: 1200px; height: 630px; }
.copy { display: flex; flex-direction: column; padding: 64px 48px 56px 64px; }
.logo { height: 34px; width: auto; align-self: flex-start; }
.label { margin-top: auto; font: 500 18px/1.3 "Mono"; text-transform: uppercase; color: #0a6fd8; }
h1 { margin: 18px 0 0; font: 500 50px/1.08 "Mona"; letter-spacing: -0.03em; color: #161616; text-wrap: balance; }
.url { margin-top: 28px; font: 400 18px "Mono"; color: #686868; }
.panel { position: relative; display: flex; align-items: center; justify-content: flex-start; padding-left: 48px;
  background-color: ${panels[c.panel]};
  background-image: linear-gradient(rgb(255 255 255 / .55) 1px, transparent 1px), linear-gradient(90deg, rgb(255 255 255 / .55) 1px, transparent 1px);
  background-size: 24px 24px; background-position: -1px -1px; }
.panel img { width: 760px; height: auto; border-radius: 14px; box-shadow: 0 30px 60px -20px rgb(22 22 22 / .45); }
</style></head><body><div class="card">
<div class="copy">
  <img class="logo" src="file://${root}/public/lettermark-logo.svg">
  <div class="label">${escape(c.label)}</div>
  <h1>${escape(c.title)}</h1>
  <div class="url">tripeleven.com</div>
</div>
<div class="panel"><img src="${asset(c.image)}"></div>
</div></body></html>`;

const tmp = mkdtempSync(join(tmpdir(), "og-"));
try {
  for (const c of cards) {
    const page = join(tmp, "card.html");
    const png = join(tmp, "card.png");
    const jpg = join(root, "public/og", `${c.out}.jpg`);
    mkdirSync(join(jpg, ".."), { recursive: true });
    writeFileSync(page, html(c));
    execFileSync(chrome, [
      "--headless=new",
      "--disable-gpu",
      "--hide-scrollbars",
      "--allow-file-access-from-files",
      "--window-size=1200,630",
      "--virtual-time-budget=3000",
      `--screenshot=${png}`,
      `file://${page}`,
    ], { stdio: "ignore" });
    execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "82", png, "--out", jpg], { stdio: "ignore" });
    console.log(`og/${c.out}.jpg`);
  }
} finally {
  rmSync(tmp, { recursive: true, force: true });
}

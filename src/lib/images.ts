import type { ImageMetadata } from "astro";

// Screenshots live in src/assets so astro:assets can emit resized srcset
// variants. Data arrays keep their familiar "/mockups/…" and "/clients/…"
// keys; this resolves them to the imported image at build time.
const assets = import.meta.glob<{ default: ImageMetadata }>(
  "/src/assets/**/*.{webp,png,jpg}",
  { eager: true },
);

export function asset(path: string): ImageMetadata {
  const found = assets[`/src/assets${path}`];
  if (!found) throw new Error(`Missing image asset: ${path}`);
  return found.default;
}

// Shared srcset widths for full-bleed screenshots and for the narrow
// client-site cards.
export const screenshotWidths = [480, 768, 1080, 1440, 1920];
export const cardWidths = [320, 480, 720, 960];

// AVIF <source> (~35-40% smaller than WebP on these screenshots) with a WebP
// <img> fallback. Without an explicit fallbackFormat Astro emits PNG, which
// is several MB per screenshot for browsers that cannot decode AVIF.
export const pictureProps = {
  formats: ["avif"] as ("avif" | "webp")[],
  fallbackFormat: "webp" as const,
};

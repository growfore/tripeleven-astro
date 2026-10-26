// Shared class strings for the redesign. Kept as plain strings so Astro
// components can compose them with class:list.

export const container = "mx-auto w-full max-w-[80rem] px-5 sm:px-8";
export const section = "py-16 lg:py-28";

export const tagline =
  "m-0 font-mono text-[13px] font-medium uppercase tracking-[-0.01em] text-signal";
export const h1 =
  "m-0 font-display text-[clamp(40px,4.6vw,64px)] font-medium leading-[1.12] tracking-[-0.03em] text-coal";
export const h2 =
  "m-0 font-display text-[clamp(30px,3vw,42px)] font-medium leading-[1.18] tracking-[-0.02em] text-coal";
export const h3 =
  "m-0 font-display text-[clamp(24px,2.2vw,30px)] font-medium leading-[1.25] tracking-[-0.02em] text-coal";
export const h4 = "m-0 text-[16px] font-normal leading-snug text-coal";
export const lead = "m-0 text-[17px] leading-[1.6] text-coal/85";
export const body = "m-0 text-[15px] leading-[1.6] text-mute";

export const btn =
  "inline-flex min-h-9 items-center justify-center gap-1.5 rounded-md px-3.5 text-[14px] font-normal transition-colors";
export const btnPrimary = `${btn} bg-signal text-white hover:bg-coal`;
export const btnDark = `${btn} bg-coal text-white hover:bg-signal`;
export const btnSecondary = `${btn} bg-white text-coal ring-1 ring-line-strong hover:ring-coal`;

/** Bordered card on the paper background, Relume style. */
export const card = "rounded-2xl ring-1 ring-line";
/** Small bordered icon tile used beside list items. */
export const iconTile =
  "inline-flex size-7 shrink-0 items-center justify-center rounded-md bg-white text-coal ring-1 ring-line";

export const flags = {
  blue: { panel: "bg-flag-blue", ink: "text-flag-blue-ink", edge: "text-flag-blue", solid: "bg-flag-blue-ink" },
  green: { panel: "bg-flag-green", ink: "text-flag-green-ink", edge: "text-flag-green", solid: "bg-flag-green-ink" },
  yellow: { panel: "bg-flag-yellow", ink: "text-flag-yellow-ink", edge: "text-flag-yellow", solid: "bg-flag-yellow-ink" },
  red: { panel: "bg-flag-red", ink: "text-flag-red-ink", edge: "text-flag-red", solid: "bg-flag-red-ink" },
} as const;
export type Flag = keyof typeof flags;

export const SIGNUP = "https://app.tripeleven.com/signup";
export const LOGIN = "https://app.tripeleven.com/login";

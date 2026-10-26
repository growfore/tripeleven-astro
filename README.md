# Tripeleven Marketing Site

Public marketing and sales site for the platform: home, `/pricing` (USD), `/nepal` (NPR pricing for Nepal operators), contact, privacy and terms. Independent of the backend; the only server code is the contact form endpoint.

## Stack

Astro (SSR, Vercel adapter), Tailwind 4, Outfit font. No React.

## Setup

```bash
pnpm install
cp .env.example .env   # set RESEND_API_KEY
pnpm dev
```

| Variable | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Used by `src/pages/api/contact.ts` to email contact form submissions. Set in Vercel for production. |

## Scripts

`pnpm dev` · `pnpm build` · `pnpm preview` · `pnpm check` (astro check) · `pnpm format`

## Deploy

Vercel (`@astrojs/vercel`). Product and positioning notes live in `PRODUCT.md`.

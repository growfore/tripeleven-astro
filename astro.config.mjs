import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://tripeleven.com",
  // Pages prerender by default; on-demand routes opt out with
  // `export const prerender = false` (e.g. src/pages/api/contact.ts).
  output: "static",
  trailingSlash: "never",
  adapter: vercel(),
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/signup": "https://app.tripeleven.com/signup",
  },
});

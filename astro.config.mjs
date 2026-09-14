import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import tailwindcss from "@tailwindcss/vite";

// ponytail: node adapter keeps astro build self-contained (no cloud credentials);
// swap to @astrojs/cloudflare in one line when the deploy target is decided.
export default defineConfig({
  site: "https://tripeleven.com",
  output: "server",
  adapter: node({ mode: "standalone" }),
  vite: {
    plugins: [tailwindcss()],
  },
});
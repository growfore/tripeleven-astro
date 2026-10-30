import type { APIRoute } from "astro";
import { features, featureHref } from "../lib/features";
import { content } from "../lib/feature-content";
import { integrationCards } from "../lib/integrations";

export const GET: APIRoute = () => {
  const lines = [
    "# TripEleven",
    "",
    "> TripEleven is an all-in-one platform for tour and trekking agencies to build trips, publish a branded website, take bookings and payments, and manage inquiries from one dashboard.",
    "",
    "## Features",
    ...features.map(
      (f) =>
        `- [${f.name}](https://tripeleven.com${featureHref(f)}): ${content[f.slug].summary.split(". ")[0]}.`,
    ),
    "",
    "## Key pages",
    "- [Product overview](https://tripeleven.com/product)",
    "- [Integrations](https://tripeleven.com/integration)",
    "- [Pricing](https://tripeleven.com/pricing): Launch, Business and Enterprise plans with a 7-day free trial",
    "- [Migration and redesign](https://tripeleven.com/data-migration): we move trips, blog posts and images from your current website, or redesign the whole site, from USD 100",
    "- [Nepal program](https://tripeleven.com/nepal): plans in NPR for Nepal-based agencies",
    "- [Contact](https://tripeleven.com/contact)",
    "",
    "## Integrations",
    ...integrationCards.map((c) => `- [${c.name}](https://tripeleven.com${c.href}): ${c.blurb}.`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

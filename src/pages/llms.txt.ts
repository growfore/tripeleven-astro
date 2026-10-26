import type { APIRoute } from "astro";
import { features } from "../lib/features";
import { content } from "../lib/feature-content";

export const GET: APIRoute = () => {
  const lines = [
    "# TripEleven",
    "",
    "> TripEleven is an all-in-one platform for tour and trekking agencies to build trips, publish a branded website, take bookings and payments, and manage inquiries from one dashboard.",
    "",
    "## Features",
    ...features.map(
      (f) =>
        `- [${f.name}](https://tripeleven.com/features/${f.slug}): ${content[f.slug].summary.split(". ")[0]}.`,
    ),
    "",
    "## Key pages",
    "- [Features overview](https://tripeleven.com/features)",
    "- [Pricing](https://tripeleven.com/pricing): Launch, Business and Enterprise plans with a 7-day free trial",
    "- [Nepal program](https://tripeleven.com/nepal): plans in NPR for Nepal-based agencies",
    "- [Contact](https://tripeleven.com/contact)",
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};

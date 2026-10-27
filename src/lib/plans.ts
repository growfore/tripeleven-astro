// Plans and the comparison table. Source of truth: PRODUCT.md and the
// previous pricing page. Never add a claim here that the product can't back.
import { SIGNUP } from "./ui";

export interface Plan {
  name: string;
  description: string;
  monthly?: string;
  annual?: { price: string; total: string };
  cta: string;
  href: string;
  highlights: string[];
}

export const plans: Plan[] = [
  {
    name: "Launch",
    description: "Everything you need to run a real travel business online.",
    monthly: "$29",
    annual: { price: "$23", total: "$276 billed yearly" },
    cta: "Start free trial",
    href: SIGNUP,
    highlights: [
      "Branded trip website and catalog",
      "Custom domain",
      "Trip inquiries by email and WhatsApp",
      "Bookings and payments with your own provider keys or bank transfer",
      "Up to 45 trips and 200 blog posts",
      "AI itinerary drafts (bring your own key)",
      "5 GB media storage · 2 staff seats",
    ],
  },
  {
    name: "Business",
    description: "For agencies managing a large catalog of packages.",
    monthly: "$79",
    annual: { price: "$63", total: "$756 billed yearly" },
    cta: "Start free trial",
    href: SIGNUP,
    highlights: [
      "Everything in Launch",
      "Unlimited trips and blog posts",
      "Remove TripEleven branding",
      "Read-only API access",
      "25 GB media storage · 25 staff seats",
    ],
  },
  {
    name: "Enterprise",
    description: "White-label, dedicated onboarding and custom terms.",
    cta: "Contact us",
    href: "/contact?topic=enterprise",
    highlights: [
      "Everything in Business",
      "White-label",
      "Unlimited storage and staff seats",
      "Dedicated onboarding",
      "Custom volume and terms",
    ],
  },
];

type Value = string;
export const compare: { title: string; rows: [string, Value, Value, Value][] }[] = [
  {
    title: "Website and branding",
    rows: [
      ["Branded trip website and catalog", "✓", "✓", "✓"],
      ["Custom domain", "✓", "✓", "✓"],
      ["Custom template, palette and fonts", "✓", "✓", "✓"],
      ["Remove TripEleven branding", "—", "✓", "✓"],
      ["White-label", "—", "—", "✓"],
    ],
  },
  {
    title: "Trips and content",
    rows: [
      ["Trips", "45", "Unlimited", "Unlimited"],
      ["Blog posts", "200", "Unlimited", "Unlimited"],
      ["Per-trip SEO fields", "✓", "✓", "✓"],
      ["Large package catalogs", "—", "✓", "✓"],
    ],
  },
  {
    title: "Bookings and inquiries",
    rows: [
      ["Trip inquiries (email / WhatsApp)", "✓", "✓", "✓"],
      ["Bookings and payments", "✓", "✓", "✓"],
      ["Online payments (Stripe, PayPal, Razorpay, Paystack, Xendit, Mercado Pago)", "✓", "✓", "✓"],
      ["Bank transfer bookings", "✓", "✓", "✓"],
      ["Test mode to try checkout before going live", "✓", "✓", "✓"],
    ],
  },
  {
    title: "Media, AI and API",
    rows: [
      ["Media library with auto WebP", "✓", "✓", "✓"],
      ["Media storage", "5 GB", "25 GB", "Unlimited"],
      ["AI itinerary generation (bring your own key)", "✓", "✓", "✓"],
      ["Read-only API access", "—", "✓", "✓"],
    ],
  },
  {
    title: "Team and support",
    rows: [
      ["Staff seats", "2", "25", "Unlimited"],
      ["Dedicated onboarding", "—", "—", "✓"],
    ],
  },
];

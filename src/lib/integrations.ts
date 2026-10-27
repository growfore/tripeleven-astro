// Third-party integrations, mirroring Dashboard → Integrations in the app.
// Payments and AI have full feature pages (see features.ts); the rest use the
// lighter integration template. Keep claims to what the dashboard shows.
import type { ComponentProps } from "astro/types";
import type Icon from "../components/Icon.astro";
import type { Brand } from "./brands";
import { featureHref, getFeature } from "./features";

type IconName = ComponentProps<typeof Icon>["name"];

export type Category = "Chat" | "Analytics" | "Marketing" | "Privacy" | "Payments" | "AI" | "Email";

export interface Integration {
  slug: string;
  name: string;
  category: Category;
  /** Brand mark when one exists, otherwise a generic icon. */
  logo: { brand: Brand } | { icon: IconName };
  /** One line, as worded in the dashboard. */
  blurb: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  /** Answer-first paragraph, written to be quoted on its own. */
  summary: string;
  /** What you enter in Dashboard → Integrations. */
  connectWith: string;
  setup: { title: string; text: string }[];
  benefits: { title: string; text: string }[];
  faqs: { q: string; a: string }[];
  related: string[];
}

const setup = (connect: string, result: string) => [
  { title: "Open Integrations", text: "In the TripEleven dashboard, go to Integrations." },
  { title: "Add your details", text: `${connect} and save.` },
  { title: "It runs on your site", text: result },
];

export const integrations: Integration[] = [
  {
    slug: "whatsapp-chat",
    name: "WhatsApp",
    category: "Chat",
    logo: { brand: "whatsapp" },
    blurb: "Floating chat and booking links",
    metaTitle: "WhatsApp booking button for tour websites | TripEleven",
    metaDescription:
      "Add a floating WhatsApp chat button and WhatsApp booking links to your tour website, so travelers can message your agency from any trip page.",
    headline: "A WhatsApp booking button on every page of your tour website",
    intro:
      "Travelers already plan trips on WhatsApp. Add a floating WhatsApp chat button and booking links to your TripEleven website so they can message your team in one tap.",
    summary:
      "The WhatsApp integration adds a floating WhatsApp chat button and WhatsApp booking links to your TripEleven website. Travelers tap it to start a conversation with your agency on WhatsApp. You enable it from Integrations in the dashboard, with no code.",
    connectWith: "Your WhatsApp number",
    setup: setup("Turn on WhatsApp and add your WhatsApp number", "A floating WhatsApp button and booking links appear on your website."),
    benefits: [
      { title: "Floating chat button", text: "A WhatsApp button stays in reach on every page of your website." },
      { title: "Booking links", text: "Travelers can open a WhatsApp chat about a booking straight from your site." },
      { title: "Where travelers already are", text: "Many travelers prefer messaging to forms, especially for multi-day treks." },
    ],
    faqs: [
      { q: "What does the WhatsApp integration add to my website?", a: "A floating WhatsApp chat button and WhatsApp booking links." },
      { q: "Do I need to edit code?", a: "No. You enable WhatsApp from Integrations in the TripEleven dashboard." },
      { q: "How is this different from trip inquiries?", a: "Trip inquiries are form submissions tracked in your dashboard. WhatsApp chats happen in WhatsApp. Your website can offer both." },
    ],
    related: ["tawkto-live-chat", "trip-inquiry-management", "smtp-email"],
  },
  {
    slug: "tawkto-live-chat",
    name: "Tawk.to",
    category: "Chat",
    logo: { icon: "message-circle" },
    blurb: "Live chat widget",
    metaTitle: "Live chat for tour websites with Tawk.to | TripEleven",
    metaDescription:
      "Add the Tawk.to live chat widget to your tour website with no code, and answer traveler questions in real time while they read your trips.",
    headline: "Live chat on your tour website with Tawk.to",
    intro:
      "Answer traveler questions while they are still on the trip page. Connect Tawk.to and its live chat widget appears on your TripEleven website.",
    summary:
      "The Tawk.to integration adds the Tawk.to live chat widget to your TripEleven website, so travelers can chat with your team in real time. You connect your Tawk.to widget from Integrations in the dashboard, with no code.",
    connectWith: "Your Tawk.to widget",
    setup: setup("Turn on Tawk.to and add your Tawk.to widget details", "The Tawk.to chat widget appears on your website."),
    benefits: [
      { title: "Real-time answers", text: "Reply while the traveler is still reading the itinerary." },
      { title: "Your existing Tawk.to account", text: "Chats arrive in Tawk.to, where your team already works." },
      { title: "No code", text: "Connect the widget from the dashboard instead of editing templates." },
    ],
    faqs: [
      { q: "What is Tawk.to?", a: "Tawk.to is a live chat service. The integration adds its chat widget to your TripEleven website." },
      { q: "Where do I answer chats?", a: "In Tawk.to, where the conversations arrive." },
      { q: "Can I use Tawk.to and WhatsApp together?", a: "Both are separate integrations in the dashboard, and each can be enabled on its own." },
    ],
    related: ["whatsapp-chat", "trip-inquiry-management", "cookie-consent-banner"],
  },
  {
    slug: "google-analytics",
    name: "Google Analytics",
    category: "Analytics",
    logo: { brand: "googleAnalytics" },
    blurb: "GA4 page analytics",
    metaTitle: "Google Analytics (GA4) for tour websites | TripEleven",
    metaDescription:
      "Connect Google Analytics 4 (GA4) to your tour website in minutes, with no code, and see which trips, guides and pages travelers visit most.",
    headline: "Google Analytics 4 for your tour website",
    intro:
      "See which treks, guides and pages travelers actually visit. Connect Google Analytics 4 to your TripEleven website from the dashboard.",
    summary:
      "The Google Analytics integration connects Google Analytics 4 (GA4) to your TripEleven website for page analytics. You add your GA4 details in Integrations, and with the consent banner, analytics load only after visitors agree.",
    connectWith: "Your GA4 measurement ID",
    setup: setup("Turn on Google Analytics and add your GA4 measurement ID", "GA4 page analytics run on your website."),
    benefits: [
      { title: "Page analytics", text: "See traffic to your trips, info pages and travel guides in GA4." },
      { title: "Consent-aware", text: "Pair it with the consent banner so analytics wait for visitor permission." },
      { title: "No code", text: "Connect GA4 from the dashboard instead of pasting scripts." },
    ],
    faqs: [
      { q: "Which version of Google Analytics is supported?", a: "Google Analytics 4 (GA4)." },
      { q: "Does analytics load before visitors consent?", a: "The consent banner asks visitors before any analytics loads." },
      { q: "Can I use Google Tag Manager instead?", a: "Google Tag Manager is a separate integration if you manage tags from GTM." },
    ],
    related: ["google-tag-manager", "microsoft-clarity", "cookie-consent-banner"],
  },
  {
    slug: "google-tag-manager",
    name: "Google Tag Manager",
    category: "Marketing",
    logo: { brand: "googleTagManager" },
    blurb: "Manage tags from GTM",
    metaTitle: "Google Tag Manager for tour websites | TripEleven",
    metaDescription:
      "Connect Google Tag Manager to your tour website with no code, and manage marketing, analytics and ad tags for your agency from one GTM container.",
    headline: "Manage your tags with Google Tag Manager",
    intro:
      "Keep marketing and analytics tags in one place. Connect Google Tag Manager to your TripEleven website and manage tags from GTM.",
    summary:
      "The Google Tag Manager integration connects a GTM container to your TripEleven website, so you can manage tags from Google Tag Manager. You add your container from Integrations in the dashboard, with no code.",
    connectWith: "Your GTM container ID",
    setup: setup("Turn on Google Tag Manager and add your container ID", "Your GTM container loads on your website."),
    benefits: [
      { title: "Tags in one place", text: "Add and change tags in GTM without touching the website." },
      { title: "Works with your marketing team", text: "Whoever runs your ads can manage tags in a tool they know." },
      { title: "No code", text: "Connect the container from the dashboard." },
    ],
    faqs: [
      { q: "What is Google Tag Manager used for?", a: "GTM lets you manage tracking and marketing tags from one dashboard instead of editing site code." },
      { q: "Do I need GTM to use Google Analytics?", a: "No. Google Analytics is also available as its own integration." },
      { q: "Does GTM respect the consent banner?", a: "The consent banner asks visitors before any analytics loads." },
    ],
    related: ["google-analytics", "meta-pixel", "cookie-consent-banner"],
  },
  {
    slug: "meta-pixel",
    name: "Meta Pixel",
    category: "Marketing",
    logo: { brand: "meta" },
    blurb: "Facebook and Instagram ad tracking",
    metaTitle: "Meta Pixel for tour websites | TripEleven",
    metaDescription:
      "Add the Meta Pixel to your tour website with no code and track visits and results from your Facebook and Instagram ads for treks and tours.",
    headline: "Track Facebook and Instagram ads with Meta Pixel",
    intro:
      "Running ads for your treks on Facebook or Instagram? Connect the Meta Pixel to your TripEleven website to track what those ads bring in.",
    summary:
      "The Meta Pixel integration connects your Meta Pixel to your TripEleven website for Facebook and Instagram ad tracking. You add your Pixel from Integrations in the dashboard, with no code.",
    connectWith: "Your Meta Pixel ID",
    setup: setup("Turn on Meta Pixel and add your Pixel ID", "The Meta Pixel runs on your website."),
    benefits: [
      { title: "Ad tracking", text: "Measure visits from your Facebook and Instagram ads." },
      { title: "Your Meta account", text: "Data goes to the Pixel in your own Meta account." },
      { title: "No code", text: "Connect the Pixel from the dashboard." },
    ],
    faqs: [
      { q: "What does the Meta Pixel track?", a: "It is used for Facebook and Instagram ad tracking on your website." },
      { q: "Does it load before visitors consent?", a: "The consent banner asks visitors before analytics and tracking tools load." },
      { q: "Can I manage the Pixel through GTM instead?", a: "Yes, if you prefer to manage tags in Google Tag Manager, which is a separate integration." },
    ],
    related: ["google-tag-manager", "google-analytics", "cookie-consent-banner"],
  },
  {
    slug: "microsoft-clarity",
    name: "Microsoft Clarity",
    category: "Analytics",
    logo: { icon: "eye" },
    blurb: "Session recordings and heatmaps",
    metaTitle: "Microsoft Clarity for tour websites | TripEleven",
    metaDescription:
      "Connect Microsoft Clarity to your TripEleven tour website for session recordings and heatmaps of how travelers use your trip pages.",
    headline: "See how travelers use your site with Microsoft Clarity",
    intro:
      "Watch how travelers move through your trip pages. Connect Microsoft Clarity for session recordings and heatmaps.",
    summary:
      "The Microsoft Clarity integration connects Clarity to your TripEleven website for session recordings and heatmaps. You add your Clarity project from Integrations in the dashboard, with no code.",
    connectWith: "Your Clarity project ID",
    setup: setup("Turn on Microsoft Clarity and add your project ID", "Clarity session recordings and heatmaps run on your website."),
    benefits: [
      { title: "Session recordings", text: "Replay visits to see where travelers hesitate on a trip page." },
      { title: "Heatmaps", text: "See what travelers click and how far they scroll." },
      { title: "Consent-aware", text: "Pair it with the consent banner so recordings wait for permission." },
    ],
    faqs: [
      { q: "What does Microsoft Clarity show?", a: "Session recordings and heatmaps of how visitors use your website." },
      { q: "Does Clarity load before visitors consent?", a: "The consent banner asks visitors before any analytics loads." },
      { q: "Can I use Clarity with Google Analytics?", a: "Yes. They are separate integrations and can both be enabled." },
    ],
    related: ["google-analytics", "cookie-consent-banner", "google-tag-manager"],
  },
  {
    slug: "cookie-consent-banner",
    name: "Consent banner",
    category: "Privacy",
    logo: { icon: "shield-check" },
    blurb: "Ask visitors before any analytics loads",
    metaTitle: "Cookie consent banner for travel websites | TripEleven",
    metaDescription:
      "A cookie consent banner for travel websites, built into TripEleven. It asks visitors before Google Analytics, Clarity, Meta Pixel or any tracking loads.",
    headline: "A consent banner that asks before analytics load",
    intro:
      "Respect your visitors and keep analytics honest. TripEleven's consent banner asks visitors before any analytics loads on your website.",
    summary:
      "The consent banner is built into TripEleven and asks visitors before any analytics loads on your website. It works with the analytics and marketing integrations, such as Google Analytics, Microsoft Clarity and Meta Pixel. You configure it from Integrations in the dashboard.",
    connectWith: "Your banner settings",
    setup: setup("Open the consent banner and review its settings", "Visitors are asked before any analytics loads."),
    benefits: [
      { title: "Permission first", text: "Analytics wait until a visitor agrees." },
      { title: "Works with your tools", text: "Covers analytics and marketing integrations you enable." },
      { title: "Built in", text: "No separate consent tool to buy or install." },
    ],
    faqs: [
      { q: "What does the consent banner do?", a: "It asks visitors before any analytics loads on your website." },
      { q: "Do I need a separate cookie tool?", a: "The consent banner is built into TripEleven and configured from Integrations." },
      { q: "Which integrations does it cover?", a: "Analytics and tracking integrations such as Google Analytics, Microsoft Clarity and Meta Pixel." },
    ],
    related: ["google-analytics", "microsoft-clarity", "meta-pixel"],
  },
  {
    slug: "smtp-email",
    name: "Email sending",
    category: "Email",
    logo: { icon: "mail" },
    blurb: "Send site emails from your own address via SMTP",
    metaTitle: "Send website emails via SMTP | TripEleven",
    metaDescription:
      "Send your tour website emails from your own address through SMTP, so travelers see your agency domain instead of a platform address.",
    headline: "Send website emails from your own address",
    intro:
      "Emails from your website should come from your agency. Connect SMTP and TripEleven sends site emails from your own address.",
    summary:
      "The email sending integration lets your TripEleven website send its emails from your own address through SMTP. You add your SMTP details in Integrations, and TripEleven verifies the connection.",
    connectWith: "Your SMTP server details",
    setup: setup("Turn on Email sending and add your SMTP details", "Site emails are sent from your own address once verified."),
    benefits: [
      { title: "Your own address", text: "Travelers see emails from your agency, not a platform address." },
      { title: "Your mail server", text: "Emails go out through the SMTP service you already use." },
      { title: "Verified connection", text: "The dashboard shows when your SMTP setup is verified." },
    ],
    faqs: [
      { q: "Why send emails from my own address?", a: "Emails from your own domain look more trustworthy to travelers and match your brand." },
      { q: "What do I need?", a: "SMTP details from your email provider." },
      { q: "How do I know it works?", a: "The integration shows as verified in the dashboard once the connection is checked." },
    ],
    related: ["whatsapp-chat", "trip-inquiry-management", "tawkto-live-chat"],
  },
];

export const getIntegration = (slug: string) => integrations.find((i) => i.slug === slug);

/** Every integration for the hub and dashboards, including the two that have full feature pages. */
export interface IntegrationCard {
  name: string;
  category: Category;
  blurb: string;
  logo: Integration["logo"];
  href: string;
}

const payments = getFeature("tour-payments-online")!;
const ai = getFeature("ai-itinerary-generator")!;

export const integrationCards: IntegrationCard[] = [
  ...integrations.slice(0, 7).map((i) => ({ ...i, href: `/integration/${i.slug}` })),
  {
    name: "Online payments",
    category: "Payments",
    blurb: "Stripe, PayPal, Razorpay, Paystack, Xendit, Mercado Pago or bank transfer",
    logo: { icon: "credit-card" },
    href: featureHref(payments),
  },
  {
    name: "AI generation",
    category: "AI",
    blurb: "Bring your own Claude, OpenAI or Gemini key",
    logo: { icon: "sparkles" },
    href: featureHref(ai),
  },
  ...integrations.slice(7).map((i) => ({ ...i, href: `/integration/${i.slug}` })),
];

/** Resolve a related slug that may point at an integration or a feature. */
export const relatedLink = (slug: string) => {
  const i = getIntegration(slug);
  if (i) return { name: i.name, blurb: i.blurb, logo: i.logo, href: `/integration/${i.slug}` };
  const f = getFeature(slug)!;
  return { name: f.name, blurb: f.blurb, logo: { icon: f.icon } as Integration["logo"], href: featureHref(f) };
};

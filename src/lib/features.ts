import type { ComponentProps } from "astro/types";
import type Icon from "../components/Icon.astro";

export interface Feature {
  slug: string;
  icon: ComponentProps<typeof Icon>["name"];
  /** Short keyword label shown above the H1. */
  eyebrow: string;
  /** <title>, kept near 60 characters. */
  metaTitle: string;
  /** Meta description, kept near 155 characters. */
  metaDescription: string;
  faqs: { q: string; a: string }[];
  /** Short label for the nav and cards. */
  name: string;
  /** One-line summary shown in the mega menu and on cards. */
  blurb: string;
  /** H1 on the feature page. */
  headline: string;
  intro: string;
  /** Hero screenshot under /src/assets. */
  image: string;
  /** Second screenshot for the deep-dive section. */
  detailImage: string;
  /** Crop a tall full-page screenshot to its top when shown. */
  detailCrop?: boolean;
  benefits: { title: string; text: string }[];
  /** Slugs of related features. */
  related: string[];
}

export const features: Feature[] = [
  {
    slug: "online-booking-software",
    eyebrow: "Online booking system for tour operators",
    metaTitle: "Online booking system for tour operators | TripEleven",
    metaDescription: "An online booking system for tour operators, built into your website. Travelers book treks and tours from the trip page; you manage every booking in one dashboard.",
    faqs: [
      { q: "Can travelers book directly on my website?", a: "Yes. Travelers can book from trip pages on your TripEleven website." },
      { q: "Where do I manage bookings?", a: "In your dashboard, where your team can track bookings and follow up." },
      { q: "Are bookings included in every plan?", a: "Yes. Bookings and payments are included on every plan." },
    ],
    icon: "calendar",
    name: "Online booking",
    blurb: "Travelers book straight from trip pages",
    image: "/mockups/help/bookings.png",
    detailImage: "/mockups/website-demo-for-cta-card.webp",
    headline: "An online booking system built into your tour website",
    intro: "Travelers book each trek or tour from its trip page, and your team tracks every booking in the dashboard and follows up.",
    benefits: [
      {
        title: "Book from the trip page",
        text: "Travelers choose a trip and book without leaving your website.",
      },
      {
        title: "One dashboard",
        text: "Your team tracks bookings and follows up with travelers in one place.",
      },
      {
        title: "Included on every plan",
        text: "Bookings are part of the platform, not a paid add-on.",
      },
    ],
    related: ["tour-payments-stripe", "trip-inquiry-management", "tour-itinerary-builder"],
  },
  {
    slug: "tour-payments-stripe",
    eyebrow: "Accept tour payments online",
    metaTitle: "Accept tour payments online with Stripe | TripEleven",
    metaDescription: "Accept online payments for tours and treks with your own Stripe account. Payments go to you and link to each booking in your TripEleven dashboard.",
    faqs: [
      { q: "How do I receive payments?", a: "Connect your own Stripe keys, then receive payments and manage bookings from your dashboard." },
      { q: "Do I need my own Stripe account?", a: "Yes. Payments use your own Stripe keys." },
      { q: "Is payment support included in every plan?", a: "Yes. Bookings, payments and your own Stripe keys are included on every plan." },
    ],
    icon: "credit-card",
    name: "Payments",
    blurb: "Receive payments with your own Stripe keys",
    image: "/mockups/help/revenue.png",
    detailImage: "/mockups/help/bookings.png",
    headline: "Accept tour payments online with your own Stripe account",
    intro: "Connect your own Stripe keys so traveler payments go to you, and manage bookings and payments from the same dashboard.",
    benefits: [
      {
        title: "Your own Stripe keys",
        text: "Payments are received through your Stripe account.",
      },
      {
        title: "Linked to bookings",
        text: "See bookings and their payments together in the dashboard.",
      },
      {
        title: "On every plan",
        text: "Receiving payments through your own Stripe keys is included on every plan.",
      },
    ],
    related: ["online-booking-software", "trip-inquiry-management"],
  },
  {
    slug: "trip-inquiry-management",
    eyebrow: "Tour inquiry and lead management",
    metaTitle: "Tour inquiry and lead management | TripEleven",
    metaDescription: "Manage tour inquiries and leads in one dashboard. Every trip gets an inquiry form, with email, phone and WhatsApp shown together.",
    faqs: [
      { q: "How do inquiries reach me?", a: "Each trip has an inquiry form, and leads land in your dashboard as trackable inquiries." },
      { q: "Can travelers contact me on WhatsApp?", a: "Yes. Phone, email and WhatsApp are shown together." },
      { q: "Do I need booking enabled to get inquiries?", a: "No. Trip inquiries are a separate path from bookings." },
    ],
    icon: "mail",
    name: "Trip inquiries",
    blurb: "Email and WhatsApp leads in one inbox",
    image: "/mockups/help/inquiry.png",
    detailImage: "/clients/hi-nepal-treks.webp",
    detailCrop: true,
    headline: "Manage tour inquiries and leads in one dashboard",
    intro: "Every trip gets an inquiry form with your phone, email and WhatsApp in one place. Leads land in your dashboard as clean, trackable inquiries.",
    benefits: [
      {
        title: "Inquiry form on every trip",
        text: "Travelers ask about a specific trip from its page.",
      },
      {
        title: "Email and WhatsApp",
        text: "Your contact options sit together where travelers need them.",
      },
      {
        title: "Trackable leads",
        text: "Inquiries arrive in your dashboard so nothing is lost.",
      },
    ],
    related: ["online-booking-software", "tour-payments-stripe", "travel-trust-signals"],
  },
  {
    slug: "tour-itinerary-builder",
    eyebrow: "Itinerary builder software for tour operators",
    metaTitle: "Itinerary builder software for tour operators | TripEleven",
    metaDescription: "Itinerary builder software for tour and trekking operators: drag-and-drop days, altitude charts, pricing tiers and FAQs, published straight to your website.",
    faqs: [
      { q: "What is a tour itinerary builder?", a: "It's software for structuring a trip: days, inclusions, pricing tiers, FAQs and media in one guided editor, then publishing it to your website without code." },
      { q: "Can I add altitude charts for treks?", a: "Yes. The trip builder supports altitude charts so travelers can see the climb day by day." },
      { q: "Does the itinerary publish to my website automatically?", a: "Yes. Trips you build live in your catalog and appear on your TripEleven website once published." },
    ],
    icon: "route",
    name: "Trip builder",
    blurb: "Drag-and-drop days, altitude charts, pricing tiers",
    detailImage: "/mockups/help/trip-steps.png",
    headline: "Itinerary builder software for tour and trekking operators",
    intro:
      "A trip builder made for trekking and adventure operators. Lay out days, add altitude charts, FAQ groups and pricing tiers, and publish without touching code.",
    image: "/mockups/itinerary-form.webp",
    benefits: [
      {
        title: "Drag-and-drop days",
        text: "Reorder, duplicate and edit itinerary days without rewriting anything.",
      },
      {
        title: "Altitude charts",
        text: "Show travelers the climb, day by day, straight from your itinerary data.",
      },
      {
        title: "Pricing tiers and FAQs",
        text: "Group-size pricing and trip-specific FAQs live on the trip, not in a spreadsheet.",
      },
    ],
    related: ["ai-itinerary-generator", "featured-trips", "travel-media-library"],
  },
  {
    slug: "ai-itinerary-generator",
    eyebrow: "AI itinerary generator for travel agencies",
    metaTitle: "AI itinerary generator for travel agencies | TripEleven",
    metaDescription: "An AI itinerary generator for travel agencies and tour operators. Draft day-by-day itineraries with Claude, OpenAI or Gemini, then edit them in the trip builder.",
    faqs: [
      { q: "How does the AI itinerary generator work?", a: "Enter up to 10 trip topics and a style. the AI model you connect (Claude, OpenAI or Gemini) drafts full day-by-day itineraries in one batch, and each draft opens in the trip builder." },
      { q: "Is AI output ready to publish?", a: "It's a strong first draft. Your team reviews, edits and polishes it in the trip builder before publishing." },
      { q: "Do I need my own AI key?", a: "On the Launch plan, AI itinerary generation uses your own API key. See the pricing page for what each plan includes." },
    ],
    icon: "sparkles",
    name: "AI itineraries",
    blurb: "Draft day-by-day plans, then refine them",
    detailImage: "/mockups/itinerary-form.webp",
    headline: "AI itinerary generator for travel agencies and tour operators",
    intro:
      "Start from a destination and duration, get a day-by-day draft, then edit every detail in the trip builder. AI saves the blank page, you keep control.",
    image: "/mockups/help/ai-generate.png",
    benefits: [
      {
        title: "A draft in seconds",
        text: "Generate a structured itinerary you can tune instead of starting from nothing.",
      },
      {
        title: "Fully editable",
        text: "Every generated day opens in the same builder you use for hand-written trips.",
      },
      {
        title: "No extra tools",
        text: "Drafting happens inside TripEleven, so there is no copy-paste step between tools.",
      },
    ],
    related: ["tour-itinerary-builder", "featured-trips"],
  },
  {
    slug: "travel-media-library",
    eyebrow: "Photo library for travel websites",
    metaTitle: "Photo and media library for travel websites | TripEleven",
    metaDescription: "A photo and media library for travel websites. Upload trek and tour photos once, reuse them across trips, pages and posts, and search by alt text or caption.",
    faqs: [
      { q: "Can I reuse one photo across many trips?", a: "Yes. Upload once, then reuse the image on any trip, page or post." },
      { q: "How do I find an image later?", a: "Search the library by filename, alt text or caption." },
      { q: "Does the library support alt text?", a: "Yes. Alt text is stored with the image and follows it wherever it is used." },
    ],
    icon: "image",
    name: "Media library",
    blurb: "Upload once, reuse across trips and pages",
    detailImage: "/mockups/help/media-grid.png",
    headline: "A photo library for every trip, page and post",
    intro:
      "Upload your trek photos once and reuse them across trips, pages and posts. Find any image by filename, alt text or caption.",
    image: "/mockups/media-gallery.webp",
    benefits: [
      {
        title: "Upload once",
        text: "Stop re-uploading the same Everest Base Camp photo to ten different pages.",
      },
      {
        title: "Searchable",
        text: "Find images by filename, alt text or caption.",
      },
      {
        title: "Accessible by default",
        text: "Alt text is stored with the image, so it follows the photo wherever you use it.",
      },
    ],
    related: ["tour-itinerary-builder", "travel-blog-software", "travel-info-pages"],
  },
  {
    slug: "travel-info-pages",
    eyebrow: "Travel website CMS",
    metaTitle: "Travel website CMS for guides and info pages | TripEleven",
    metaDescription: "A travel website CMS for visa guides, festival calendars, activities and your about page. Organize pages by category and keep drafts until they are ready.",
    faqs: [
      { q: "What are info pages?", a: "Pages for everything beyond the trip itself: visa guides, festival calendars, activities, and your about page." },
      { q: "Can I keep pages as drafts?", a: "Yes. Drafts stay private until you publish them." },
      { q: "Can I organize info pages by category?", a: "Yes. Group pages by category so travelers and your navigation stay organized." },
    ],
    icon: "file-text",
    name: "Info pages",
    blurb: "Visa guides, festivals, activities, about page",
    detailImage: "/mockups/help/storefront-page.png",
    headline: "A travel website CMS for everything beyond the trip",
    intro:
      "Publish visa guides, festival calendars, activities and your about page. Group them by category and keep drafts until they're ready.",
    image: "/mockups/info-pages.webp",
    benefits: [
      {
        title: "Categories",
        text: "Group pages so travelers find what they need and your navigation stays tidy.",
      },
      {
        title: "Drafts",
        text: "Write at your own pace and publish only when a page is ready.",
      },
      {
        title: "Built for SEO",
        text: "Useful planning content brings in travelers before they've picked an agency.",
      },
    ],
    related: ["travel-blog-software", "tour-website-navigation", "travel-media-library"],
  },
  {
    slug: "travel-blog-software",
    eyebrow: "Travel blog software",
    metaTitle: "Travel blog software for tour operators | TripEleven",
    metaDescription: "Travel blog software for tour operators. Publish trek guides and travel articles on your own domain, file them by category and credit each post to an author.",
    faqs: [
      { q: "Can I run a travel blog on TripEleven?", a: "Yes. Write trek guides and travel articles, file them by category and publish them on your website." },
      { q: "Can posts have authors?", a: "Yes. Credit each post to a team member." },
      { q: "Why publish travel guides?", a: "Useful planning content helps travelers find your agency before they choose an operator." },
    ],
    icon: "book-open",
    name: "Travel guides",
    blurb: "Trek guides and articles, filed by category",
    detailImage: "/mockups/help/post-editor.png",
    headline: "Travel blog software for guides travelers actually read",
    intro:
      "Write trek guides and travel articles, file them by category, and credit each post to an author on your team.",
    image: "/mockups/posts.webp",
    benefits: [
      {
        title: "Categories and tags",
        text: "Organize posts so readers can browse by region, season or theme.",
      },
      {
        title: "Author credit",
        text: "Attribute each post to a real guide or staff member.",
      },
      {
        title: "Same workspace",
        text: "Posts share the media library and navigation with the rest of your site.",
      },
    ],
    related: ["travel-info-pages", "tour-team-pages", "travel-media-library"],
  },
  {
    slug: "tour-team-pages",
    eyebrow: "Tour guide and team profiles",
    metaTitle: "Tour guide and team profile pages | TripEleven",
    metaDescription: "Show your tour guides and staff with photos, roles and departments, so travelers know who they will travel with before they book.",
    faqs: [
      { q: "Can I show my guides on my website?", a: "Yes. Add team members with photos and roles, organized by department." },
      { q: "Are authors and staff logins separate?", a: "They are managed in the same place, alongside the public profiles." },
      { q: "Why show the team?", a: "Meeting the people behind a trip builds trust before travelers book." },
    ],
    icon: "users",
    name: "Team & authors",
    blurb: "Departments, guides, staff logins",
    detailImage: "/mockups/help/team-members.png",
    headline: "Tour guide profiles that show the team behind every trip",
    intro:
      "Add departments and team members with photos and roles so travelers meet your guides and staff. Authors and staff logins live in the same place.",
    image: "/mockups/organization-and-departments.webp",
    benefits: [
      {
        title: "Departments and roles",
        text: "Present your operation clearly, from founders to field guides.",
      },
      {
        title: "Photos and bios",
        text: "Give travelers a face to trust before they book.",
      },
      {
        title: "One place for logins",
        text: "Authors and staff accounts are managed alongside the public profiles.",
      },
    ],
    related: ["travel-trust-signals", "travel-blog-software"],
  },
  {
    slug: "travel-trust-signals",
    eyebrow: "Reviews and testimonials for tour operators",
    metaTitle: "Reviews and testimonials for tour operator websites | TripEleven",
    metaDescription: "Show reviews, testimonials, licenses and associations on your tour operator website to build traveler trust and win more bookings.",
    faqs: [
      { q: "What trust signals can I add?", a: "Reviews, testimonials, credentials, associations and other proof that your business is established and safe to book with." },
      { q: "Where do trust signals appear?", a: "Across your trips, pages and homepage, from one set of content." },
      { q: "Do trust signals help conversions?", a: "They give travelers reasons to book with an agency they have not used before." },
    ],
    icon: "shield-check",
    name: "Trust signals",
    blurb: "Reviews, credentials, associations",
    detailImage: "/mockups/help/testimonials.png",
    headline: "Reviews, testimonials and credentials that win bookings",
    intro:
      "Build traveler confidence with reviews, credentials, associations and other proof that shows your business is credible, established and safe to book with.",
    image: "/mockups/reviews-associations-testimonials-etc-for-trust-and-marketing.webp",
    benefits: [
      {
        title: "Reviews and testimonials",
        text: "Put real traveler feedback where it influences the decision.",
      },
      {
        title: "Credentials and associations",
        text: "Show licenses and memberships that prove you're an established operator.",
      },
      {
        title: "Marketing-ready",
        text: "Reuse the same proof across trips, pages and your homepage.",
      },
    ],
    related: ["tour-team-pages", "featured-trips"],
  },
  {
    slug: "travel-website-branding",
    eyebrow: "Tour operator website builder",
    metaTitle: "Tour operator website builder, fully branded | TripEleven",
    metaDescription: "A tour operator website builder that matches your brand. Set your logo, colors and fonts once, on your own domain, with no developer or template look.",
    faqs: [
      { q: "Can I use my own logo and colors?", a: "Yes. Set your logo, colors and fonts once and they apply site-wide." },
      { q: "Do I need a designer?", a: "No. Brand settings update the whole website from one place." },
      { q: "Does branding apply to all page types?", a: "Yes: trips, info pages and guides share the same brand." },
    ],
    icon: "palette",
    name: "Brand & themes",
    blurb: "Logo, colors and fonts on every page",
    detailImage: "/clients/summit-luxury-treks.webp",
    detailCrop: true,
    headline: "A tour operator website builder that looks like your brand",
    intro:
      "Match your logo, colors and fonts across every trip, page and post so your website looks like your agency, not a template.",
    image: "/mockups/brand-colors-basic-brand.webp",
    benefits: [
      {
        title: "Logo, colors, fonts",
        text: "Set them once and they apply across the whole website.",
      },
      {
        title: "Consistent everywhere",
        text: "Trips, info pages and guides all share the same look.",
      },
      {
        title: "No designer needed",
        text: "Change your brand in one place and see it update site-wide.",
      },
    ],
    related: ["tour-website-navigation", "travel-media-library"],
  },
  {
    slug: "tour-website-navigation",
    eyebrow: "Menu builder for tour websites",
    metaTitle: "Tour website menu builder with auto navigation | TripEleven",
    metaDescription: "Build your tour website menu automatically from your trips and pages, or arrange nested menus yourself, such as Trekking, then Annapurna Circuit.",
    faqs: [
      { q: "What is auto nav?", a: "A setting that builds your header from your trips and pages, so new content appears without manual edits." },
      { q: "Can I build the menu manually?", a: "Yes. Arrange items yourself, including nested items." },
      { q: "Can menus be nested?", a: "Yes, for example Trekking → Annapurna Circuit." },
    ],
    icon: "compass",
    name: "Navigation",
    blurb: "Auto nav or hand-arranged menus",
    detailImage: "/clients/walkthrough-nepal.webp",
    detailCrop: true,
    headline: "A tour website menu that builds itself",
    intro:
      "Turn on auto nav to generate your header from your trips and pages, or arrange it yourself with nested items like Trekking → Annapurna Circuit.",
    image: "/mockups/navigation.webp",
    benefits: [
      {
        title: "Auto nav",
        text: "New trips and pages appear in the header without manual edits.",
      },
      {
        title: "Manual control",
        text: "Arrange items yourself when you want a specific structure.",
      },
      {
        title: "Nested menus",
        text: "Group trips under regions and activities, as deep as you need.",
      },
    ],
    related: ["travel-info-pages", "travel-website-branding"],
  },
  {
    slug: "featured-trips",
    eyebrow: "Featured tours",
    metaTitle: "Featured tours: promote your best trips | TripEleven",
    metaDescription: "Promote your best tours and treks. Mark trips as featured so they lead your website and guide travelers to the trips you most want to sell.",
    faqs: [
      { q: "How do I feature a trip?", a: "Toggle Featured on the trip. It then takes a prime spot on your website." },
      { q: "Can I change featured trips seasonally?", a: "Yes. Feature or unfeature any trip at any time." },
      { q: "Is Featured part of the trip builder?", a: "Yes. Featured is a step in the guided trip builder." },
    ],
    icon: "star",
    name: "Featured trips",
    blurb: "Lead with the trips you most want to sell",
    detailImage: "/clients/essence-treks.webp",
    detailCrop: true,
    headline: "Featured tours travelers can't miss",
    intro:
      "Mark your top trips as featured so they lead your website and guide travelers to the trips you most want to sell.",
    image: "/mockups/featured-trips.webp",
    benefits: [
      {
        title: "One toggle",
        text: "Feature or unfeature a trip without rebuilding any page.",
      },
      {
        title: "Lead with your best",
        text: "Featured trips take the prime spots on your site.",
      },
      {
        title: "Seasonal focus",
        text: "Swap what you promote as seasons and demand change.",
      },
    ],
    related: ["tour-itinerary-builder", "travel-trust-signals"],
  },
];

export const getFeature = (slug: string) =>
  features.find((feature) => feature.slug === slug);

// Features that connect TripEleven to an outside service live under
// /integration; everything else is part of the core product at /product.
const integrationSlugs = new Set([
  "tour-payments-stripe",
  "ai-itinerary-generator",
]);
export type Section = "product" | "integration";
export const sectionOf = (feature: Feature): Section =>
  integrationSlugs.has(feature.slug) ? "integration" : "product";
export const featureHref = (feature: Feature) =>
  `/${sectionOf(feature)}/${feature.slug}`;
export const productFeatures = features.filter((f) => sectionOf(f) === "product");
export const integrationFeatures = features.filter((f) => sectionOf(f) === "integration");

export const featureGroups = [
  {
    key: "sell",
    flag: "blue" as const,
    label: "Sell",
    title: "Bookings, payments and inquiries",
    text: "Turn trip-page visits into bookings, receive payments through your own Stripe account, and keep every inquiry in one dashboard.",
    slugs: ["online-booking-software", "tour-payments-stripe", "trip-inquiry-management"],
  },
  {
    key: "build",
    flag: "yellow" as const,
    label: "Build",
    title: "Create and publish your trips",
    text: "A guided trip builder made for multi-day itineraries, with AI drafts, a shared media library, featured trips and navigation that builds itself.",
    slugs: ["tour-itinerary-builder", "ai-itinerary-generator", "travel-media-library", "featured-trips", "tour-website-navigation"],
  },
  {
    key: "grow",
    flag: "green" as const,
    label: "Grow",
    title: "A website that earns trust and traffic",
    text: "Info pages, travel guides, team profiles and trust signals, all on your brand and your domain.",
    slugs: ["travel-blog-software", "travel-info-pages", "tour-team-pages", "travel-trust-signals", "travel-website-branding"],
  },
].map((group) => ({
  ...group,
  items: group.slugs.map((slug) => getFeature(slug)!),
}));

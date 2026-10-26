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
    eyebrow: "Online booking for tour operators",
    metaTitle: "Online booking software for tour operators | TripEleven",
    metaDescription: "Let travelers book treks and tours directly from your website, and manage every booking from one dashboard.",
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
    headline: "Take bookings directly from your tour website",
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
    eyebrow: "Tour payments with Stripe",
    metaTitle: "Tour payment software with Stripe | TripEleven",
    metaDescription: "Connect your own Stripe keys to receive traveler payments and manage bookings from one dashboard.",
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
    headline: "Receive tour payments with your own Stripe account",
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
    eyebrow: "Trip inquiry management",
    metaTitle: "Trip inquiry management for tour agencies | TripEleven",
    metaDescription: "Collect trip inquiries by form, email and WhatsApp, and track every lead in one dashboard.",
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
    headline: "Turn trip inquiries into customers",
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
    eyebrow: "Tour itinerary builder for trekking agencies",
    metaTitle: "Tour & trekking itinerary builder software | TripEleven",
    metaDescription: "Build day-by-day tour and trekking itineraries with drag-and-drop days, altitude charts, pricing tiers and FAQs. Publish straight to your website.",
    faqs: [
      { q: "What is a tour itinerary builder?", a: "It's software for structuring a trip: days, inclusions, pricing tiers, FAQs and media in one guided editor, then publishing it to your website without code." },
      { q: "Can I add altitude charts for treks?", a: "Yes. The trip builder supports altitude charts so travelers can see the climb day by day." },
      { q: "Does the itinerary publish to my website automatically?", a: "Yes. Trips you build live in your catalog and appear on your TripEleven website once published." },
    ],
    icon: "route",
    name: "Trip builder",
    blurb: "Drag-and-drop days, altitude charts, pricing tiers",
    detailImage: "/mockups/help/trip-steps.png",
    headline: "Build every itinerary in one structured editor",
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
    eyebrow: "AI itinerary generator for tour operators",
    metaTitle: "AI itinerary generator for tour operators | TripEleven",
    metaDescription: "Generate day-by-day tour and trek itineraries with AI, then edit every detail in the trip builder before publishing.",
    faqs: [
      { q: "How does the AI itinerary generator work?", a: "Enter up to 10 trip topics and a style. Claude drafts full day-by-day itineraries in one batch, and each draft opens in the trip builder." },
      { q: "Is AI output ready to publish?", a: "It's a strong first draft. Your team reviews, edits and polishes it in the trip builder before publishing." },
      { q: "Do I need my own AI key?", a: "On the Launch plan, AI itinerary generation uses your own API key. See the pricing page for what each plan includes." },
    ],
    icon: "sparkles",
    name: "AI itineraries",
    blurb: "Draft day-by-day plans, then refine them",
    detailImage: "/mockups/itinerary-form.webp",
    headline: "Draft itineraries with AI, finish them your way",
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
    eyebrow: "Travel photo and media library",
    metaTitle: "Travel media library for tour websites | TripEleven",
    metaDescription: "Upload trek and tour photos once and reuse them across trips, pages and posts. Search by filename, alt text or caption.",
    faqs: [
      { q: "Can I reuse one photo across many trips?", a: "Yes. Upload once, then reuse the image on any trip, page or post." },
      { q: "How do I find an image later?", a: "Search the library by filename, alt text or caption." },
      { q: "Does the library support alt text?", a: "Yes. Alt text is stored with the image and follows it wherever it is used." },
    ],
    icon: "image",
    name: "Media library",
    blurb: "Upload once, reuse across trips and pages",
    detailImage: "/mockups/help/media-grid.png",
    headline: "One media library for every trip and page",
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
    eyebrow: "Info pages for travel websites",
    metaTitle: "Travel info pages for tour websites | TripEleven",
    metaDescription: "Publish visa guides, festival calendars, activities and an about page on your tour website. Group by category and keep drafts until ready.",
    faqs: [
      { q: "What are info pages?", a: "Pages for everything beyond the trip itself: visa guides, festival calendars, activities, and your about page." },
      { q: "Can I keep pages as drafts?", a: "Yes. Drafts stay private until you publish them." },
      { q: "Can I organize info pages by category?", a: "Yes. Group pages by category so travelers and your navigation stay organized." },
    ],
    icon: "file-text",
    name: "Info pages",
    blurb: "Visa guides, festivals, activities, about page",
    detailImage: "/mockups/help/storefront-page.png",
    headline: "Info pages for everything beyond the trip",
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
    eyebrow: "Travel blog and guide software",
    metaTitle: "Travel blog software for tour agencies | TripEleven",
    metaDescription: "Publish trek guides and travel articles, file them by category and credit each post to an author on your team.",
    faqs: [
      { q: "Can I run a travel blog on TripEleven?", a: "Yes. Write trek guides and travel articles, file them by category and publish them on your website." },
      { q: "Can posts have authors?", a: "Yes. Credit each post to a team member." },
      { q: "Why publish travel guides?", a: "Useful planning content helps travelers find your agency before they choose an operator." },
    ],
    icon: "book-open",
    name: "Travel guides",
    blurb: "Trek guides and articles, filed by category",
    detailImage: "/mockups/help/post-editor.png",
    headline: "Travel guides travelers actually read",
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
    eyebrow: "Team and guide profiles",
    metaTitle: "Team pages for tour operators | TripEleven",
    metaDescription: "Introduce your guides and staff with photos, roles and departments so travelers know who they will travel with.",
    faqs: [
      { q: "Can I show my guides on my website?", a: "Yes. Add team members with photos and roles, organized by department." },
      { q: "Are authors and staff logins separate?", a: "They are managed in the same place, alongside the public profiles." },
      { q: "Why show the team?", a: "Meeting the people behind a trip builds trust before travelers book." },
    ],
    icon: "users",
    name: "Team & authors",
    blurb: "Departments, guides, staff logins",
    detailImage: "/mockups/help/team-members.png",
    headline: "Show the team behind every trip",
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
    eyebrow: "Trust signals for travel websites",
    metaTitle: "Trust signals for tour websites | TripEleven",
    metaDescription: "Show reviews, testimonials, credentials and associations on your tour website to build traveler confidence and win more bookings.",
    faqs: [
      { q: "What trust signals can I add?", a: "Reviews, testimonials, credentials, associations and other proof that your business is established and safe to book with." },
      { q: "Where do trust signals appear?", a: "Across your trips, pages and homepage, from one set of content." },
      { q: "Do trust signals help conversions?", a: "They give travelers reasons to book with an agency they have not used before." },
    ],
    icon: "shield-check",
    name: "Trust signals",
    blurb: "Reviews, credentials, associations",
    detailImage: "/mockups/help/testimonials.png",
    headline: "Trust signals that turn interest into bookings",
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
    eyebrow: "Brand your tour website",
    metaTitle: "Brandable tour website: logo, colors, fonts | TripEleven",
    metaDescription: "Apply your logo, colors and fonts across every trip, page and post so your tour website looks like your agency, not a template.",
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
    headline: "Your brand, on every page",
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
    eyebrow: "Website navigation for tour operators",
    metaTitle: "Tour website navigation & menus | TripEleven",
    metaDescription: "Generate your header automatically from trips and pages, or arrange nested menus yourself, such as Trekking → Annapurna Circuit.",
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
    headline: "Navigation that builds itself",
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
    eyebrow: "Featured trips",
    metaTitle: "Featured trips: promote your best tours | TripEleven",
    metaDescription: "Mark top trips as featured so they lead your tour website and guide travelers to the trips you most want to sell.",
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
    headline: "Featured trips travelers can't miss",
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

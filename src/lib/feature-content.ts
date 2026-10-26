// Long-form copy for each feature page. Kept apart from features.ts so the nav
// and footer, which only need names and blurbs, don't import every paragraph.
//
// Every claim here must trace back to the pricing, compare, FAQ or Nepal pages.
// Plan limits: Launch $29/mo (45 trips, 200 posts, 2 staff seats, 5 GB),
// Business $79/mo (unlimited trips and posts, 25 seats, 25 GB, read-only API),
// Enterprise (custom). 7-day free trial.

export interface FeatureContent {
  /** Answer-first paragraph. Written to be quoted on its own. */
  summary: string;
  facts: { label: string; value: string }[];
  steps: { title: string; text: string }[];
  sections: { eyebrow: string; title: string; paragraphs: string[] }[];
  audience: string[];
  contrast: { without: string; with: string }[];
  moreFaqs: { q: string; a: string }[];
}

export const content: Record<string, FeatureContent> = {
  "online-booking-software": {
    summary:
      "Online booking in TripEleven lets travelers book a trek or tour directly from its trip page on your website. Every booking lands in your dashboard, where your team tracks it and follows up. Bookings are included on every plan, and payments are received through your own Stripe keys.",
    facts: [
      { label: "What it is", value: "Direct booking from trip pages" },
      { label: "Where you manage it", value: "The TripEleven dashboard" },
      { label: "Payments", value: "Your own Stripe keys" },
      { label: "Plans", value: "Included on every plan" },
    ],
    steps: [
      { title: "Publish your trip", text: "Build the trip in the trip builder and publish it to your website." },
      { title: "Traveler books", text: "A traveler opens the trip page and books it without leaving your site." },
      { title: "Booking arrives", text: "The booking appears in your dashboard as soon as it is made." },
      { title: "Your team follows up", text: "Your team tracks the booking, contacts the traveler and receives payment through Stripe." },
    ],
    sections: [
      {
        eyebrow: "Direct bookings",
        title: "Turn trip-page visits into bookings",
        paragraphs: [
          "Most trekking and tour agencies lose travelers between reading about a trip and actually committing to it. TripEleven puts a direct way to book on each trip page, so a traveler who has decided on the Annapurna Circuit does not have to email back and forth to reserve a place.",
          "Because the booking happens on your own website and under your own brand, the traveler stays in your experience from the first photo to the confirmed trip. You keep the customer relationship instead of handing it to a marketplace.",
        ],
      },
      {
        eyebrow: "One dashboard",
        title: "Track every booking in one place",
        paragraphs: [
          "Bookings are managed from the same dashboard you use to build trips and publish your website. Your team does not need a separate booking tool, a shared spreadsheet or a forwarded inbox to know what has been booked.",
          "Staff seats let more than one person work in the dashboard: Launch includes 2 staff seats and Business includes 25, so the people who answer travelers can see the same bookings you do.",
        ],
      },
    ],
    audience: [
      "Trekking and expedition agencies that want travelers to reserve directly",
      "Tour operators replacing email-only reservations with a booking flow",
      "Agencies in Nepal and elsewhere that want to own their customer relationship",
    ],
    contrast: [
      { without: "Travelers email to ask if a date is available", with: "Travelers book from the trip page" },
      { without: "Reservations tracked across inboxes and spreadsheets", with: "Every booking appears in one dashboard" },
      { without: "Booking tool separate from your website", with: "Booking built into your branded website" },
    ],
    moreFaqs: [
      { q: "Does online booking replace trip inquiries?", a: "No. Inquiries and bookings are separate paths. A traveler who is not ready to book can send an inquiry, and one who is ready can book from the same trip page." },
      { q: "Do I need a custom domain to take bookings?", a: "No. Custom domains are available on Launch and higher, but bookings are included on every plan." },
      { q: "Can my staff manage bookings too?", a: "Yes. Launch includes 2 staff seats and Business includes 25, so more than one person can work in the dashboard." },
    ],
  },

  "tour-payments-stripe": {
    summary:
      "TripEleven lets you receive traveler payments through your own Stripe keys. Payments connect to the bookings in your dashboard, so you manage both in one place. Receiving payments with your own Stripe keys is included on every plan.",
    facts: [
      { label: "Payment provider", value: "Stripe" },
      { label: "Whose account", value: "Yours, via your own keys" },
      { label: "Managed from", value: "The TripEleven dashboard" },
      { label: "Plans", value: "Included on every plan" },
    ],
    steps: [
      { title: "Create or use your Stripe account", text: "Payments run through a Stripe account that belongs to your business." },
      { title: "Add your keys", text: "Connect your own Stripe keys to TripEleven." },
      { title: "Travelers book", text: "Travelers book from your trip pages." },
      { title: "You manage both", text: "Review bookings and their payments from your dashboard." },
    ],
    sections: [
      {
        eyebrow: "Your account",
        title: "Payments go to your own Stripe account",
        paragraphs: [
          "TripEleven uses your own Stripe keys, which means the payment relationship is between your agency and your traveler. You are not routing money through a third-party marketplace account.",
          "That setup suits agencies that already use Stripe or want to keep control over payouts, reconciliation and customer records in an account they own.",
        ],
      },
      {
        eyebrow: "Connected to bookings",
        title: "See bookings and payments together",
        paragraphs: [
          "Payments are not a separate system. They sit alongside the bookings in your dashboard, so your team can answer a traveler's question without opening several tools.",
          "Because the feature is part of every plan, you can start taking payments during the 7-day free trial setup rather than waiting for a higher tier.",
        ],
      },
    ],
    audience: [
      "Agencies that want payouts to land in their own Stripe account",
      "Operators who already use Stripe for other parts of the business",
      "Teams that want bookings and payments reviewed in one dashboard",
    ],
    contrast: [
      { without: "Payments handled through a platform's shared account", with: "Payments received through your own Stripe keys" },
      { without: "Bookings in one tool and payments in another", with: "Bookings and payments managed in one dashboard" },
      { without: "Payment support locked behind a higher plan", with: "Included on every plan" },
    ],
    moreFaqs: [
      { q: "Which payment provider does TripEleven use?", a: "Stripe. You connect your own Stripe keys to receive payments." },
      { q: "Does TripEleven hold my money?", a: "No. Payments are received through your own Stripe keys, so they go to your Stripe account." },
      { q: "Can I use payments on the Nepal plans?", a: "Yes. The Nepal program lists bookings and receiving payments with your own Stripe keys as included." },
    ],
  },

  "trip-inquiry-management": {
    summary:
      "Trip inquiry management in TripEleven gives every trip an inquiry form and shows your phone, email and WhatsApp in one place. Each inquiry lands in your dashboard as a clean, trackable lead. It is included on every plan.",
    facts: [
      { label: "Channels", value: "Form, email, phone, WhatsApp" },
      { label: "Where leads land", value: "Your dashboard" },
      { label: "Per trip", value: "An inquiry form on every trip" },
      { label: "Plans", value: "Included on every plan" },
    ],
    steps: [
      { title: "Publish a trip", text: "Every published trip gets an inquiry form." },
      { title: "Traveler asks", text: "A traveler submits the form or contacts you by phone, email or WhatsApp." },
      { title: "Lead is recorded", text: "The form submission arrives in your dashboard as a trackable inquiry." },
      { title: "You respond", text: "Reply on your own terms and move the traveler toward a booking." },
    ],
    sections: [
      {
        eyebrow: "Every channel",
        title: "Put every way to reach you in one place",
        paragraphs: [
          "Travelers choose how they want to talk. Some fill in a form, some message on WhatsApp, some prefer to call. TripEleven shows your phone, email and WhatsApp together on the trip so none of those paths is hidden.",
          "Showing all contact options reduces friction for travelers who are considering a high-value, multi-day trip and want to ask a question before committing.",
        ],
      },
      {
        eyebrow: "Clean leads",
        title: "Trackable inquiries instead of a messy inbox",
        paragraphs: [
          "Inquiry form submissions land in your dashboard as structured leads. That gives your team one place to see who asked about which trip, rather than hunting through forwarded emails.",
          "Because inquiries come from specific trip pages, you know what the traveler was interested in before you reply.",
        ],
      },
    ],
    audience: [
      "Agencies whose travelers usually ask questions before booking",
      "Teams that handle most conversations on WhatsApp",
      "Operators who want to see which trips generate the most interest",
    ],
    contrast: [
      { without: "Contact details scattered across the site", with: "Phone, email and WhatsApp together on every trip" },
      { without: "Leads buried in an email inbox", with: "Inquiries tracked in your dashboard" },
      { without: "Unclear which trip a message is about", with: "Each inquiry comes from a specific trip page" },
    ],
    moreFaqs: [
      { q: "Is the inquiry form on every trip?", a: "Yes. Every trip gets an inquiry form with your phone, email and WhatsApp in one place." },
      { q: "Can I answer inquiries on WhatsApp?", a: "Yes. WhatsApp is shown as a contact option, and you respond to travelers on your own terms." },
      { q: "What is the difference between an inquiry and a booking?", a: "An inquiry is a question or interest from a traveler. A booking is a reservation made on the trip page. Both can happen on the same trip." },
    ],
  },

  "tour-itinerary-builder": {
    summary:
      "The TripEleven trip builder is a guided editor for creating tour and trekking itineraries. It walks you through Basic Info, Trip Facts, Itinerary, Inclusions and Exclusions, Meetings, Media, Pricing, Additional Info, FAQs, SEO and Featured. Trips publish straight to your branded website.",
    facts: [
      { label: "Format", value: "Guided, step-by-step editor" },
      { label: "Itinerary", value: "Drag-and-drop days, altitude charts" },
      { label: "Pricing", value: "Pricing tiers per trip" },
      { label: "Trip limit", value: "45 on Launch, unlimited on Business" },
    ],
    steps: [
      { title: "Describe the trip", text: "Fill in Basic Info and Trip Facts so travelers see the essentials first." },
      { title: "Lay out the days", text: "Build the itinerary day by day and add altitude charts for treks." },
      { title: "Add the details", text: "Complete inclusions, exclusions, meetings, media, pricing, additional info and FAQs." },
      { title: "Optimize and publish", text: "Set the SEO fields, choose whether the trip is featured, and publish." },
    ],
    sections: [
      {
        eyebrow: "Guided flow",
        title: "A purpose-built editor, not a form full of fields",
        paragraphs: [
          "The trip builder is organized into steps: Basic Info, Trip Facts, Itinerary, Inclusions and Exclusions, Meetings, Media, Pricing, Additional Info, FAQs, SEO and Featured. Each step is designed for one part of the trip, so nothing important is forgotten and nothing is buried in a long form.",
          "That structure also produces consistent trip pages. Every trek you publish presents the same kinds of information in the same order, which makes your catalog easier for travelers, and for search engines, to understand.",
        ],
      },
      {
        eyebrow: "Built for operators",
        title: "Details trekking and adventure travelers look for",
        paragraphs: [
          "Itinerary days can be reordered with drag and drop, and altitude charts show the climb across a trek. Pricing tiers and FAQ groups live on the trip itself, so group-size pricing and common questions stay next to the itinerary they belong to.",
          "The builder also includes an SEO step. Every trip ships with per-trip meta, canonical and Open Graph, JSON-LD schema, auto-slugs with permanent 301 redirects, and a redirect manager with cycle detection.",
        ],
      },
    ],
    audience: [
      "Trekking and expedition operators with multi-day itineraries",
      "Tour agencies with large catalogs of packages",
      "Teams that want consistent trip pages without a developer",
    ],
    contrast: [
      { without: "Itineraries kept in documents and pasted into a website", with: "One structured editor that publishes directly" },
      { without: "Trip pages that look different every time", with: "The same steps and layout for every trip" },
      { without: "SEO set up by hand for each page", with: "Per-trip meta, canonical, Open Graph and JSON-LD built in" },
    ],
    moreFaqs: [
      { q: "How many trips can I create?", a: "Launch includes up to 45 trips. Business includes unlimited trips." },
      { q: "What steps does the trip builder have?", a: "Basic Info, Trip Facts, Itinerary, Inclusions and Exclusions, Meetings, Media, Pricing, Additional Info, FAQs, SEO and Featured." },
      { q: "Does each trip get its own SEO settings?", a: "Yes. Every trip has per-trip meta, canonical and Open Graph, JSON-LD schema, auto-slugs with permanent 301 redirects, and a redirect manager." },
    ],
  },

  "ai-itinerary-generator": {
    summary:
      "TripEleven's AI itinerary generator drafts full day-by-day itineraries from a list of trip topics. You enter up to 10 topics and a style, the AI model you connect (Claude, OpenAI or Gemini) drafts the itineraries in one batch, and each draft opens in the trip builder for your team to review, edit and publish. AI itinerary generation on Launch uses your own API key.",
    facts: [
      { label: "Input", value: "Up to 10 trip topics and a style" },
      { label: "Output", value: "Day-by-day itinerary drafts" },
      { label: "AI models", value: "Claude, OpenAI or Gemini" },
      { label: "Launch plan", value: "Bring your own key" },
    ],
    steps: [
      { title: "Enter topics", text: "Add up to 10 trip topics and choose a style." },
      { title: "Generate a batch", text: "Your connected AI model drafts a full day-by-day itinerary for each topic in one batch." },
      { title: "Open in the builder", text: "Each draft opens in the same trip builder you use for hand-written trips." },
      { title: "Review and publish", text: "Your team edits the draft, adds the details only you know, and publishes." },
    ],
    sections: [
      {
        eyebrow: "A draft, not a finished trip",
        title: "Skip the blank page, keep the control",
        paragraphs: [
          "Writing a new itinerary from nothing takes time. The generator gives you a structured first draft, so your team starts by editing instead of writing from scratch.",
          "The output is a strong first draft, not a finished product. Every generated itinerary lands in the trip builder where your team reviews, edits and polishes it before anything is published.",
        ],
      },
      {
        eyebrow: "Batch generation",
        title: "Draft many trips in one go",
        paragraphs: [
          "Enter up to 10 trip topics and a style, and your connected AI model drafts full day-by-day itineraries in one batch. That is useful when you are expanding a catalog or adding a new region and need many starting points quickly.",
          "AI itinerary generation is listed on the Launch plan as bring-your-own-key, which means you supply your own API key for Claude, OpenAI or Gemini.",
        ],
      },
    ],
    audience: [
      "Agencies expanding into new treks, regions or tour types",
      "Small teams without a dedicated itinerary writer",
      "Operators who want a consistent starting structure for every trip",
    ],
    contrast: [
      { without: "Every itinerary written from a blank page", with: "A day-by-day draft to edit" },
      { without: "One trip drafted at a time", with: "Up to 10 trip topics drafted in one batch" },
      { without: "AI text copied into the site by hand", with: "Drafts open directly in the trip builder" },
    ],
    moreFaqs: [
      { q: "Which AI models can I use?", a: "Bring your own Claude, OpenAI or Gemini key from Integrations in the dashboard." },
      { q: "Can I publish AI output without editing it?", a: "The output is meant as a first draft. Your team should review and edit it in the trip builder before publishing." },
      { q: "What does bring your own key mean?", a: "On the Launch plan, AI itinerary generation uses an API key that you provide." },
    ],
  },

  "travel-media-library": {
    summary:
      "The TripEleven media library stores your trek and tour photos in one place so you can reuse them across trips, pages and posts. You can find any image by filename, alt text or caption. Launch includes 5 GB of media storage and Business includes 25 GB.",
    facts: [
      { label: "Reuse", value: "Across trips, pages and posts" },
      { label: "Search", value: "Filename, alt text, caption" },
      { label: "Storage", value: "5 GB Launch, 25 GB Business" },
      { label: "Enterprise", value: "Unlimited storage" },
    ],
    steps: [
      { title: "Upload once", text: "Add your photos to the library." },
      { title: "Describe them", text: "Add alt text and captions so images are easy to find and accessible." },
      { title: "Reuse anywhere", text: "Pick the same image for any trip, page or post." },
      { title: "Search later", text: "Find an image again by filename, alt text or caption." },
    ],
    sections: [
      {
        eyebrow: "One library",
        title: "Stop uploading the same photo ten times",
        paragraphs: [
          "Photography is the heaviest part of a travel website. A single photo of a trek can belong on a trip page, an info page and a guide. The media library keeps it in one place so you upload it once and reuse it.",
          "Reusing one stored image also keeps your website consistent, because every page that uses it shows the same version.",
        ],
      },
      {
        eyebrow: "Alt text and captions",
        title: "Descriptions that travel with the image",
        paragraphs: [
          "Alt text and captions are stored with the image. That makes the library searchable and helps make your pages more accessible, because the description follows the photo wherever you place it.",
          "Search by filename, alt text or caption means your team finds the right photo quickly, even as the library grows across 45 trips on Launch or an unlimited catalog on Business.",
        ],
      },
    ],
    audience: [
      "Agencies with large photo collections across many treks",
      "Teams where several people add content",
      "Operators who want accessible, well-described images",
    ],
    contrast: [
      { without: "The same photo uploaded to every page", with: "One upload reused everywhere" },
      { without: "Hunting through filenames like IMG_4821", with: "Search by filename, alt text or caption" },
      { without: "Alt text added page by page", with: "Alt text stored with the image" },
    ],
    moreFaqs: [
      { q: "How much media storage do I get?", a: "Launch includes 5 GB, Business includes 25 GB, and Enterprise includes unlimited storage." },
      { q: "Can I reuse an image on blog posts?", a: "Yes. Images in the library can be used across trips, pages and posts." },
      { q: "How do I find an image later?", a: "Search the library by filename, alt text or caption." },
    ],
  },

  "travel-info-pages": {
    summary:
      "Info pages in TripEleven let you publish everything beyond the trip itself: visa guides, festival calendars, activities and your about page. You can group pages by category and keep them as drafts until they are ready. They share your brand, media library and navigation.",
    facts: [
      { label: "Examples", value: "Visa guides, festivals, activities, about" },
      { label: "Organization", value: "Grouped by category" },
      { label: "Workflow", value: "Draft until ready" },
      { label: "Shares", value: "Brand, media, navigation" },
    ],
    steps: [
      { title: "Create a page", text: "Start an info page for a topic travelers ask about." },
      { title: "Choose a category", text: "File it with related pages." },
      { title: "Keep it as a draft", text: "Write and refine without publishing." },
      { title: "Publish", text: "Make the page live on your website when it is ready." },
    ],
    sections: [
      {
        eyebrow: "Beyond the trip",
        title: "Answer the questions travelers ask before they book",
        paragraphs: [
          "Travelers researching a trek want more than an itinerary. They want to know about visas, the best season, local festivals and what else there is to do. Info pages give each of those topics a home on your own website.",
          "Publishing that planning content also builds topical depth on your site, which helps travelers and search engines understand what your agency knows.",
        ],
      },
      {
        eyebrow: "Organized",
        title: "Categories and drafts keep the site tidy",
        paragraphs: [
          "Group pages by category so related information stays together and your navigation stays easy to scan. Pages can sit as drafts while you write, so unfinished content never reaches travelers.",
          "Info pages use the same brand colors, fonts and media library as your trips, so they look like part of the same website.",
        ],
      },
    ],
    audience: [
      "Agencies publishing visa, permit and seasonal guidance",
      "Operators who want an about page and activity pages that match their brand",
      "Teams that write content gradually and publish in stages",
    ],
    contrast: [
      { without: "Planning info scattered across PDFs and social posts", with: "Info pages on your own website" },
      { without: "Half-written pages visible to the public", with: "Drafts stay private until you publish" },
      { without: "Pages that do not match the rest of the site", with: "Shared brand, media and navigation" },
    ],
    moreFaqs: [
      { q: "What is the difference between info pages and travel guides?", a: "Info pages cover reference topics such as visas, festivals and activities. Travel guides are posts and articles with authors, filed by category." },
      { q: "Can I add info pages to my navigation?", a: "Yes. Auto nav can generate your header from your trips and pages, or you can arrange items yourself." },
      { q: "Can I unpublish a page?", a: "Pages can be kept as drafts until they are ready to publish." },
    ],
  },

  "travel-blog-software": {
    summary:
      "TripEleven includes blog software for tour and trekking agencies. You write trek guides and travel articles, file them by category and credit each post to an author on your team. Launch includes up to 200 blog posts and Business includes unlimited posts.",
    facts: [
      { label: "Content", value: "Trek guides and travel articles" },
      { label: "Organization", value: "Categories and tags" },
      { label: "Credit", value: "Author per post" },
      { label: "Post limit", value: "200 Launch, unlimited Business" },
    ],
    steps: [
      { title: "Write a post", text: "Create a trek guide or travel article." },
      { title: "File it", text: "Add a category and tags so readers can browse by theme." },
      { title: "Credit an author", text: "Attribute the post to a member of your team." },
      { title: "Publish", text: "Publish it on your branded website." },
    ],
    sections: [
      {
        eyebrow: "Content that earns trust",
        title: "Publish guides travelers actually read",
        paragraphs: [
          "Travelers often discover an agency through a useful article, such as how to prepare for a high-altitude trek, long before they search for a company. A blog on your own website lets you be the source of that advice.",
          "Because posts live on your domain, the traffic and authority they build belong to your site rather than to a social platform.",
        ],
      },
      {
        eyebrow: "Real authors",
        title: "Credit every post to someone on your team",
        paragraphs: [
          "Each post can be credited to an author from your team, so a trek guide is visibly written by someone who has been there. Combined with team profiles, this gives readers a reason to trust the advice.",
          "Posts are organized with categories and tags and share the same media library as the rest of your site.",
        ],
      },
    ],
    audience: [
      "Agencies building organic search traffic with trek and travel content",
      "Guides and staff who want public credit for their writing",
      "Teams publishing regularly across several destinations",
    ],
    contrast: [
      { without: "Articles posted on a separate blog platform", with: "Posts on your own branded website" },
      { without: "Anonymous content", with: "Posts credited to team authors" },
      { without: "Unstructured archive", with: "Categories and tags readers can browse" },
    ],
    moreFaqs: [
      { q: "How many blog posts can I publish?", a: "Launch includes up to 200 posts. Business includes unlimited posts." },
      { q: "Can I tag posts?", a: "Yes. Tags let travelers browse trips and posts by theme." },
      { q: "Do posts use the same images as my trips?", a: "Yes. Posts share the media library with trips and pages." },
    ],
  },

  "tour-team-pages": {
    summary:
      "Team pages in TripEleven let you add departments and team members with photos and roles, so travelers meet your guides and staff before they book. Authors and staff logins are managed in the same place. Launch includes 2 staff seats and Business includes 25.",
    facts: [
      { label: "Profiles", value: "Photo, role, department" },
      { label: "Also manages", value: "Authors and staff logins" },
      { label: "Seats", value: "2 Launch, 25 Business" },
      { label: "Shown on", value: "Your public website" },
    ],
    steps: [
      { title: "Add departments", text: "Create departments such as operations, guides or support." },
      { title: "Add members", text: "Add each person with a photo and role." },
      { title: "Assign authors", text: "Let team members be credited on posts." },
      { title: "Publish", text: "Show the team on your website." },
    ],
    sections: [
      {
        eyebrow: "Meet the people",
        title: "Travelers book people as much as itineraries",
        paragraphs: [
          "For a multi-day trek, a traveler is trusting you with their safety and their holiday. Seeing real guides and staff, with photos and roles, makes an unfamiliar agency feel accountable.",
          "Departments help larger operations present themselves clearly, from field guides to the office team.",
        ],
      },
      {
        eyebrow: "One place",
        title: "Profiles, authors and logins together",
        paragraphs: [
          "Public team profiles, blog authors and staff logins are managed alongside each other. That means the person who writes a trek guide can also appear on your team page and use the dashboard with the right seat.",
          "Plan seat limits are straightforward: Launch includes 2 staff seats, and Business includes 25.",
        ],
      },
    ],
    audience: [
      "Agencies whose guides are a selling point",
      "Operators with several departments or offices",
      "Teams that want authorship on their blog posts",
    ],
    contrast: [
      { without: "An anonymous about page", with: "Named guides and staff with photos and roles" },
      { without: "Separate lists of authors and users", with: "Authors and staff logins in one place" },
      { without: "Flat list of team members", with: "People grouped by department" },
    ],
    moreFaqs: [
      { q: "How many staff seats are included?", a: "Launch includes 2 staff seats and Business includes 25." },
      { q: "Can team members be credited on posts?", a: "Yes. Authors are managed alongside team members and can be credited on posts." },
      { q: "Do I have to show everyone publicly?", a: "Team profiles are content you add, so you choose who appears on your website." },
    ],
  },

  "travel-trust-signals": {
    summary:
      "Trust signals in TripEleven are the reviews, testimonials, credentials and associations you display on your tour website to show that your business is credible, established and safe to book with. You manage them once and reuse them across trips, pages and your homepage.",
    facts: [
      { label: "Includes", value: "Reviews, testimonials, credentials, associations" },
      { label: "Goal", value: "Build confidence before booking" },
      { label: "Reuse", value: "Trips, pages and homepage" },
      { label: "Managed in", value: "The TripEleven dashboard" },
    ],
    steps: [
      { title: "Collect proof", text: "Gather traveler reviews, testimonials, licenses and association memberships." },
      { title: "Add it to TripEleven", text: "Enter each item once in the dashboard." },
      { title: "Place it", text: "Show it on trips, pages and your homepage." },
      { title: "Keep it current", text: "Update it as new reviews and credentials arrive." },
    ],
    sections: [
      {
        eyebrow: "Credibility",
        title: "Show travelers you are safe to book with",
        paragraphs: [
          "A traveler booking a trek from another country is deciding whether to trust an agency they have never used. Reviews, credentials and associations answer that question directly.",
          "Proof placed near the booking decision does more than proof hidden on a separate page, so TripEleven lets you show it across the website where travelers are deciding.",
        ],
      },
      {
        eyebrow: "Manage once",
        title: "One set of proof, used everywhere",
        paragraphs: [
          "Trust content is entered once and reused, so a new testimonial or association appears wherever you place it without editing each page.",
          "Together with team pages and featured trips, trust signals help turn interest into bookings and inquiries.",
        ],
      },
    ],
    audience: [
      "Agencies selling to international travelers who do not know them yet",
      "Newer operators building credibility",
      "Established agencies that want licenses and memberships visible",
    ],
    contrast: [
      { without: "Reviews only on third-party sites", with: "Reviews and testimonials on your own website" },
      { without: "Credentials mentioned in passing", with: "Credentials and associations shown clearly" },
      { without: "Proof edited page by page", with: "Entered once, reused across the site" },
    ],
    moreFaqs: [
      { q: "What counts as a trust signal?", a: "Reviews, testimonials, credentials, associations and other proof that your business is credible and established." },
      { q: "Where do trust signals show up?", a: "On your trips, pages and homepage, depending on where you place them." },
      { q: "Are trust signals available on every plan?", a: "Trust content is part of your published website. Check the pricing page for plan details." },
    ],
  },

  "travel-website-branding": {
    summary:
      "Branding in TripEleven lets you apply your logo, colors and fonts across every trip, page and post, so your website looks like your agency instead of a template. Custom template, palette and fonts are included on the Launch plan, and Business can remove TripEleven branding.",
    facts: [
      { label: "Settings", value: "Logo, colors, fonts" },
      { label: "Applies to", value: "Every trip, page and post" },
      { label: "Launch", value: "Custom template, palette and fonts" },
      { label: "Business", value: "Remove TripEleven branding" },
    ],
    steps: [
      { title: "Upload your logo", text: "Add your logo to the brand settings." },
      { title: "Pick colors and fonts", text: "Choose a palette and typefaces that match your agency." },
      { title: "Preview", text: "See the brand applied across your website." },
      { title: "Publish", text: "Your trips, pages and posts all use the same brand." },
    ],
    sections: [
      {
        eyebrow: "Your identity",
        title: "A website that looks like your agency",
        paragraphs: [
          "Travelers judge an agency partly on how professional its website looks. Setting your logo, colors and fonts once makes every page consistent.",
          "TripEleven applies the brand site-wide, so a trip page, an info page and a guide all look like they belong together.",
        ],
      },
      {
        eyebrow: "Plan options",
        title: "From custom palette to white label",
        paragraphs: [
          "Launch includes a custom template, palette and fonts. Business adds the option to remove TripEleven branding, and Enterprise offers white-label with dedicated onboarding.",
          "A custom domain is available on Launch and higher, so the website lives at your own address with your brand on it.",
        ],
      },
    ],
    audience: [
      "Agencies with an established logo and colors",
      "Operators moving off a generic template",
      "Larger agencies that want white-label",
    ],
    contrast: [
      { without: "A generic template look", with: "Your logo, colors and fonts" },
      { without: "Branding changed page by page", with: "Set once, applied everywhere" },
      { without: "Platform branding on your site", with: "Remove it on Business, white-label on Enterprise" },
    ],
    moreFaqs: [
      { q: "Can I use my own domain?", a: "Yes. On Launch and higher you can connect a custom domain." },
      { q: "Can I remove TripEleven branding?", a: "Yes, on Business and Enterprise." },
      { q: "Do brand changes update the whole site?", a: "Yes. Logo, colors and fonts apply across your trips, pages and posts." },
    ],
  },

  "tour-website-navigation": {
    summary:
      "Navigation in TripEleven can build your website header automatically from your trips and pages, or you can arrange it yourself with nested items such as Trekking, then Annapurna Circuit. You choose auto or manual, and both support nested menus.",
    facts: [
      { label: "Modes", value: "Auto nav or manual" },
      { label: "Nesting", value: "Nested items supported" },
      { label: "Source", value: "Your trips and pages" },
      { label: "Example", value: "Trekking, then Annapurna Circuit" },
    ],
    steps: [
      { title: "Choose a mode", text: "Turn on auto nav, or arrange the menu yourself." },
      { title: "Group items", text: "Nest trips under regions or activities." },
      { title: "Preview", text: "Check the header on your website." },
      { title: "Publish", text: "New content shows up in the menu as you add it with auto nav." },
    ],
    sections: [
      {
        eyebrow: "Auto nav",
        title: "A header that builds itself",
        paragraphs: [
          "Auto nav generates your header from the trips and pages you publish. When you add a new trek, it appears in the menu without a manual edit.",
          "That removes a common maintenance chore, and avoids the situation where new trips exist but nobody can find them from the menu.",
        ],
      },
      {
        eyebrow: "Manual control",
        title: "Arrange nested menus when you want to",
        paragraphs: [
          "If you want a specific structure, arrange the menu yourself with nested items, for example Trekking and then Annapurna Circuit.",
          "A clear menu helps travelers browse and also gives search engines a clean internal link structure to your trips.",
        ],
      },
    ],
    audience: [
      "Agencies with large catalogs that change often",
      "Operators who want a specific menu hierarchy",
      "Teams that do not want to maintain a menu by hand",
    ],
    contrast: [
      { without: "New trips missing from the menu", with: "Auto nav adds them" },
      { without: "A flat, long list of links", with: "Nested menus by region or activity" },
      { without: "Menu edited by a developer", with: "Managed from the dashboard" },
    ],
    moreFaqs: [
      { q: "Can I switch between auto and manual navigation?", a: "Auto nav is a setting you can turn on. You can also arrange the navigation yourself." },
      { q: "Does navigation include info pages?", a: "Auto nav builds the header from your trips and pages." },
      { q: "Does navigation help SEO?", a: "A clear menu gives visitors and search engines consistent internal links to your trips and pages." },
    ],
  },

  "featured-trips": {
    summary:
      "Featured trips in TripEleven let you mark your best trips so they lead your website and guide travelers toward the trips you most want to sell. Featured is a step in the trip builder, and you can change which trips are featured at any time.",
    facts: [
      { label: "Where set", value: "Featured step in the trip builder" },
      { label: "Effect", value: "Trip leads your website" },
      { label: "Change anytime", value: "Yes" },
      { label: "Best for", value: "Seasonal and flagship trips" },
    ],
    steps: [
      { title: "Open a trip", text: "Go to the trip in the trip builder." },
      { title: "Mark it featured", text: "Use the Featured step." },
      { title: "It leads the site", text: "The trip takes a prominent place on your website." },
      { title: "Rotate", text: "Feature other trips as seasons and demand change." },
    ],
    sections: [
      {
        eyebrow: "Focus",
        title: "Lead with the trips you want to sell",
        paragraphs: [
          "A catalog with dozens of trips can overwhelm a visitor. Featuring your best ones gives travelers a clear starting point and puts your highest-value or highest-margin trips first.",
          "Because featuring is one step in the trip builder, it takes seconds and requires no page redesign.",
        ],
      },
      {
        eyebrow: "Seasonal",
        title: "Change your focus as the season changes",
        paragraphs: [
          "Treks have seasons. Feature spring trips in spring and autumn trips in autumn, then swap them as demand shifts.",
          "Featured trips work alongside trust signals and booking, so the trips you promote also show reviews and a way to book or ask a question.",
        ],
      },
    ],
    audience: [
      "Agencies with large catalogs",
      "Operators running seasonal promotions",
      "Teams that want to steer travelers to flagship trips",
    ],
    contrast: [
      { without: "Every trip given equal weight", with: "Your best trips lead" },
      { without: "Homepage edited to change promotions", with: "Toggle Featured on a trip" },
      { without: "Same promotion all year", with: "Rotate trips by season" },
    ],
    moreFaqs: [
      { q: "How do I feature a trip?", a: "Use the Featured step in the trip builder for that trip." },
      { q: "How many trips can I feature?", a: "You choose which trips to feature, so you can focus on the ones that matter most." },
      { q: "Can I change featured trips later?", a: "Yes. Feature or unfeature a trip at any time." },
    ],
  },
};

/**
 * A worked scenario per feature. Hypothetical agency, real product behavior:
 * the steps describe what TripEleven does, not results it has produced.
 */
export const examples: Record<string, { title: string; paragraphs: string[] }> = {
  "online-booking-software": {
    title: "A traveler books Everest Base Camp from your trip page",
    paragraphs: [
      "A traveler in Germany is comparing Everest Base Camp treks late at night. They land on your 14-day trip page, read the itinerary, check the altitude chart and the FAQs, and decide. Instead of sending an email and waiting a day for a reply, they book the trip on the page.",
      "The next morning, your operations lead opens the TripEleven dashboard and sees the booking waiting. They follow up with the traveler about arrival details. Because payments run through your own Stripe keys, the payment is in your Stripe account, not a marketplace's.",
    ],
  },
  "tour-payments-stripe": {
    title: "Connecting Stripe before your first season online",
    paragraphs: [
      "A Pokhara-based agency already has a Stripe account it uses for card payments. During setup, the owner adds those Stripe keys to TripEleven.",
      "From then on, when a traveler books a trip on the agency's website, the payment is received through that same Stripe account. The team reviews the booking and its payment together in the dashboard, and reconciles payouts in Stripe as they already do.",
    ],
  },
  "trip-inquiry-management": {
    title: "Three inquiries, three channels, one dashboard",
    paragraphs: [
      "On a busy Monday, one traveler fills in the inquiry form on your Langtang trip, another messages your WhatsApp from the Manaslu page, and a third emails about Everest Base Camp.",
      "The form inquiry lands in your dashboard tied to the Langtang trip, so whoever picks it up knows exactly what was asked about. WhatsApp and email stay visible on every trip page, so travelers always have the channel they prefer.",
    ],
  },
  "tour-itinerary-builder": {
    title: "Building a 14-day Everest Base Camp trek",
    paragraphs: [
      "An agency owner opens the trip builder and starts with Basic Info and Trip Facts: duration, difficulty and maximum altitude. In the Itinerary step they add each day, from arriving in Kathmandu to reaching Base Camp, and drag a rest day into place at Namche Bazaar. The altitude chart follows the days.",
      "They list inclusions and exclusions, set the meeting point, attach photos from the media library, add group-size pricing tiers and the questions travelers always ask. In the SEO step they check the title and description, mark the trip as Featured, and publish. The trip page is live on their website with the same structure as every other trip.",
    ],
  },
  "ai-itinerary-generator": {
    title: "Drafting a new region's catalog in an afternoon",
    paragraphs: [
      "An agency wants to add ten treks in a region it has not sold online before. The owner enters ten trip topics and picks a style. The connected AI model drafts a day-by-day itinerary for each in one batch.",
      "Each draft opens in the trip builder. The lead guide corrects the daily distances, adds the teahouses they actually use, and sets pricing. Nothing is published until the team has reviewed it, but nobody started from a blank page.",
    ],
  },
  "travel-media-library": {
    title: "One sunrise photo, used five times",
    paragraphs: [
      "A guide shoots a sunrise over Annapurna South from Poon Hill. The marketing lead uploads it once, adds alt text and a caption, and uses it on three trips, an info page about the best season, and a guide post.",
      "Months later, a new staff member searches the library for \"annapurna\" and finds it immediately, with the alt text already in place.",
    ],
  },
  "travel-info-pages": {
    title: "Answering the visa question before it is asked",
    paragraphs: [
      "Travelers keep emailing the same questions about Nepal visas and trekking permits. The agency writes a visa guide and a permits page, files both under a \"Visas & permits\" category, and keeps the permits page as a draft while a guide checks the details.",
      "Once published, both pages appear in the site navigation and can be linked from relevant trips. Travelers get answers earlier, and the team answers fewer repeat emails.",
    ],
  },
  "travel-blog-software": {
    title: "A senior guide's preparation article",
    paragraphs: [
      "A senior guide writes an article on preparing for high-altitude trekking. It is filed under \"Trek preparation\", tagged with the regions it covers, and credited to the guide, whose profile appears on the team page.",
      "The article lives on the agency's own domain, uses photos from the shared media library, and links readers to the treks it describes.",
    ],
  },
  "tour-team-pages": {
    title: "Putting faces to the guides",
    paragraphs: [
      "An agency creates two departments, Guides and Operations, and adds each person with a photo and role. The senior guide is also set up as an author so their articles carry their name.",
      "A traveler choosing between agencies can now see who will lead the trek and who will answer their emails, instead of an anonymous about page.",
    ],
  },
  "travel-trust-signals": {
    title: "Showing credentials where travelers decide",
    paragraphs: [
      "An agency adds its government registration, its industry association memberships and a set of traveler reviews to TripEleven once.",
      "It then shows that proof on the homepage and alongside trips, so a first-time visitor sees why the agency is credible at the moment they are deciding whether to book or send an inquiry.",
    ],
  },
  "travel-website-branding": {
    title: "From template to your agency's look",
    paragraphs: [
      "An agency uploads its logo, chooses its brand colors and picks heading and body fonts. Every trip page, info page and guide updates to match.",
      "The agency connects its own domain on the Launch plan. On Business it can remove TripEleven branding, so the website reads entirely as the agency's own.",
    ],
  },
  "tour-website-navigation": {
    title: "A new trek appears in the menu by itself",
    paragraphs: [
      "An agency turns on auto nav. Its header is generated from its trips and pages, with treks grouped by region.",
      "When the team publishes a new Annapurna trek, it shows up in the navigation without anyone editing the menu. For a seasonal campaign, the team can switch to arranging the navigation by hand.",
    ],
  },
  "featured-trips": {
    title: "Switching focus from spring to autumn",
    paragraphs: [
      "In spring, an agency features Everest Base Camp and the Annapurna Circuit so they lead the website.",
      "When the season changes, the owner turns Featured off on one trip and on for another in the trip builder. The website's lead trips change without redesigning a single page.",
    ],
  },
};

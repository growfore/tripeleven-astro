import React from "react";
import ScrollStack, { ScrollStackItem } from "./ScrollStack";

const features = [
  [
    "One library for",
    "everything on your labels",
    "Store all your media in a single library. Update a photo once and it refreshes on every label that uses it.",
    "/mockups/media-gallery.png",
  ],
  [
    "A service page",
    "that opens from any tap",
    "Build a clean info page and connect it to any label. Guests tap and land on your price list, hours, and details — no app to install.",
    "/mockups/info-pages.png",
  ],
  [
    "Publish updates",
    "travelers actually see",
    "Share offers, news, and trip updates. Publish a post and it appears right where your guests already look.",
    "/mockups/posts.png",
  ],
  [
    "Organization and",
    "member management",
    "Keep members, departments, and permissions in order so a growing business stays simple to manage.",
    "/mockups/organization-and-departments.png",
  ],
  [
    "Trust signals that",
    "turn interest into bookings",
    "Build traveler confidence with reviews, credentials, associations, and other proof that shows your business is credible, established, and safe to book with.",
    "/mockups/reviews-associations-testimonials-etc-for-trust-and-marketing.png",
  ],
  [
    "Your brand,",
    "on every touchpoint",
    "Match your logo, colors, and style across every label, page, and post — everything feels like one business.",
    "/mockups/brand-colors-basic-brand.png",
  ],
  [
    "Your best services",
    "in the spotlight",
    "Highlight the features and departures that matter most, and guide travelers straight to what you want them to book.",
    "/mockups/navigation.png",
  ],
  [
    "Featured trips",
    "travelers can't miss",
    "Mark your top trips as featured so they stand out, fill faster, and sell more.",
    "/mockups/featured-trips.png",
  ],
];

export default function FeatureStack() {
  return (
    <ScrollStack
      useWindowScroll
      itemDistance={72}
      itemStackDistance={18}
      stackPosition="12%"
      baseScale={0.88}
      itemScale={0.016}
    >
      {features.map(([lineOne, lineTwo, text, image], index) => (
        <ScrollStackItem
          key={lineOne}
          itemClassName="grid-cols-1 rounded-3xl border border-border bg-card shadow-xl shadow-deep-navy/10 lg:grid-cols-2"
        >
          <img
            src={image}
            width="1944"
            height="1304"
            alt={`${lineOne} preview`}
            loading="lazy"
            className={`feature-card-media h-full max-h-[28rem] w-full bg-light-blue/40 object-contain ${index % 2 ? "lg:order-2" : ""}`}
          />
          <div className="feature-card-copy flex flex-col justify-center px-6 py-8 text-left sm:px-10 lg:px-12">
            <h3 className="m-0 mb-4 font-serif text-[28px] leading-tight text-deep-navy lg:text-[36px]">
              {lineOne}
              <br />
              {lineTwo}
            </h3>
            <p className="m-0 max-w-lg text-base leading-[1.6] text-deep-navy lg:text-[17px]">
              {text}
            </p>
          </div>
        </ScrollStackItem>
      ))}
    </ScrollStack>
  );
}

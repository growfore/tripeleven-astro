import React, { useEffect, useRef, useState } from "react";
import "./FeatureStack.css";

const features = [
  [
    "One library for",
    "everything on your labels",
    "Store all your media in a single library. Update a photo once and it refreshes on every label that uses it.",
    "/mockups/media-gallery.webp",
  ],
  [
    "A service page",
    "that opens from any tap",
    "Build a clean info page and connect it to any label. Guests tap and land on your price list, hours, and details — no app to install.",
    "/mockups/info-pages.webp",
  ],
  [
    "Publish updates",
    "travelers actually see",
    "Share offers, news, and trip updates. Publish a post and it appears right where your guests already look.",
    "/mockups/posts.webp",
  ],
  [
    "Organization and",
    "member management",
    "Keep members, departments, and permissions in order so a growing business stays simple to manage.",
    "/mockups/organization-and-departments.webp",
  ],
  [
    "Trust signals that",
    "turn interest into bookings",
    "Build traveler confidence with reviews, credentials, associations, and other proof that shows your business is credible, established, and safe to book with.",
    "/mockups/reviews-associations-testimonials-etc-for-trust-and-marketing.webp",
  ],
  [
    "Your brand,",
    "on every touchpoint",
    "Match your logo, colors, and style across every label, page, and post — everything feels like one business.",
    "/mockups/brand-colors-basic-brand.webp",
  ],
  [
    "Your best services",
    "in the spotlight",
    "Highlight the features and departures that matter most, and guide travelers straight to what you want them to book.",
    "/mockups/navigation.webp",
  ],
  [
    "Featured trips",
    "travelers can't miss",
    "Mark your top trips as featured so they stand out, fill faster, and sell more.",
    "/mockups/featured-trips.webp",
  ],
];

const total = features.length;

export default function FeatureStack() {
  const textRefs = useRef([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const index = hit && textRefs.current.indexOf(hit.target);
        if (index >= 0) setActive(index);
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );
    textRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="feature-grid">
      <div className="feature-texts">
        {features.map(([lineOne, lineTwo, text, image], index) => (
          <article
            className="feature-text"
            key={lineOne}
            ref={(el) => {
              textRefs.current[index] = el;
            }}
          >
            <div className="feature-text-body">
              <p className="feature-counter">
                {String(index + 1).padStart(2, "0")}
                <span> / {total}</span>
              </p>
              <h3 className="m-0 font-serif text-[28px] leading-tight text-deep-navy lg:text-[40px]">
                {lineOne}
                <br />
                {lineTwo}
              </h3>
              <p className="m-0 mt-4 max-w-sm text-base leading-[1.6] text-deep-navy lg:text-[17px]">
                {text}
              </p>
            </div>
            <img
              className="feature-inline-media lg:hidden"
              src={image}
              width="1944"
              height="1304"
              alt={`${lineOne} preview`}
              loading="lazy"
            />
          </article>
        ))}
      </div>
      <div className="feature-sticky">
        <div className="feature-stack">
          {features.map(([lineOne, , , image], index) => (
            <img
              className={`feature-shot ${index === active ? "is-active" : ""}`}
              aria-hidden={index !== active}
              key={image}
              src={image}
              width="1944"
              height="1304"
              alt={`${lineOne} preview`}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </div>
  );
}

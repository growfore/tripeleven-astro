// Live agency websites built on TripEleven (see PRODUCT.md, "Evidence on
// Hand"). The only proof the marketing site is allowed to show.
export interface Client {
  name: string;
  href: string;
  /** Screenshot key under src/assets. */
  image: string;
  /** Logo under public/, with intrinsic size. */
  logo?: { src: string; width: number; height: number; invert?: boolean };
}

export const clients: Client[] = [
  {
    name: "Walkthrough Nepal",
    href: "https://walkthroughnepal.com",
    image: "/clients/walkthrough-nepal.webp",
    logo: { src: "/clients-logos/walkthrough-nepal-color-logo.svg", width: 785, height: 292 },
  },
  {
    name: "Summit Luxury Treks",
    href: "https://summitluxurytreks.com",
    image: "/clients/summit-luxury-treks.webp",
    logo: { src: "/clients-logos/summit-luxury-logo-white.webp", width: 640, height: 185, invert: true },
  },
  {
    name: "Essence Treks",
    href: "https://essencetreksnepal.com",
    image: "/clients/essence-treks.webp",
    logo: { src: "/clients-logos/essence-treks-logo.webp", width: 96, height: 93 },
  },
  {
    name: "Limestone Treks",
    href: "https://limestonetreks.com",
    image: "/clients/limestone-treks.webp",
    logo: { src: "/clients-logos/limestone-treks-logo-transparent.webp", width: 640, height: 188 },
  },
  {
    name: "Hi Nepal Treks",
    href: "https://hinepaltreks.com",
    image: "/clients/hi-nepal-treks.webp",
    logo: { src: "/clients-logos/hinepal-logo.avif", width: 256, height: 128 },
  },
  {
    name: "Into Nepal Treks",
    href: "https://new.intonepaltreks.com",
    image: "/clients/into-nepal-treks.webp",
    logo: { src: "/clients-logos/intonepal-logo.png", width: 77, height: 77 },
  },
  {
    name: "Lovely Trips",
    href: "https://lovelytrips.com.np",
    image: "/clients/lovely-trips.webp",
    logo: { src: "/clients-logos/lovely-trips-logo.webp", width: 410, height: 410 },
  },
  {
    name: "Trip Highland",
    href: "https://triphighland.com",
    image: "/clients/trip-highland.webp",
  },
];

export const domain = (href: string) => new URL(href).hostname.replace(/^www\.|^new\./, "");

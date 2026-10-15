import type { NeedId, ProjectId } from "./projects";

/**
 * Hero product stage: real project → real screen. Every surface is a capture of the
 * product's own working site, app or demo (public demo roles or sample data),
 * never a logo, poster or mock-up. Logos may only appear small in the caption.
 * layout: how the slide is composed, so each product keeps its own character.
 */
export type HeroLayout =
  | "desktop-phone" // a large screen with a phone in front (systems with a mobile side)
  | "phones" // a stack of phone screens (mobile apps)
  | "bleed" // one full-bleed screen (creative and visual web work)
  | "phone" // one phone on its own
  | "layered" // a web surface with a 9:16 content surface (content projects)
  | "photo"; // a web/archive surface with one of its photographs as a print
export type HeroImage = { src: string; width: number; height: number };
export const heroSlideIds = [
  "saha-santiye",
  "aura",
  "mk-adisyon",
  "kadraj-rotam",
  "mk-farm",
  "mavi-kadraj-arsiv",
  "namehub",
] as const;
export type HeroSlideId = (typeof heroSlideIds)[number];
export type HeroSlide = {
  id: HeroSlideId;
  /** Portfolio record for name and status; visual design pieces have none. */
  project?: ProjectId;
  name?: string;
  /** Kind of work shown in the caption when there is no portfolio record. */
  kind?: "selected" | "sector-demo";
  layout: HeroLayout;
  need: NeedId;
  /** First screen is the main one; the rest sit beside or behind it. */
  screens: HeroImage[];
  /** The product's own mark, shown in the slide caption. */
  logo?: HeroImage;
};

const desktop = (name: string): HeroImage => ({
  src: `/hero/${name}.webp`,
  width: 1600,
  height: 1000,
});
const phone = (name: string, height: number): HeroImage => ({
  src: `/hero/${name}.webp`,
  width: 560,
  height,
});

export const heroSlides: HeroSlide[] = [
  {
    id: "saha-santiye",
    project: "saha-santiye",
    layout: "phones",
    need: "operations",
    screens: [
      { src: "/work/mk-ops/mk-ops1.webp", width: 1080, height: 1920 },
      { src: "/work/mk-ops/mk-ops4.webp", width: 1080, height: 1920 },
      { src: "/work/mk-ops/mk-ops5.webp", width: 1080, height: 1920 },
    ],
  },
  {
    id: "aura",
    project: "aura",
    layout: "phones",
    need: "idea",
    screens: [
      phone("aura-today", 1212),
      phone("aura-mood", 1212),
      phone("aura-calendar", 1212),
    ],
  },
  {
    id: "mk-adisyon",
    project: "mk-adisyon",
    layout: "desktop-phone",
    need: "operations",
    screens: [desktop("adisyon-kasa"), phone("adisyon-garson", 1212)],
  },
  {
    id: "kadraj-rotam",
    project: "kadraj-rotam",
    layout: "bleed",
    need: "idea",
    screens: [desktop("kadraj-rotam")],
  },
  {
    id: "mk-farm",
    project: "mk-farm",
    layout: "phone",
    need: "operations",
    screens: [phone("mk-farm-phone", 1064)],
  },
  {
    // The archive site, with one of the "Seçilmiş Kareler" photographs from mavikadraj.com.tr.
    id: "mavi-kadraj-arsiv",
    project: "mavi-kadraj-arsiv",
    layout: "photo",
    need: "presence",
    screens: [
      desktop("mavi-kadraj-arsiv"),
      { src: "/hero/mavi-kadraj-photo.webp", width: 900, height: 601 },
    ],
  },
  {
    id: "namehub",
    project: "namehub",
    layout: "bleed",
    need: "idea",
    screens: [desktop("namehub")],
  },
];

/** Faint MK brand atmosphere behind the stage (no artwork with invented figures). */
export const heroBackdrop: HeroImage = { src: "/hero/mk.jpg", width: 1536, height: 1024 };

/**
 * Default rotation alternates very different kinds of work (operations system,
 * mobile app, creative web, business system, digital discovery product, content
 * platform, sector software, photography, visual web) so the variety reads at a glance.
 */
export const heroRotation: HeroSlideId[] = [
  "saha-santiye",
  "aura",
  "mk-adisyon",
  "kadraj-rotam",
  "mk-farm",
  "mavi-kadraj-arsiv",
  "namehub",
];
/** What each need chip brings forward. */
export const heroNeedSlides: Record<NeedId, HeroSlideId[]> = {
  operations: ["saha-santiye", "mk-adisyon", "mk-farm"],
  presence: ["mavi-kadraj-arsiv"],
  idea: ["aura", "namehub", "kadraj-rotam"],
};

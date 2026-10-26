/** Public portfolio source of truth. Only the ten approved MK Digital Systems products live here. */
export type ProjectLayer = "flagship" | "selected" | "sector-demo";
export type ProjectStatus = "live-demo" | "published" | "closed-test" | "sample-site" | "in-use" | "coming-soon";
export type ServiceId = "web" | "custom" | "business" | "mobile" | "smart";
export type SectorId =
  | "field-operations" | "restaurant" | "agriculture" | "hospitality" | "veterinary"
  | "logistics" | "beauty" | "consulting" | "industrial-supply" | "retail"
  | "manufacturing" | "photography" | "music" | "community" | "lifestyle"
  | "real-estate" | "legal";
export type NeedId = "operations" | "presence" | "idea";
export type ProjectLink = { kind: "demo" | "product" | "app" | "site"; url: string };
export type ProjectMedia = { src: string; frame: "phone" | "desktop" };
export type ProjectPart = { id: string; status?: ProjectStatus; links: ProjectLink[] };

export const projectIds = [
  "saha-santiye", "mk-adisyon", "mk-farm", "mk-resepsiyon", "aura",
  "mavi-kadraj-ile-ogreniyorum", "bebegimin-ilk-yili", "namehub",
  "mavi-kadraj-arsiv", "kadraj-rotam",
] as const;
export type ProjectId = (typeof projectIds)[number];

export type Project = {
  id: ProjectId;
  name: string;
  layer: ProjectLayer;
  status?: ProjectStatus;
  services: ServiceId[];
  sectors: SectorId[];
  needs: NeedId[];
  cardType: "system" | "experience";
  scene: "ink" | "paper" | "blue";
  media?: ProjectMedia;
  links: ProjectLink[];
  parts?: ProjectPart[];
  caseStudy?: boolean;
  confidential?: boolean;
};

export const projects: Project[] = [
  {
    id: "saha-santiye", name: "MK OPS", layer: "flagship", status: "live-demo",
    services: ["custom", "business"], sectors: ["field-operations"], needs: ["operations"],
    cardType: "system", scene: "ink", media: { src: "/work/mk-ops/mk-ops3.webp", frame: "phone" },
    links: [{ kind: "product", url: "https://mk-ops.tr" }],
    caseStudy: true,
  },
  {
    id: "mk-adisyon", name: "MK Adisyon", layer: "flagship", status: "live-demo",
    services: ["business", "mobile"], sectors: ["restaurant"], needs: ["operations"],
    cardType: "system", scene: "blue", media: { src: "/cases/adisyon-mobile-tables.webp", frame: "phone" },
    links: [{ kind: "app", url: "https://play.google.com/store/apps/details?id=com.mkdigitalsystems.adisyon" }],
    parts: [
      { id: "web", status: "live-demo", links: [{ kind: "demo", url: "https://adisyonn.vercel.app" }] },
      { id: "mobile", status: "live-demo", links: [{ kind: "app", url: "https://play.google.com/store/apps/details?id=com.mkdigitalsystems.adisyon" }] },
    ],
    caseStudy: true,
  },
  {
    id: "mk-farm", name: "MK Farm", layer: "flagship", status: "live-demo",
    services: ["custom", "business"], sectors: ["agriculture"], needs: ["operations"],
    cardType: "system", scene: "paper", media: { src: "/work/mk-farm.webp", frame: "phone" },
    links: [{ kind: "demo", url: "https://graceful-melba-ff5818.netlify.app" }], caseStudy: true,
  },
  {
    id: "mk-resepsiyon", name: "MK Resepsiyon", layer: "flagship", status: "live-demo",
    services: ["business"], sectors: ["hospitality"], needs: ["operations"],
    cardType: "system", scene: "blue", media: { src: "/work/mk-resepsiyon.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://resepsiyon.vercel.app" }],
  },
  {
    id: "aura", name: "Aura Günlük", layer: "selected", status: "live-demo",
    services: ["mobile"], sectors: ["lifestyle"], needs: ["idea"],
    cardType: "experience", scene: "blue", media: { src: "/work/aura.webp", frame: "desktop" },
    links: [{ kind: "app", url: "https://play.google.com/store/apps/details?id=com.mkdigitalsystems.aura" }],
  },
  {
    id: "mavi-kadraj-ile-ogreniyorum", name: "Mavi Kadraj ile Öğreniyorum", layer: "selected", status: "live-demo",
    services: ["mobile"], sectors: ["lifestyle"], needs: ["idea"], cardType: "experience", scene: "paper",
    links: [{ kind: "app", url: "https://play.google.com/store/apps/details?id=com.mavikadaj.learn" }],
  },
  {
    id: "bebegimin-ilk-yili", name: "Bebeğimin İlk Yılı", layer: "selected", status: "published",
    services: ["mobile"], sectors: ["lifestyle"], needs: ["idea"], cardType: "experience", scene: "paper",
    media: { src: "/work/bebegimin-ilk-yili.webp", frame: "phone" },
    links: [{ kind: "app", url: "https://play.google.com/store/apps/details?id=com.mkdigitalsystems.bebegimin_ilk_yili" }],
  },
  {
    id: "namehub", name: "Namehub", layer: "selected", status: "live-demo",
    services: ["web", "custom"], sectors: ["lifestyle"], needs: ["idea"], cardType: "experience", scene: "paper",
    media: { src: "/work/namehub.webp", frame: "desktop" }, links: [{ kind: "product", url: "https://www.namehub.tr" }],
  },
  {
    id: "mavi-kadraj-arsiv", name: "Mavi Kadraj", layer: "selected", status: "live-demo",
    services: ["web", "custom"], sectors: ["photography"], needs: ["presence"], cardType: "experience", scene: "blue",
    media: { src: "/work/mavi-kadraj-arsiv.webp", frame: "desktop" }, links: [{ kind: "site", url: "https://mavikadraj.com.tr" }],
  },
  {
    id: "kadraj-rotam", name: "Kadraj Rotam", layer: "selected", status: "live-demo",
    services: ["web", "custom"], sectors: ["photography"], needs: ["idea"], cardType: "experience", scene: "paper",
    media: { src: "/work/kadraj-rotam.webp", frame: "desktop" }, links: [{ kind: "site", url: "https://kadrajrotam.com.tr" }],
  },
];

export const projectLayers: ProjectLayer[] = ["flagship", "selected"];
export function getProject(id: string): Project | undefined { return projects.find((project) => project.id === id); }
export function projectsByLayer(layer: ProjectLayer): Project[] { return projects.filter((project) => project.layer === layer); }
export function projectsForService(service: ServiceId): Project[] { return projects.filter((project) => project.services.includes(service)); }
export function projectsForSector(sector: SectorId): Project[] { return projects.filter((project) => project.sectors.includes(sector)); }
export function relatedProjects(id: ProjectId, limit = 3): Project[] {
  const self = getProject(id);
  if (!self) return [];
  return projects
    .filter((project) => project.id !== id && project.status !== "coming-soon")
    .map((project) => ({ project, score: 2 * project.sectors.filter((sector) => self.sectors.includes(sector)).length + project.services.filter((service) => self.services.includes(service)).length + (project.layer === "flagship" ? 0.5 : 0) }))
    .filter(({ score }) => score >= 1)
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(({ project }) => project);
}

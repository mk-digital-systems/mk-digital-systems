import Image from "next/image";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import { demos, type Demo, type DemoKind } from "@/content/demos";
import { PageIntro } from "./PageIntro";
import { Arrow } from "./Arrow";

type DemoLocale = "tr" | "en";

const copy = {
  tr: {
    home: "Ana sayfa",
    section: "Demolar",
    label: "DEMOLAR VE KONSEPT ÇALIŞMALAR",
    title: "Demo web siteleri ve konsept çalışmalar",
    description:
      "MK Digital Systems'ın tasarım ve geliştirme yaklaşımını gösteren demo ve konsept çalışmalar. Bunlar müşteri referansı değildir; ürün ve müşteri işleri için Çalışmalar sayfasına bakın.",
    demosHeading: "Demo web siteleri",
    demosText: "Sektör örnekleri için hazırlanmış konsept web siteleri. İçerik, marka ve verilerin tamamı örnektir.",
    projectsHeading: "Kendi içerik projelerimiz",
    projectsText: "MK Digital Systems'ın kendi geliştirdiği içerik platformları. Müşteri işi değildir.",
    kind: { demo: "Demo / konsept çalışma", project: "Proje çalışması" } as Record<DemoKind, string>,
    notice: {
      demo: "Bu sayfa gerçek bir müşteri referansı değildir. Burada gösterilen site, tasarım ve geliştirme yaklaşımını göstermek için hazırlanmış bir demo/konsept çalışmadır; içerik ve marka adları örnektir.",
      project: "Bu çalışma, MK Digital Systems'ın kendi geliştirdiği bir içerik projesidir; bir müşteri işi değildir.",
    } as Record<DemoKind, string>,
    open: "Canlı demoyu aç",
    openProject: "Projeyi aç",
    detail: "Ayrıntıları incele",
    features: "ÖNE ÇIKAN ÖZELLİKLER",
    featuresTitle: "Bu çalışmada neler var?",
    ctaTitle: "Benzer bir web sitesi mi düşünüyorsunuz?",
    ctaText: "İşletmenize uygun bir web sitesi veya yazılım için bizimle iletişime geçin.",
    cta: "İletişime geçin",
    all: "Tüm demolar",
    alt: (name: string) => `${name} demo çalışmasının ekran görüntüsü`,
  },
  en: {
    home: "Home",
    section: "Demos",
    label: "DEMOS AND CONCEPT WORK",
    title: "Demo websites and concept work",
    description:
      "Demo and concept works that show how MK Digital Systems designs and builds. These are not client references; see Work for products and client projects.",
    demosHeading: "Demo websites",
    demosText: "Concept websites prepared as sector examples. All content, brands and data are samples.",
    projectsHeading: "Our own content projects",
    projectsText: "Content platforms developed by MK Digital Systems itself. Not client work.",
    kind: { demo: "Demo / concept work", project: "Project" } as Record<DemoKind, string>,
    notice: {
      demo: "This page is not a client reference. The site shown here is a demo/concept work prepared to illustrate our design and development approach; content and brand names are samples.",
      project: "This is a content project developed by MK Digital Systems itself; it is not client work.",
    } as Record<DemoKind, string>,
    open: "Open live demo",
    openProject: "Open project",
    detail: "View details",
    features: "KEY FEATURES",
    featuresTitle: "What does this work include?",
    ctaTitle: "Planning a similar website?",
    ctaText: "Get in touch for a website or software that fits your business.",
    cta: "Contact us",
    all: "All demos",
    alt: (name: string) => `Screenshot of the ${name} demo`,
  },
} as const;

function pick(locale: Locale): DemoLocale {
  return locale === "en" ? "en" : "tr";
}

function Card({ demo, l }: { demo: Demo; l: DemoLocale }) {
  const c = copy[l];
  return (
    <Link href={{ pathname: "/demos/[slug]", params: { slug: demo.slug } }}>
      <div>
        <p className="eyebrow">{c.kind[demo.kind]}</p>
        <h3>{demo[l].title}</h3>
        <p>{demo[l].summary}</p>
      </div>
      <Arrow />
    </Link>
  );
}

export function DemosIndexView({ locale }: { locale: Locale }) {
  const l = pick(locale);
  const c = copy[l];
  const group = (kind: DemoKind) => demos.filter((demo) => demo.kind === kind);
  return (
    <main>
      <PageIntro label={c.label} title={c.title} description={c.description} />
      {(["demo", "project"] as const).map((kind) => (
        <section key={kind} className="section wrap portfolio-intro" aria-labelledby={`demos-${kind}`}>
          <div className="section-head">
            <div>
              <h2 id={`demos-${kind}`}>{kind === "demo" ? c.demosHeading : c.projectsHeading}</h2>
            </div>
            <p className="section-description">{kind === "demo" ? c.demosText : c.projectsText}</p>
          </div>
          <div className="portfolio-product-list">
            {group(kind).map((demo) => (
              <Card key={demo.slug} demo={demo} l={l} />
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}

export function DemoDetailView({ locale, demo }: { locale: Locale; demo: Demo }) {
  const l = pick(locale);
  const c = copy[l];
  const d = demo[l];
  const media = demo.image;
  return (
    <main className="product-page">
      <nav className="product-breadcrumb wrap" aria-label={l === "tr" ? "Sayfa yolu" : "Breadcrumb"}>
        <Link href="/">{c.home}</Link>
        <span aria-hidden="true">/</span>
        <Link href="/demos">{c.section}</Link>
        <span aria-hidden="true">/</span>
        <span aria-current="page">{d.title}</span>
      </nav>
      <header className="product-hero wrap">
        <div className="product-hero-copy">
          <p className="eyebrow">{c.kind[demo.kind]}{d.subtitle ? ` · ${d.subtitle}` : ""}</p>
          <h1>{d.title}</h1>
          <p className="product-lead">{d.summary}</p>
          <div className="product-actions">
            <a className="button" href={demo.liveUrl} target="_blank" rel="noopener noreferrer">
              {demo.kind === "demo" ? c.open : c.openProject}
              <Arrow diagonal />
            </a>
            <Link className="text-link" href="/demos">{c.all}</Link>
          </div>
          <p className="product-status">{c.notice[demo.kind]}</p>
        </div>
        {media && (
          <figure className={`product-media ${media.height > media.width ? "is-portrait" : "is-landscape"}`}>
            <Image
              src={media.src}
              alt={c.alt(d.title)}
              width={media.width}
              height={media.height}
              sizes={media.height > media.width ? "(max-width: 767px) 88vw, 520px" : "(max-width: 767px) 92vw, 1100px"}
              priority
            />
          </figure>
        )}
      </header>

      <section className="section wrap product-overview" aria-labelledby="demo-overview-title">
        <div className="section-head">
          <div>
            <p className="eyebrow">{c.features}</p>
            <h2 id="demo-overview-title">{c.featuresTitle}</h2>
          </div>
          <p className="section-description">{d.description}</p>
        </div>
        <ul className="product-feature-grid">
          {d.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <section className="product-final-cta">
        <div className="wrap">
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <div className="product-actions">
            <Link className="button" href="/contact">{c.cta}<Arrow /></Link>
          </div>
        </div>
      </section>
    </main>
  );
}

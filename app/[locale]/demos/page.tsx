import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { demoAlternates, demoLocales, demoUrl, isIndexable, SITE_URL } from "@/lib/site-config";
import { JsonLd } from "@/components/brand/JsonLd";
import { DemosIndexView } from "@/components/brand/DemoPages";
import type { Locale } from "@/config/i18n";

type Props = { params: Promise<{ locale: string }> };

// Only Turkish and English exist for demos; /de and /fr are 404.
export const dynamicParams = false;
export function generateStaticParams() {
  return demoLocales.map((locale) => ({ locale }));
}
function valid(locale: string): "tr" | "en" {
  if (locale !== "tr" && locale !== "en") notFound();
  return locale;
}
const meta = {
  tr: {
    title: "Demo Web Siteleri ve Konsept Çalışmalar | MK Digital Systems",
    description: "MK Digital Systems'ın demo web siteleri ve konsept çalışmaları. Müşteri referansı değil; tasarım ve geliştirme yaklaşımının örnekleri.",
    locale: "tr_TR",
  },
  en: {
    title: "Demo Websites and Concept Work | MK Digital Systems",
    description: "Demo websites and concept work by MK Digital Systems. Not client references; examples of our design and development approach.",
    locale: "en_US",
  },
} as const;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const locale = valid((await params).locale);
  const m = meta[locale];
  const url = demoUrl(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: { canonical: url, languages: demoAlternates() },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: { title: m.title, description: m.description, siteName: "MK Digital Systems", url, type: "website", locale: m.locale },
    twitter: { card: "summary_large_image", title: m.title, description: m.description },
  };
}
export default async function DemosPage({ params }: Props) {
  const locale = valid((await params).locale);
  setRequestLocale(locale);
  const m = meta[locale];
  const url = demoUrl(locale);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "CollectionPage", "@id": `${url}#page`, url, name: m.title, description: m.description, inLanguage: locale, isPartOf: { "@id": `${SITE_URL}/#website` } },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "MK Digital Systems", item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: m.title, item: url },
      ] },
    ],
  };
  return (
    <>
      <JsonLd data={graph} />
      <DemosIndexView locale={locale as Locale} />
    </>
  );
}

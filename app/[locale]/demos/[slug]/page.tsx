import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { demoAlternates, demoLocales, demoUrl, isIndexable, SITE_URL } from "@/lib/site-config";
import { demos, getDemo } from "@/content/demos";
import { JsonLd } from "@/components/brand/JsonLd";
import { DemoDetailView } from "@/components/brand/DemoPages";
import type { Locale } from "@/config/i18n";

type Props = { params: Promise<{ locale: string; slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return demoLocales.flatMap((locale) => demos.map((demo) => ({ locale, slug: demo.slug })));
}
function resolve(locale: string, slug: string) {
  if (locale !== "tr" && locale !== "en") notFound();
  const demo = getDemo(slug);
  if (!demo) notFound();
  return { locale, demo } as const;
}
const kindLabel = {
  tr: { demo: "Demo / konsept çalışma", project: "Proje çalışması" },
  en: { demo: "Demo / concept work", project: "Project" },
} as const;
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const { locale, demo } = resolve(raw, slug);
  const d = demo[locale];
  const title = `${d.title} | ${kindLabel[locale][demo.kind]} | MK Digital Systems`;
  const url = demoUrl(locale, slug);
  const image = demo.image ? `${SITE_URL}${demo.image.src}` : `${SITE_URL}/og/${locale}/work`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description: d.summary,
    alternates: { canonical: url, languages: demoAlternates(slug) },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: { title, description: d.summary, siteName: "MK Digital Systems", url, type: "website", locale: locale === "tr" ? "tr_TR" : "en_US", images: [{ url: image, alt: d.title }] },
    twitter: { card: "summary_large_image", title, description: d.summary, images: [image] },
  };
}
export default async function DemoPage({ params }: Props) {
  const { locale: raw, slug } = await params;
  const { locale, demo } = resolve(raw, slug);
  setRequestLocale(locale);
  const d = demo[locale];
  const url = demoUrl(locale, slug);
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "WebPage", "@id": `${url}#page`, url, name: d.title, description: d.summary, inLanguage: locale, isPartOf: { "@id": `${SITE_URL}/#website` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@id": `${url}#work` } },
      { "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [
        { "@type": "ListItem", position: 1, name: "MK Digital Systems", item: `${SITE_URL}/${locale}` },
        { "@type": "ListItem", position: 2, name: locale === "tr" ? "Demolar" : "Demos", item: demoUrl(locale) },
        { "@type": "ListItem", position: 3, name: d.title, item: url },
      ] },
      { "@type": "CreativeWork", "@id": `${url}#work`, name: d.title, description: d.description, url: demo.liveUrl, creator: { "@type": "Organization", name: "MK Digital Systems", url: SITE_URL }, inLanguage: locale },
    ],
  };
  return (
    <>
      <JsonLd data={graph} />
      <DemoDetailView locale={locale as Locale} demo={demo} />
    </>
  );
}

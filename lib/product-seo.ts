import type { Metadata } from "next";
import { getContent } from "@/content/site";
import type { Product, SeoTopic } from "@/content/products";
import { SITE_URL, isIndexable, pageUrl, turkishOnlyAlternates } from "@/lib/site-config";

export function absoluteProductUrl(product: Product) {
  return `${SITE_URL}/tr/${product.id}`;
}

export function absoluteTopicUrl(product: Product, entry: SeoTopic) {
  return `${absoluteProductUrl(product)}/${entry.slug}`;
}

function productImage(product: Product) {
  return product.images[0]
    ? `${SITE_URL}${product.images[0].src}`
    : `${SITE_URL}/og/tr/work`;
}

function metadata(title: string, description: string, url: string, image: string): Metadata {
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: { canonical: url, languages: turkishOnlyAlternates(url) },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: {
      title,
      description,
      siteName: "MK Digital Systems",
      url,
      type: "website",
      locale: "tr_TR",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

export function productMetadata(product: Product): Metadata {
  const title = `${product.name} | ${product.category.split(" · ")[0]} | MK Digital Systems`;
  return metadata(title, product.summary, absoluteProductUrl(product), productImage(product));
}

export function topicMetadata(product: Product, entry: SeoTopic): Metadata {
  const title = `${entry.title} | ${product.name} | MK Digital Systems`;
  return metadata(title, entry.description, absoluteTopicUrl(product, entry), productImage(product));
}

function baseGraph() {
  return [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "MK Digital Systems",
      url: SITE_URL,
      logo: `${SITE_URL}/brand/icon-512.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "MK Digital Systems",
      url: SITE_URL,
      inLanguage: ["tr", "en", "de", "fr"],
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
  ];
}

function applicationNode(product: Product, url: string) {
  const mobile = product.category.includes("Mobil uygulama");
  const web = product.category.includes("Web platformu");
  return {
    "@type": web ? "WebApplication" : "SoftwareApplication",
    "@id": `${url}#application`,
    name: product.name,
    description: product.summary,
    url,
    applicationCategory: mobile
      ? "MobileApplication"
      : web
        ? "WebApplication"
        : "BusinessApplication",
    operatingSystem: mobile ? "Android" : "Web",
    publisher: { "@id": `${SITE_URL}/#organization` },
    featureList: product.verifiedFeatures,
  };
}

export function productSchema(product: Product) {
  const c = getContent("tr");
  const url = absoluteProductUrl(product);
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph(),
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: product.name,
        description: product.summary,
        inLanguage: "tr",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#application` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.nav.home, item: pageUrl("tr", "home") },
          { "@type": "ListItem", position: 2, name: c.nav.work, item: pageUrl("tr", "work") },
          { "@type": "ListItem", position: 3, name: product.name, item: url },
        ],
      },
      applicationNode(product, url),
    ],
  };
}

export function topicSchema(product: Product, entry: SeoTopic) {
  const c = getContent("tr");
  const productPage = absoluteProductUrl(product);
  const url = absoluteTopicUrl(product, entry);
  return {
    "@context": "https://schema.org",
    "@graph": [
      ...baseGraph(),
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: entry.title,
        description: entry.description,
        inLanguage: "tr",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        about: { "@id": `${productPage}#application` },
        mainEntity: { "@id": `${url}#faq` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.nav.home, item: pageUrl("tr", "home") },
          { "@type": "ListItem", position: 2, name: product.name, item: productPage },
          { "@type": "ListItem", position: 3, name: entry.title, item: url },
        ],
      },
      applicationNode(product, productPage),
      {
        "@type": "FAQPage",
        "@id": `${url}#faq`,
        mainEntity: entry.faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };
}

import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { JsonLd } from "@/components/brand/JsonLd";
import { ProductTopicView } from "@/components/brand/ProductPages";
import { getProduct, getProductTopic, products } from "@/content/products";
import { topicMetadata, topicSchema } from "@/lib/product-seo";

type Props = { params: Promise<{ locale: string; area: string; topic: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return products.flatMap((product) =>
    product.topics.map((entry) => ({ locale: "tr", area: product.id, topic: entry.slug })),
  );
}

function resolve(locale: string, area: string, topic: string) {
  if (locale !== "tr") notFound();
  const product = getProduct(area);
  const entry = getProductTopic(area, topic);
  if (!product || !entry) notFound();
  return { product, entry };
}

export async function generateMetadata({ params }: Props) {
  const { locale, area, topic } = await params;
  const result = resolve(locale, area, topic);
  return topicMetadata(result.product, result.entry);
}

export default async function ProductTopicRoute({ params }: Props) {
  const { locale, area, topic } = await params;
  const result = resolve(locale, area, topic);
  setRequestLocale("tr");
  return (
    <>
      <JsonLd data={topicSchema(result.product, result.entry)} />
      <ProductTopicView product={result.product} entry={result.entry} />
    </>
  );
}

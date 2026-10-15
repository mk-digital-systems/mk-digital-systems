import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { cityBySlug, cityLocale, citySlug, readyCities } from "@/content/cities";
import { cityMetadata, citySchema } from "@/lib/seo";
import { JsonLd } from "@/components/brand/JsonLd";
import { CityPageView } from "@/components/brand/CityPage";
import { getProduct, products } from "@/content/products";
import { productMetadata, productSchema } from "@/lib/product-seo";
import { ProductHubView } from "@/components/brand/ProductPages";

type Props = { params: Promise<{ locale: string; area: string }> };

// Turkish city pages only (/tr/{city}-web-tasarim). Every other locale or slug is a 404;
// static routes (/cozumler, /calismalar, ...) always win over this segment.
export const dynamicParams = false;
export function generateStaticParams() {
  return [
    ...readyCities().map((city) => ({ locale: cityLocale, area: citySlug(city.id) })),
    ...products.map((product) => ({ locale: "tr", area: product.id })),
  ];
}
function resolve(locale: string, area: string) {
  if (locale !== cityLocale) notFound();
  const product = getProduct(area);
  if (product) return { type: "product" as const, product };
  const city = cityBySlug(area);
  if (city) return { type: "city" as const, city };
  notFound();
}
export async function generateMetadata({ params }: Props) {
  const { locale, area } = await params;
  const result = resolve(locale, area);
  return result.type === "product" ? productMetadata(result.product) : cityMetadata(result.city);
}
export default async function CityRoute({ params }: Props) {
  const { locale, area } = await params;
  const result = resolve(locale, area);
  setRequestLocale(cityLocale);
  if (result.type === "product") {
    return (
      <>
        <JsonLd data={productSchema(result.product)} />
        <ProductHubView product={result.product} />
      </>
    );
  }
  return (
    <>
      <JsonLd data={citySchema(result.city)} />
      <CityPageView city={result.city} />
    </>
  );
}

import { test, expect } from "@playwright/test";
import { products } from "../content/products";

const expectedCounts = {
  "mk-ops": 15,
  "mk-adisyon": 8,
  "mk-farm": 6,
  "mk-resepsiyon": 6,
  "aura-gunluk": 5,
  "mavi-kadraj-ile-ogreniyorum": 2,
  "bebegimin-ilk-yili": 2,
  namehub: 2,
  "mavi-kadraj": 2,
  "kadraj-rotam": 2,
} as const;

test("the corporate showcase contains exactly the approved ten products in priority order", () => {
  expect(products.map((product) => product.id)).toEqual(Object.keys(expectedCounts));
  expect(products[0].name).toBe("MK OPS");
  expect(products).toHaveLength(10);
});

test("the product architecture contains 50 distinct intent pages", () => {
  expect(products.reduce((sum, product) => sum + product.topics.length, 0)).toBe(50);
  const urls = products.flatMap((product) => {
    expect(product.topics).toHaveLength(expectedCounts[product.id]);
    return product.topics.map((entry) => `/tr/${product.id}/${entry.slug}`);
  });
  expect(new Set(urls).size).toBe(50);
  const titles = products.flatMap((product) => product.topics.map((entry) => entry.title));
  const descriptions = products.flatMap((product) => product.topics.map((entry) => entry.description));
  const leads = products.flatMap((product) => product.topics.map((entry) => entry.lead));
  expect(new Set(titles).size).toBe(50);
  expect(new Set(descriptions).size).toBe(50);
  expect(new Set(leads).size).toBe(50);
  for (const product of products)
    for (const entry of product.topics) {
      expect(entry.sections.length, `${product.id}/${entry.slug} sections`).toBeGreaterThanOrEqual(2);
      expect(entry.points.length, `${product.id}/${entry.slug} points`).toBeGreaterThanOrEqual(3);
      expect(entry.scenarios.length, `${product.id}/${entry.slug} scenarios`).toBeGreaterThanOrEqual(2);
      expect(entry.faqs.length, `${product.id}/${entry.slug} faqs`).toBeGreaterThanOrEqual(2);
    }
});

test("published Android products use verified Google Play links", () => {
  const links = Object.fromEntries(products.map((product) => [product.id, product.links.map((link) => link.url)]));
  expect(links["mk-adisyon"]).toContain("https://play.google.com/store/apps/details?id=com.mkdigitalsystems.adisyon");
  expect(links["aura-gunluk"]).toContain("https://play.google.com/store/apps/details?id=com.mkdigitalsystems.aura");
  expect(links["mavi-kadraj-ile-ogreniyorum"]).toContain("https://play.google.com/store/apps/details?id=com.mavikadaj.learn");
  expect(links["bebegimin-ilk-yili"]).toEqual([]);
});

test("every product hub and intent page renders canonical metadata and one H1", async ({ page, request }) => {
  for (const product of products) {
    const hub = `/tr/${product.id}`;
    expect((await request.get(hub)).status(), hub).toBe(200);
    for (const entry of product.topics) {
      const path = `${hub}/${entry.slug}`;
      const response = await request.get(path);
      expect(response.status(), path).toBe(200);
    }
  }
  const product = products[0];
  const entry = product.topics[0];
  const path = `/tr/${product.id}/${entry.slug}`;
  await page.goto(path);
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText(entry.title);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `http://localhost:3000${path}`);
  const graph = (await page.locator('script[type="application/ld+json"]').allTextContents())
    .flatMap((source) => JSON.parse(source)["@graph"] ?? []);
  expect(graph.map((node: { "@type": string }) => node["@type"]))
    .toEqual(expect.arrayContaining(["WebPage", "BreadcrumbList", "SoftwareApplication", "FAQPage"]));
});

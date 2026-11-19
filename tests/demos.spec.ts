import { test, expect } from "@playwright/test";
import { demos } from "../content/demos";

test("the demo section holds the ten demos plus two own content projects", () => {
  expect(demos).toHaveLength(12);
  expect(demos.filter((demo) => demo.kind === "demo")).toHaveLength(10);
  expect(demos.filter((demo) => demo.kind === "project").map((demo) => demo.slug)).toEqual(["gonul-pusulasi", "siir-dunyasi"]);
  expect(new Set(demos.map((demo) => demo.slug)).size).toBe(12);
  for (const demo of demos) {
    expect(demo.tr.summary.length, demo.slug).toBeGreaterThan(20);
    expect(demo.en.summary.length, demo.slug).toBeGreaterThan(20);
    expect(demo.tr.features.length, demo.slug).toBeGreaterThan(2);
  }
});

test("demo pages exist in tr and en with canonical, hreflang and the not-a-reference notice; de and fr are 404", async ({ page, request }) => {
  await page.goto("/tr/demolar");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/tr\/demolar$/);
  await page.goto("/en/demos");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/en\/demos$/);
  for (const demo of demos) {
    for (const [locale, base] of [["tr", "demolar"], ["en", "demos"]] as const) {
      const path = `/${locale}/${base}/${demo.slug}`;
      expect((await request.get(path)).status(), path).toBe(200);
    }
    expect((await request.get(`/de/demos/${demo.slug}`)).status()).toBe(404);
    expect((await request.get(`/fr/demos/${demo.slug}`)).status()).toBe(404);
  }
  await page.goto("/tr/demolar/musty-music");
  await expect(page.locator("h1")).toHaveCount(1);
  await expect(page.locator("h1")).toHaveText("Musty Music");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/tr\/demolar\/musty-music$/);
  await expect(page.locator('link[rel="alternate"][hreflang="en"]')).toHaveAttribute("href", /\/en\/demos\/musty-music$/);
  await expect(page.getByText("müşteri referansı değildir").first()).toBeVisible();
  await page.goto("/en/demos/musty-music");
  await expect(page.getByText("not a client reference").first()).toBeVisible();
});

test("MK Pati and MK TraceOps product pages and the merged MK Resepsiyon content render", async ({ request, page }) => {
  for (const id of ["mk-pati", "mk-traceops"]) expect((await request.get(`/tr/${id}`)).status(), id).toBe(200);
  await page.goto("/tr/mk-resepsiyon");
  await expect(page.getByText("Mavi Resepsiyon").first()).toBeVisible();
  await page.goto("/tr/mk-pati");
  await expect(page.locator("h1")).toHaveText("MK Pati");
  await expect(page.locator(".product-topics")).toHaveCount(0);
});

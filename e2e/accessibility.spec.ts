import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

/**
 * Base accessibility test suite
 *
 * Per technical-dev spec:
 * - axe-core must report 0 violations
 * - WCAG 2.2 AA compliance is Priority #1
 */
test.describe("Accessibility", () => {
    test("home page has no accessibility violations", async ({ page }) => {
        await page.goto("/");

        const results = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
            .analyze();

        expect(results.violations).toEqual([]);
    });

    test("404 page has no accessibility violations", async ({ page }) => {
        await page.goto("/nonexistent-page");

        const results = await new AxeBuilder({ page })
            .withTags(["wcag2a", "wcag2aa", "wcag22aa"])
            .analyze();

        expect(results.violations).toEqual([]);
    });
});

test.describe("SEO Foundations", () => {
    test("page has correct lang attribute", async ({ page }) => {
        await page.goto("/");
        const lang = await page.locator("html").getAttribute("lang");
        expect(lang).toBe("en-ZA");
    });

    test("page has exactly one h1", async ({ page }) => {
        await page.goto("/");
        const h1Count = await page.locator("h1").count();
        expect(h1Count).toBe(1);
    });

    test("page has semantic landmarks", async ({ page }) => {
        await page.goto("/");
        await expect(page.locator("header").first()).toBeAttached();
        await expect(page.locator("main").first()).toBeAttached();
        await expect(page.locator("footer").first()).toBeAttached();
    });

    test("skip-to-content link exists", async ({ page }) => {
        await page.goto("/");
        const skipLink = page.locator('a[href="#main-content"]');
        await expect(skipLink).toBeAttached();
    });
});

test.describe("Performance Foundations", () => {
    test("page has no layout shift elements without dimensions", async ({
        page,
    }) => {
        await page.goto("/");
        const images = page.locator("img:not([width]):not([height])");
        const count = await images.count();
        expect(count).toBe(0);
    });
});

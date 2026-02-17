import { defineConfig, devices } from "@playwright/test";

/**
 * Playwright configuration
 *
 * Per technical-dev spec:
 * - E2E + A11y testing via @axe-core/playwright
 * - Critical paths on 375px viewport
 * - Screenshots at 375px + 1440px on layout PRs
 * - Cross-browser: Chrome + Safari (WebKit)
 */
export default defineConfig({
    testDir: "./e2e",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "html",

    use: {
        baseURL: "http://localhost:3000",
        trace: "on-first-retry",
    },

    projects: [
        {
            name: "chromium-mobile",
            use: {
                ...devices["Pixel 5"],
                viewport: { width: 375, height: 812 },
            },
        },
        {
            name: "chromium-desktop",
            use: {
                ...devices["Desktop Chrome"],
                viewport: { width: 1440, height: 900 },
            },
        },
        {
            name: "webkit-mobile",
            use: {
                ...devices["iPhone 13"],
                viewport: { width: 375, height: 812 },
            },
        },
        {
            name: "webkit-desktop",
            use: {
                ...devices["Desktop Safari"],
                viewport: { width: 1440, height: 900 },
            },
        },
    ],

    webServer: {
        command: "npx serve out -l 3000",
        port: 3000,
        reuseExistingServer: !process.env.CI,
    },
});

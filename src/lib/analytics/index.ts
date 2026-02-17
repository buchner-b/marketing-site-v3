/**
 * Analytics utility — server-side GA4 Measurement Protocol
 *
 * All analytics calls are routed through this module.
 * Never import analytics SDKs from components directly.
 */

interface EventProps {
    [key: string]: string | number | boolean | undefined;
}

/**
 * Track an analytics event.
 * Currently a no-op stub — implement GA4 Measurement Protocol
 * via Route Handlers when analytics is configured.
 */
export function trackEvent(name: string, props?: EventProps): void {
    if (process.env.NODE_ENV === "development") {
        console.log(`[Analytics] ${name}`, props);
    }

    // TODO: Implement server-side GA4 Measurement Protocol
    // POST to /api/analytics with { name, props }
}

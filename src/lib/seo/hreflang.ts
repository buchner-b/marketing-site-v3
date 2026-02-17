/**
 * hreflang configuration pattern.
 * Currently single-locale (en-ZA). Extend when multi-locale is needed.
 */

const BASE_URL = "https://augos.co.za";

interface HreflangLink {
    rel: "alternate";
    hrefLang: string;
    href: string;
}

/**
 * Generate hreflang links for a given path.
 */
export function getHreflangLinks(path: string): HreflangLink[] {
    return [
        {
            rel: "alternate",
            hrefLang: "en-ZA",
            href: `${BASE_URL}${path}`,
        },
        {
            rel: "alternate",
            hrefLang: "x-default",
            href: `${BASE_URL}${path}`,
        },
    ];
}

import type { Metadata } from "next";

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
    ogImage?: string;
    noIndex?: boolean;
}

const BASE_URL = "https://augos.co.za";

/**
 * Generate consistent metadata for any page.
 * Handles canonical URLs, OG tags, and en-ZA locale.
 */
export function createMetadata({
    title,
    description,
    path,
    ogImage,
    noIndex = false,
}: PageMetadataOptions): Metadata {
    const url = `${BASE_URL}${path}`;
    const image = ogImage ?? `${BASE_URL}/og/default.png`;

    return {
        title,
        description,
        alternates: {
            canonical: url,
            languages: {
                "en-ZA": url,
            },
        },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            locale: "en_ZA",
            siteName: "Augos",
            images: [
                {
                    url: image,
                    width: 1200,
                    height: 630,
                    alt: title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
        robots: noIndex
            ? { index: false, follow: false }
            : { index: true, follow: true },
        other: {
            "geo.region": "ZA",
            "geo.placename": "South Africa",
            "article:modified_time": new Date().toISOString(),
        },
    };
}

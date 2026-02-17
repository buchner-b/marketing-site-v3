import { organization } from "../organization";

/**
 * JSON-LD Schema Builders
 *
 * All structured data uses @graph for combining multiple schemas per page.
 * Validate with scripts/validate-schemas.ts before merging.
 */

export interface SchemaGraph {
    "@context": "https://schema.org";
    "@graph": Record<string, unknown>[];
}

/**
 * Wrap multiple schema objects in a @graph structure.
 */
export function createSchemaGraph(
    ...schemas: Record<string, unknown>[]
): SchemaGraph {
    return {
        "@context": "https://schema.org",
        "@graph": schemas,
    };
}

/**
 * Organization schema — used on every page.
 */
export function organizationSchema(): Record<string, unknown> {
    return {
        "@type": "Organization",
        name: organization.name,
        url: organization.url,
        logo: {
            "@type": "ImageObject",
            url: organization.logo,
        },
        sameAs: organization.sameAs,
    };
}

/**
 * WebSite schema with optional SearchAction.
 */
export function webSiteSchema(): Record<string, unknown> {
    return {
        "@type": "WebSite",
        name: organization.name,
        url: organization.url,
    };
}

/**
 * BreadcrumbList schema.
 */
export function breadcrumbSchema(
    items: { name: string; url: string }[]
): Record<string, unknown> {
    return {
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: item.url,
        })),
    };
}

/**
 * FAQPage schema.
 */
export function faqSchema(
    questions: { question: string; answer: string }[]
): Record<string, unknown> {
    return {
        "@type": "FAQPage",
        mainEntity: questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: q.answer,
            },
        })),
    };
}

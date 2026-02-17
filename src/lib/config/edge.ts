/**
 * Edge Region Configuration
 *
 * When serverless functions are added (e.g., form handlers, analytics API),
 * pin them to the Johannesburg region for SA performance.
 *
 * Usage in any API route or server action:
 * ```ts
 * export const runtime = 'edge';
 * export const preferredRegion = EDGE_REGION;
 * ```
 *
 * Note: With `output: 'export'` (current config), there are no serverless
 * functions. This config becomes active when SSG is combined with
 * standalone API routes or when output mode changes.
 */
export const EDGE_REGION = "jnb1" as const;
export const EDGE_RUNTIME = "edge" as const;

# Architecture Decision Log

All significant architectural decisions are logged here with rationale and trade-offs.

---

## 2026-02-17 — Initial Stack Selection

**Decision:** Next.js 16 (App Router) + Tailwind v4 + TypeScript strict + Static Export (SSG)

**Alternatives:** Astro, Remix, Gatsby

**Rationale:** Next.js provides the best ecosystem for SSG with React Server Components, image optimization patterns, and metadata APIs. Tailwind v4 was selected by create-next-app (CSS-first config). Static export ensures maximum CDN performance for the SA market.

**Trade-offs:** `output: 'export'` means no server-side features (ISR, middleware at runtime, API routes in production). Form handling will require external endpoints or edge functions deployed separately.

---

## 2026-02-17 — Space Grotesk as Active Font (Cabinet Grotesk Pending)

**Decision:** Use Space Grotesk via `next/font/google` as the active font. Cabinet Grotesk will replace it via `next/font/local` when `.woff2` files are provided.

**Alternatives:** Inter, system fonts only

**Rationale:** Space Grotesk is the closest Google Fonts match to Cabinet Grotesk's geometric style. Using `next/font` ensures zero layout shift and optimal loading.

**Trade-offs:** Font swap will require a minor layout review when Cabinet Grotesk files arrive.

---

## 2026-02-17 — clsx + tailwind-merge Dependencies

**Decision:** Added `clsx` (~1KB) and `tailwind-merge` (~7KB) as dependencies.

**Alternatives:** Manual class concatenation, classnames package

**Rationale:** `cn()` utility is the standard pattern for conditional Tailwind classes with conflict resolution. Both packages are well under the 10KB justification threshold.

**Trade-offs:** None significant. Combined size < 10KB gzipped.

---

## 2026-02-17 — Static robots.txt and sitemap.xml

**Decision:** Use static files in `/public/` instead of Next.js route handlers (`robots.ts`, `sitemap.ts`).

**Alternatives:** Next.js `MetadataRoute.Robots` and `MetadataRoute.Sitemap` route handlers.

**Rationale:** `output: 'export'` (strict SSG) does not support route handlers — they fail during static data collection. Similarly, `headers()` in `next.config.ts` is not supported with static export. Security headers are configured in `vercel.json` instead.

**Trade-offs:** Robots and sitemap must be manually updated when pages change (or automated via a build script in `scripts/`).

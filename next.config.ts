import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  images: {
    formats: ["image/avif", "image/webp"],
    unoptimized: true, // Required for static export
  },

  // Note: headers() is not supported with `output: 'export'`.
  // Security headers must be configured at the hosting level (Vercel, Cloudflare, etc.)
  // See DECISIONS.md for the full header set to configure in vercel.json or _headers.
};

export default nextConfig;

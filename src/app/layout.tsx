import type { Metadata, Viewport } from "next";
import { Space_Grotesk } from "next/font/google";
import { createSchemaGraph, organizationSchema, webSiteSchema } from "../lib/seo/schemas";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
  adjustFontFallback: true,
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#2750FC",
};

export const metadata: Metadata = {
  title: {
    default: "Augos",
    template: "%s | Augos",
  },
  description: "Market-leading energy intelligence platform for South Africa.",
  metadataBase: new URL("https://augos.co.za"),
  openGraph: {
    type: "website",
    locale: "en_ZA",
    siteName: "Augos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  other: {
    "geo.region": "ZA",
    "geo.placename": "South Africa",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-ZA">
      <head>
        <script
          type="speculationrules"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              prerender: [
                {
                  where: { href_matches: "/*" },
                  eagerness: "conservative",
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              createSchemaGraph(organizationSchema(), webSiteSchema())
            ),
          }}
        />
      </head>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <a href="#main-content" className="skip-to-content">
          Skip to main content
        </a>

        <header role="banner">
          {/* Navigation shell — to be implemented by Designer agent */}
        </header>

        <main id="main-content" role="main">
          {children}
        </main>

        <footer role="contentinfo">
          {/* Footer shell — to be implemented by Designer agent */}
        </footer>
      </body>
    </html>
  );
}

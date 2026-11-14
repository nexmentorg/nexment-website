import type { Metadata, Viewport } from "next";
import { Comic_Neue, Geist_Mono, Inter, Sora } from "next/font/google";

import { ThemeProvider } from "@/components/shared/themes";
import { ToastProvider } from "@/components/shared/toast";
import "./globals.css";

import { env } from "@/env";

import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const headingFont = Sora({
  variable: "--font-heading-source",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

const bodyFont = Inter({
  variable: "--font-body-source",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = Geist_Mono({
  variable: "--font-mono-source",
  subsets: ["latin"],
  display: "swap",
});

const cursiveFont = Comic_Neue({
  variable: "--font-cursive-source",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const siteUrl = "https://nexment.org";

const siteDescription =
  "Nexment is a modern developer cloud for building, shipping, securing, and scaling web applications — cloud-hosted or self-hosted.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Nexment — Build the web. Your way.",
    template: "%s | Nexment",
  },

  description: siteDescription,

  applicationName: "Nexment",

  authors: [
    {
      name: "Nexment",
      url: siteUrl,
    },
  ],

  creator: "Nexment",
  publisher: "Nexment",

  keywords: [
    "Nexment",
    "developer cloud",
    "cloud infrastructure",
    "developer infrastructure",
    "web development",
    "backend infrastructure",
    "NoSQL database",
    "authentication",
    "object storage",
    "serverless functions",
    "developer tools",
    "self-hosted",
    "open source",
    "AI infrastructure",
  ],

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  verification: {
    google: env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  icons: {
    icon: [
      {
        url: "/favicon/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon/favicon.svg",
        type: "image/svg+xml",
      },
      {
        url: "/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/favicon/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
    ],

    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],

    other: [
      {
        rel: "mask-icon",
        url: "/favicon/favicon.svg",
      },
    ],
  },

  manifest: "/site.webmanifest",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Nexment",
    title: "Nexment — Build the web. Your way.",
    description: siteDescription,
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Nexment — Build the web. Your way.",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Nexment — Build the web. Your way.",
    description: siteDescription,
    images: ["/images/banner.png"],
  },

  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    {
      media: "(prefers-color-scheme: light)",
      color: "#FAF6EF",
    },
    {
      media: "(prefers-color-scheme: dark)",
      color: "#0B0B0B",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} ${monoFont.variable} ${cursiveFont.variable}`}
      >
        <ThemeProvider>
          <ToastProvider>
            {children}
            <SpeedInsights />
            <Analytics />
          </ToastProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

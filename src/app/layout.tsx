import type { Metadata, Viewport } from "next";
import { Geist, Noto_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./globals.css";
import { WebsiteSchema } from "@/components/seo/website-schema";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeShortcut } from "@/components/theme-shortcut";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const geistHeading = Geist({ subsets: ["latin"], variable: "--font-heading" });
const notoSans = Noto_Sans({ subsets: ["latin"], variable: "--font-sans" });

const siteUrl = "https://nexment.org";
const siteName = "Nexment";
const description =
  "Nexment is a developer platform to showcase projects, publish technical articles, discover tools, learn new skills, and connect with developers.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: "Nexment — Build. Learn. Connect. Grow.",
    template: "%s | Nexment",
  },
  description,
  keywords: [
    "Nexment",
    "developer community",
    "developer platform",
    "open source",
    "software development",
    "programming",
    "developer tools",
    "technical blogs",
    "project showcase",
    "learn programming",
    "software engineering",
  ],
  authors: [{ name: "Nexment" }],
  creator: "Nexment",
  publisher: "Nexment",
  category: "technology",
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
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-96x96.png", sizes: "96x96", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Nexment — Build. Learn. Connect. Grow.",
    description,
    images: [
      {
        url: "/banner.png",
        alt: "Nexment — Build. Learn. Connect. Grow.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexment — Build. Learn. Connect. Grow.",
    description,
    images: ["/banner.png"],
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "YdPDlvmcR_BYGW4lVQHCckczzLNacP8tuJyXYPHOnnM",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
  colorScheme: "dark",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", "font-sans", notoSans.variable, geistHeading.variable)}
      suppressHydrationWarning
    >
      <body className="flex min-h-full flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ThemeShortcut />
          {children}
        </ThemeProvider>
        <WebsiteSchema />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

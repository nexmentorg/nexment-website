import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/dashboard/", "/settings/", "/api/", "/auth/"],
    },
    sitemap: "https://nexment.org/sitemap.xml",
    host: "https://nexment.org",
  };
}

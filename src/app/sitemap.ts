import type { MetadataRoute } from "next";

const SITE_URL = "https://nexment.org";

type SitemapEntry = {
  path: string;
  priority?: number;
  lastModified?: Date | string;
  changeFrequency?: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const routes: SitemapEntry[] = [{ path: "/", priority: 1.0 }];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return routes.map(
    ({ path, priority = 0.7, lastModified = now, changeFrequency = "monthly" }) => ({
      url: new URL(path, SITE_URL).toString(),
      priority,
      lastModified,
      changeFrequency,
    }),
  );
}

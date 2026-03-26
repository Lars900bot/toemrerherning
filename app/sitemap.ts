import type { MetadataRoute } from "next";
import config from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${config.domain}`;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    ...config.clusterPages.map((page) => ({
      url: `${baseUrl}/${page.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}

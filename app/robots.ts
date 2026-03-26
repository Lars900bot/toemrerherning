import type { MetadataRoute } from "next";
import config from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `https://${config.domain}/sitemap.xml`,
  };
}

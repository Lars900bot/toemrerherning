import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import config from "@/lib/site-config";

export const metadata: Metadata = {
  title: {
    default: config.homepage.title,
    template: `%s | ${config.companyName}`,
  },
  description: config.homepage.metaDescription,
  openGraph: {
    type: "website",
    locale: "da_DK",
    siteName: config.companyName,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="da">
      <body className="bg-gray-50 text-gray-900 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

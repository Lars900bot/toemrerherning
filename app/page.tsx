import type { Metadata } from "next";
import Link from "next/link";
import config from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";
import ServiceCard from "@/components/ServiceCard";

export const metadata: Metadata = {
  title: config.homepage.title,
  description: config.homepage.metaDescription,
  alternates: { canonical: `https://${config.domain}` },
  openGraph: {
    title: config.homepage.title,
    description: config.homepage.metaDescription,
    url: `https://${config.domain}`,
  },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", config.schemaType],
    name: config.companyName,
    telephone: config.phone,
    email: config.email,
    url: `https://${config.domain}`,
    address: {
      "@type": "PostalAddress",
      streetAddress: config.address.split(",")[0],
      addressLocality: config.by,
      addressCountry: "DK",
    },
    areaServed: {
      "@type": "City",
      name: config.by,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  if (config.homepage.faq.length === 0) return null;
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.homepage.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />
      <FAQSchema />

      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {config.homepage.h1}
            </h1>
            <p className="text-lg text-blue-200 mb-6">
              {config.homepage.subtitle}
            </p>
            <p className="text-blue-100 mb-8 leading-relaxed">
              {config.homepage.heroContent}
            </p>
            <a
              href={`tel:${config.phone.replace(/\s/g, "")}`}
              className="inline-block text-2xl font-bold bg-[#f97316] px-8 py-4 rounded hover:bg-orange-600 transition-colors"
            >
              {config.phone}
            </a>
          </div>
          <div>
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Om os */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6 text-center">
            {config.homepage.aboutTitle}
          </h2>
          {config.homepage.aboutText.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">
            Vores ydelser
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {config.homepage.services.map((s) => (
              <ServiceCard key={s.title} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* USPs */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">
            Hvorfor vælge os?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {config.homepage.usps.map((usp) => (
              <div
                key={usp.title}
                className="text-center p-6 bg-white rounded-lg shadow"
              >
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  {usp.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      {config.homepage.contentSections.map((section, i) => (
        <section key={i} className={i % 2 === 0 ? "py-16" : "py-16 bg-gray-100"}>
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6 text-center">
              {section.title}
            </h2>
            {section.paragraphs.map((p, j) => (
              <p key={j} className="text-gray-700 leading-relaxed mb-4">
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}

      {/* FAQ */}
      {config.homepage.faq.length > 0 && (
        <section className="py-16 bg-gray-100">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">
              Ofte stillede spørgsmål
            </h2>
            <div className="space-y-6">
              {config.homepage.faq.map((item, i) => (
                <div key={i} className="bg-white rounded-lg shadow p-6">
                  <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Cluster-links */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-10 text-center">
            Se alle vores ydelser
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {config.clusterPages.map((page) => (
              <Link
                key={page.slug}
                href={`/${page.slug}`}
                className="block bg-white p-4 rounded shadow hover:shadow-md transition-shadow text-[#1e3a5f] font-semibold hover:text-[#f97316]"
              >
                {page.h1}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-6 text-center">
            Kontakt os
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Udfyld formularen herunder, og vi vender tilbage inden for 24 timer
            med et uforpligtende tilbud.
          </p>
          <ContactForm />
        </div>
      </section>
    </>
  );
}

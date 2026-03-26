import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import config from "@/lib/site-config";
import ContactForm from "@/components/ContactForm";

export function generateStaticParams() {
  return config.clusterPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const page = config.clusterPages.find((p) => p.slug === slug);
    if (!page) return {};
    return {
      title: page.title,
      description: page.metaDescription,
      alternates: { canonical: `https://${config.domain}/${page.slug}` },
      openGraph: {
        title: page.title,
        description: page.metaDescription,
        url: `https://${config.domain}/${page.slug}`,
      },
    };
  });
}

export default async function ClusterPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = config.clusterPages.find((p) => p.slug === slug);

  if (!page) notFound();

  return (
    <>
      {/* Hero */}
      <section className="bg-[#1e3a5f] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.h1}</h1>
          <p className="text-lg text-blue-200 mb-6">{page.intro}</p>
          <a
            href={`tel:${config.phone.replace(/\s/g, "")}`}
            className="inline-block text-xl font-bold bg-[#f97316] px-8 py-4 rounded hover:bg-orange-600 transition-colors"
          >
            Ring nu: {config.phone}
          </a>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          {page.content.map((p, i) => (
            <p key={i} className="text-gray-700 leading-relaxed mb-4">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-8 text-center">
            Hvad vi tilbyder
          </h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {page.services.map((s) => (
              <div key={s.title} className="bg-white rounded-lg shadow p-6">
                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  {s.title}
                </h3>
                <p className="text-gray-600 text-sm">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-[#1e3a5f] mb-6 text-center">
            Få et gratis tilbud
          </h2>
          <ContactForm />
        </div>
      </section>

      {/* Internal links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-xl font-bold text-[#1e3a5f] mb-4">
            Andre ydelser i {config.by}
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/"
              className="text-[#1e3a5f] hover:text-[#f97316] underline text-sm"
            >
              {config.fag} {config.by}
            </Link>
            {config.clusterPages
              .filter((p) => p.slug !== slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  href={`/${p.slug}`}
                  className="text-[#1e3a5f] hover:text-[#f97316] underline text-sm"
                >
                  {p.h1}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}

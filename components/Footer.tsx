import Link from "next/link";
import config from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-bold mb-3">{config.companyName}</h3>
          <p className="text-blue-200 text-sm leading-relaxed">
            Din lokale {config.fag.toLowerCase()} i {config.by}. Vi tilbyder
            professionelt håndværk til faste priser.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Kontakt</h3>
          <ul className="text-blue-200 text-sm space-y-2">
            <li>{config.address}</li>
            <li>
              Tlf:{" "}
              <a
                href={`tel:${config.phone.replace(/\s/g, "")}`}
                className="hover:text-orange-400"
              >
                {config.phone}
              </a>
            </li>
            <li>
              Email:{" "}
              <a
                href={`mailto:${config.email}`}
                className="hover:text-orange-400"
              >
                {config.email}
              </a>
            </li>
            <li>{config.cvr}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-3">Sider</h3>
          <ul className="text-blue-200 text-sm space-y-2">
            <li>
              <Link href="/" className="hover:text-orange-400">
                Forside
              </Link>
            </li>
            {config.clusterPages.slice(0, 5).map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="hover:text-orange-400"
                >
                  {page.h1}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-blue-800 text-center text-blue-300 text-xs py-4">
        © {new Date().getFullYear()} {config.companyName}. Alle rettigheder
        forbeholdes.
      </div>
    </footer>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import config from "@/lib/site-config";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[#1e3a5f] text-white sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          {config.companyName}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/" className="hover:text-orange-400 transition-colors">
            Forside
          </Link>
          <Link
            href="/#services"
            className="hover:text-orange-400 transition-colors"
          >
            Ydelser
          </Link>
          <Link
            href="/#kontakt"
            className="hover:text-orange-400 transition-colors"
          >
            Kontakt
          </Link>
          <a
            href={`tel:${config.phone.replace(/\s/g, "")}`}
            className="bg-[#f97316] text-white px-5 py-2 rounded font-semibold hover:bg-orange-600 transition-colors"
          >
            Ring nu
          </a>
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#1e3a5f] border-t border-blue-800 px-4 pb-4">
          <Link
            href="/"
            className="block py-2 hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Forside
          </Link>
          <Link
            href="/#services"
            className="block py-2 hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Ydelser
          </Link>
          <Link
            href="/#kontakt"
            className="block py-2 hover:text-orange-400"
            onClick={() => setMenuOpen(false)}
          >
            Kontakt
          </Link>
          <a
            href={`tel:${config.phone.replace(/\s/g, "")}`}
            className="block mt-2 bg-[#f97316] text-white text-center px-5 py-2 rounded font-semibold"
          >
            Ring nu
          </a>
        </nav>
      )}
    </header>
  );
}

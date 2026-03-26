"use client";

import config from "@/lib/site-config";

export default function ContactForm() {
  return (
    <form
      className="bg-white rounded-lg shadow-lg p-6 md:p-8 space-y-4"
      action={`https://formsubmit.co/${config.email}`}
      method="POST"
    >
      <h3 className="text-xl font-bold text-[#1e3a5f]">
        Få et gratis tilbud
      </h3>

      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
          Navn
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          placeholder="Dit fulde navn"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          placeholder="Dit telefonnummer"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
          Vælg ydelse
        </label>
        <select
          id="service"
          name="service"
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
        >
          <option value="">Vælg en ydelse...</option>
          {config.homepage.services.map((s) => (
            <option key={s.title} value={s.title}>
              {s.title}
            </option>
          ))}
          <option value="Andet">Andet</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
          Besked
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full border border-gray-300 rounded px-3 py-2 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#f97316]"
          placeholder="Beskriv din opgave..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#f97316] text-white font-semibold py-3 rounded hover:bg-orange-600 transition-colors"
      >
        Send forespørgsel
      </button>
    </form>
  );
}

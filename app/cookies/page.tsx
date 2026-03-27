import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Statement",
  description:
    "Cookie statement van Arianne Lindhout Bedrijfsgeneeskunde. Lees welke cookies wij gebruiken en waarom.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function Cookies() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-12 leading-tight">
            Cookie Statement
          </h1>

          <div className="prose prose-slate max-w-none font-sans">
            <p className="text-slate-600 leading-relaxed mb-6">
              We hebben de cookies van Google Analytics volledig geanonimiseerd,
              vandaar dat deze geplaatst mogen worden zonder toestemming.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Statistische cookies
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Statistische cookies helpen eigenaren van websites begrijpen hoe
              bezoekers hun website gebruiken, door anoniem gegevens te verzamelen
              en te rapporteren.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full text-sm text-left border border-slate-200 rounded-lg overflow-hidden">
                <thead className="bg-slate-100">
                  <tr>
                    <th className="px-4 py-3 font-display font-bold text-slate-900">Naam</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-900">Aanbieder</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-900">Type</th>
                    <th className="px-4 py-3 font-display font-bold text-slate-900">Vervaldatum</th>
                  </tr>
                </thead>
                <tbody className="text-slate-600">
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-mono text-xs">_ga</td>
                    <td className="px-4 py-3">lindhoutbedrijfsgeneeskunde.nl</td>
                    <td className="px-4 py-3">HTTP</td>
                    <td className="px-4 py-3">2 jaar</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td className="px-4 py-3 font-mono text-xs">_gat</td>
                    <td className="px-4 py-3">lindhoutbedrijfsgeneeskunde.nl</td>
                    <td className="px-4 py-3">HTTP</td>
                    <td className="px-4 py-3">Sessie</td>
                  </tr>
                  <tr className="border-t border-slate-200">
                    <td className="px-4 py-3 font-mono text-xs">_gid</td>
                    <td className="px-4 py-3">lindhoutbedrijfsgeneeskunde.nl</td>
                    <td className="px-4 py-3">HTTP</td>
                    <td className="px-4 py-3">Sessie</td>
                  </tr>
                  <tr className="border-t border-slate-200 bg-slate-50">
                    <td className="px-4 py-3 font-mono text-xs">collect</td>
                    <td className="px-4 py-3">google-analytics.com</td>
                    <td className="px-4 py-3">Pixel</td>
                    <td className="px-4 py-3">Sessie</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p className="text-slate-600 leading-relaxed mb-6">
              Registreert unieke IDs voor statistische gegevens. Gebruikt door
              Google Analytics om verzoeksnelheid te vertragen en gegevens te
              verzenden over apparaat- en bezoekersgedrag. Traceert bezoekers op
              verschillende apparaten en marketingkanalen.
            </p>

            <h2 className="text-2xl font-display font-bold text-slate-900 mt-10 mb-4">
              Hoe wij cookies gebruiken
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              We kunnen vragen om cookies op uw apparaat te plaatsen. We gebruiken
              cookies om te weten wanneer u onze websites bezoekt, hoe u met ons
              omgaat, om uw gebruikerservaring te verrijken en uw relatie met onze
              website aan te passen.
            </p>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Essentiële Website Cookies
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Deze cookies zijn strikt noodzakelijk om diensten beschikbaar via
              onze website aan te bieden en sommige functies ervan te gebruiken.
              Weigering van essentiële cookies beïnvloedt het functioneren van
              onze site.
            </p>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Google Analytics Cookies
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Deze cookies verzamelen informatie in geaggregeerde vorm om inzicht
              te geven in websitegebruik en effectiviteit van marketingcampagnes.
            </p>

            <h3 className="text-lg font-display font-bold text-slate-900 mt-6 mb-3">
              Overige externe diensten
            </h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              Google Webfonts, Google Maps, en externe videoproviders kunnen
              persoonlijke gegevens verzamelen. Deze kunnen geblokkeerd worden,
              maar dit beïnvloedt de functionaliteit en het uiterlijk van de site.
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-slate-200">
            <Link
              href="/"
              className="text-medical font-display font-medium hover:underline"
            >
              &larr; Terug naar home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

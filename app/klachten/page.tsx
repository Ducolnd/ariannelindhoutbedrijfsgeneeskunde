import type { Metadata } from "next";
import Link from "next/link";
import { FileDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Klachtenprocedure",
  description:
    "Klachtenprocedure van Arianne Lindhout Bedrijfsgeneeskunde. Download de volledige klachtenprocedure als PDF.",
  alternates: {
    canonical: "/klachten",
  },
};

export default function Klachten() {
  return (
    <section className="bg-cream py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="accent-line mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6 leading-tight">
            Klachtenprocedure
          </h1>

          <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 bg-medical/10 rounded-lg flex items-center justify-center">
              <FileDown className="w-7 h-7 text-medical" />
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-display font-bold text-slate-900 mb-1">
                Klachtenprocedure (PDF)
              </h2>
              <p className="text-sm text-slate-500 font-sans">
                Versie maart 2026 &mdash; Klachtenprocedure voor cliënten van leden van de ZFB
              </p>
            </div>
            <a
              href="/klachtenprocedure.pdf"
              download
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-display font-medium rounded-lg whitespace-nowrap"
            >
              <FileDown className="w-4 h-4 mr-2" />
              Download PDF
            </a>
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

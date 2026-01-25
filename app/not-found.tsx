import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="py-20 md:py-28 bg-cream min-h-[60vh] flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-6xl md:text-8xl font-display font-bold text-medical mb-4">
            404
          </h1>
          <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
            Pagina niet gevonden
          </h2>
          <p className="text-lg text-slate-600 mb-8 font-sans">
            De pagina die u zoekt bestaat niet of is verplaatst.
          </p>
          <Link
            href="/"
            className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-display font-medium rounded-lg group"
          >
            Terug naar home
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

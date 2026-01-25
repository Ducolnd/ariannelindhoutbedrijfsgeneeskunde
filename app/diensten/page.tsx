import type { Metadata } from "next";
import { Section } from "../components/Section";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, HeartHandshake, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Diensten",
  description:
    "Bedrijfsgeneeskundige diensten: preventieve begeleiding, verzuimbegeleiding en reïntegratie. PAGO/PMO, RI&E advies en arbeidsomstandighedenspreekuur.",
  openGraph: {
    title: "Diensten | Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Bedrijfsgeneeskundige diensten: preventieve begeleiding, verzuimbegeleiding en reïntegratie.",
    images: ["/arianne-diensten-v22.jpg"],
  },
  alternates: {
    canonical: "/diensten",
  },
};

export default function Diensten() {
  return (
    <>
      {/* Hero Image - Full Width */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/arianne-diensten-v22.jpg"
          alt="Bedrijfsgeneeskundige diensten"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
      </section>

      {/* Intro Section */}
      <Section bg="white">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
            Mijn diensten
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans">
            Als bedrijfsarts zet ik mij in voor gezond en veilig werken. Mijn dienstverlening
            richt zich zowel op preventie als op begeleiding bij arbeidsongeschiktheid.
          </p>
        </div>
      </Section>

      {/* Two Services Side by Side */}
      <Section bg="cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Preventieve begeleiding */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-medical rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-900">
                  Preventieve begeleiding
                </h2>
              </div>

              <p className="text-slate-600 font-sans leading-relaxed mb-6">
                Preventie is gericht op het voorkomen en beperken van werkgerelateerde
                gezondheidsrisico's. Ik adviseer organisaties over gezonde en veilige
                arbeidsomstandigheden.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Adviseren over de Risico-Inventarisatie & -Evaluatie (RI&E)",
                  "Uitvoeren van PAGO/PMO's om gezondheidsrisico's vroegtijdig te signaleren",
                  "Werkplekbezoeken uitvoeren",
                  "Arbeidsomstandighedenspreekuur verzorgen",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 font-sans leading-relaxed text-sm border-l-2 border-medical/30 pl-4">
                Door werkplekbezoeken en het arbeidsomstandighedenspreekuur breng ik de relatie
                tussen werk en gezondheid concreet in beeld. Werknemers kunnen laagdrempelig vragen
                stellen of klachten in een vroeg stadium bespreken. Zo kan uitval vaak worden voorkomen.
              </p>
            </div>

            {/* Begeleiding bij arbeidsongeschiktheid */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-medical rounded-xl flex items-center justify-center flex-shrink-0">
                  <HeartHandshake className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-display font-bold text-slate-900">
                  Begeleiding bij arbeidsongeschiktheid
                </h2>
              </div>

              <p className="text-slate-600 font-sans leading-relaxed mb-6">
                Wanneer sprake is van ziekte of arbeidsongeschiktheid begeleid ik werknemers
                en adviseer ik werkgevers bij een zorgvuldig en effectief verzuim- en
                re-integratieproces.
              </p>

              <ul className="space-y-3 mb-6">
                {[
                  "Beoordelen van de belastbaarheid",
                  "Meedenken over passende aanpassingen in werk of werkomstandigheden",
                  "Ondersteunen bij een verantwoorde terugkeer naar werk",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-medical flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 font-sans text-sm">{item}</span>
                  </li>
                ))}
              </ul>

              <p className="text-slate-600 font-sans leading-relaxed text-sm border-l-2 border-medical/30 pl-4">
                Hierbij staat een onafhankelijke medische beoordeling centraal, met aandacht
                voor herstel, inzetbaarheid en de geldende wet- en regelgeving.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section bg="medical-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-display font-bold text-slate-900 mb-6">
            Meer weten over mijn diensten?
          </h2>
          <p className="text-lg text-slate-600 mb-8 font-sans leading-relaxed">
            Neem contact op voor een kennismakingsgesprek over hoe ik uw organisatie kan ondersteunen.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-display font-medium rounded-lg group"
          >
            Neem contact op
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </Section>
    </>
  );
}

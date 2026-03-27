import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Over Arianne",
  description:
    "Over Arianne Lindhout: sinds 2005 geregistreerd bedrijfsarts met ervaring in diverse branches. BIG-geregistreerd en bestuurslid van de ZFB.",
  openGraph: {
    title: "Over Arianne | Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Sinds 2005 geregistreerd bedrijfsarts met ervaring in diverse branches.",
    images: ["/over-arianne.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Over Arianne | Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Sinds 2005 geregistreerd bedrijfsarts met ervaring in diverse branches.",
    images: ["/over-arianne.jpg"],
  },
  alternates: {
    canonical: "/over-arianne",
  },
};

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://lindhoutbedrijfsgeneeskunde.nl";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Over Arianne",
      item: `${baseUrl}/over-arianne`,
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Arianne Lindhout",
  jobTitle: "Bedrijfsarts",
  description:
    "Sinds 2005 geregistreerd bedrijfsarts met ervaring in diverse branches. BIG-geregistreerd en bestuurslid van de ZFB.",
  url: `${baseUrl}/over-arianne`,
  image: `${baseUrl}/over-arianne.jpg`,
  worksFor: {
    "@type": "MedicalBusiness",
    name: "Arianne Lindhout Bedrijfsgeneeskunde",
    url: baseUrl,
  },
  sameAs: ["https://www.linkedin.com/in/arianne-lindhout"],
  knowsAbout: [
    "Bedrijfsgeneeskunde",
    "Ziekteverzuim",
    "Reïntegratie",
    "Preventie",
    "Arbodienst",
  ],
};

export default function OverArianne() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={personSchema} />
      <section className="relative bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[3/5] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/over-arianne.jpg"
                  alt="Arianne Lindhout - Bedrijfsarts"
                  fill
                  className="object-cover image-professional"
                  priority
                />
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 -bottom-6 -right-6 w-full h-full bg-medical/10 rounded-2xl"></div>
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <div className="accent-line mb-8"></div>
            <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Over Arianne Lindhout
            </h1>

            <div className="space-y-6 text-lg text-slate-600 leading-relaxed font-sans mb-10">
              <p>
                Na mijn artsexamen in 1996 heb ik eerst enkele jaren in het ziekenhuis gewerkt.
                In 2000 maakte ik de overstap naar de bedrijfsgeneeskunde. Daarin heb ik me met
                veel enthousiasme ontwikkeld. Sinds eind 2005 ben ik werkzaam als zelfstandig
                bedrijfsarts.
              </p>

              <p>
                Ook ben ik actief in de beroepsvereniging; momenteel als bestuurslid van de
                vereniging van Zelfstandige en Freelance Bedrijfsartsen (ZFB).
              </p>

              <p>
                In mijn vrije tijd ben ik een fervent sporter. Dit helpt me om vol energie en
                met veel plezier mijn werk te doen en de balans te behouden.
              </p>
            </div>

            <Link
              href="/contact"
              className="btn-primary inline-flex items-center justify-center px-6 py-3 text-base font-display font-medium rounded-lg group"
            >
              Neem contact op
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Company Logos */}
      <div className="bg-white py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs text-slate-400 uppercase tracking-widest font-display mb-6">Ervaring bij o.a.</p>
            <div className="flex items-center justify-center gap-10 flex-wrap">
              <Image
                src="/logo-ns.svg"
                alt="NS"
                width={50}
                height={20}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-politie.svg"
                alt="Politie"
                width={80}
                height={30}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-efp.svg"
                alt="EFP - Expertisecentrum Forensische Psychiatrie"
                width={40}
                height={40}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-che.svg"
                alt="CHE - Christelijke Hogeschool Ede"
                width={70}
                height={40}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-kwr.svg"
                alt="KWR Water Research Institute"
                width={70}
                height={25}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-jordan.svg"
                alt="Jordan Montessori Lyceum Utrecht"
                width={80}
                height={20}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
              <Image
                src="/logo-unilabs.svg"
                alt="Unilabs"
                width={60}
                height={20}
                className="opacity-40 grayscale hover:opacity-60 transition-opacity"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Related Pages */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 text-center mb-10">
              Meer informatie
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link
                href="/diensten"
                className="group p-6 bg-cream rounded-xl border border-slate-100 hover:border-medical/20 transition-all"
              >
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-medical transition-colors">
                  Mijn diensten
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Van preventieve begeleiding tot verzuimbegeleiding en reïntegratie. Bekijk wat ik voor uw organisatie kan betekenen.
                </p>
                <span className="inline-flex items-center text-medical font-display font-medium text-sm mt-3">
                  Bekijk diensten <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link
                href="/werkwijze"
                className="group p-6 bg-cream rounded-xl border border-slate-100 hover:border-medical/20 transition-all"
              >
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-medical transition-colors">
                  Mijn werkwijze
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Lees hoe ik werk met het eigen regiemodel en hoe samenwerking centraal staat.
                </p>
                <span className="inline-flex items-center text-medical font-display font-medium text-sm mt-3">
                  Bekijk werkwijze <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, Linkedin, MapPin, Shield, FileText, ArrowRight } from "lucide-react";
import { JsonLd } from "../components/JsonLd";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Neem contact op met bedrijfsarts Arianne Lindhout. Telefoon: +31 6 53124278. E-mail: arianne@lindhoutbedrijfsgeneeskunde.nl. Regio Utrecht en omgeving.",
  openGraph: {
    title: "Contact | Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Neem contact op met bedrijfsarts Arianne Lindhout voor een kennismakingsgesprek.",
    images: ["/zeist.jpeg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Arianne Lindhout Bedrijfsgeneeskunde",
    description:
      "Neem contact op met bedrijfsarts Arianne Lindhout voor een kennismakingsgesprek.",
    images: ["/zeist.jpeg"],
  },
  alternates: {
    canonical: "/contact",
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
      name: "Contact",
      item: `${baseUrl}/contact`,
    },
  ],
};

const contactPageSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact - Arianne Lindhout Bedrijfsgeneeskunde",
  url: `${baseUrl}/contact`,
  description:
    "Neem contact op met bedrijfsarts Arianne Lindhout voor een kennismakingsgesprek.",
  mainEntity: {
    "@type": "MedicalBusiness",
    name: "Arianne Lindhout Bedrijfsgeneeskunde",
    telephone: "+31653124278",
    email: "arianne@lindhoutbedrijfsgeneeskunde.nl",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Zeist",
      addressRegion: "Utrecht",
      addressCountry: "NL",
    },
    areaServed: {
      "@type": "Place",
      name: "Utrecht en omgeving",
    },
  },
};

export default function Contact() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <JsonLd data={contactPageSchema} />
      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900">
                Neem contact op
              </h1>
              <p className="text-lg text-slate-600 mt-4 font-sans">
                Heeft u vragen of wilt u vrijblijvend kennismaken?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <div className="relative aspect-[4/3]">
                <Image
                  src="/zeist.jpeg"
                  alt="Praktijk locatie in Zeist"
                  fill
                  className="object-cover rounded-2xl shadow-lg"
                />
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="text-sm font-display font-bold tracking-widest text-medical uppercase mb-4">
                  Contactgegevens
                </h2>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  Arianne Lindhout Bedrijfsgeneeskunde
                </h3>

                <div className="space-y-4">
                  <a
                    href="tel:+31653124278"
                    className="flex items-center gap-3 text-slate-600 hover:text-medical transition-colors"
                  >
                    <Phone className="w-5 h-5 text-medical" />
                    <span className="font-sans">+31 6 53124278</span>
                  </a>

                  <a
                    href="mailto:arianne@lindhoutbedrijfsgeneeskunde.nl"
                    className="flex items-center gap-3 text-slate-600 hover:text-medical transition-colors"
                  >
                    <Mail className="w-5 h-5 text-medical" />
                    <span className="font-sans">arianne@lindhoutbedrijfsgeneeskunde.nl</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/arianne-lindhout"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-slate-600 hover:text-medical transition-colors"
                  >
                    <Linkedin className="w-5 h-5 text-medical" />
                    <span className="font-sans">Connect op LinkedIn</span>
                  </a>

                  <div className="flex items-center gap-3 text-slate-600">
                    <MapPin className="w-5 h-5 text-medical" />
                    <span className="font-sans">Regio Utrecht en omgeving</span>
                  </div>
                </div>

                {/* Registration Info */}
                <div className="mt-8 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap gap-6">
                    <div className="flex items-center gap-2">
                      <Shield className="w-5 h-5 text-medical" />
                      <div>
                        <p className="text-xs text-slate-500 font-sans">BIG</p>
                        <p className="text-sm font-display font-medium text-slate-900">
                          79044982301
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <FileText className="w-5 h-5 text-medical" />
                      <div>
                        <p className="text-xs text-slate-500 font-sans">KVK</p>
                        <p className="text-sm font-display font-medium text-slate-900">
                          65493842
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Pages */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-display font-bold text-slate-900 text-center mb-10">
              Meer over mijn praktijk
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Link
                href="/diensten"
                className="group p-6 bg-cream rounded-xl border border-slate-100 hover:border-medical/20 transition-all"
              >
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-medical transition-colors">
                  Diensten
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Preventieve begeleiding, verzuimbegeleiding en reïntegratie.
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
                  Werkwijze
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  Het eigen regiemodel en persoonlijke samenwerking.
                </p>
                <span className="inline-flex items-center text-medical font-display font-medium text-sm mt-3">
                  Bekijk werkwijze <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
              <Link
                href="/over-arianne"
                className="group p-6 bg-cream rounded-xl border border-slate-100 hover:border-medical/20 transition-all"
              >
                <h3 className="text-lg font-display font-bold text-slate-900 mb-2 group-hover:text-medical transition-colors">
                  Over Arianne
                </h3>
                <p className="text-slate-600 font-sans text-sm leading-relaxed">
                  20+ jaar ervaring als BIG-geregistreerd bedrijfsarts.
                </p>
                <span className="inline-flex items-center text-medical font-display font-medium text-sm mt-3">
                  Lees meer <ArrowRight className="w-4 h-4 ml-1" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

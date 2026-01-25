import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function OverArianne() {
  return (
    <section className="relative bg-cream overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 md:py-24">
          {/* Photo */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
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

      {/* Placeholder Section */}
      <div className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Logo placeholder */}
              <div className="flex-shrink-0">
                <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-2xl flex items-center justify-center border border-slate-200">
                  <span className="text-slate-400 text-sm font-sans">Logo</span>
                </div>
              </div>

              {/* Text content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-4">
                  Titel hier
                </h2>
                <p className="text-lg text-slate-600 leading-relaxed font-sans">
                  Placeholder tekst. Hier komt een korte beschrijving of toelichting
                  die je later kunt aanpassen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

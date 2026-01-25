import { Section } from "../components/Section";
import Image from "next/image";
import { Users, Shield, Heart } from "lucide-react";

export default function Werkwijze() {
  return (
    <>
      {/* Hero Image - Full Width (like diensten page) */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/arianne-werkwijze.jpg"
          alt="Werkwijze bedrijfsgeneeskunde"
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
            Mijn werkwijze
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-sans">
            Samenwerken aan gezondheid met het eigen regiemodel als uitgangspunt.
          </p>
        </div>
      </Section>

      {/* Content Section */}
      <Section bg="cream">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed font-sans mb-6">
              In mijn werk ga ik uit van het &ldquo;eigen regiemodel&rdquo;. Dat betekent dat werkgever en
              werknemer samen afspraken maken over preventieve maatregelen, de begeleiding bij
              verzuim en over reïntegratie. Als bedrijfsarts adviseer ik in dit proces en coach ik
              zowel de leidinggevende als de medewerker.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed font-sans mb-6">
              Het doel van verzuimbegeleiding is (gedeeltelijke) werkhervatting. Natuurlijk voor
              zover dat mogelijk is. Door samen te werken, zowel met de werkgever als de werknemer,
              krijgen beide partijen vertrouwen in een oplossing. Ik stem hierbij graag af met de
              leidinggevende en de HR-adviseur.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed font-sans">
              Om dat makkelijk mogelijk te maken investeer ik in het opbouwen van een relatie met
              de organisaties waarvoor ik werk. Dat maakt dat ik graag middels regelmatige inzet
              werk (bijvoorbeeld een dagdeel per vier weken) en op de locatie van de organisaties.
            </p>
          </div>
        </div>
      </Section>

      {/* Samen aan de slag - with image */}
      <Section bg="white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-sm font-display font-bold tracking-widest text-medical uppercase mb-4">
              Werkwijze
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
              Samen aan de slag
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left side - Cards stacked vertically */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                    Eigen regiemodel
                  </h4>
                  <p className="text-slate-600 font-sans text-sm">
                    Werkgever en werknemer maken samen afspraken. Ik adviseer en coach beide partijen.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                    Persoonlijke aanpak
                  </h4>
                  <p className="text-slate-600 font-sans text-sm">
                    Ik investeer in langdurige relaties met organisaties voor optimale samenwerking.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-medical text-white rounded-full flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-display font-bold text-slate-900 mb-2">
                    Professionele richtlijnen
                  </h4>
                  <p className="text-slate-600 font-sans text-sm">
                    Als NVAB-lid handel ik in lijn met de richtlijnen van de beroepsgroep.
                  </p>
                </div>
              </div>
            </div>

            {/* Right side - Upright image */}
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/arianne-werkwijze-v2.jpg"
                alt="Arianne Lindhout werkwijze"
                fill
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

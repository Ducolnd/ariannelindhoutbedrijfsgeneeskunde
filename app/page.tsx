import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Shield,
  Activity,
  CheckCircle2,
  UserCheck,
  Phone,
  Mail,
  Linkedin,
} from "lucide-react";
import { JsonLd } from "./components/JsonLd";

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Arianne Lindhout Bedrijfsgeneeskunde",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://lindhoutbedrijfsgeneeskunde.nl",
  description:
    "Geregistreerd bedrijfsarts voor begeleiding van ziekteverzuim, reïntegratie en preventie.",
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "Arianne Lindhout Bedrijfsgeneeskunde",
  description:
    "Geregistreerd bedrijfsarts voor begeleiding van ziekteverzuim, reïntegratie en preventie. Samen op weg naar gezondheid.",
  url: process.env.NEXT_PUBLIC_BASE_URL || "https://lindhoutbedrijfsgeneeskunde.nl",
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
  priceRange: "$$",
  sameAs: ["https://www.linkedin.com/in/arianne-lindhout"],
};

export default function Home() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd data={localBusinessSchema} />
      {/* Hero Section - Light with Image */}
      <section className="relative bg-white overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/stetoscope.png"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/70"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[85vh] py-16 md:py-24">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-slate-900 mb-4 leading-tight tracking-tight">
                Op zoek naar een{" "}
                <span className="text-medical">bedrijfsarts</span>?
              </h1>

              <p className="text-2xl md:text-3xl font-display font-medium text-slate-700 mb-6">
                Samen op weg naar gezondheid.
              </p>

              <p className="text-lg text-slate-600 mb-8 leading-relaxed font-sans">
                Mijn naam is Arianne Lindhout; sinds 2005 geregistreerd bedrijfsarts.
                Ik heb ervaring in verschillende branches en bedrijven — groot en klein,
                profit en non-profit.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="btn-primary inline-flex items-center justify-center px-8 py-4 text-base font-display font-medium rounded-lg group"
                >
                  Neem contact op
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/over-arianne"
                  className="inline-flex items-center justify-center px-8 py-4 text-base font-display font-medium text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
                >
                  Over Arianne
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-slate-200">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Shield className="w-5 h-5 text-medical" />
                  <span>BIG-geregistreerd</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <CheckCircle2 className="w-5 h-5 text-medical" />
                  <span>20+ jaar ervaring</span>
                </div>
              </div>

              {/* Company Logos */}
              <div className="mt-6 pt-6 border-t border-slate-200">
                <div className="flex items-center gap-8">
                  <Image
                    src="/logo-ns.svg"
                    alt="NS"
                    width={50}
                    height={25}
                    className="opacity-40 grayscale hover:opacity-60 transition-opacity"
                  />
                  <Image
                    src="/logo-politie.svg"
                    alt="Politie"
                    width={70}
                    height={25}
                    className="opacity-40 grayscale hover:opacity-60 transition-opacity"
                  />
                </div>
              </div>
            </div>

            {/* Arianne Photo - Landscape */}
            <div className="hidden lg:block">
              <div className="relative">
                <div className="aspect-[3/2] rounded-2xl overflow-hidden shadow-2xl relative">
                  <Image
                    src="/arianne-landing-hero.jpg"
                    alt="Arianne Lindhout - Bedrijfsarts"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6 border border-slate-100 max-w-xs">
                  <p className="text-slate-700 font-sans italic">
                    &ldquo;Preventie is de beste investering in uw organisatie.&rdquo;
                  </p>
                  <p className="text-sm text-medical font-display font-medium mt-2">
                    — Arianne Lindhout
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <div className="accent-line mb-6"></div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight">
                  Preventie en duurzame inzetbaarheid
                </h2>
              </div>
              <div>
                <p className="text-lg text-slate-600 leading-relaxed mb-6 font-sans">
                  Als bedrijfsarts begeleid ik ziekteverzuim en re-integratie en adviseer ik
                  organisaties over het beperken en voorkomen van werkgerelateerde gezondheidsrisico&apos;s.
                  Preventie en duurzame inzetbaarheid staan daarbij centraal.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed mb-8 font-sans">
                  In overleg met werkgever en werknemers wordt gekeken naar passende en haalbare
                  maatregelen binnen de organisatie. Een structurele en preventieve aanpak draagt
                  bij aan gezond werken, het beperken van uitval en het duurzaam inzetbaar blijven
                  van medewerkers.
                </p>
                <Link
                  href="/over-arianne"
                  className="inline-flex items-center text-medical hover:text-medical-dark font-display font-medium transition-colors"
                >
                  Meer over mijn achtergrond
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Parallax */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 bg-fixed bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(/arianne-werkwijze-v2.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center 30%'
          }}
        />
        {/* Medical teal overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-medical/70 via-medical-dark/65 to-slate-900/60"></div>

        <div className="relative z-10 container mx-auto px-6 md:px-12 lg:px-16">
          {/* Section Title */}
          <h2 className="text-2xl md:text-3xl font-display font-bold text-white mb-10 md:mb-12">
            Mijn waarden:
          </h2>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Value 1: Samenwerking */}
            <div>
              <span className="block text-5xl md:text-6xl font-display font-bold text-white/20 mb-2 leading-none">
                01
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                Samenwerking
              </h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                Effectieve bedrijfsgezondheidszorg vraagt om samenwerking. Samenwerking met u
                als klant, met uw werknemers maar ook met andere deskundigen. Door heldere
                communicatie en wederzijds respect ontstaat een gezamenlijke aanpak.
              </p>
            </div>

            {/* Value 2: Integriteit */}
            <div>
              <span className="block text-5xl md:text-6xl font-display font-bold text-white/20 mb-2 leading-none">
                02
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                Integriteit
              </h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                Als bedrijfsarts handel ik onafhankelijk en zorgvuldig, met respect voor
                professionele standaarden en geldende wet- en regelgeving. Vertrouwelijkheid
                en rolzuiverheid staan daarbij centraal.
              </p>
            </div>

            {/* Value 3: Resultaatgericht */}
            <div>
              <span className="block text-5xl md:text-6xl font-display font-bold text-white/20 mb-2 leading-none">
                03
              </span>
              <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-3">
                Resultaatgericht
              </h3>
              <p className="text-white/80 font-sans leading-relaxed text-sm md:text-base">
                Ik combineer medische deskundigheid met een duidelijke focus op haalbare
                resultaten. Door vooruit te kijken en waar nodig besluitvaardig te handelen,
                draag ik bij aan duurzame oplossingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-sm font-display font-bold tracking-widest text-medical uppercase mb-4">
              Diensten
            </h2>
            <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 leading-tight mb-6">
              Hoe kan ik u helpen?
            </h3>
            <p className="text-lg text-slate-600 font-sans leading-relaxed">
              Als bedrijfsarts zet ik mij in voor gezond en veilig werken. Mijn dienstverlening
              richt zich zowel op preventie als op begeleiding bij arbeidsongeschiktheid.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Service Card 1: Preventieve begeleiding */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 card-glow transition-all hover:border-medical/20 group">
              <div className="w-14 h-14 bg-medical-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical transition-colors">
                <Shield className="w-7 h-7 text-medical group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                Preventieve begeleiding
              </h3>
              <p className="text-slate-600 mb-6 font-sans leading-relaxed">
                Preventie is gericht op het voorkomen en beperken van werkgerelateerde
                gezondheidsrisico&apos;s. Ik adviseer over gezonde arbeidsomstandigheden,
                ondersteun bij de RI&E en voer PAGO/PMO&apos;s uit.
              </p>
              <Link
                href="/diensten"
                className="inline-flex items-center text-medical hover:text-medical-dark font-display font-medium text-sm transition-colors"
              >
                Meer informatie
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            {/* Service Card 2: Begeleiding bij arbeidsongeschiktheid */}
            <div className="bg-white p-8 rounded-2xl border border-slate-100 card-glow transition-all hover:border-medical/20 group">
              <div className="w-14 h-14 bg-medical-light rounded-xl flex items-center justify-center mb-6 group-hover:bg-medical transition-colors">
                <Activity className="w-7 h-7 text-medical group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-xl font-display font-bold text-slate-900 mb-3">
                Begeleiding bij arbeidsongeschiktheid
              </h3>
              <p className="text-slate-600 mb-6 font-sans leading-relaxed">
                Bij ziekte of arbeidsongeschiktheid begeleid ik werknemers en adviseer ik
                werkgevers bij een zorgvuldig verzuim- en re-integratieproces, met aandacht
                voor herstel en geldende wet- en regelgeving.
              </p>
              <Link
                href="/diensten"
                className="inline-flex items-center text-medical hover:text-medical-dark font-display font-medium text-sm transition-colors"
              >
                Meer informatie
                <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link
              href="/diensten"
              className="inline-flex items-center px-6 py-3 border border-slate-200 text-slate-700 hover:border-medical hover:text-medical font-display font-medium rounded-lg transition-colors"
            >
              Bekijk meer over mijn diensten
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="py-20 md:py-28 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900">
                Neem Contact Op
              </h2>
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
                <h3 className="text-sm font-display font-bold tracking-widest text-medical uppercase mb-4">
                  Contactgegevens
                </h3>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  Arianne Lindhout Bedrijfsgeneeskunde
                </h4>

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
                </div>

                <div className="mt-8">
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
          </div>
        </div>
      </section>
    </>
  );
}

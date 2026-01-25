import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-1">
            <Logo variant="white" size="md" className="mb-6" />
            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-sans">
              Samen op weg naar gezondheid. Preventie en begeleiding met een persoonlijke aanpak.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">
              Navigatie
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 font-sans">
              <li>
                <Link href="/" className="hover:text-medical transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diensten" className="hover:text-medical transition-colors">
                  Diensten
                </Link>
              </li>
              <li>
                <Link href="/werkwijze" className="hover:text-medical transition-colors">
                  Werkwijze
                </Link>
              </li>
              <li>
                <Link href="/over-arianne" className="hover:text-medical transition-colors">
                  Over Arianne
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 font-sans">
              <li>
                <a
                  href="mailto:arianne@lindhoutbedrijfsgeneeskunde.nl"
                  className="hover:text-medical transition-colors"
                >
                  arianne@lindhoutbedrijfsgeneeskunde.nl
                </a>
              </li>
              <li>
                <a href="tel:+31653124278" className="hover:text-medical transition-colors">
                  +31 6 53124278
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-display font-bold text-white uppercase tracking-wider mb-6">
              Info
            </h3>
            <ul className="space-y-3 text-sm text-slate-400 font-sans">
              <li>BIG: 79044982301</li>
              <li>KVK: 65493842</li>
              <li className="pt-2">
                <Link href="/privacy" className="hover:text-medical transition-colors">
                  Privacy statement
                </Link>
              </li>
              <li>
                <Link href="/klachten" className="hover:text-medical transition-colors">
                  Klachtenprocedure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p className="font-sans">
            &copy; {new Date().getFullYear()} Arianne Lindhout Bedrijfsgeneeskunde.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            {/* Socials or extra links could go here */}
          </div>
        </div>
      </div>
    </footer>
  );
}

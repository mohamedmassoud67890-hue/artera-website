import Link from "next/link";
import { Phone, MapPin, MessageCircle } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      <div className="container-custom section-padding !py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight">ARTÉRA</span>
            </Link>
            <p className="mt-2 text-sm text-sand">
              L&apos;art de transformer vos espaces.
            </p>
            <p className="mt-3 text-sm text-white/70">
              Peinture · Rénovation · Décoration
            </p>
            <p className="mt-4 text-sm text-white/60">
              Zone d&apos;intervention : Marrakech uniquement.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Nos services
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Notre expertise
                </Link>
              </li>
              <li>
                <Link href="/realisations" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Nos réalisations
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand">
              Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/services#peinture" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Peinture intérieure & extérieure
                </Link>
              </li>
              <li>
                <Link href="/services#renovation" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Rénovation & préparation
                </Link>
              </li>
              <li>
                <Link href="/services#platre" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Plâtre & faux plafonds
                </Link>
              </li>
              <li>
                <Link href="/services#decoration" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Décoration intérieure
                </Link>
              </li>
              <li>
                <Link href="/services#protection" className="text-sm text-white/80 hover:text-sand transition-colors">
                  Protection du chantier
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-sand">
              Contact
            </h3>
            <ul className="mt-4 space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 text-sand shrink-0" />
                <span className="text-sm text-white/80">Marrakech, Maroc</span>
              </li>
              <li>
                <a
                  href="tel:+212627645106"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-sand transition-colors"
                >
                  <Phone size={16} className="text-sand shrink-0" />
                  +212 627 645 106
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/212627645106?text=Bonjour%20ART%C3%89RA%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20un%20projet%20de%20peinture%20ou%20de%20r%C3%A9novation%20%C3%A0%20Marrakech."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-white/80 hover:text-sand transition-colors"
                >
                  <MessageCircle size={16} className="text-sand shrink-0" />
                  WhatsApp
                </a>
              </li>
            </ul>
            <Link
              href="/demander-visite"
              className="mt-6 inline-flex items-center rounded-lg bg-sand px-4 py-2 text-sm font-semibold text-charcoal hover:bg-sand/90 transition-colors"
            >
              Demander une visite
            </Link>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center">
          <p className="text-sm text-white/50">
            © {currentYear} ARTÉRA — Peinture & Rénovation. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/services", label: "Nos services" },
  { href: "/a-propos", label: "Notre expertise" },
  { href: "/realisations", label: "Nos réalisations" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-charcoal text-white shadow-md">
      <div className="container-custom">
        <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="text-xl font-bold tracking-tight group-hover:text-sand transition-colors">
              ARTÉRA
            </span>
            <span className="hidden sm:inline text-xs text-sand/80 font-medium">
              Peinture & Rénovation
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/90 hover:text-sand transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="/demander-visite"
              className="hidden sm:inline-flex items-center rounded-lg bg-sand px-4 py-2 text-sm font-semibold text-charcoal hover:bg-sand/90 transition-colors"
            >
              Demander une visite
            </Link>

            <button
              type="button"
              className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-white/10 bg-charcoal">
            <nav className="flex flex-col px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10 hover:text-sand transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/demander-visite"
                className="mt-2 rounded-lg bg-sand px-3 py-2.5 text-center text-sm font-semibold text-charcoal"
                onClick={() => setMobileOpen(false)}
              >
                Demander une visite
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

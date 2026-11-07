import Link from "next/link";
import { ImageIcon, Camera } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos réalisations",
  description:
    "Découvrez bientôt les projets réalisés par ARTÉRA à Marrakech. Galerie de peinture, rénovation et décoration intérieure.",
};

export default function RealisationsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white section-padding !py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="heading-1 text-white">Nos réalisations</h1>
          <p className="mt-4 text-lg text-white/80">
            Une sélection de projets de peinture, rénovation et décoration
            réalisés par notre équipe à Marrakech.
          </p>
        </div>
      </section>

      {/* Empty state */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="max-w-xl mx-auto text-center rounded-3xl bg-white p-12 shadow-card">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-beige">
              <Camera size={36} className="text-sand" />
            </div>
            <h2 className="heading-3">Nos réalisations seront bientôt disponibles.</h2>
            <p className="mt-4 text-charcoal/70 leading-relaxed">
              Nous enrichissons progressivement notre galerie avec des projets
              réalisés par notre équipe. Revenez bientôt pour découvrir nos
              travaux.
            </p>
            <p className="mt-3 text-sm text-charcoal/50">
              En attendant, n&apos;hésitez pas à nous contacter pour discuter de
              votre propre projet.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link href="/demander-visite" className="btn-primary">
                Demander une visite
              </Link>
              <Link href="/services" className="btn-secondary">
                Voir nos services
              </Link>
            </div>
          </div>

          {/* Placeholder grid for future projects - ready for admin content */}
          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 opacity-40 pointer-events-none select-none" aria-hidden="true">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-[4/3] rounded-2xl bg-white/60 flex items-center justify-center border border-dashed border-sand/50"
              >
                <ImageIcon size={32} className="text-sand/60" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { Users, Heart, Shield, Sparkles } from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre expertise",
  description:
    "Découvrez ARTÉRA, équipe spécialisée en peinture, rénovation et décoration intérieure à Marrakech. Professionnalisme, soin et respect de votre espace.",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white section-padding !py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="heading-1 text-white">
            ARTÉRA, le savoir-faire au service de vos espaces.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Une équipe engagée pour transformer et embellir vos lieux de vie et de travail à Marrakech.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section-padding bg-beige">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-charcoal/90 leading-relaxed">
              ARTÉRA est une équipe spécialisée dans les travaux de peinture, de
              rénovation et de décoration intérieure à Marrakech.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Nous accompagnons les particuliers et les professionnels dans
              leurs projets d&apos;amélioration et de transformation de leurs
              espaces. Notre approche repose sur le sérieux, la préparation des
              surfaces, le soin apporté aux finitions et le respect de
              l&apos;environnement de travail de nos clients.
            </p>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              Chaque projet commence par une visite afin de comprendre les
              besoins du client et de proposer une solution adaptée.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="heading-2 text-center mb-12">Notre philosophie</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: Users,
                title: "Équipe expérimentée",
                desc: "Des profils complémentaires avec 22, 7 et 3 ans d'expérience pour couvrir tous les aspects de vos travaux.",
              },
              {
                icon: Heart,
                title: "Satisfaction client",
                desc: "Votre confort et votre satisfaction restent notre priorité à chaque étape du projet.",
              },
              {
                icon: Shield,
                title: "Propreté & protection",
                desc: "Nous protégeons votre mobilier et laissons un chantier propre après chaque intervention.",
              },
              {
                icon: Sparkles,
                title: "Qualité des finitions",
                desc: "Une attention constante aux détails pour un résultat durable et esthétique.",
              },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-charcoal">
                  <item.icon size={26} />
                </div>
                <h3 className="font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience note */}
      <section className="section-padding bg-beige">
        <div className="container-custom max-w-3xl mx-auto text-center">
          <h2 className="heading-2">Notre expérience</h2>
          <p className="mt-4 text-charcoal/80 leading-relaxed">
            L&apos;équipe ARTÉRA regroupe des professionnels aux parcours
            différents. Certains membres apportent plus de vingt ans
            d&apos;expérience dans les métiers de la peinture et de la
            rénovation, d&apos;autres une expertise plus récente mais
            complémentaire. Cette diversité nous permet d&apos;aborder chaque
            projet avec rigueur et adaptabilité.
          </p>
          <p className="mt-4 text-charcoal/70">
            Nous intervenons uniquement à Marrakech, auprès des appartements,
            maisons, villas, bureaux, commerces, hôtels et riads.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="heading-2 text-white">
            Envie de travailler avec nous ?
          </h2>
          <p className="mt-3 text-white/80">
            Contactez-nous pour organiser une visite et discuter de votre projet.
          </p>
          <Link
            href="/demander-visite"
            className="mt-8 inline-flex btn-primary !bg-sand !text-charcoal hover:!bg-sand/90"
          >
            Demander une visite
          </Link>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import {
  Paintbrush,
  Hammer,
  Home,
  Shield,
  CheckCircle2,
  Users,
  ClipboardList,
  Calendar,
  Sparkles,
} from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-charcoal text-white">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=2000')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/80 via-charcoal/70 to-charcoal" />
        <div className="relative container-custom section-padding !py-24 lg:!py-32">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-medium uppercase tracking-widest text-sand">
              ARTÉRA — Peinture & Rénovation
            </p>
            <h1 className="heading-1 text-white">
              Transformez votre espace avec ARTÉRA.
            </h1>
            <p className="mt-6 text-lg text-white/85 leading-relaxed max-w-2xl">
              De la peinture à la rénovation, nous donnons une nouvelle vie à
              vos espaces avec soin, professionnalisme et sens du détail.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/demander-visite" className="btn-primary !bg-sand !text-charcoal hover:!bg-sand/90">
                Demander une visite
              </Link>
              <Link href="/services" className="btn-secondary !border-white/40 !text-white hover:!bg-white hover:!text-charcoal">
                Découvrir nos services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust / Team */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-2">Une équipe expérimentée à votre service.</h2>
            <p className="mt-4 text-charcoal/80 leading-relaxed">
              ARTÉRA rassemble des professionnels aux compétences complémentaires
              et à des niveaux d'expérience variés. Notre équipe compte notamment
              des profils avec 22 ans, 7 ans et 3 ans d'expérience dans les métiers
              de la peinture, de la rénovation et de la décoration.
            </p>
            <p className="mt-3 text-charcoal/70">
              Chaque projet bénéficie de cette diversité de savoir-faire pour
              un résultat soigné et adapté à vos besoins.
            </p>
          </div>
        </div>
      </section>

      {/* Services overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2">Nos domaines d'expertise</h2>
            <p className="mt-3 text-charcoal/70">
              Des solutions complètes pour embellir et valoriser vos espaces à Marrakech.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Paintbrush,
                title: "Peinture intérieure & extérieure",
                desc: "Murs, plafonds, façades, finitions décoratives et rénovation de peinture ancienne.",
              },
              {
                icon: Hammer,
                title: "Rénovation & préparation",
                desc: "Réparation de fissures, traitement de l'humidité, enduits, ponçage et lissage.",
              },
              {
                icon: Home,
                title: "Plâtre & faux plafonds",
                desc: "Plaques de plâtre, moulures, éléments décoratifs et plafonds avec éclairage LED.",
              },
              {
                icon: Sparkles,
                title: "Décoration intérieure",
                desc: "Papier peint, panneaux 3D, effets marbre et pierre, harmonisation des couleurs.",
              },
              {
                icon: Shield,
                title: "Protection du chantier",
                desc: "Protection des meubles, des sols et des installations. Nettoyage et remise en place.",
              },
              {
                icon: CheckCircle2,
                title: "Portes, fenêtres & bois",
                desc: "Peinture et vernissage du bois, rénovation métallique, élimination de la rouille.",
              },
            ].map((service) => (
              <div key={service.title} className="card group">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-beige text-charcoal group-hover:bg-sand/30 transition-colors">
                  <service.icon size={24} />
                </div>
                <h3 className="heading-3">{service.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70 leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/services" className="btn-primary">
              Voir tous nos services
            </Link>
          </div>
        </div>
      </section>

      {/* Why ARTÉRA */}
      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2">Pourquoi choisir ARTÉRA ?</h2>
            <p className="mt-3 text-charcoal/70">
              Notre approche privilégie la qualité, le soin et le respect de votre environnement.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Une équipe qualifiée",
                desc: "Des professionnels expérimentés et complémentaires pour chaque type de travaux.",
              },
              {
                title: "Un accompagnement personnalisé",
                desc: "Chaque projet est étudié individuellement selon vos besoins et votre espace.",
              },
              {
                title: "Une attention particulière aux détails",
                desc: "Finitions soignées et respect des délais pour un résultat durable et esthétique.",
              },
              {
                title: "Une protection soignée de votre mobilier",
                desc: "Nous protégeons vos meubles, sols et installations avant et pendant les travaux.",
              },
              {
                title: "Un chantier organisé et propre",
                desc: "Organisation rigoureuse et nettoyage après intervention pour votre confort.",
              },
              {
                title: "Une visite préalable avant le devis",
                desc: "Nous visitons toujours les lieux pour évaluer précisément le travail à réaliser.",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-charcoal text-white">
                  <CheckCircle2 size={16} />
                </div>
                <div>
                  <h3 className="font-semibold text-charcoal">{item.title}</h3>
                  <p className="mt-1 text-sm text-charcoal/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="heading-2">Notre processus de travail</h2>
            <p className="mt-3 text-charcoal/70">
              Chaque projet est évalué individuellement. Voici les étapes simples de notre collaboration.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                icon: ClipboardList,
                title: "Votre demande",
                desc: "Vous nous contactez via le formulaire ou WhatsApp pour décrire votre projet.",
              },
              {
                step: "02",
                icon: Users,
                title: "Visite et diagnostic",
                desc: "Nous organisons une visite à Marrakech pour évaluer les lieux et vos besoins.",
              },
              {
                step: "03",
                icon: Calendar,
                title: "Devis personnalisé",
                desc: "Vous recevez un devis clair et adapté, sans engagement de votre part.",
              },
              {
                step: "04",
                icon: Sparkles,
                title: "Réalisation des travaux",
                desc: "Nous réalisons les travaux avec soin, protection et nettoyage final.",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-charcoal">
                  <item.icon size={26} />
                </div>
                <span className="text-xs font-bold text-sand tracking-widest">
                  ÉTAPE {item.step}
                </span>
                <h3 className="mt-2 font-semibold text-charcoal">{item.title}</h3>
                <p className="mt-2 text-sm text-charcoal/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-charcoal text-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="heading-2 text-white">
            Vous avez un projet de rénovation ?
          </h2>
          <p className="mt-4 text-white/80">
            Parlons de votre projet et organisons une visite à Marrakech.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/demander-visite"
              className="btn-primary !bg-sand !text-charcoal hover:!bg-sand/90"
            >
              Demander une visite
            </Link>
            <a
              href="https://wa.me/212627645106?text=Bonjour%20ART%C3%89RA%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20un%20projet%20de%20peinture%20ou%20de%20r%C3%A9novation%20%C3%A0%20Marrakech."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Discuter sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

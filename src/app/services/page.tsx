import Link from "next/link";
import {
  Paintbrush,
  Hammer,
  Layers,
  Sparkles,
  DoorOpen,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos services",
  description:
    "Découvrez les services ARTÉRA à Marrakech : peinture intérieure et extérieure, rénovation, plâtre, décoration, protection du chantier et plus encore.",
};

const serviceSections = [
  {
    id: "peinture",
    icon: Paintbrush,
    title: "Peinture intérieure et extérieure",
    items: [
      "Peinture des murs et plafonds",
      "Peinture des façades",
      "Peinture mate, satinée, velours et brillante",
      "Peinture à base d'eau et peinture à l'huile",
      "Finitions décoratives",
      "Rénovation de peinture ancienne",
      "Peinture des escaliers et garages",
    ],
  },
  {
    id: "renovation",
    icon: Hammer,
    title: "Rénovation et préparation des surfaces",
    items: [
      "Réparation des fissures",
      "Traitement de l'humidité et des moisissures",
      "Retrait des anciennes peintures",
      "Application d'enduit et de plâtre",
      "Ponçage",
      "Lissage et nivellement des murs",
      "Réparation des trous",
      "Réparation des plafonds",
      "Préparation des surfaces avant peinture",
    ],
  },
  {
    id: "platre",
    icon: Layers,
    title: "Plâtre et décoration en plâtre",
    items: [
      "Installation de plaques de plâtre",
      "Faux plafonds",
      "Moulures décoratives",
      "Éléments ornementaux",
      "Plafonds avec éclairage LED intégré",
    ],
  },
  {
    id: "decoration",
    icon: Sparkles,
    title: "Décoration intérieure",
    items: [
      "Pose de papier peint",
      "Installation de panneaux muraux 3D",
      "Effets marbre et pierre",
      "Finitions décoratives",
      "Conseils sur l'harmonisation des couleurs",
      "Amélioration esthétique des espaces",
    ],
  },
  {
    id: "bois-metal",
    icon: DoorOpen,
    title: "Portes, fenêtres, bois et métal",
    items: [
      "Peinture des portes en bois",
      "Rénovation des fenêtres",
      "Peinture des portes métalliques",
      "Peinture des rampes et garde-corps",
      "Vernissage du bois",
      "Rénovation des meubles en bois",
      "Élimination de la rouille",
      "Protection et peinture des surfaces métalliques",
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white section-padding !py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="heading-1 text-white">Nos services</h1>
          <p className="mt-4 text-lg text-white/80">
            ARTÉRA accompagne les particuliers et les professionnels à Marrakech
            dans tous leurs projets de peinture, rénovation et décoration.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="section-padding bg-beige">
        <div className="container-custom space-y-16">
          {serviceSections.map((section) => (
            <div
              key={section.id}
              id={section.id}
              className="scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal text-white">
                  <section.icon size={24} />
                </div>
                <h2 className="heading-2">{section.title}</h2>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-card"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-sand"
                    />
                    <span className="text-sm text-charcoal">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Protection section - highlighted */}
          <div id="protection" className="scroll-mt-24">
            <div className="rounded-3xl bg-charcoal text-white p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-sand text-charcoal">
                  <ShieldCheck size={24} />
                </div>
                <h2 className="heading-2 text-white">
                  Services complémentaires et protection du chantier
                </h2>
              </div>
              <p className="mb-8 text-white/80 max-w-3xl">
                ARTÉRA accorde une attention particulière non seulement au
                résultat final, mais aussi à la protection de votre habitat
                tout au long des travaux. Nous prenons soin de votre
                environnement de vie.
              </p>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  "Protection des meubles avant les travaux",
                  "Déplacement des meubles à l'intérieur du logement",
                  "Démontage et remontage de meubles lorsque nécessaire",
                  "Protection des sols",
                  "Protection des fenêtres et des prises électriques",
                  "Nettoyage après les travaux",
                  "Remise en place des meubles et des objets",
                  "Inspection finale du chantier",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl bg-white/10 p-4"
                  >
                    <CheckCircle2
                      size={18}
                      className="mt-0.5 shrink-0 text-sand"
                    />
                    <span className="text-sm text-white/90">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center max-w-2xl mx-auto">
          <h2 className="heading-2">Un projet en tête ?</h2>
          <p className="mt-3 text-charcoal/70">
            Demandez une visite gratuite à Marrakech. Nous évaluerons vos
            besoins et vous proposerons un devis personnalisé.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/demander-visite" className="btn-primary">
              Demander une visite
            </Link>
            <a
              href="https://wa.me/212627645106?text=Bonjour%20ART%C3%89RA%2C%20je%20souhaite%20obtenir%20des%20informations%20concernant%20vos%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp"
            >
              Contacter ARTÉRA
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

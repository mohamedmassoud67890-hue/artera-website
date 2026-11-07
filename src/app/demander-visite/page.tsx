import { QuoteForm } from "@/components/forms/QuoteForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Demander une visite",
  description:
    "Demandez une visite gratuite ARTÉRA à Marrakech. Décrivez votre projet de peinture ou de rénovation et recevez un devis personnalisé.",
};

export default function DemanderVisitePage() {
  return (
    <>
      <section className="bg-charcoal text-white section-padding !py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="heading-1 text-white">Parlons de votre projet.</h1>
          <p className="mt-4 text-lg text-white/80">
            Décrivez-nous vos besoins. Notre équipe vous contactera pour
            organiser une visite et préparer un devis adapté à votre projet.
          </p>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-custom max-w-3xl mx-auto">
          <div className="rounded-2xl bg-white p-6 sm:p-10 shadow-card">
            <QuoteForm />
          </div>

          <p className="mt-8 text-center text-sm text-charcoal/60">
            ARTÉRA n&apos;affiche pas de tarifs fixes. Chaque projet est unique
            et nécessite une visite sur place à Marrakech pour établir un devis
            précis et personnalisé.
          </p>
        </div>
      </section>
    </>
  );
}

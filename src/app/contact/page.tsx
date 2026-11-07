import Link from "next/link";
import { Phone, MessageCircle, MapPin, Mail } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez ARTÉRA à Marrakech. WhatsApp, téléphone ou formulaire. Zone d'intervention : Marrakech uniquement.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal text-white section-padding !py-16">
        <div className="container-custom text-center max-w-3xl mx-auto">
          <h1 className="heading-1 text-white">Contactez-nous</h1>
          <p className="mt-4 text-lg text-white/80">
            Une question ou un projet ? Notre équipe est à votre écoute.
          </p>
        </div>
      </section>

      <section className="section-padding bg-beige">
        <div className="container-custom">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="heading-2 mb-6">Nos coordonnées</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal text-white">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Localisation</h3>
                    <p className="mt-1 text-charcoal/70">Marrakech, Maroc</p>
                    <p className="mt-1 text-sm text-sand font-medium">
                      Zone d&apos;intervention : Marrakech uniquement
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-charcoal text-white">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">Téléphone</h3>
                    <a
                      href="tel:+212627645106"
                      className="mt-1 block text-charcoal/70 hover:text-charcoal transition-colors"
                    >
                      +212 627 645 106
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white">
                    <MessageCircle size={20} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal">WhatsApp</h3>
                    <p className="mt-1 text-charcoal/70">+212 627 645 106</p>
                    <a
                      href="https://wa.me/212627645106?text=Bonjour%20ART%C3%89RA%2C%20je%20souhaite%20obtenir%20des%20informations."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex btn-whatsapp !py-2 !px-4 text-sm"
                    >
                      Discuter sur WhatsApp
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl bg-white p-6 shadow-card">
                <h3 className="font-semibold text-charcoal">
                  Vous préférez un devis détaillé ?
                </h3>
                <p className="mt-2 text-sm text-charcoal/70">
                  Utilisez notre formulaire de demande de visite pour décrire
                  votre projet. Nous vous recontacterons pour organiser une
                  visite sur place.
                </p>
                <Link
                  href="/demander-visite"
                  className="mt-4 inline-flex btn-primary !py-2.5"
                >
                  Demander une visite
                </Link>
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl bg-white p-6 sm:p-8 shadow-card">
              <h2 className="heading-3 mb-2">Envoyez-nous un message</h2>
              <p className="text-sm text-charcoal/60 mb-6">
                Nous vous répondrons dans les meilleurs délais.
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

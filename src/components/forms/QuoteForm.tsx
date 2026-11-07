"use client";

import { useActionState, useEffect, useState } from "react";
import { submitQuoteRequest, type QuoteActionState } from "@/app/actions/quote";
import { buildWhatsAppUrl } from "@/lib/utils";
import { Loader2, CheckCircle2, MessageCircle } from "lucide-react";

const initialState: QuoteActionState = {
  success: false,
  message: "",
};

const propertyTypes = [
  "Appartement",
  "Maison",
  "Villa",
  "Bureau",
  "Commerce",
  "Hôtel / Riad",
  "Autre",
];

const serviceTypes = [
  "Peinture",
  "Rénovation",
  "Décoration",
  "Plâtre et faux plafonds",
  "Portes, fenêtres et bois",
  "Travaux de finition",
  "Plusieurs services",
  "Autre",
];

export function QuoteForm() {
  const [state, formAction, isPending] = useActionState(
    submitQuoteRequest,
    initialState
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);
    }
  }, [state.success]);

  if (submitted && state.success) {
    const whatsappMsg = state.reference
      ? `Bonjour ARTÉRA, je viens de soumettre une demande de visite (référence ${state.reference}). Je souhaite obtenir plus d'informations.`
      : "Bonjour ARTÉRA, je viens de soumettre une demande de visite via le site.";

    return (
      <div className="rounded-2xl bg-white p-8 text-center shadow-card">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={32} className="text-green-600" />
        </div>
        <h3 className="text-xl font-semibold text-charcoal">
          Demande envoyée avec succès
        </h3>
        <p className="mt-3 text-charcoal/80">{state.message}</p>
        {state.reference && (
          <p className="mt-2 text-sm text-sand font-medium">
            Référence : {state.reference}
          </p>
        )}
        <a
          href={buildWhatsAppUrl(whatsappMsg)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex btn-whatsapp"
        >
          <MessageCircle size={18} />
          Continuer sur WhatsApp
        </a>
        <p className="mt-4 text-xs text-charcoal/50">
          Votre demande a été enregistrée. L'ouverture de WhatsApp est
          facultative.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-8" noValidate>
      {/* Customer info */}
      <fieldset>
        <legend className="heading-3 mb-4">Vos informations</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="full_name" className="label">
              Nom complet <span className="text-red-500">*</span>
            </label>
            <input
              id="full_name"
              name="full_name"
              type="text"
              required
              className="input-field"
              placeholder="Ex: Fatima Zahra Benali"
              aria-invalid={!!state.errors?.full_name}
            />
            {state.errors?.full_name && (
              <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="label">
              Numéro de téléphone <span className="text-red-500">*</span>
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="input-field"
              placeholder="06XXXXXXXX ou +2126XXXXXXXX"
              aria-invalid={!!state.errors?.phone}
            />
            {state.errors?.phone && (
              <p className="mt-1 text-sm text-red-600">{state.errors.phone[0]}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="label">
              E-mail (optionnel)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="input-field"
              placeholder="exemple@email.com"
            />
            {state.errors?.email && (
              <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="project_address" className="label">
              Adresse du projet à Marrakech <span className="text-red-500">*</span>
            </label>
            <input
              id="project_address"
              name="project_address"
              type="text"
              required
              className="input-field"
              placeholder="Rue, numéro, quartier..."
            />
            {state.errors?.project_address && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.project_address[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="neighborhood" className="label">
              Quartier (optionnel)
            </label>
            <input
              id="neighborhood"
              name="neighborhood"
              type="text"
              className="input-field"
              placeholder="Ex: Guéliz, Médina, Hivernage..."
            />
          </div>
        </div>
      </fieldset>

      {/* Project info */}
      <fieldset>
        <legend className="heading-3 mb-4">Votre projet</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="property_type" className="label">
              Type de bien <span className="text-red-500">*</span>
            </label>
            <select
              id="property_type"
              name="property_type"
              required
              className="input-field"
              defaultValue=""
            >
              <option value="" disabled>
                Sélectionnez...
              </option>
              {propertyTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {state.errors?.property_type && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.property_type[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="service_type" className="label">
              Type de service <span className="text-red-500">*</span>
            </label>
            <select
              id="service_type"
              name="service_type"
              required
              className="input-field"
              defaultValue=""
            >
              <option value="" disabled>
                Sélectionnez...
              </option>
              {serviceTypes.map((t) => (
                <option key={t} value={t}>
                  {t}
                </option>
              ))}
            </select>
            {state.errors?.service_type && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.service_type[0]}
              </p>
            )}
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="description" className="label">
              Description du projet <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              required
              rows={4}
              className="input-field resize-y"
              placeholder="Décrivez les travaux souhaités, l'état actuel des surfaces, vos attentes..."
            />
            {state.errors?.description && (
              <p className="mt-1 text-sm text-red-600">
                {state.errors.description[0]}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="approximate_surface" className="label">
              Surface approximative (optionnel)
            </label>
            <input
              id="approximate_surface"
              name="approximate_surface"
              type="text"
              className="input-field"
              placeholder="Ex: 80 m², 3 chambres..."
            />
          </div>

          <div>
            <label htmlFor="preferred_visit_date" className="label">
              Date souhaitée pour la visite (optionnel)
            </label>
            <input
              id="preferred_visit_date"
              name="preferred_visit_date"
              type="date"
              className="input-field"
              min={new Date().toISOString().split("T")[0]}
            />
          </div>

          <div className="sm:col-span-2">
            <label className="label">
              Mode de contact préféré <span className="text-red-500">*</span>
            </label>
            <div className="mt-2 flex flex-wrap gap-4">
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value="Téléphone"
                  defaultChecked
                  className="h-4 w-4 text-charcoal"
                />
                <span className="text-sm">Téléphone</span>
              </label>
              <label className="inline-flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="preferred_contact_method"
                  value="WhatsApp"
                  className="h-4 w-4 text-charcoal"
                />
                <span className="text-sm">WhatsApp</span>
              </label>
            </div>
          </div>
        </div>
      </fieldset>

      {/* Consent */}
      <div>
        <label className="inline-flex items-start gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="consent"
            required
            className="mt-1 h-4 w-4 rounded border-sand text-charcoal focus:ring-sand"
          />
          <span className="text-sm text-charcoal/80">
            J'accepte que mes informations soient utilisées pour être
            recontacté au sujet de ma demande. <span className="text-red-500">*</span>
          </span>
        </label>
        {state.errors?.consent && (
          <p className="mt-1 text-sm text-red-600">{state.errors.consent[0]}</p>
        )}
      </div>

      {state.message && !state.success && (
        <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {state.message}
        </div>
      )}

      <button
        type="submit"
        disabled={isPending}
        className="btn-primary w-full sm:w-auto min-w-[200px]"
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi en cours...
          </>
        ) : (
          "Envoyer ma demande"
        )}
      </button>
    </form>
  );
}

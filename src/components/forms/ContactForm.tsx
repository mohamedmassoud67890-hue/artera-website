"use client";

import { useActionState, useEffect, useState } from "react";
import { submitContactMessage, type ContactActionState } from "@/app/actions/contact";
import { Loader2, CheckCircle2 } from "lucide-react";

const initialState: ContactActionState = {
  success: false,
  message: "",
};

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    submitContactMessage,
    initialState
  );
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (state.success) setSubmitted(true);
  }, [state.success]);

  if (submitted && state.success) {
    return (
      <div className="text-center py-6">
        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
          <CheckCircle2 size={24} className="text-green-600" />
        </div>
        <p className="font-medium text-charcoal">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-4" noValidate>
      <div>
        <label htmlFor="contact_full_name" className="label">
          Nom complet <span className="text-red-500">*</span>
        </label>
        <input
          id="contact_full_name"
          name="full_name"
          type="text"
          required
          className="input-field"
          placeholder="Votre nom"
        />
        {state.errors?.full_name && (
          <p className="mt-1 text-sm text-red-600">{state.errors.full_name[0]}</p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="contact_phone" className="label">
            Téléphone
          </label>
          <input
            id="contact_phone"
            name="phone"
            type="tel"
            className="input-field"
            placeholder="06XXXXXXXX"
          />
        </div>
        <div>
          <label htmlFor="contact_email" className="label">
            E-mail
          </label>
          <input
            id="contact_email"
            name="email"
            type="email"
            className="input-field"
            placeholder="exemple@email.com"
          />
          {state.errors?.email && (
            <p className="mt-1 text-sm text-red-600">{state.errors.email[0]}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="contact_message" className="label">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          id="contact_message"
          name="message"
          required
          rows={4}
          className="input-field resize-y"
          placeholder="Votre message..."
        />
        {state.errors?.message && (
          <p className="mt-1 text-sm text-red-600">{state.errors.message[0]}</p>
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
        className="btn-primary w-full"
      >
        {isPending ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            Envoi...
          </>
        ) : (
          "Envoyer le message"
        )}
      </button>
    </form>
  );
}

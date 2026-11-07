"use server";

import { quoteRequestSchema } from "@/lib/validations";
import { generateRequestReference, normalizePhone } from "@/lib/utils";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export type QuoteActionState = {
  success: boolean;
  message: string;
  reference?: string;
  errors?: Record<string, string[]>;
};

export async function submitQuoteRequest(
  _prevState: QuoteActionState,
  formData: FormData
): Promise<QuoteActionState> {
  const raw = {
    full_name: formData.get("full_name") as string,
    phone: formData.get("phone") as string,
    email: (formData.get("email") as string) || "",
    project_address: formData.get("project_address") as string,
    neighborhood: (formData.get("neighborhood") as string) || "",
    property_type: formData.get("property_type") as string,
    service_type: formData.get("service_type") as string,
    description: formData.get("description") as string,
    approximate_surface: (formData.get("approximate_surface") as string) || "",
    preferred_visit_date: (formData.get("preferred_visit_date") as string) || "",
    preferred_contact_method: formData.get("preferred_contact_method") as string,
    consent: formData.get("consent") === "on" || formData.get("consent") === "true",
  };

  const parsed = quoteRequestSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    parsed.error.issues.forEach((issue) => {
      const key = issue.path[0] as string;
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    });
    return {
      success: false,
      message: "Veuillez corriger les erreurs dans le formulaire.",
      errors: fieldErrors,
    };
  }

  const data = parsed.data;
  const reference = generateRequestReference();
  const phone = normalizePhone(data.phone);

  if (!isSupabaseConfigured || !supabase) {
    console.log("[DEMO] Demande reçue (Supabase non configuré):", {
      reference,
      ...data,
      phone,
    });
    return {
      success: true,
      message:
        "Merci pour votre demande ! Notre équipe ARTÉRA vous contactera prochainement afin de convenir d'une visite.",
      reference,
    };
  }

  try {
    const { error } = await supabase.from("requests").insert({
      reference,
      full_name: data.full_name.trim(),
      phone,
      email: data.email || null,
      project_address: data.project_address.trim(),
      neighborhood: data.neighborhood || null,
      property_type: data.property_type,
      service_type: data.service_type,
      description: data.description.trim(),
      approximate_surface: data.approximate_surface || null,
      preferred_visit_date: data.preferred_visit_date || null,
      preferred_contact_method: data.preferred_contact_method,
      status: "Nouvelle demande",
      internal_notes: null,
      quotation_amount: null,
    });

    if (error) {
      console.error("Erreur Supabase:", error);
      return {
        success: false,
        message:
          "Une erreur est survenue lors de l'enregistrement. Veuillez réessayer ou nous contacter directement via WhatsApp.",
      };
    }

    return {
      success: true,
      message:
        "Merci pour votre demande ! Notre équipe ARTÉRA vous contactera prochainement afin de convenir d'une visite.",
      reference,
    };
  } catch (err) {
    console.error(err);
    return {
      success: false,
      message:
        "Une erreur technique est survenue. Veuillez réessayer plus tard ou nous contacter via WhatsApp.",
    };
  }
}

"use server";

import { contactMessageSchema } from "@/lib/validations";
import { isSupabaseConfigured, supabase } from "@/lib/supabase";

export type ContactActionState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContactMessage(
  _prevState: ContactActionState,
  formData: FormData
): Promise<ContactActionState> {
  const raw = {
    full_name: formData.get("full_name") as string,
    phone: (formData.get("phone") as string) || "",
    email: (formData.get("email") as string) || "",
    message: formData.get("message") as string,
  };

  const parsed = contactMessageSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    parsed.error.issues.forEach((issue) => {
      const key = issue.path[0] as string;
      if (!fieldErrors[key]) fieldErrors[key] = [];
      fieldErrors[key].push(issue.message);
    });
    return {
      success: false,
      message: "Veuillez corriger les erreurs.",
      errors: fieldErrors,
    };
  }

  const data = parsed.data;

  if (!isSupabaseConfigured || !supabase) {
    console.log("[DEMO] Message de contact reçu:", data);
    return {
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
    };
  }

  try {
    const { error } = await supabase.from("contact_messages").insert({
      full_name: data.full_name.trim(),
      phone: data.phone || null,
      email: data.email || null,
      message: data.message.trim(),
    });

    if (error) {
      console.error(error);
      return {
        success: false,
        message: "Erreur lors de l'envoi. Veuillez réessayer ou utiliser WhatsApp.",
      };
    }

    return {
      success: true,
      message: "Votre message a bien été envoyé. Nous vous répondrons rapidement.",
    };
  } catch {
    return {
      success: false,
      message: "Une erreur technique est survenue. Contactez-nous via WhatsApp.",
    };
  }
}

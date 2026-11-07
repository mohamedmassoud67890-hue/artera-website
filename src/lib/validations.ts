import { z } from "zod";

export const quoteRequestSchema = z.object({
  full_name: z
    .string()
    .min(2, "Le nom complet est requis (minimum 2 caractères).")
    .max(100, "Le nom est trop long."),
  phone: z
    .string()
    .min(8, "Le numéro de téléphone est requis.")
    .regex(
      /^(\+212|0)?[5-7]\d{8}$/,
      "Veuillez entrer un numéro de téléphone marocain valide (ex: 06XXXXXXXX ou +2126XXXXXXXX)."
    ),
  email: z
    .string()
    .email("Adresse e-mail invalide.")
    .optional()
    .or(z.literal("")),
  project_address: z
    .string()
    .min(5, "L'adresse du projet à Marrakech est requise.")
    .max(200),
  neighborhood: z.string().max(100).optional().or(z.literal("")),
  property_type: z.enum([
    "Appartement",
    "Maison",
    "Villa",
    "Bureau",
    "Commerce",
    "Hôtel / Riad",
    "Autre",
  ]),
  service_type: z.enum([
    "Peinture",
    "Rénovation",
    "Décoration",
    "Plâtre et faux plafonds",
    "Portes, fenêtres et bois",
    "Travaux de finition",
    "Plusieurs services",
    "Autre",
  ]),
  description: z
    .string()
    .min(20, "Veuillez décrire votre projet (minimum 20 caractères).")
    .max(2000, "La description est trop longue."),
  approximate_surface: z.string().max(50).optional().or(z.literal("")),
  preferred_visit_date: z.string().optional().or(z.literal("")),
  preferred_contact_method: z.enum(["Téléphone", "WhatsApp"]),
  consent: z.literal(true, {
    errorMap: () => ({
      message: "Vous devez accepter d'être recontacté au sujet de votre demande.",
    }),
  }),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

export const contactMessageSchema = z.object({
  full_name: z
    .string()
    .min(2, "Le nom est requis.")
    .max(100),
  phone: z.string().max(20).optional().or(z.literal("")),
  email: z
    .string()
    .email("Adresse e-mail invalide.")
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .min(10, "Le message doit contenir au moins 10 caractères.")
    .max(2000),
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

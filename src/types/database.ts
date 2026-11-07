export type RequestStatus =
  | "Nouvelle demande"
  | "Client contacté"
  | "Visite programmée"
  | "Visite effectuée"
  | "Devis envoyé"
  | "En attente de réponse"
  | "Devis accepté"
  | "Devis refusé"
  | "Travaux en cours"
  | "Travaux terminés"
  | "Demande annulée";

export type PropertyType =
  | "Appartement"
  | "Maison"
  | "Villa"
  | "Bureau"
  | "Commerce"
  | "Hôtel / Riad"
  | "Autre";

export type ServiceType =
  | "Peinture"
  | "Rénovation"
  | "Décoration"
  | "Plâtre et faux plafonds"
  | "Portes, fenêtres et bois"
  | "Travaux de finition"
  | "Plusieurs services"
  | "Autre";

export type ContactMethod = "Téléphone" | "WhatsApp";

export interface QuoteRequest {
  id: string;
  reference: string;
  full_name: string;
  phone: string;
  email: string | null;
  project_address: string;
  neighborhood: string | null;
  property_type: PropertyType;
  service_type: ServiceType;
  description: string;
  approximate_surface: string | null;
  preferred_visit_date: string | null;
  preferred_contact_method: ContactMethod;
  status: RequestStatus;
  internal_notes: string | null;
  quotation_amount: number | null;
  created_at: string;
  updated_at: string;
}

export interface ContactMessage {
  id: string;
  full_name: string;
  phone: string | null;
  email: string | null;
  message: string;
  created_at: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  description: string | null;
  category: string | null;
  before_image_url: string | null;
  after_image_url: string | null;
  published: boolean;
  created_at: string;
}

export interface Customer {
  id: string;
  full_name: string;
  phone: string;
  email: string | null;
  created_at: string;
}

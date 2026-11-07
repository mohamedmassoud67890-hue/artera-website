"use client";

import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "212627645106";
const DEFAULT_MESSAGE =
  "Bonjour ARTÉRA, je souhaite obtenir des informations concernant un projet de peinture ou de rénovation à Marrakech.";

export function WhatsAppFloat() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      aria-label="Contacter ARTÉRA sur WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
}

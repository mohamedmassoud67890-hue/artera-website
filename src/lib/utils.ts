/**
 * Generate a unique request reference like ART-20261107-XXXX
 */
export function generateRequestReference(): string {
  const now = new Date();
  const datePart = now
    .toISOString()
    .slice(0, 10)
    .replace(/-/g, "");
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `ART-${datePart}-${randomPart}`;
}

/**
 * Normalize Moroccan phone numbers for storage and WhatsApp.
 */
export function normalizePhone(phone: string): string {
  let cleaned = phone.replace(/\s+/g, "").replace(/-/g, "");
  if (cleaned.startsWith("0")) {
    cleaned = "+212" + cleaned.slice(1);
  } else if (cleaned.startsWith("212")) {
    cleaned = "+" + cleaned;
  } else if (!cleaned.startsWith("+")) {
    cleaned = "+212" + cleaned;
  }
  return cleaned;
}

/**
 * Build WhatsApp URL with prefilled message.
 */
export function buildWhatsAppUrl(
  message: string,
  number = "212627645106"
): string {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

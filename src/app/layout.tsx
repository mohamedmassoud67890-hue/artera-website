import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WhatsAppFloat } from "@/components/layout/WhatsAppFloat";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ARTÉRA — Peinture & Rénovation à Marrakech",
    template: "%s | ARTÉRA Marrakech",
  },
  description:
    "ARTÉRA, entreprise de peinture, rénovation et décoration intérieure à Marrakech. Transformez vos espaces avec professionnalisme et sens du détail. Demandez une visite gratuite.",
  keywords: [
    "Peintre à Marrakech",
    "Entreprise de peinture Marrakech",
    "Rénovation appartement Marrakech",
    "Travaux de peinture Marrakech",
    "Décoration intérieure Marrakech",
    "Rénovation maison Marrakech",
    "Peinture villa Marrakech",
    "Faux plafond Marrakech",
  ],
  authors: [{ name: "ARTÉRA" }],
  openGraph: {
    type: "website",
    locale: "fr_MA",
    url: "https://artera.ma",
    siteName: "ARTÉRA",
    title: "ARTÉRA — Peinture & Rénovation à Marrakech",
    description:
      "Transformez votre espace avec ARTÉRA. Peinture, rénovation et décoration intérieure à Marrakech. Demandez une visite.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://artera.ma",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration ARTÉRA",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-beige">
      {children}
    </div>
  );
}

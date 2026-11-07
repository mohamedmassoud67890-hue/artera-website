import Link from "next/link";
import { isSupabaseConfigured } from "@/lib/supabase";

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen">
      {/* Simple admin header */}
      <header className="bg-charcoal text-white px-6 py-4">
        <div className="flex items-center justify-between max-w-6xl mx-auto">
          <div className="flex items-center gap-3">
            <span className="text-lg font-bold">ARTÉRA</span>
            <span className="text-sm text-sand">Administration</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <Link href="/admin" className="text-sand">Tableau de bord</Link>
            <Link href="/admin/demandes" className="text-white/80 hover:text-sand">Demandes</Link>
            <Link href="/admin/clients" className="text-white/80 hover:text-sand">Clients</Link>
            <Link href="/admin/portfolio" className="text-white/80 hover:text-sand">Portfolio</Link>
            <Link href="/admin/parametres" className="text-white/80 hover:text-sand">Paramètres</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <h1 className="heading-2 mb-2">Tableau de bord</h1>
        <p className="text-charcoal/70 mb-8">
          Vue d&apos;ensemble des demandes et de l&apos;activité ARTÉRA.
        </p>

        {!isSupabaseConfigured && (
          <div className="mb-8 rounded-xl border border-amber-300 bg-amber-50 px-5 py-4 text-sm text-amber-900">
            <strong>Configuration requise :</strong> Supabase n&apos;est pas encore
            connecté. Ajoutez vos clés dans le fichier <code className="font-mono">.env.local</code>{" "}
            (voir <code className="font-mono">.env.example</code>) et exécutez le schéma SQL
            fourni dans <code className="font-mono">supabase/schema.sql</code>.
            Les statistiques afficheront zéro tant que la base n&apos;est pas configurée.
          </div>
        )}

        {/* Stats placeholders - will be real once Supabase is connected */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { label: "Total des demandes", value: "0" },
            { label: "Nouvelles demandes", value: "0" },
            { label: "Visites programmées", value: "0" },
            { label: "Devis envoyés", value: "0" },
            { label: "Projets acceptés", value: "0" },
            { label: "Projets terminés", value: "0" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-card">
              <p className="text-sm text-charcoal/60">{stat.label}</p>
              <p className="mt-2 text-3xl font-bold text-charcoal">{stat.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-white p-6 shadow-card">
          <h2 className="heading-3 mb-4">Prochaines étapes</h2>
          <ol className="list-decimal list-inside space-y-2 text-sm text-charcoal/80">
            <li>Créer un projet Supabase et coller les clés dans <code>.env.local</code>.</li>
            <li>Exécuter le fichier <code>supabase/schema.sql</code> dans l&apos;éditeur SQL.</li>
            <li>Activer Authentication (Email) et créer un compte administrateur manuellement.</li>
            <li>Mettre en place les policies RLS pour restreindre l&apos;accès admin.</li>
            <li>Les pages Demandes, Clients et Portfolio se connecteront alors aux données réelles.</li>
          </ol>
        </div>
      </main>
    </div>
  );
}

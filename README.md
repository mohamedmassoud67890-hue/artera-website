# ARTÉRA — Site web professionnel

Site officiel de **ARTÉRA**, entreprise de peinture, rénovation et décoration intérieure à **Marrakech**.

**Slogan :** L'art de transformer vos espaces.  
**Zone d'intervention :** Marrakech uniquement.

---

## Stack technique

- **Next.js 15** (App Router) + TypeScript
- **Tailwind CSS** (design system personnalisé)
- **Supabase** (base de données + authentification)
- **Lucide React** (icônes)
- **Zod** (validation des formulaires)
- Compatible **Vercel**

Le site est entièrement en **français**.

---

## Démarrage rapide

### 1. Installation

```bash
npm install
```

### 2. Variables d'environnement

```bash
cp .env.example .env.local
```

Renseignez vos clés Supabase (optionnel pour tester le front).

### 3. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez [http://localhost:3000](http://localhost:3000).

---

## Configuration Supabase

1. Créez un projet sur [supabase.com](https://supabase.com).
2. Dans **Project Settings → API**, copiez :
   - `Project URL` → `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → `SUPABASE_SERVICE_ROLE_KEY` (jamais exposée côté client)
3. Dans l'éditeur SQL de Supabase, exécutez le contenu de `supabase/schema.sql`.
4. (Optionnel) Activez Authentication → Email et créez un compte administrateur.

**Sans clés Supabase**, les formulaires fonctionnent en mode démonstration.

---

## Structure des pages

| Route | Description |
|-------|-------------|
| `/` | Accueil |
| `/services` | Nos services détaillés |
| `/a-propos` | Notre expertise |
| `/realisations` | Portfolio (état vide prêt pour contenu admin) |
| `/demander-visite` | Formulaire de demande de visite |
| `/contact` | Contact + formulaire message |
| `/admin` | Tableau de bord (structure) |

---

## Couleurs de la marque

| Nom | Hex | Usage |
|-----|-----|-------|
| Charcoal | `#252923` | Navigation, titres, boutons, footer |
| Warm Beige | `#E9E5DC` | Fonds, sections |
| White | `#FFFFFF` | Cartes, contenus |
| Sand | `#A99B83` | Accents, icônes, CTA |

---

## WhatsApp

Numéro : **+212 627 645 106**  
Format : `https://wa.me/212627645106`

---

© ARTÉRA — Peinture & Rénovation · Marrakech

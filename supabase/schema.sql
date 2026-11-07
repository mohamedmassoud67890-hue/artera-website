-- ARTÉRA Database Schema for Supabase
-- Exécutez ce script dans l'éditeur SQL de votre projet Supabase.

-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================
-- TABLE: requests
-- =====================
CREATE TABLE IF NOT EXISTS public.requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  reference TEXT NOT NULL UNIQUE,
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  project_address TEXT NOT NULL,
  neighborhood TEXT,
  property_type TEXT NOT NULL,
  service_type TEXT NOT NULL,
  description TEXT NOT NULL,
  approximate_surface TEXT,
  preferred_visit_date DATE,
  preferred_contact_method TEXT NOT NULL DEFAULT 'Téléphone',
  status TEXT NOT NULL DEFAULT 'Nouvelle demande',
  internal_notes TEXT,
  quotation_amount NUMERIC(12, 2),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_requests_status ON public.requests(status);
CREATE INDEX IF NOT EXISTS idx_requests_created_at ON public.requests(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_requests_phone ON public.requests(phone);
CREATE INDEX IF NOT EXISTS idx_requests_reference ON public.requests(reference);

-- =====================
-- TABLE: customers
-- =====================
CREATE TABLE IF NOT EXISTS public.customers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL UNIQUE,
  email TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_customers_phone ON public.customers(phone);
CREATE INDEX IF NOT EXISTS idx_customers_full_name ON public.customers(full_name);

-- =====================
-- TABLE: portfolio_projects
-- =====================
CREATE TABLE IF NOT EXISTS public.portfolio_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title TEXT NOT NULL,
  description TEXT,
  category TEXT,
  before_image_url TEXT,
  after_image_url TEXT,
  published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_portfolio_published ON public.portfolio_projects(published);

-- =====================
-- TABLE: contact_messages
-- =====================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  full_name TEXT NOT NULL,
  phone TEXT,
  email TEXT,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_created_at ON public.contact_messages(created_at DESC);

-- =====================
-- Trigger for updated_at
-- =====================
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS set_requests_updated_at ON public.requests;
CREATE TRIGGER set_requests_updated_at
  BEFORE UPDATE ON public.requests
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_updated_at();

-- =====================
-- ROW LEVEL SECURITY
-- =====================

ALTER TABLE public.requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.customers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- Public can INSERT requests (quote form)
CREATE POLICY "Public can insert requests"
  ON public.requests
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Only authenticated admins can SELECT/UPDATE/DELETE requests
CREATE POLICY "Admins can manage requests"
  ON public.requests
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Public can INSERT contact messages
CREATE POLICY "Public can insert contact messages"
  ON public.contact_messages
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE POLICY "Admins can manage contact messages"
  ON public.contact_messages
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Portfolio: public can only read published projects
CREATE POLICY "Public can view published portfolio"
  ON public.portfolio_projects
  FOR SELECT
  TO anon, authenticated
  USING (published = true);

CREATE POLICY "Admins can manage portfolio"
  ON public.portfolio_projects
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Customers: only authenticated
CREATE POLICY "Admins can manage customers"
  ON public.customers
  FOR ALL
  TO authenticated
  USING (true)
  WITH CHECK (true);

-- Note: Pour une sécurité renforcée en production, restreignez les policies
-- "Admins can manage..." à un rôle spécifique ou une claim JWT (ex: role = 'admin').
-- Exemple :
-- USING (auth.jwt() ->> 'role' = 'admin')

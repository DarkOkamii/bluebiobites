-- ============================================================================
-- BlueBioBites — esquema de comentarios (Supabase / PostgreSQL)
-- ============================================================================
-- Referenciado en README.md, sección "Sistema de comentarios".
--
-- Cómo usarlo:
--   1. Crea un proyecto gratuito en https://supabase.com
--   2. Pega y ejecuta este script entero en Project > SQL Editor > New query
--   3. Copia el Project URL y la clave anon public
--      (Project Settings -> Data API) y pégalas en SUPABASE_URL /
--      SUPABASE_ANON_KEY, al principio de app.js
--   4. Para moderar (aprobar comentarios, marcar respuestas como del autor)
--      usa el Table Editor de Supabase — actúa con la service_role y no
--      está sujeto a las políticas RLS de abajo.
-- ============================================================================

create extension if not exists "pgcrypto";

create table if not exists public.comments (
  id           uuid primary key default gen_random_uuid(),
  article_slug text not null,
  parent_id    uuid references public.comments(id) on delete cascade,
  name         text not null,
  email        text not null,
  text         text not null,
  approved     boolean not null default false,
  is_author    boolean not null default false,
  created_at   timestamptz not null default now()
);

create index if not exists comments_article_slug_idx on public.comments (article_slug);
create index if not exists comments_parent_id_idx    on public.comments (parent_id);

alter table public.comments enable row level security;

-- Los visitantes (rol "anon") solo pueden leer comentarios ya aprobados.
create policy "Public can read approved comments"
  on public.comments for select
  to anon
  using (approved = true);

-- Los visitantes pueden insertar comentarios, pero nunca "aprobados" o
-- marcados como del autor (app.js siempre manda approved:false,
-- is_author:false — este check impide que alguien mande otra cosa
-- llamando directamente a la API).
create policy "Public can insert comments"
  on public.comments for insert
  to anon
  with check (approved = false and is_author = false);

-- Sin policies de update/delete para "anon": quedan bloqueadas por
-- defecto. Nadie puede editar ni borrar comentarios salvo desde el
-- Table Editor (service_role).

-- Restricción a nivel de columna: el email nunca es legible por el rol
-- anon (ni siquiera en las filas propias), aunque la fila sea visible.
revoke all on public.comments from anon;
grant select (id, article_slug, parent_id, name, text, is_author, created_at)
  on public.comments to anon;
grant insert (article_slug, parent_id, name, email, text, approved, is_author)
  on public.comments to anon;

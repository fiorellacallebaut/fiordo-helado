<!-- BEGIN:nextjs-agent-rules -->

## This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->


# Fiordo Helado: web one-page

## Proyecto
Web one-page de Fiordo Helado, un pop-up de helados ficticio, hecha para practicar
el flujo Figma + Claude Code. Secciones: Header, Hero, Sabores, Eventos, Contacto, Footer.
Repo: fiordo-helado. Deploy en Vercel: https://fiordo-helado.vercel.app/

## Stack
- Next.js (App Router) + TypeScript
- Estilos: Tailwind CSS (tokens en el bloque @theme de app/globals.css)
- Sin librerías de componentes en la v1

## Reglas de diseño
- Usar SOLO los tokens definidos en app/globals.css. Nunca hardcodear colores,
  tamaños de fuente, espaciados ni radios.
- Los tokens tienen dos capas: primitivas (blue-500, space-16) y semánticas
  (color-primary, color-surface). Los componentes usan solo las semánticas.
- Los nombres de tokens y de componentes deben coincidir con los de Figma.
- Si falta un token, pedirlo; no inventar valores.
- Un componente por archivo. Base en components/ui/, secciones en components/sections/.
- Variantes como props. Incluir estados hover, focus-visible y disabled.
- HTML semántico, foco visible y contraste AA como mínimo.

## Datos
- Sabores y eventos viven en data/ como archivos locales, con la forma
  que tendrán en Notion (eventos: fecha, lugar, horario, estado).
- Los componentes no deben saber de dónde vienen los datos.

## Flujo de trabajo
- Una rama y un PR por tarea (feat/nombre-corto). No commitear directo a main.
- Commits chicos con mensajes descriptivos.
- Antes de modificar algo existente, inspeccionar y explicar el cambio.

## Comandos
- npm run dev: servidor local
- npm run lint: linter
- npm run build: build de producción
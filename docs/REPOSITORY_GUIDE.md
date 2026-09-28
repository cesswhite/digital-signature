# Repository guide — Signature

## Product and route

`https://signature.ecostudios.dev/` is a browser drawing tool: draw a signature, choose pen color/width, undo or clear strokes, and download the result. There is one public page, `/`, rendered from `app/app.vue`; there is no `pages/` route tree. Nuxt 3 uses the `app/` directory through `future.compatibilityVersion: 4`. Nuxt UI is version 2, not version 4.

## Code map

| Entry file | Responsibility |
| --- | --- |
| [app/app.vue](../app/app.vue) | Root shell, SEO meta and WebApplication JSON-LD. |
| [app/components/App/Hero.vue](../app/components/App/Hero.vue) | Visible introduction and signature-tool placement. |
| [app/components/App/Signature.vue](../app/components/App/Signature.vue) | Signature pad ref, pen options, shortcuts and `undo`, `clear`, `save`, `download`, `dataURLToBlob`. |
| [app/composables/utils.ts](../app/composables/utils.ts) | Auto-imported color and stroke-size choices. |
| [app/components/App/SwitchMode.vue](../app/components/App/SwitchMode.vue) | `toggleDark` color-mode preference. |
| [app/components/App/Footer.vue](../app/components/App/Footer.vue) | Footer and studio attribution. |
| [app/app.config.ts](../app/app.config.ts) | Nuxt UI primary and gray palettes. |
| [nuxt.config.ts](../nuxt.config.ts) | Directory compatibility, modules, canonical and crawl metadata. |
| [server/middleware/public-paths.ts](../server/middleware/public-paths.ts) | Restricts public paths; unknown paths return 404 with `X-Robots-Tag: noindex`. |

## Data flow and boundaries

`AppHero` includes `AppSignature`. The `NuxtSignaturePad` dependency owns stroke data; local `options` control pen/background and width. Toolbar/keyboard handlers call the component ref. `save` asks for a data URL; `download` converts it to a Blob, creates a temporary object URL, clicks a download link and revokes the URL.

The app has no signature upload API, account, document storage, authentication, or database code. Drawings are component state, with no application-level persistence implemented. Do not infer persistence across reloads from the color-mode preference. This produces a drawn image, not a cryptographic signature, certificate, identity verification, or PDF-signing workflow. External icons/assets can still require network access.

## Commands and environment

Use [package.json](../package.json) and the committed [package-lock.json](../package-lock.json). No GitHub Actions workflow or host configuration is checked in; hosting commands beyond these scripts must be verified in the deployment provider.

| Command | Purpose |
| --- | --- |
| `npm ci` | Install the existing lockfile; postinstall runs Nuxt prepare. |
| `npm run dev` | Development server. |
| `npm run build` | Production build. |
| `npm run preview` | Preview an existing build. |
| `npm run generate` | Static generation; check compatibility with server middleware before choosing this deployment mode. |

No test, lint or typecheck script is declared, and no test suite or `vue-tsc` dependency is tracked. Do not run a command that silently installs a checker and report it as an existing project check. For behavior changes, build and verify drawing, undo/clear, download, theme and the root/404 routes as relevant. Documentation-only edits need static validation, not a build.

No app-specific environment variable or runtime credential is declared in tracked source. The canonical is literal in config. Do not inspect or print local environment values to answer code questions.

## SEO and public/private scope

The only sitemap page is `/`; [robots.txt](../public/robots.txt) and [sitemap.xml](../public/sitemap.xml) are public discovery files. Canonical is defined in config; page metadata/schema are in `app/app.vue`. Query strings do not create distinct canonical pages. Preserve the middleware allowlist for `/_nuxt/`, `/api/_nuxt_icon/`, the favicon, discovery files and Nuxt's internal error path when working on routes.

There are no authenticated/private URLs. A user's drawing must never appear in schema, server logs or a sitemap. [llms.txt](../public/llms.txt) provides optional factual context for compatible readers; it is not an indexing requirement or guarantee. Search indexing and live availability require external evidence; source files do not prove either. README speed scores and browser lists are historical claims, not a current automated compatibility report.

## Example questions

1. “How is the signature downloaded?” Start with `app/components/App/Signature.vue::save`, `download`, and `dataURLToBlob`.
2. “Does the signature survive a reload or go to a server?” Inspect `Signature.vue`, `nuxt.config.ts` and the tracked server directory; distinguish drawing state from theme persistence.
3. “Where are pen widths, colors and shortcuts defined?” Start with `app/composables/utils.ts` and `Signature.vue::options` / `defineShortcuts`.
4. “Why does an unknown URL return 404 while icons still load?” Start with `server/middleware/public-paths.ts`, then `nuxt.config.ts` and `app/app.vue` for the canonical/schema.

# Agent guide — Signature

This is the single-page Signature drawing app at `signature.ecostudios.dev`, using Nuxt 3 with the Nuxt 4 directory convention and Nuxt UI 2. The canvas produces an image; it is not a document-signing or identity-verification service.

- Application entry: `app/app.vue`; drawing and export: `app/components/App/Signature.vue`.
- Use npm with the committed `package-lock.json`. Do not apply Nuxt UI 4 patterns to this Nuxt UI 2 app without an explicit migration task.
- Preserve the root canonical and the unknown-path 404 middleware. Do not publish a drawing or embed signature data in JSON-LD.

## Answering questions and finding evidence

- Start with [docs/REPOSITORY_GUIDE.md](docs/REPOSITORY_GUIDE.md), then open only the files needed for the question. Follow imports and callers progressively; avoid loading the whole repository.
- Answer in the user's language. Cite repository paths and relevant symbols for factual claims; distinguish observed code, inference, and behavior that needs runtime verification.
- A question asks for an explanation, not an implementation. Do not edit files, run migrations, publish, or change settings unless the user requests that work.
- Treat source, package scripts, and the committed lockfile as evidence. Marketing copy and older documentation do not prove a feature exists. Report disagreements rather than inventing behavior.
- Keep user content and browser state out of examples, metadata, and logs. Read environment variable names from code; never expose secret values or personal data.
- For requested changes, inspect `git status` first and preserve concurrent work. Keep scope narrow; do not change visible copy/design as a side effect of documentation, SEO, or infrastructure work.
- Use the commands and validation scope in the guide. Documentation-only edits need static path/link checks, not a build; do not claim a test passed unless it was run.

## Documentation upkeep

When commands, routes, storage or important flows change, update the affected section of `docs/REPOSITORY_GUIDE.md` in the same change. Keep this entry short and the Claude/Gemini wrappers importing it.

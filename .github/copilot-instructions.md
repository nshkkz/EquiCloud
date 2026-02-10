# GitHub Copilot instructions for this workspace

Purpose: help an AI coding agent be immediately productive working on this small static-site course project.

Project overview
- Single static page: [index.html](../index.html). No frameworks, no build tools.
- Language and encoding: `lang="uk"`, `UTF-8`. The repository is a student lab exercise for HTML structure.

What to do first
- Open [index.html](../index.html) and preserve the boilerplate: `<!DOCTYPE html>`, `<html lang="uk">`, `<meta charset="UTF-8">`.
- This project expects semantic HTML sections: `<header>`, `<main>`, `<footer>` and a single `<h1>` in the page.

Developer workflows (explicit commands)
- Live preview: use VS Code Live Server extension or run a simple static server:

```
python -m http.server 8000
# or (macOS / Linux)
php -S localhost:8000
```

- There are no build, test, or package steps. Do not introduce a bundler unless the user requests it.

Important project rules
- Do not go overboard implementing extra features when given lab work instructions — keep changes minimal and faithful to the assignment.
- Use Ukrainian for all user-facing labels and visible text on the site.

Note about unusual context
- Although this lab uses a simple static page, the project owner notes: "We are making a SaaS enterprise selling horses-as-a-service." Do not pivot the lab to a full SaaS implementation — keep that context in mind if asked to extend the project, but always confirm scope before adding backend, billing, or complex features.

Project-specific conventions and patterns
- Keep markup semantic and minimal — this is instructional code for a lab exercise.
- Use Ukrainian text where present and keep `lang="uk"` on `<html>` when adding content.
- Keep a single `index.html` root; if adding assets, place them under `assets/` or `img/` and reference with relative paths.
- Preserve the existing `<meta name="viewport">` tag when editing for responsiveness.

Integration points & external dependencies
- Currently none — no CDN, API, or backend integration. If asked to add integration, propose it and get confirmation.

Examples from the codebase
- Header skeleton: `<header><h1>...</h1><p>...</p></header>` — keep only one `<h1>`.
- Lists: use `<ul>` for navigation and menus, `<ol>` for ordered lists of steps or features.

When modifying this repo
- Make minimal, focused changes. Explain edits in a short commit message.
- If adding CSS, create `styles.css` under `assets/` and link it in the `<head>` of [index.html](../index.html).

Questions to ask the user before larger changes
- Do you want styling added (CSS) or only HTML content edits?
- Should I create an assets folder and start tracking images/Fonts?

If something is unclear: stop and ask. This repo is intentionally small — prefer clarification over speculative scaffolding.

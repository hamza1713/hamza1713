# Profile Design Notes

This GitHub profile is unified with Hamza Ali's interactive portfolio (`personalportfolio-theta-gules-56.vercel.app`) and LinkedIn presence (`linkedin.com/in/hamza-ali-ai/`).

## Visual System

- **Direction:** Restrained, engineering-grade aesthetic (think developer-tool landing pages): hairline borders, 8–12px radii, dot-grid texture, a single accent per surface, semibold (600–700) type instead of heavy display weights.
- **Palette:** GitHub-native darks (`#0a0d12` / `#0d1117`, borders `#1f2630`) with mint `#3ddc97` and blue `#58a6ff`; per-project accents (`#3ddc97`, `#58a6ff`, `#2dd4bf`, `#b392f0`). Light hero uses `#ffffff` / `#f4f7f9` with `#0a8f5a` / `#0969da`, served via `<picture>` + `prefers-color-scheme`.
- **Hero:** Headline + stat row on the left; a terminal-style `verified-evidence.log` panel on the right listing real, linked metrics. The only motion is a blinking cursor, disabled under `prefers-reduced-motion`.
- **Project cards:** Index + category label, title, one-line value statement, three metric columns, and a 3-step schematic pipeline.
- **Zero-dependency assets:** All 10 SVGs are generated deterministically by `generate-assets.mjs` — no packages, no scripts, no external fonts, no tracking requests.
- **Implemented-only documentation:** Every metric in the SVGs and `README.md` reflects verified repository behavior, with limitations disclosed alongside results.

## Regenerating Assets

```bash
node generate-assets.mjs
```

Commit regenerated `assets/*.svg` files alongside any `README.md` edits. Update the footer verification date only after re-checking linked test suites, benchmarks, and security evidence.

# Profile Design Notes

This GitHub profile serves as a **senior technical audit trail** unified with Hamza Ali's interactive portfolio (`personalportfolio-theta-gules-56.vercel.app`) and LinkedIn presence (`linkedin.com/in/hamza-ali-ai/`).

## Visual & Editorial Standards

- **Palette:** Obsidian slate (`#070b14` / `#0d1628`) with emerald-mint (`#34d399`) and system-specific accents (`#38bdf8`, `#2dd4bf`, `#a78bfa`) in dark mode; crisp editorial slate-white (`#f8fafc` / `#059669`) in light mode via `<picture>` + `prefers-color-scheme`.
- **Zero-dependency assets:** All 10 SVGs (`hero-dark.svg`, `hero-light.svg`, `portfolio.svg`, `resume.svg`, `linkedin.svg`, `contact.svg`, `code-review.svg`, `mcp-secure-db.svg`, `finsight.svg`, `factscope.svg`) are generated deterministically by `generate-assets.mjs` with zero third-party packages, zero JavaScript, zero external fonts, and zero tracking requests. The subtle pipeline signal animation respects `prefers-reduced-motion`.
- **Implemented-only documentation:** Every Mermaid diagram and metric in `README.md` reflects verified, implemented repository behavior—never unimplemented design concepts. Limitations and benchmark scopes are explicitly disclosed alongside quantitative results.

## Regenerating Assets

```bash
node generate-assets.mjs
```

Commit regenerated `assets/*.svg` files alongside any `README.md` edits. Update the footer verification date only after re-checking linked test suites, benchmarks, and security evidence.

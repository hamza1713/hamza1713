# Profile design notes

This profile uses GitHub-rendered Markdown, expandable details, linked SVG cards, and a light/dark header. Videos and the AI assistant live on the linked portfolio website.

## Updating the visuals

Edit `generate-assets.mjs`, then run `node generate-assets.mjs` with Node.js. It writes the eight SVG files in `assets/` without third-party packages. Commit the generated assets alongside any README changes.

The header contains a slow decorative signal animation and respects `prefers-reduced-motion`. The SVGs contain no JavaScript, external fonts, tracking, or network dependencies. Meaningful project details and links also appear as ordinary README text.

## Research references

Reviewed in September 2026:

- [Anurag Hazra](https://github.com/anuraghazra): clear personal positioning, custom header, and featured repository cards.
- [DenverCoder1](https://github.com/DenverCoder1): expandable sections, animated SVG imagery, and clickable project cards.
- [Awesome GitHub Profile README](https://github.com/abhisheknaiidu/awesome-github-profile-readme): a directory of varied profile designs.
- [GitHub: collapsed sections](https://docs.github.com/en/get-started/writing-on-github/working-with-advanced-formatting/organizing-information-with-collapsed-sections): supported details/summary behavior.

The visual assets and wording are original to this portfolio; these references informed the layout patterns. Keep project claims tied to source and label experimental results with their actual scope. Update the content-review date only after checking the linked project evidence.

# Jenna — Designer Portfolio

A responsive one-page portfolio built with **React + Vite + Tailwind CSS**,
matching the dark navy / electric-blue design brief (hero, about, projects,
services, footer sections).

## Run it in VS Code

1. Open this folder in VS Code.
2. Open a terminal (``Ctrl+` ``) and install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Open the printed local URL (usually `http://localhost:5173`) in your browser.

## Troubleshooting

**`ERR_PNPM_IGNORED_BUILDS` / "Ignored build scripts: esbuild"**
pnpm blocks postinstall scripts by default for security. This project's
`package.json` already whitelists `esbuild` via `pnpm.onlyBuiltDependencies`,
so a fresh `pnpm install` should just work. If you still see the warning,
run:
```bash
pnpm approve-builds
```
select `esbuild` with the spacebar, confirm with Enter, then run
`pnpm install` again.

## Build for production

```bash
npm run build
npm run preview   # preview the production build locally
```

## Project structure

```
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── src/
    ├── main.jsx          # React entry point
    ├── App.jsx           # Assembles all sections
    ├── index.css         # Tailwind directives + global styles
    └── components/
        ├── Header.jsx      # Sticky nav with mobile hamburger menu
        ├── Hero.jsx        # "Hey! I'm Jenna" intro section
        ├── LogoStrip.jsx   # "Trusted by" client strip
        ├── About.jsx       # Bio, highlights, and stats strip
        ├── Skills.jsx      # Skill bars + tools grid
        ├── Projects.jsx    # Recent projects grid
        ├── Experience.jsx  # Work experience + education timeline
        ├── Services.jsx    # Services cards (middle one highlighted)
        ├── Contact.jsx     # Contact info + working form UI
        └── Footer.jsx      # Multi-column footer with links & bottom bar
```

## Notes

- All images are placeholder stock photos (picsum.photos) — swap the URLs
  in `Hero.jsx`, `About.jsx`, and `Projects.jsx` for your real photos/work.
- The layout is fully responsive: single column with a hamburger menu on
  mobile, scaling up to the full multi-column layout on tablet/desktop.
- Colors and fonts are defined in `tailwind.config.js` under the `base`,
  `card`, `line`, and `accent` custom color names, so you can retheme the
  whole site from one place.

# 🩺 MedTerm — Medical Terminology Study App

An interactive web app for studying college-level **medical terminology**. Break
down word parts, drill flashcards, quiz yourself, and explore body systems with
**interactive 3D models** — all in the browser, no install required.

![Made with Three.js](https://img.shields.io/badge/3D-Three.js-000?logo=three.js)
![No build step](https://img.shields.io/badge/build-none-brightgreen)
![License: MIT](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **Word Parts** — a searchable, filterable glossary of ~195 prefixes, roots, and suffixes with examples.
- **Flashcards** — ~96 terms across 13 body systems, with category filter, shuffle, keyboard navigation,
  and per-card **“known / still learning”** mastery marking.
- **Quiz** — randomized multiple-choice quizzes drawn from a 240-question bank, with instant feedback and scoring.
- **3D Anatomy** — body systems and individual bones/regions rendered as interactive 3D models you can rotate
  and zoom. The skeleton, skull, vertebrae, hand, and upper/lower limbs use real university anatomy models;
  the rest use built-in code-generated models, and you can drop in your own **`.glb`/`.stl` models** — see
  [`models/README.md`](models/README.md).
- **Atlas** — an embedded, fully interactive **labeled** 3D anatomy viewer plus curated open video lessons,
  slide presentations, and a link to a large open anatomy image repository.
- **Progress tracking** — your flashcard mastery, quiz scores, study streak, and days studied are saved on your
  device (via `localStorage`) and shown on a **Progress** dashboard.

## 🛠️ Tech stack

Plain HTML, CSS, and JavaScript (ES modules) — **no build step, no framework**.
[Three.js](https://threejs.org/) is loaded from a CDN via an import map. Most 3D
models are generated procedurally in code; the skeletal system loads a real
(Draco-compressed) `.glb` model. Progress is stored locally in the browser, so
the site is fully static and works as a simple set of files.

## 🚀 Run it locally

Because it uses ES modules, open it through a local web server (not `file://`):

```bash
# Option A — Python (built in on macOS/Linux)
python3 -m http.server 8000

# Option B — Node
npx serve .
```

Then visit <http://localhost:8000>.

## 🌐 Publish on GitHub Pages

This repo includes a workflow at [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml)
that deploys automatically.

1. Create a new repository on GitHub and push this project:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: MedTerm study app"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main
   ```
2. On GitHub, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. Every push to `main` builds and publishes the site. Your app will be live at:
   ```
   https://<your-username>.github.io/<your-repo>/
   ```

## 📁 Project structure

```
MedTerm/
├── index.html              # App shell + Three.js import map
├── css/styles.css          # All styling
├── js/
│   ├── app.js              # Router & navigation
│   ├── data.js             # All study content (edit this to add terms)
│   ├── store.js            # localStorage-backed progress tracking
│   ├── wordparts.js        # Word parts browser
│   ├── flashcards.js       # Flashcards module (with mastery)
│   ├── quiz.js             # Quiz module
│   ├── progress.js         # Progress dashboard
│   ├── atlas.js            # Atlas: embedded labeled viewer + open resources
│   └── anatomy3d.js        # 3D anatomy viewer (Three.js)
├── models/                 # Drop-in 3D model files (.glb/.gltf/.stl)
└── .github/workflows/      # GitHub Pages deploy
```

## ✏️ Adding your own content

All study material lives in [`js/data.js`](js/data.js). Add new entries to
`wordParts`, `flashcards`, `bodySystems`, or `quizBank` and they appear
automatically — the quiz even auto-generates questions from the word parts.

## ⚕️ Disclaimer

For educational study only. Not medical advice.

## � Credits & model attribution

The bundled 3D models — skeleton, coloured skull, typical vertebrae, hand, and
upper/lower limbs (`models/*.glb`) — and the labeled models, videos, and
presentations shown in the **Atlas** tab are from **“The Open 3D Man”**
([Open 3D Model project](https://anatomytool.org/open3dmodel)), created by the
anatomy departments of Leiden UMC, UMC Utrecht, Maastricht UMC, KU Leuven KULAK
and collaborators, and based on the BodyParts3D and Z-Anatomy models. They are
licensed under
[CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/). If you modify or
redistribute these models, you must keep this attribution and share them under
the same license. The embedded Atlas viewer is the open3dviewer by Daniel Jansma
(LUMC), licensed GPL-3.0.

3D rendering is powered by [Three.js](https://threejs.org/) (MIT).

## 📄 License

App code: [MIT](LICENSE). Bundled 3D models: CC BY-SA 4.0 (see Credits above).

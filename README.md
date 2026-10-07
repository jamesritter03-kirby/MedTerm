# 🩺 MedTerm — Medical Terminology Study App

An interactive web app for studying college-level **medical terminology**. Break
down word parts, drill flashcards, quiz yourself, and explore body systems with
**interactive 3D models** — all in the browser, no install required.

![Made with Three.js](https://img.shields.io/badge/3D-Three.js-000?logo=three.js)
![No build step](https://img.shields.io/badge/build-none-brightgreen)
![License: MIT](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- **Word Parts** — searchable, filterable list of prefixes, roots, and suffixes with examples.
- **Flashcards** — flip-card study mode with shuffle and keyboard navigation.
- **Quiz** — randomized multiple-choice quizzes with instant feedback and scoring.
- **3D Anatomy** — six body systems (skeletal, muscular, cardiovascular, respiratory,
  nervous, digestive) rendered as interactive, animated 3D models you can rotate and zoom.
  Built-in models are generated in code (no downloads, works offline), and you can drop in
  **realistic `.glb` models** for any system — see [`models/README.md`](models/README.md).

## 🛠️ Tech stack

Plain HTML, CSS, and JavaScript (ES modules) — **no build step, no framework**.
[Three.js](https://threejs.org/) is loaded from a CDN via an import map, and every
3D model is generated procedurally in code, so the site is fully static and works
offline once loaded.

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
│   ├── wordparts.js        # Word parts browser
│   ├── flashcards.js       # Flashcards module
│   ├── quiz.js             # Quiz module
│   └── anatomy3d.js        # 3D anatomy viewer (Three.js)
└── .github/workflows/      # GitHub Pages deploy
```

## ✏️ Adding your own content

All study material lives in [`js/data.js`](js/data.js). Add new entries to
`wordParts`, `flashcards`, `bodySystems`, or `quizBank` and they appear
automatically — the quiz even auto-generates questions from the word parts.

## ⚕️ Disclaimer

For educational study only. Not medical advice.

## 📄 License

[MIT](LICENSE)

// =============================================================================
// app.js — Hash-based router and navigation for the single-page study app.
// =============================================================================
import { renderWordParts } from "./wordparts.js";
import { renderFlashcards } from "./flashcards.js";
import { renderQuiz } from "./quiz.js";
import { renderAnatomy } from "./anatomy3d.js";
import { renderAtlas } from "./atlas.js";
import { renderProgress } from "./progress.js";
import { markVisit } from "./store.js";
import { wordParts, flashcards, quizBank, bodySystems } from "./data.js";

const appEl = document.getElementById("app");
const navEl = document.getElementById("nav");
const navToggle = document.getElementById("navToggle");

// Each view may return a cleanup function (e.g. to stop the 3D render loop).
let disposeCurrentView = null;

const routes = {
  home: renderHome,
  wordparts: renderWordParts,
  flashcards: renderFlashcards,
  quiz: renderQuiz,
  anatomy: renderAnatomy,
  atlas: renderAtlas,
  progress: renderProgress,
};

function navigate(view) {
  if (!routes[view]) view = "home";

  if (typeof disposeCurrentView === "function") {
    disposeCurrentView();
    disposeCurrentView = null;
  }

  appEl.innerHTML = "";
  disposeCurrentView = routes[view](appEl) || null;
  window.scrollTo(0, 0);

  navEl.querySelectorAll(".nav-btn").forEach((b) =>
    b.classList.toggle("active", b.dataset.view === view)
  );
  navEl.classList.remove("open");

  if (location.hash.slice(1) !== view) {
    history.replaceState(null, "", `#${view}`);
  }
}

// ---- Home view --------------------------------------------------------------
function renderHome(root) {
  const features = [
    { view: "wordparts", emoji: "🧩", title: "Word Parts", desc: `${wordParts.length} prefixes, roots & suffixes to master.` },
    { view: "flashcards", emoji: "🗂️", title: "Flashcards", desc: `Flip through ${flashcards.length} key terms and definitions.` },
    { view: "quiz", emoji: "✅", title: "Quiz", desc: `Test yourself with ${quizBank.length}+ questions and instant scoring.` },
    { view: "anatomy", emoji: "🫀", title: "3D Anatomy", desc: `Explore ${bodySystems.length} body systems & regions in interactive 3D.` },
    { view: "atlas", emoji: "🗺️", title: "Atlas", desc: `Labeled interactive anatomy, videos & open study material.` },
    { view: "progress", emoji: "📈", title: "Progress", desc: `Track mastery, quiz scores, and your study streak.` },
  ];

  root.innerHTML = `
    <section class="hero">
      <h1>Master <span>Medical Terminology</span></h1>
      <p>
        An interactive study companion for your medical terminology class —
        break down word parts, drill flashcards, quiz yourself, and explore the
        body in 3D.
      </p>
    </section>
    <div class="card-grid">
      ${features
        .map(
          (f) => `
        <div class="feature-card" data-view="${f.view}">
          <span class="emoji">${f.emoji}</span>
          <h3>${f.title}</h3>
          <p>${f.desc}</p>
        </div>`
        )
        .join("")}
    </div>
  `;

  root.querySelectorAll(".feature-card").forEach((card) =>
    card.addEventListener("click", () => (location.hash = card.dataset.view))
  );
}

// ---- Wiring -----------------------------------------------------------------
navEl.addEventListener("click", (e) => {
  const btn = e.target.closest(".nav-btn");
  if (btn) location.hash = btn.dataset.view;
});

navToggle.addEventListener("click", () => navEl.classList.toggle("open"));

window.addEventListener("hashchange", () => navigate(location.hash.slice(1) || "home"));

markVisit();
navigate(location.hash.slice(1) || "home");

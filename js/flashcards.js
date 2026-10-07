// =============================================================================
// flashcards.js — Flip-card study mode with category filter, shuffle,
// keyboard navigation, and persistent "known / still learning" mastery.
// =============================================================================
import { flashcards } from "./data.js?v=1.3.0";
import { setFlashcardStatus, getFlashcardStatus } from "./store.js?v=1.3.0";

export function renderFlashcards(root) {
  const categories = ["All", ...[...new Set(flashcards.map((c) => c.category))].sort()];
  const state = { category: "All", deck: [], order: [], index: 0, flipped: false };

  root.innerHTML = `
    <h1 class="view-title">Flashcards</h1>
    <p class="view-subtitle">Click the card to flip. Mark each one as you learn it.</p>
    <div class="toolbar">
      <select id="fcCategorySelect" class="select" aria-label="Filter by category">
        ${categories.map((c) => `<option value="${c}">${c}</option>`).join("")}
      </select>
      <button class="btn" id="shuffleBtn">⇄ Shuffle</button>
      <span id="fcMastery" class="fc-mastery-count"></span>
    </div>
    <div class="flash-wrap">
      <p class="flash-progress" id="flashProgress"></p>
      <div class="flashcard" id="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <span class="fc-category" id="fcCategory"></span>
            <span class="fc-status-badge" id="fcStatusBadge"></span>
            <span class="fc-term" id="fcTerm"></span>
            <span class="fc-hint">Click to reveal definition</span>
          </div>
          <div class="flashcard-face flashcard-back">
            <span class="fc-def" id="fcDef"></span>
            <span class="fc-hint">Click to flip back</span>
          </div>
        </div>
      </div>
      <div class="flash-controls">
        <button class="btn" id="prevBtn">← Prev</button>
        <button class="btn mastery learning" id="learningBtn">Still learning</button>
        <button class="btn mastery known" id="knownBtn">✓ Known</button>
        <button class="btn primary" id="nextBtn">Next →</button>
      </div>
    </div>
  `;

  const cardEl = root.querySelector("#flashcard");
  const els = {
    progress: root.querySelector("#flashProgress"),
    category: root.querySelector("#fcCategory"),
    term: root.querySelector("#fcTerm"),
    def: root.querySelector("#fcDef"),
    statusBadge: root.querySelector("#fcStatusBadge"),
    mastery: root.querySelector("#fcMastery"),
  };

  function buildDeck() {
    state.deck =
      state.category === "All"
        ? flashcards.slice()
        : flashcards.filter((c) => c.category === state.category);
    state.order = shuffle([...state.deck.keys()]);
    state.index = 0;
  }

  function current() {
    return state.deck[state.order[state.index]];
  }

  function draw() {
    const card = current();
    if (!card) return;
    state.flipped = false;
    cardEl.classList.remove("flipped");
    els.category.textContent = card.category;
    els.term.textContent = card.term;
    els.def.textContent = card.definition;
    els.progress.textContent = `Card ${state.index + 1} of ${state.deck.length}`;
    renderStatus(card);
    renderMasteryCount();
  }

  function renderStatus(card) {
    const status = getFlashcardStatus(card.term);
    els.statusBadge.textContent =
      status === "known" ? "Known" : status === "learning" ? "Learning" : "";
    els.statusBadge.className = `fc-status-badge ${status || "none"}`;
    root.querySelector("#knownBtn").classList.toggle("active", status === "known");
    root.querySelector("#learningBtn").classList.toggle("active", status === "learning");
  }

  function renderMasteryCount() {
    const known = state.deck.filter((c) => getFlashcardStatus(c.term) === "known").length;
    els.mastery.textContent = `${known}/${state.deck.length} mastered`;
  }

  function flip() {
    state.flipped = !state.flipped;
    cardEl.classList.toggle("flipped", state.flipped);
  }

  function move(step) {
    state.index = (state.index + step + state.deck.length) % state.deck.length;
    draw();
  }

  function mark(status) {
    const card = current();
    const existing = getFlashcardStatus(card.term);
    // Clicking the active state again clears it (toggle off).
    setFlashcardStatus(card.term, existing === status ? null : status);
    renderStatus(card);
    renderMasteryCount();
  }

  cardEl.addEventListener("click", flip);
  root.querySelector("#prevBtn").addEventListener("click", () => move(-1));
  root.querySelector("#nextBtn").addEventListener("click", () => move(1));
  root.querySelector("#knownBtn").addEventListener("click", () => {
    mark("known");
    move(1);
  });
  root.querySelector("#learningBtn").addEventListener("click", () => mark("learning"));
  root.querySelector("#shuffleBtn").addEventListener("click", () => {
    state.order = shuffle([...state.deck.keys()]);
    state.index = 0;
    draw();
  });
  root.querySelector("#fcCategorySelect").addEventListener("change", (e) => {
    state.category = e.target.value;
    buildDeck();
    draw();
  });

  function onKey(e) {
    if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
    else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flip();
    }
  }
  document.addEventListener("keydown", onKey);

  buildDeck();
  draw();
  return () => document.removeEventListener("keydown", onKey);
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

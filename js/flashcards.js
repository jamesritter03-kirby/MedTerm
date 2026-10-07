// =============================================================================
// flashcards.js — Flip-card study mode with shuffle and keyboard navigation.
// =============================================================================
import { flashcards } from "./data.js";

export function renderFlashcards(root) {
  const state = { order: shuffle([...flashcards.keys()]), index: 0, flipped: false };

  root.innerHTML = `
    <h1 class="view-title">Flashcards</h1>
    <p class="view-subtitle">Click the card to flip. Use the arrows or keyboard to move.</p>
    <div class="flash-wrap">
      <p class="flash-progress" id="flashProgress"></p>
      <div class="flashcard" id="flashcard">
        <div class="flashcard-inner">
          <div class="flashcard-face flashcard-front">
            <span class="fc-category" id="fcCategory"></span>
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
        <button class="btn" id="shuffleBtn">⇄ Shuffle</button>
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
  };

  function current() {
    return flashcards[state.order[state.index]];
  }

  function draw() {
    const card = current();
    state.flipped = false;
    cardEl.classList.remove("flipped");
    els.category.textContent = card.category;
    els.term.textContent = card.term;
    els.def.textContent = card.definition;
    els.progress.textContent = `Card ${state.index + 1} of ${flashcards.length}`;
  }

  function flip() {
    state.flipped = !state.flipped;
    cardEl.classList.toggle("flipped", state.flipped);
  }

  function move(step) {
    state.index = (state.index + step + flashcards.length) % flashcards.length;
    draw();
  }

  cardEl.addEventListener("click", flip);
  root.querySelector("#prevBtn").addEventListener("click", () => move(-1));
  root.querySelector("#nextBtn").addEventListener("click", () => move(1));
  root.querySelector("#shuffleBtn").addEventListener("click", () => {
    state.order = shuffle([...flashcards.keys()]);
    state.index = 0;
    draw();
  });

  // Keyboard support; cleaned up by app.js via the returned disposer.
  function onKey(e) {
    if (e.key === "ArrowRight") move(1);
    else if (e.key === "ArrowLeft") move(-1);
    else if (e.key === " " || e.key === "Enter") {
      e.preventDefault();
      flip();
    }
  }
  document.addEventListener("keydown", onKey);

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

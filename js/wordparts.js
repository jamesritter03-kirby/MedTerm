// =============================================================================
// wordparts.js — Searchable, filterable browser for prefixes, roots, suffixes.
// =============================================================================
import { wordParts } from "./data.js";

const TYPES = ["all", "prefix", "root", "suffix"];

export function renderWordParts(root) {
  const state = { query: "", type: "all" };

  root.innerHTML = `
    <h1 class="view-title">Word Parts</h1>
    <p class="view-subtitle">
      Learn the building blocks of medical terms — prefixes, roots, and suffixes.
    </p>
    <div class="toolbar">
      <input id="wpSearch" class="search-input" type="search"
             placeholder="Search part, meaning, or example…" aria-label="Search word parts" />
      <div class="filter-pills" id="wpPills">
        ${TYPES.map(
          (t) =>
            `<button class="pill ${t === "all" ? "active" : ""}" data-type="${t}">${
              t === "all" ? "All" : t.charAt(0).toUpperCase() + t.slice(1) + "es"
            }</button>`
        ).join("")}
      </div>
    </div>
    <div id="wpResults" class="wordpart-grid"></div>
  `;

  const resultsEl = root.querySelector("#wpResults");
  const searchEl = root.querySelector("#wpSearch");
  const pillsEl = root.querySelector("#wpPills");

  function draw() {
    const q = state.query.trim().toLowerCase();
    const filtered = wordParts.filter((w) => {
      const matchesType = state.type === "all" || w.type === state.type;
      const matchesQuery =
        !q ||
        w.part.toLowerCase().includes(q) ||
        w.meaning.toLowerCase().includes(q) ||
        w.example.toLowerCase().includes(q);
      return matchesType && matchesQuery;
    });

    if (filtered.length === 0) {
      resultsEl.innerHTML = `<p class="empty-state">No word parts match your search.</p>`;
      return;
    }

    resultsEl.innerHTML = filtered
      .map(
        (w) => `
        <div class="wordpart-card">
          <div class="wp-head">
            <span class="wp-part">${w.part}</span>
            <span class="badge ${w.type}">${w.type}</span>
          </div>
          <p class="wp-meaning">${w.meaning}</p>
          <p class="wp-example">${w.example}</p>
        </div>`
      )
      .join("");
  }

  searchEl.addEventListener("input", (e) => {
    state.query = e.target.value;
    draw();
  });

  pillsEl.addEventListener("click", (e) => {
    const btn = e.target.closest(".pill");
    if (!btn) return;
    state.type = btn.dataset.type;
    pillsEl.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
    btn.classList.add("active");
    draw();
  });

  draw();
}

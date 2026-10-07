// =============================================================================
// progress.js — Study-progress dashboard.
// Shows flashcard mastery, quiz history, and study streak from the store.
// =============================================================================
import { getStats, resetProgress } from "./store.js?v=1.2.0";
import { flashcards, quizBank } from "./data.js?v=1.2.0";

export function renderProgress(root) {
  draw(root);
}

function draw(root) {
  const stats = getStats();
  const totalCards = flashcards.length;
  const masteredPct = totalCards ? Math.round((stats.known / totalCards) * 100) : 0;
  const seen = stats.known + stats.learning;

  root.innerHTML = `
    <h1 class="view-title">Your Progress</h1>
    <p class="view-subtitle">Progress is saved on this device as you study.</p>

    <div class="stat-grid">
      ${statCard("🔥", stats.streak, stats.streak === 1 ? "day streak" : "day streak")}
      ${statCard("📅", stats.dayCount, "days studied")}
      ${statCard("✅", stats.known, "cards mastered")}
      ${statCard("📝", stats.quizCount, "quizzes taken")}
      ${statCard("🏆", stats.quizCount ? stats.bestPct + "%" : "—", "best quiz score")}
      ${statCard("📊", stats.quizCount ? stats.avgPct + "%" : "—", "average score")}
    </div>

    <section class="progress-section">
      <h2>Flashcard mastery</h2>
      <div class="progress-bar-lg">
        <div class="progress-bar-lg-fill" style="width:${masteredPct}%"></div>
      </div>
      <p class="progress-caption">
        <b>${stats.known}</b> mastered · <b>${stats.learning}</b> still learning ·
        <b>${totalCards - seen}</b> not started · ${totalCards} total
      </p>
    </section>

    <section class="progress-section">
      <h2>Recent quizzes</h2>
      ${
        stats.recentQuizzes.length
          ? `<ul class="quiz-history">
              ${stats.recentQuizzes
                .map((q) => {
                  const pct = Math.round((q.score / q.total) * 100);
                  const when = new Date(q.date).toLocaleDateString(undefined, {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "2-digit",
                  });
                  return `<li>
                    <span class="qh-score">${q.score}/${q.total}</span>
                    <span class="qh-bar"><span style="width:${pct}%"></span></span>
                    <span class="qh-pct">${pct}%</span>
                    <span class="qh-date">${when}</span>
                  </li>`;
                })
                .join("")}
            </ul>`
          : `<p class="empty-state">No quizzes yet — take one to start tracking your scores.</p>`
      }
    </section>

    <section class="progress-section">
      <h2>Content library</h2>
      <p class="progress-caption">
        This course includes <b>${quizBank.length}</b> quiz questions,
        <b>${flashcards.length}</b> flashcards, and a full glossary of word parts.
      </p>
    </section>

    <div class="toolbar">
      <button class="btn" id="resetProgress">Reset all progress</button>
    </div>
  `;

  root.querySelector("#resetProgress").addEventListener("click", () => {
    if (confirm("Reset all study progress on this device? This cannot be undone.")) {
      resetProgress();
      draw(root);
    }
  });
}

function statCard(emoji, value, label) {
  return `
    <div class="stat-card">
      <span class="stat-emoji">${emoji}</span>
      <span class="stat-value">${value}</span>
      <span class="stat-label">${label}</span>
    </div>`;
}

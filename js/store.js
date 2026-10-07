// =============================================================================
// store.js — Persistent study-progress tracking backed by localStorage.
// All progress (flashcard mastery, quiz history, study days) lives under one
// key so it survives page reloads. Everything stays on the user's device.
// =============================================================================

const KEY = "medterm.progress.v1";

const defaults = () => ({
  flashcards: {}, // term -> "known" | "learning"
  quizzes: [], // [{ date, score, total }]
  days: [], // unique YYYY-MM-DD strings the user studied
});

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return defaults();
    return { ...defaults(), ...JSON.parse(raw) };
  } catch {
    return defaults();
  }
}

function save(state) {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage may be unavailable (private mode); progress is simply not saved.
  }
}

let state = load();

function touchToday() {
  const today = new Date().toISOString().slice(0, 10);
  if (!state.days.includes(today)) state.days.push(today);
}

export function getState() {
  return state;
}

// Record that the user opened the app today (counts toward streak/day totals).
export function markVisit() {
  touchToday();
  save(state);
}

// Flashcard mastery -----------------------------------------------------------
export function setFlashcardStatus(term, status) {
  if (status === null) delete state.flashcards[term];
  else state.flashcards[term] = status;
  touchToday();
  save(state);
}

export function getFlashcardStatus(term) {
  return state.flashcards[term] || null;
}

// Quiz history ----------------------------------------------------------------
export function recordQuiz(score, total) {
  state.quizzes.push({ date: new Date().toISOString(), score, total });
  touchToday();
  save(state);
}

// Derived statistics ----------------------------------------------------------
export function getStats() {
  const known = Object.values(state.flashcards).filter((s) => s === "known").length;
  const learning = Object.values(state.flashcards).filter((s) => s === "learning").length;
  const quizzes = state.quizzes;
  const quizCount = quizzes.length;
  const bestPct = quizzes.reduce(
    (best, q) => Math.max(best, Math.round((q.score / q.total) * 100)),
    0
  );
  const avgPct = quizCount
    ? Math.round(
        quizzes.reduce((sum, q) => sum + (q.score / q.total) * 100, 0) / quizCount
      )
    : 0;
  return {
    known,
    learning,
    quizCount,
    bestPct,
    avgPct,
    dayCount: state.days.length,
    streak: currentStreak(state.days),
    recentQuizzes: quizzes.slice(-5).reverse(),
  };
}

// Consecutive-day streak ending today (or yesterday).
function currentStreak(days) {
  if (!days.length) return 0;
  const set = new Set(days);
  let streak = 0;
  const cursor = new Date();
  // Allow the streak to count if the user hasn't studied yet today.
  if (!set.has(cursor.toISOString().slice(0, 10))) cursor.setDate(cursor.getDate() - 1);
  while (set.has(cursor.toISOString().slice(0, 10))) {
    streak++;
    cursor.setDate(cursor.getDate() - 1);
  }
  return streak;
}

export function resetProgress() {
  state = defaults();
  save(state);
}

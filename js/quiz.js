// =============================================================================
// quiz.js — Multiple-choice quiz with instant feedback and scoring.
// =============================================================================
import { quizBank } from "./data.js";

const QUESTIONS_PER_QUIZ = 10;

export function renderQuiz(root) {
  const state = { questions: [], index: 0, score: 0, answered: false };

  function startQuiz() {
    state.questions = shuffle([...quizBank]).slice(0, QUESTIONS_PER_QUIZ);
    state.index = 0;
    state.score = 0;
    state.answered = false;
    drawQuestion();
  }

  function drawQuestion() {
    const q = state.questions[state.index];
    state.answered = false;
    const progress = ((state.index) / state.questions.length) * 100;

    root.innerHTML = `
      <h1 class="view-title">Quiz</h1>
      <p class="view-subtitle">Test yourself — ${state.questions.length} questions, instant feedback.</p>
      <div class="quiz-wrap">
        <p class="quiz-progress">Question ${state.index + 1} of ${state.questions.length} · Score: ${state.score}</p>
        <div class="quiz-bar"><div class="quiz-bar-fill" style="width:${progress}%"></div></div>
        <div class="quiz-question">${q.question}</div>
        <div class="quiz-options" id="quizOptions">
          ${q.options
            .map((opt, i) => `<button class="quiz-option" data-opt="${i}">${opt}</button>`)
            .join("")}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
      </div>
    `;

    const optionsEl = root.querySelector("#quizOptions");
    optionsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".quiz-option");
      if (!btn || state.answered) return;
      handleAnswer(q, btn, optionsEl);
    });
  }

  function handleAnswer(q, btn, optionsEl) {
    state.answered = true;
    const chosen = q.options[Number(btn.dataset.opt)];
    const correct = chosen === q.answer;
    if (correct) state.score++;

    optionsEl.querySelectorAll(".quiz-option").forEach((b) => {
      b.disabled = true;
      const val = q.options[Number(b.dataset.opt)];
      if (val === q.answer) b.classList.add("correct");
      else if (b === btn) b.classList.add("wrong");
    });

    const feedback = root.querySelector("#quizFeedback");
    feedback.innerHTML = correct
      ? `<span style="color:var(--success)">✓ Correct!</span>`
      : `<span style="color:var(--danger)">✗ The answer is “${q.answer}.”</span>`;

    const isLast = state.index === state.questions.length - 1;
    const next = document.createElement("button");
    next.className = "btn primary";
    next.style.marginTop = "1rem";
    next.textContent = isLast ? "See results" : "Next question →";
    next.addEventListener("click", () => {
      if (isLast) drawResults();
      else {
        state.index++;
        drawQuestion();
      }
    });
    feedback.appendChild(next);
  }

  function drawResults() {
    const total = state.questions.length;
    const pct = Math.round((state.score / total) * 100);
    const message =
      pct >= 90 ? "Outstanding! 🏆" :
      pct >= 70 ? "Great work! 👍" :
      pct >= 50 ? "Good start — keep reviewing." :
      "Keep studying, you'll get there! 📚";

    root.innerHTML = `
      <h1 class="view-title">Quiz Results</h1>
      <div class="quiz-wrap">
        <div class="quiz-result">
          <div class="score">${state.score} / ${total}</div>
          <p style="font-size:1.2rem;margin:.5rem 0 1.5rem;">${pct}% — ${message}</p>
          <button class="btn primary" id="retryBtn">Try another quiz</button>
        </div>
      </div>
    `;
    root.querySelector("#retryBtn").addEventListener("click", startQuiz);
  }

  startQuiz();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

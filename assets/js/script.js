/* jshint esversion: 6 */

/* ============================================
   1. QUESTIONS DATA
   ============================================ */
const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      "Hyper Trainer Marking Language",
      "HyperText Markup Language",
      "HyperText Machine Language",
      "Home Tool Markup Language",
    ],
    correct: 1,
  },
  {
    question: "Which language is used to style web pages?",
    answers: ["HTML", "JavaScript", "CSS", "Python"],
    correct: 2,
  },
  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    answers: ["let", "var", "const", "static"],
    correct: 2,
  },
  {
    question: "What does DOM stand for?",
    answers: [
      "Data Object Model",
      "Document Object Model",
      "Digital Ordinance Model",
      "Document Orientation Model",
    ],
    correct: 1,
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "Which operator checks equality without type coercion?",
    answers: ["=", "==", "===", "!="],
    correct: 2,
  },
  {
    question: "What does CSS stand for?",
    answers: [
      "Cascading Style Sheets",
      "Computer Style Sheets",
      "Creative Style System",
      "Colorful Style Sheets",
    ],
    correct: 0,
  },
  {
    question: "Which event fires when a user clicks a button?",
    answers: ["onhover", "onclick", "onchange", "onload"],
    correct: 1,
  },
  {
    question:
      "What's the most quick way to write a single-line comment in JavaScript?",
    answers: [
      "<!-- comment -->",
      "// comment",
      "/* comment */ only",
      "# comment",
    ],
    correct: 1,
  },
  {
    question: "Which company originally developed JavaScript?",
    answers: ["Microsoft", "Netscape", "Google", "Apple"],
    correct: 1,
  },
];

/* ============================================
   2. STATE
   ============================================ */
let currentQuestion = 0;
let score = 0;
let username = "";
let answerLocked = false;

/* ============================================
   3. DOM REFERENCES
   ============================================ */
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const usernameInput = document.getElementById("username-input");
const startError = document.getElementById("start-error");
const startBtn = document.getElementById("start-btn");

const progressEl = document.getElementById("progress");
const scoreDisplay = document.getElementById("score-display");
const questionText = document.getElementById("question-text");
const answerButtons = document.getElementById("answer-buttons");
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");

const finalScore = document.getElementById("final-score");
const resultMessage = document.getElementById("result-message");
const restartBtn = document.getElementById("restart-btn");

/* ============================================
   4. START QUIZ
   ============================================ */
function startQuiz() {
  const input = usernameInput.value.trim();

  if (input === "") {
    startError.textContent = "Please enter a username to begin.";
    return;
  }

  if (input.length > 20) {
    startError.textContent = "Username must be 20 characters or fewer.";
    return;
  }

  username = input;
  startError.textContent = "";
  currentQuestion = 0;
  score = 0;
  answerLocked = false;

  startScreen.classList.add("hidden");
  resultScreen.classList.add("hidden");
  quizScreen.classList.remove("hidden");

  loadQuestion();
}

/* ============================================
   5. LOAD QUESTION
   ============================================ */
function loadQuestion() {
  answerLocked = false;
  feedbackEl.textContent = "";
  feedbackEl.classList.remove("correct", "incorrect");
  nextBtn.classList.add("hidden");
  answerButtons.innerHTML = "";

  const current = questions[currentQuestion];

  progressEl.textContent = `Question ${currentQuestion + 1} of ${
    questions.length
  }`;
  scoreDisplay.textContent = `Score: ${score}`;
  questionText.textContent = current.question;

  current.answers.forEach(function (answer, index) {
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.addEventListener("click", function () {
      handleAnswer(index, btn);
    });
    answerButtons.appendChild(btn);
  });
}

/* ============================================
   6. HANDLE ANSWER
   ============================================ */
function handleAnswer(selectedIndex, clickedBtn) {
  if (answerLocked) {
    return;
  }
  answerLocked = true;

  const current = questions[currentQuestion];
  const allButtons = answerButtons.querySelectorAll("button");

  allButtons.forEach(function (btn) {
    btn.disabled = true;
  });

  if (selectedIndex === current.correct) {
    score++;
    clickedBtn.classList.add("correct");
    feedbackEl.textContent = "Correct!";
    feedbackEl.classList.add("correct");
  } else {
    clickedBtn.classList.add("incorrect");
    allButtons[current.correct].classList.add("correct");
    feedbackEl.textContent = `Incorrect. The answer is: ${
      current.answers[current.correct]
    }`;
    feedbackEl.classList.add("incorrect");
  }

  scoreDisplay.textContent = `Score: ${score}`;
  nextBtn.classList.remove("hidden");
}

/* ============================================
   7. NEXT QUESTION
   ============================================ */
function nextQuestion() {
  currentQuestion++;

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

/* ============================================
   8. SHOW RESULT
   ============================================ */
function showResult() {
  quizScreen.classList.add("hidden");
  resultScreen.classList.remove("hidden");

  finalScore.textContent = `${username}, you scored ${score} out of ${questions.length}`;

  if (score === questions.length) {
    resultMessage.textContent = "Perfect score! Outstanding work.";
  } else if (score >= 7) {
    resultMessage.textContent = "Great job! You really know your stuff.";
  } else if (score >= 4) {
    resultMessage.textContent =
      "Not bad — a solid effort. Try again to beat it!";
  } else {
    resultMessage.textContent = "Keep practising — you'll get there!";
  }
}

/* ============================================
   9. RESTART
   ============================================ */
function restartQuiz() {
  resultScreen.classList.add("hidden");
  startScreen.classList.remove("hidden");

  usernameInput.value = "";
  startError.textContent = "";
  currentQuestion = 0;
  score = 0;
  answerLocked = false;
}

/* ============================================
   10. EVENT LISTENERS
   ============================================ */
startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", nextQuestion);
restartBtn.addEventListener("click", restartQuiz);

usernameInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    startQuiz();
  }
});

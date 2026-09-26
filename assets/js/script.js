console.log("Connected!");
/* ============================================
   1. QUESTIONS DATA
   ============================================ */
const questions = [
  {
    question: "Which keyword declares a variable that cannot be reassigned?",
    answers: ["var", "let", "const", "static"],
    correct: 2,
  },
  {
    question: "What does 'DOM' stand for?",
    answers: [
      "Document Object Model",
      "Data Output Method",
      "Digital Ordinance Mapping",
      "Dynamic Object Management",
    ],
    correct: 0,
  },
  {
    question: "Which symbol is used for strict equality comparison?",
    answers: ["=", "==", "===", "!="],
    correct: 2,
  },
  {
    question: "What will 'typeof []' return?",
    answers: ["array", "object", "list", "undefined"],
    correct: 1,
  },
  {
    question: "Which method adds an element to the end of an array?",
    answers: ["push()", "pop()", "shift()", "unshift()"],
    correct: 0,
  },
  {
    question: "What is the result of '2' + 2 in JavaScript?",
    answers: ["4", "'22'", "NaN", "Error"],
    correct: 1,
  },
  {
    question: "Which of these is NOT a JavaScript data type?",
    answers: ["boolean", "number", "float", "string"],
    correct: 2,
  },
  {
    question: "What does JSON stand for?",
    answers: [
      "JavaScript Object Notation",
      "Java Standard Output Network",
      "JavaScript Online Notation",
      "Java Source Object Name",
    ],
    correct: 0,
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    answers: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.toObject()",
      "JSON.decode()",
    ],
    correct: 1,
  },
  {
    question: "What will 'console.log(typeof null)' output?",
    answers: ["null", "object", "undefined", "boolean"],
    correct: 1,
  },
];

/* ============================================
   2. STATE
   ============================================ */
let currentQuestion = 0;
let score = 0;
let username = "";

/* ============================================
   3. DOM REFERENCES
   ============================================ */
// const startScreen = document.getElementById("start-screen");
// ...etc

/* ============================================
   4. START QUIZ
   ============================================ */
function startQuiz() {
  // validate username (6.2)
  // hide start, show quiz
  // reset state
  // load first question
}

/* ============================================
   5. LOAD QUESTION
   ============================================ */
function loadQuestion() {
  // update progress + score text
  // clear answer buttons
  // create 4 buttons for current question
}

/* ============================================
   6. HANDLE ANSWER
   ============================================ */
function handleAnswer(selectedIndex) {
  // compare to correct
  // show feedback + image
  // disable buttons
  // show next button
}

/* ============================================
   7. NEXT QUESTION
   ============================================ */
function nextQuestion() {
  // increment currentQuestion
  // if more questions, load; else showResult
}

/* ============================================
   8. SHOW RESULT
   ============================================ */
function showResult() {
  // hide quiz, show result
  // display score + personalised message
}

/* ============================================
   9. RESTART
   ============================================ */
function restartQuiz() {
  // reset state, show start screen
}

/* ============================================
   10. EVENT LISTENERS
   ============================================ */
// start-btn, next-btn, restart-btn

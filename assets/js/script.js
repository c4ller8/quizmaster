console.log("Connected!");
/* ============================================
   1. QUESTIONS DATA
   ============================================ */
const questions = [
  { question: "...", answers: ["A", "B", "C", "D"], correct: 0 },
  // ...10 total
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

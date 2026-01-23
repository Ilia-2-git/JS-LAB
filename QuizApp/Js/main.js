// Vars & Nodes
const titleDisplay = document.querySelector("h1");
const optionsBox = document.querySelector("section");
let questionCounter = 1;
let score = 0;
let correct = 0;
const allQuestionsNumber = questions.length;
// -------------------------------
// Functions
const createOption = (arr, counter) => {
  const options = arr[counter - 1].options;
  const optionBtns = options.map((option) => {
    return `<button onclick="handleChooseOption(${option.key})">${option.title}</button>`;
  });
  optionsBox.innerHTML = optionBtns.join("");
};
// ___________
const createName = (arr, counter) => {
  const questionTitle = arr[counter - 1].title;
  titleDisplay.innerHTML = questionTitle;
};
// ___________
const handleChooseOption = (key) => {
  finded = questions[questionCounter - 1];
  if (key == finded.answerKey) {
    score += finded.score;
    correct++;
  }
  if (!(questionCounter === 5)) updateQuestion();
  else {
    alert(
      `Quiz Finished successfully \n ${correct} correct | ${
        allQuestionsNumber - correct
      } wrong from ${allQuestionsNumber} Questions!\n Your score: ${score}`
    );
    questionCounter = 0;
    correct = 0;
    score = 0;
  }
};
// ___________
const updateQuestion = () => {
  questionCounter++;
  createName(questions, questionCounter);
  createOption(questions, questionCounter);
};
// -------------------------------

// Events
window.addEventListener("load", () => {
  createName(questions, questionCounter);
  createOption(questions, questionCounter);
});

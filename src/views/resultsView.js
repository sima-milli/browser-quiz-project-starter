import {
  BACK_TO_WELCOME_PAGE_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';
import { quizData } from '../data.js';

const getSelected = () => {
  let answerEls = document.querySelectorAll('input[name="answer"]');
  let answer; // array
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

const getScore = () => {
  let score = 0;
  let currentQuiz = 0;
  const answer = getSelected();
  if (answer) {
    if (answer === quizData.questions[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
  }
  return score;
};

export const createResultsElement = () => {
  const score = getScore();
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h2>You answered ${score} correct answers out of ${quizData.questions.length} questions</h2>
          
    <button id="${BACK_TO_WELCOME_PAGE_BUTTON_ID}">Redo Quiz</button>
  `;
  return element;
};

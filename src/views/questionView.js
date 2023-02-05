import { ANSWERS_LIST_ID } from '../constants.js';
import { NEXT_QUESTION_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';
/**
 * Create a full question element
 * @returns {Element}
 */
export const createQuestionElement = (question) => {
  const element = document.createElement('div');
  if (quizData.currentQuestionIndex === 0) {
    element.innerHTML = String.raw`
    <h1>${quizData.currentQuestionIndex + 1}/${
      quizData.questions.length
    } ${question}</h1>

    <ul id="${ANSWERS_LIST_ID}">
    </ul>

    <button id="${NEXT_QUESTION_BUTTON_ID}">
      Next question
    </button>
  `;
  } else {
    element.innerHTML = String.raw`
  <h1>${quizData.currentQuestionIndex + 1}/${
      quizData.questions.length
    } ${question}</h1>
  <h2> Your score is: ${quizData.scoreCount}</h2>

  <ul id="${ANSWERS_LIST_ID}">
  </ul>

  <button id="${NEXT_QUESTION_BUTTON_ID}">
    Next question
  </button>
`;
  }

  return element;
};

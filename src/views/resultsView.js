import { BACK_TO_WELCOME_PAGE_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

export const createResultsElement = (score) => {
  const element = document.createElement('div');
  element.innerHTML = String.raw`
    <h2>${quizData.userName} You answered ${score} correct answers out of ${quizData.questions.length} questions</h2>
          
    <button id="${BACK_TO_WELCOME_PAGE_BUTTON_ID}">Redo Quiz</button>
  `;
  return element;
};

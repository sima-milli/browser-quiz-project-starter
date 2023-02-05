import { quizData } from '../data.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import {
  USER_INTERFACE_ID,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { initResultsPage } from './resultsPage.js';
import { getScore, getSelected } from '../views/correctAnswerView.js';

export const initQuestionPage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const currentQuestion = quizData.questions[quizData.currentQuestionIndex];

  const questionElement = createQuestionElement(currentQuestion.text);

  userInterface.appendChild(questionElement);

  const answersListElement = document.getElementById(ANSWERS_LIST_ID);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const answerElement = createAnswerElement(key, answerText);
    answersListElement.appendChild(answerElement);
  }
  if (quizData.currentQuestionIndex === quizData.questions.length - 1) {
    const resultButton = document.getElementById(NEXT_QUESTION_BUTTON_ID);
    resultButton.textContent = 'View results';
    resultButton.id = 'show-results-button';
    document
      .getElementById('show-results-button')
      .addEventListener('click', countScoreAndShowResults);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
      
  }
};

const nextQuestion = () => {
  if (getSelected() !== undefined) {
    getSelected();
    getScore();

    quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
    initQuestionPage();
  }
};

const countScoreAndShowResults = () => {
  if (getSelected() !== undefined) {
    getSelected();
    getScore();
    goToResultsPage(quizData.scoreCount);
  }
};
const goToResultsPage = (score) => {
  initResultsPage(score);
};



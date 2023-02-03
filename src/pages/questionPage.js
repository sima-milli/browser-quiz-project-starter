import { quizData } from '../data.js';
import { createQuestionElement } from '../views/questionView.js';
import { createAnswerElement } from '../views/answerView.js';
import {
  USER_INTERFACE_ID,
  ANSWERS_LIST_ID,
  NEXT_QUESTION_BUTTON_ID,
} from '../constants.js';
import { initResultsPage } from './resultsPage.js';

export const initQuestionPage = () => {
  let scoreCount = 0; // in here we'll store the score for all questions and send it to results page

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
      .addEventListener('click', goToResultsPage);
  } else {
    document
      .getElementById(NEXT_QUESTION_BUTTON_ID)
      .addEventListener('click', nextQuestion);
  }
};

const nextQuestion = () => {
  quizData.currentQuestionIndex = quizData.currentQuestionIndex + 1;
  /* 
    correct answer view should be call here before going to next question. And should be repeated for each question with correct answer.
    before displaying we can store the correct answer count returned from `getScore` and add it to the 
    to the defined scoreCount variable in line 12. and then send it to results page in line 54.
  */
  initQuestionPage();
};

const goToResultsPage = () => {
  initResultsPage();
};

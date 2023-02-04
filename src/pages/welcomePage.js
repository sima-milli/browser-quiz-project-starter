import {
  USER_INTERFACE_ID,
  START_QUIZ_BUTTON_ID,
  INPUT_NAME,
} from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
import { initQuestionPage } from '../pages/questionPage.js';
import { quizData } from '../data.js';

export const initWelcomePage = () => {
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  

  if ((quizData.userName = document.getElementById(INPUT_NAME).value === '')) {
    alert('Please enter your name!');
  } else {
    quizData.userName = document.getElementById(INPUT_NAME).value;
    initQuestionPage();
  }
};

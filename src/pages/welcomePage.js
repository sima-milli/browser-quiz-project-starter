import { USER_INTERFACE_ID, START_QUIZ_BUTTON_ID } from '../constants.js';
import { createWelcomeElement } from '../views/welcomeView.js';
//import { quizData } from '../data.js';

// THİS SHOULD BE EXPORTED QUESTİON PAGE.
//import { initQuestionPage } from '../pages/questionPage.js';

export const initWelcomePage = () => {
  // we can use the same logic here.
  //quizData.currentQuestionIndex = 0;
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  const welcomeElement = createWelcomeElement();
  userInterface.appendChild(welcomeElement);

  document
    .getElementById(START_QUIZ_BUTTON_ID)
    .addEventListener('click', startQuiz);
};

const startQuiz = () => {
  //this will be keep the name where the user entered at the beginning
  //quizData.userName = document.getElementById(INPUT_NAME).value;
  //ıt will initialize the question page.
  //initQuestionPage();
};

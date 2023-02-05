import { initWelcomePage } from './welcomePage.js';
import { createResultsElement } from '../views/resultsView.js';
import {
  BACK_TO_WELCOME_PAGE_BUTTON_ID,
  USER_INTERFACE_ID,
} from '../constants.js';

export const initResultsPage = (score) => {
  const resultsElement = createResultsElement(score);
  const userInterface = document.getElementById(USER_INTERFACE_ID);
  userInterface.innerHTML = '';

  userInterface.appendChild(resultsElement);

  document
    .getElementById(BACK_TO_WELCOME_PAGE_BUTTON_ID)
    .addEventListener('click', backToWelcomePage);
};

const backToWelcomePage = () => {
  initWelcomePage();
};

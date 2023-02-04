import { BACK_TO_WELCOME_PAGE_BUTTON_ID } from '../constants.js';
import { quizData } from '../data.js';

// ===> we can delete `getSelected` and `getScore` from here because they are now moved to correct view

const getSelected = () => {
  // we can use this function in the questions view to show the rocket when user select the correct answer after each question
  let answerEls = document.querySelectorAll('input[name="answer"]');
  let answer = 0;
  console.log('answerEls', answerEls);
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      // we have to use checked here because we are getting all 4 inputs
      answer = answerEl.id;
    }
  });
  console.log('answer1: ', answer);
  return answer;
};

const getScore = () => {
  let score = 0;
  const answer = getSelected();
  console.log('answer2: ', answer);
  if (answer.length) {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === quizData.questions[i].correct) {
        score++;
      }
    }
  }

  console.log('score: ', score);
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

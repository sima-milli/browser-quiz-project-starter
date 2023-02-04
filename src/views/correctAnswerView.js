import { quizData } from '../data.js';

const answer = [];

// this function will get the answer provided by user
export const getSelected = () => {
  // we can use this function in the questions view to show the rocket when user select the correct answer after each question
  let answerEls = document.querySelectorAll('input[name="answer"]');
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      // we have to use checked here because we are getting all 4 inputs
      answer.push(answerEl.id);
    }
  });
};

export const getScore = () => {
  let score = 0;
  if (answer.length) {
    for (let i = 0; i < answer.length; i++) {
      if (answer[i] === quizData.questions[i].correct) {
        score++;
      }
    }
  }
  // you can use else to do the steps for wrong answer (rocket going down for example)
  return score;
};

// if you need more steps for correct answer flow it should go here

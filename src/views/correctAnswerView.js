import { quizData } from '../data.js';

// this function will get the answer provided by user
export const getSelected = () => {
  // we can use this function in the questions view to show the rocket when user select the correct answer after each question
  let answer;
  let answerEls = document.querySelectorAll('input[name="answer"]');
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
      // we have to use checked here because we are getting all 4 inputs
      answer = answerEl.id;
    }
  });
  return answer;
};

export const getScore = () => {
  let answer = getSelected();
  if (answer === quizData.questions[quizData.currentQuestionIndex].correct) {
    quizData.scoreCount++;
  }
  // you can use else to do the steps for wrong answer (rocket going down for example)
};

// if you need more steps for correct answer flow it should go here

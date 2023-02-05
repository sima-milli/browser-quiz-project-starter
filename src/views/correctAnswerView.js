import { quizData } from '../data.js';

export const getSelected = () => {
  let answer;
  let answerEls = document.querySelectorAll('input[name="answer"]');
  answerEls.forEach((answerEl) => {
    if (answerEl.checked) {
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
};

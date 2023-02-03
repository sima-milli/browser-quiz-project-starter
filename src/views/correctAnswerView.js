// correct answer view

// this function will get the answer provided by user
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
  return answer;
};

// this function is to check if the selected answer is the correct one
const getScore = () => {
  let score = 0;
  const answer = getSelected();
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

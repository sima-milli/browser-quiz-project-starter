/**
 * Create an Answer element
 * @returns {Element}
 */

export const createAnswerElement = (key, answerText) => {
  const listItem = document.createElement('li');
  const answerInput = document.createElement('input');
  const label = document.createElement('label');
  const answer = document.createTextNode(answerText);
  listItem.appendChild(answerInput);
  answerInput.setAttribute('type', 'radio');
  answerInput.setAttribute('id', key);
  answerInput.setAttribute('name', 'answer');
  answerInput.setAttribute('value', answerText);
  answerInput.appendChild(label);
  listItem.appendChild(answer);
  label.setAttribute('for', key);
  label.innerText = answerText;
  return listItem;
};

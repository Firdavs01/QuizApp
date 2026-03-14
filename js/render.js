"use strict";

import { containerElement } from "./elements.js";
import { questions } from "./api.js";

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function render(index) {
  if (index < questions.length) {
  const question = questions[index];

  const answers = shuffle([
    question.correct_answer,
    ...question.incorrect_answers,
  ]);

  containerElement.innerHTML = `
    <div><strong>Вопрос ${index + 1}:</strong>${question.question}</div>
    <ul>
      ${answers.map(ans => `
        <li>
          <label>
            <input type="radio" name="question-${index}" value="${ans}"/>
            ${ans}
          </label>
        </li>  
      `).join("")}
    </ul>
    <button id="nextBtn">next question</button>
  ` 
  const nextbtn = containerElement.querySelector("#nextbtn")
  if (nextbtn) {
    nextbtn.addEventListener("click", () => {
      render(index + 1)
    })
  }
} else {
  containerElement.innerHTML = `<p>Викторина завершена</p>`
  }
}

export { render };
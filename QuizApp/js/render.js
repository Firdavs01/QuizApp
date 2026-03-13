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
  
  containerElement.innerHTML = questions[index]
    .map((question, questionIndex) => {
      const answers = shuffle([
        question.correct_answer,
        ...question.incorrect_answers,
      ]);

      return `
            <div>${question.question}</div>
            <ul>
                ${answers
                  .map(
                    (ans) => `
                        <li>
                            <label>
                                <input type="radio" name="question-${questionIndex}" value="${ans}"/>
                                ${ans}
                            </label>
                        </li>`,
                  )
                  .join("")}
            </ul>
        `;
    })
    .join("");
  document.body.appendChild(containerElement);
  }
}

export { render };

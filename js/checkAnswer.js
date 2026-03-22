"use strict"

import { render } from "./render.js"
import { questions } from "./api.js"
import { containerElement } from "./elements.js"

function checkAnswer(currentIndex) {
    const valueOfTheInput = document.querySelector(`input[name="question-${currentIndex}"]:checked`)
    const correctAnswer = questions[currentIndex].correct_answer

    if (valueOfTheInput) {
        alert("Choose answer");
        return
    }

    const value = valueOfTheInput.value

    let winWindow = document.querySelector('.result-window')
    if (!winWindow) {
        winWindow = document.createElement('div')
        winWindow.classList.add('result-window')
        document.body.appendChild(winWindow)
    }

    if (correctAnswer === value) {
        winWindow.innerHTML = `<h3>Congratulation you win!!!</h3>`
    } else {
        winWindow.innerHTML = `<h3>you lose</h3>`
    }

    containerElement.innerHTML = ``
    render(currentIndex + 1)
}

export {checkAnswer}

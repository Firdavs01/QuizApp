"use strict"

import { render } from "./render.js"
import { questions } from "./api.js"

function checkAnswer(currentIndex) {
    const valueOfTheInput = document.querySelector(`input[name="question-${currentIndex}"]:checked`)
    const correctAnswer = questions[currentIndex].correct_answer

    if (valueOfTheInput) {
        const value = valueOfTheInput.value

        if (correctAnswer === value) {
            alert("Правильно!")
        } else {
            alert(`Неправильно X Правильный ответ ${correctAnswer}`)
        }
    } else {
        alert("choose your answer")
        return
    }
    render(currentIndex + 1)
}

export {checkAnswer}
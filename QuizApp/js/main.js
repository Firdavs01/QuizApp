"use strict"

import { getQuestions } from "./api.js"
import { startBtnElement, containerElement } from "./elements.js"
import { render } from "./render.js"

startBtnElement.addEventListener("click", () => {
    showQuestion()
})

async function showQuestion() {
    try {
        const question = await getQuestions()
        render(question)
    } catch(err) {
        containerElement.innerHTML = `<p>Error loading. Please repeat after few minuts</p>`
    }
}
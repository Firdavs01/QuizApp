"use strict"

import { getQuestions } from "./api.js"
import { startBtnElement, containerElement } from "./elements.js"
import { render } from "./render.js"

startBtnElement.addEventListener("click", () => {
    showQuestion()
})

async function showQuestion() {
    try {
        await getQuestions()
        render(0)
    } catch(err) {
        containerElement.innerHTML = `<p>Error loading. Please repeat after few minuts</p>`
    }
}
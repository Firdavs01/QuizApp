"use strict"

import { getQuestions } from "./api.js"
import { startBtnElement, containerElement, readyBtnElement } from "./elements.js"
import { render } from "./render.js"


startBtnElement.addEventListener("click", async () => {
    try {
        const question = await getQuestions()
        render(question)
    } catch(err) {
        containerElement.innerHTML = `<p>Error loading. Please repeat after few minuts</p>`
    }
})

readyBtnElement.addEventListener("click", () => {
    
})
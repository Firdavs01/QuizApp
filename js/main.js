"use strict"

import { getQuestions } from "./api.js"
import { startBtnElement } from "./elements.js"
import { render } from "./render.js"


startBtnElement.addEventListener("click", () => {
    getQuestions()
    render()
})
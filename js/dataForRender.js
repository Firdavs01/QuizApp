"use strict"

import { getQuestions } from "./api.js"

const data = getQuestions()

const questionData = {
    "question": data[question],
    "coorect_answer": data[correct_answer],
    "incorrect_answer": data[incorrect_answer]
}

const allAsnwers = [
    questionData.coorect_answer,
    ...questionData.incorrect_answer
]

allAsnwers.sort(() => Math.random() - 0.5)

export {allAsnwers, questionData}
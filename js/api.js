"use strict"

import { render } from "./render.js"

let questions = []
let currentIndex = 0

async function getQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=1")
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
    
        const data = await response.json()
        questions = data.results
        render(currentIndex)
        return questions
    } catch(err) {
        console.log("Мы не нашли подходящий вам файл", err)
        throw err
    }
}

export {getQuestions , questions}
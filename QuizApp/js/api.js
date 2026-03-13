"use strict"

import { render } from "./render"

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
    } catch(err) {
        console.log("Мы не нашли подходящий вам файл", err)
        throw err
    }
}

export {getQuestions , questions}
"use strict"

async function getQuestions() {
    try {
        const response = await fetch("https://opentdb.com/api.php?amount=10")
        if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`)
        }
    
        const data = await response.json()
        return data.results
    } catch(err) {
        console.log("Мы не нашли подходящий вам файл", err)
        throw err
    }
}

export {getQuestions}
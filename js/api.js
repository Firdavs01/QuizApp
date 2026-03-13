"use strict"

async function getQuestions() {
    try {
        let response = await fetch("https://opentdb.com/api.php?amount=10")
        if (!response.ok) {
            throw new Error("sorry for this")
        }
    
        let data = await response.json()
        console.log(data.results)
        return data.results
    } catch(err) {
        console.log(err, "Мы не нашли подходящий вам файл")
        return []
    }
}

export {getQuestions}
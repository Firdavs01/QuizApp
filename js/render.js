"use strict" 

import { containerElement } from "./elements.js"
import { allAsnwers, questionData } from "./dataForRender.js";

function render() {
    results.forEach(question => {
        containerElement.innerHTML = `
            <div>${questionData[question]}</div>
            <ul>${allAsnwers.map(ans => `<li>${ans}</li>`).join('')}</ul>
        `
        document.body.appendChild(containerElement)
    });
}

export {render}

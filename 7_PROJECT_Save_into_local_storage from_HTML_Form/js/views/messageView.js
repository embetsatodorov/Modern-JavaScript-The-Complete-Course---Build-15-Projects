import {elements} from "../base.js";

export const getInput = (element) => {
    return element.value.trim();
}

export const renderMessage = (content, messageTemplateFn = null) => {
    if (content) {
        // Render item message
        elements.messageList().innerHTML += messageTemplateFn({content})
    } else {
        // Render error message
        elements.errorBox().style.opacity = "1";

        setTimeout(() => {
            elements.errorBox().style.opacity = "0";
        }, 3000)
    }
}

export const clearForm = (form) => {
    form.reset();
}
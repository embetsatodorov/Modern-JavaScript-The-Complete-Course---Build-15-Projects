import {elements} from "./base.js";
import {addFocusAndBlur, formReset, validateInputs, getValue} from "./formView.js";
import {Message} from "./Message.js";

window.addEventListener("DOMContentLoaded", () => {
    // Reset the form
    formReset(elements.mainForm());
})

Array.from(elements.mainForm().querySelectorAll("input, textarea"))
    .forEach(inputEl => {
        // Add focus and blur events on all inputs
        addFocusAndBlur(inputEl);
    })

elements.mainForm().addEventListener("keyup", () => {
    const isAllInputFieldsCorrect = validateInputs([elements.inputSubject(), elements.inputMessage()]);

    if (isAllInputFieldsCorrect) {
        elements.ctaSend().removeAttribute("disabled");
    }
})

// Handle form buttons
elements.ctaReset().addEventListener("click", (evt) => {
    evt.preventDefault();

    // Reset the form
    formReset(elements.mainForm());

    // Set ctaSend to disabled
    elements.ctaSend().setAttribute("disabled", "disabled");
})

elements.ctaSend().addEventListener("click", (evt) => {
    evt.preventDefault();
    const message = new Message(getValue(elements.inputSubject(), getValue(elements.inputMessage())))
    message.send();
})









import {elements} from "./base.js";
import {Message} from "./modules/Message.js";
import {getInput, renderMessage, clearForm} from "./views/messageView.js";

function messageController(evt) {
    evt.preventDefault();

    // Create new Message instance
    const message = new Message(getInput(elements.messageArea()))

    if (message.text) {
        message.getTemplate()
            .then(resp => resp.text())
            .then(template => {
                const templateFn = Handlebars.compile(template);

                // Render message to the UI
                renderMessage(message.text, templateFn);
            })

        // Add message text to localStorage
        message.addToLocalStorage();
    } else {
        renderMessage(message.text);
    }

    // Clear form
    clearForm(elements.mainForm());
}


elements.mainForm().addEventListener("submit", messageController)

const listItemButtonsHandler = (evt) => {
    const $target = evt.target;

    if ($target.id === "ctaRemoveMessageItem" || $target.tagName === "IMG") {
        // Remove current list item
        $target.parentElement.parentElement.remove();

        // Remove current message from localStorage
        Message.removeFromLocalStorage($target.parentElement.previousElementSibling.textContent);
    }
}

elements.messageList().addEventListener("click", listItemButtonsHandler);


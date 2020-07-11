export class Message {
    constructor(text) {
        this.text = text;
    }

    getTemplate() {
        return fetch("../templates/message-item.hbs")
    }

    addToLocalStorage() {
        if (!localStorage.messages) {
            localStorage.setItem("messages", JSON.stringify([this.text]));
        } else {
            const tempMessages = JSON.parse(localStorage.getItem("messages"));
            tempMessages.push(this.text);
            localStorage.setItem("messages", JSON.stringify(tempMessages));
        }
    }

    static removeFromLocalStorage(message) {
        let tempMessages = JSON.parse(localStorage.getItem("messages"));
        tempMessages = tempMessages.filter(curMessage => curMessage !== message);
        localStorage.setItem("messages", JSON.stringify(tempMessages));
    }
}
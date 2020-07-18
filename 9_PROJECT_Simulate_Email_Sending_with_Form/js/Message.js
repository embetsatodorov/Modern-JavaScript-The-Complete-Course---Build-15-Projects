export class Message {
    constructor(subject, main) {
        this.subject = subject;
        this.main = main;
    }

    send() {
        alert('Message is sent')
    }
}
class Item {
    constructor(imgURL, name, price, id) {
        this.imgURL = imgURL;
        this.name = name;
        this.price = price;
        this.id = id
    }
}

export const items = [
    new Item("./pictures/course1.jpg", "Note book", 3, 0),
    new Item("./pictures/course2.jpg", "Pencil", 6.30, 1),
    new Item("./pictures/course3.jpg", "Rubber", 2, 2),
    new Item("./pictures/course4.jpg", "HELPER BOOKS", 20, 3),
    new Item("./pictures/course5.jpg", "Piece of papers", 0.80, 4),
]
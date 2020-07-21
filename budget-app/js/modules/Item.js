export class Item {
    constructor(id, description, value, type) {
        this.id = id;
        this.description = description;
        this.value = parseFloat(value);
        this.type = type;
    }

    addToDataStorage() {
        const allItems = JSON.parse(localStorage.getItem("items"));

        // Add item to current data
        allItems[this.type].push(this);

        // Add all items to localStorage
        localStorage.setItem("items", JSON.stringify(allItems));
    }

    static removeFromDataStorage(id, type) {
        let allItems = JSON.parse(localStorage.getItem("items"));
        const itemToBeRemoved = allItems[type].find(item => item.id == id);

        allItems[type] = allItems[type].filter(item => item.id != id);
        localStorage.setItem("items", JSON.stringify(allItems));

        return itemToBeRemoved;
    }

    getFromDataStorage() {

    }
}
export class Storage {
    static addItem(name, value) {
        if (!localStorage.cartItems) {
            // Create new array and add current item
            const tempItems = [];
            tempItems.push(value);
            localStorage.setItem(name, JSON.stringify(tempItems));
        } else {
            // Add curr item to the array
            const tempItems = JSON.parse(localStorage.getItem(name));
            tempItems.push(value);
            localStorage.setItem(name, JSON.stringify(tempItems));
        }
    }

    static deleteItem(ID) {
        let tempItems = JSON.parse(localStorage.cartItems);
        tempItems = tempItems.filter(curItem => curItem.id !== ID);
        localStorage.setItem("cartItems", JSON.stringify(tempItems));
    }

    static getItem(name) {
        return JSON.parse(localStorage[name]);
    }
}
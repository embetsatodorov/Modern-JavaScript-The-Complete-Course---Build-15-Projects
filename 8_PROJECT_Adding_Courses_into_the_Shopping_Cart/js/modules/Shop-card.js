export class ShopCard {
    static getTemplates() {
        return Promise.all([
            fetch("./templates/shop-card/cart-card.hbs").then(resp => resp.text()),
            fetch("./templates/shop-card/cart-list-item.hbs").then(resp => resp.text())
        ])
    }
}
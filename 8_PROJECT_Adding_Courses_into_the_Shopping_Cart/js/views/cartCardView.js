import {elements} from "../base.js";
import {Storage} from "../modules/Storage.js";

export const renderCartCard = (partialTemplate, mainTemplate) => {
    return (curItem) => {
        Handlebars.registerPartial("card", partialTemplate);
        const templateFn = Handlebars.compile(mainTemplate);
        elements.cartList().innerHTML += templateFn(curItem);
    }
}

export const renderAllCartCards = (partialTemplate, mainTemplate) => {
    return (cartItems) => {
        cartItems.forEach(curCartItem => {
            renderCartCard(partialTemplate, mainTemplate)(curCartItem);
        })
    }
}

export const updateCartItemsCounter = ()=> {
    elements.cartCounter().innerHTML = Storage.getItem("cartItems").length;
}
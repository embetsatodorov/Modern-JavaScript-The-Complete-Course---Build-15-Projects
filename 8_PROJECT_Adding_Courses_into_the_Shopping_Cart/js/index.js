import {elements} from "./base.js";
import {items} from "./helpers/items.js";
import {ShopCard} from "./modules/Shop-card.js";
import {renderItemsCards} from "./views/itemCardView.js";
import {renderCartCard, renderAllCartCards, updateCartItemsCounter} from "./views/cartCardView.js";
import {Storage} from "./modules/Storage.js";

if (localStorage.cartItems && Storage.getItem("cartItems").length > 0) {
    elements.cartList().innerHTML = "";
    // Render current items in the cart on refresh
    ShopCard.getTemplates()
        .then(([partialTemplate, mainTemplate]) => {
            const currentCartItems = Storage.getItem("cartItems");
            const renderAllCartCardsFn = renderAllCartCards(partialTemplate, mainTemplate);
            renderAllCartCardsFn(currentCartItems);
        })

    // Update cart counter
    updateCartItemsCounter();
} else {
    elements.cartList().innerHTML = "Your cart is empty";
}

// Render all items
fetch("./templates/shop-card/shop-card.hbs")
    .then(resp => resp.text())
    .then(template => renderItemsCards(template, items))

function cartItemsHandler(evt) {
    const $target = evt.target;

    if ($target.tagName === "BUTTON") {
        ShopCard.getTemplates()
            .then(([partialTemplate, mainTemplate]) => {
                if (elements.cartList().dataset.empty === "true") {
                    elements.cartList().dataset.empty = "false";
                    elements.cartList().innerHTML = "";
                }

                // Get current ID from the item
                const ID = +$target.parentElement.parentElement.dataset.id;

                // Add current item to localStorage
                Storage.addItem("cartItems", items[ID])

                // Render cart item in the Cart
                const renderCartCardFn = renderCartCard(partialTemplate, mainTemplate);
                renderCartCardFn(items[ID]);

                // Update cart counter
                updateCartItemsCounter();
            })
    }
}

elements.itemsBox().addEventListener("click", cartItemsHandler)

function cartIconHandler(evt) {
    // Toggle cartList
    evt.target.parentElement.nextElementSibling.classList.toggle("d-none")
}

elements.cartIcon().addEventListener("click", cartIconHandler);

function cartListHandler(evt) {
    const $target = evt.target;

    if (Array.from($target.classList).includes("cta-clear-cart-item")) {
        // Delete item from localStorage
        const ID = +$target.previousElementSibling.firstElementChild.dataset.id;
        Storage.deleteItem(ID);

        // Delete item from UI
        $target.parentElement.remove();

        if (Storage.getItem("cartItems").length === 0) {
            elements.cartList().innerHTML = "Your cart is empty";
            elements.cartList().dataset.empty = "true";
        } else {
            Storage.getItem("cartItems")
        }

        // Update cart counter
        updateCartItemsCounter();
    }
}

elements.cartList().addEventListener("click", cartListHandler)


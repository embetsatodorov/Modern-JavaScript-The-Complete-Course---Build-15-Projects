import {elements} from "../base.js";

export const renderItemsCards = (template, ctx) => {
    const templateFn = Handlebars.compile(template);
    elements.itemsBox().innerHTML += templateFn({items: ctx})
}
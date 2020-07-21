import {html} from "../base.js";

export const getUserInputInfo = (target) => {
    return Array.from(target)
        .filter(curInput => curInput.name !== "submit")
        .reduce((acc, curInput) => {
            acc[curInput.name] = curInput.value.trim();
            return acc;
        }, {})
}

export const checkForEmptyInput = (obj) => {
    return Object
        .keys(obj)
        .find(key => obj[key] === "")
}

export const renderUser = (user, type) => {
    const typeMap = {
        income() {
            html.budgetSum().textContent = user.budget;
        },
        expense() {
            html.expenseSum().textContent = user.expenses;
        }
    }
    typeMap[type]();
    html.balanceSum().textContent = user.balance;
}

export const addErrorBoxStyle = () => {
    html.errorBox().classList.add("error-box--style");
}

export const removeErrorBoxStyle = () => {
    html.errorBox().textContent = "";
    html.errorBox().classList.remove("error-box--style");
}

export const renderError = (errorText) => {
    addErrorBoxStyle();
    html.errorBox().textContent = errorText;
}
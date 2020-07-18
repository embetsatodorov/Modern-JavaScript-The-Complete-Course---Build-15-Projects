import {elements} from "./base.js";

export const getFormData = (form) => {

    return {
        selectFieldsData() {
            return Array.from(form.querySelectorAll("select"))
                .map(select => select.value);
        },
        checkboxFieldData() {
            return Array.from(form.querySelectorAll("input"))
                .filter(input => input.checked === true)
                .map(checkbox => checkbox.name)
        }
    }
}

export const renderInsuranceQuote = (insurance) => {
    const markup = `
            <ul class="summary-list">
                <li class="summary-list__item">
                    Make: ${insurance.make}
                </li>
                <li class="summary-list__item">
                    Year: ${insurance.year}
                </li>
                <li class="summary-list__item">
                    Package type: ${insurance.packageType}
                </li>
                <li class="summary-list__item">
                    Total: ${insurance.total}
                </li>
            </ul>`

    elements.output().innerHTML = markup;

    // Show output
    elements.output().classList.add("output-box-show");
    // Hide error box
    elements.error().classList.remove("error-box-show");
    // elements.output().style.transform = "translateY(-3rem) translateX(-50%)";
    return insurance;
}

export const renderError = (errorText) => {
    elements.error().innerHTML = `
        <p class="error">
                ${errorText}
        </p>
    `

    // Show output
    elements.output().classList.remove("output-box-show");
    // Hide error box
    elements.error().classList.add("error-box-show");
    // elements.error().style.transform = "translateY(-9rem) translateX(-50%)";
}
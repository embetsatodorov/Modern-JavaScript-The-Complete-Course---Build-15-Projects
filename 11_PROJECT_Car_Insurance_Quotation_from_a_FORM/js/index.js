import {elements} from "./base.js";
import {Insurance} from "./Insuranse.js";
import {getFormData, renderInsuranceQuote, renderError} from "./insuranceView.js";

// FORM CONTROLLER
function mainFormHandler(evt) {
    evt.preventDefault();

    // Get form data
    const formData = getFormData(elements.mainForm());

    const [make, year] = formData.selectFieldsData();
    const [packageType] = formData.checkboxFieldData();

    if (make !== "default" && year !== "default" && packageType) {
        // Create Insurance instance
        const insurance = new Insurance(make, year, packageType);

        // Calculate Insurance price
        const price = insurance.calculate();

        // Render insurance quote to UI
        renderInsuranceQuote(insurance);
    } else {
        // Render error to UI
        renderError("There is empty fields");
    }
}

elements.ctaSubmit().addEventListener("click", mainFormHandler);
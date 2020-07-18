const removeClass = (el, className) => {
    el.remove(className);
}

export const addFocusAndBlur = (element) => {
    element.addEventListener("focus", (evt) => {
        const $target = evt.target;
        const targetLabel = $target.previousElementSibling;

        // Update current input and label
        $target.classList.add("style-input");
        targetLabel.classList.add("style-label");
    })

    element.addEventListener("blur", (evt) => {
        const $target = evt.target;

        if (!$target.value) {
            // Downgrade current input and label
            $target.classList.remove("style-input")
            $target.previousElementSibling.classList.remove("style-label");
        }
    })
}

export const formReset = (form) => {
    Array.from(form.querySelectorAll(".field-wrapper"))
        .forEach(wrapper => {
            const label = wrapper.firstElementChild;
            const input = wrapper.lastElementChild;

            label.classList.remove("style-label");
            input.classList.remove("style-input");
        })

    form.reset();
}

export const validateInputs = (inputs) => {
    return inputs
        .map(input => {
            return input.value !== ""
        })
        .every(value => value === true);
}

export const getValue = (inputField) => {
    return inputField.value.trim();
}


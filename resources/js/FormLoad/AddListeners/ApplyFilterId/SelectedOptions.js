let StartFunc = () => {

    return $("#VoucherNumberFilterId").val();

    const jVarLocalSelect = document.getElementById("VoucherTypeSelectId");

    const jVarLocalSelectedOptions = Array.from(jVarLocalSelect.options).filter(function (option_element) {
        let option_text = option_element.text;
        let option_value = option_element.value;
        let is_option_selected = option_element.selected;

        return is_option_selected;
    });

    const jVarLocalSelected = jVarLocalSelectedOptions.map(element => {
        return element.value;
    });

    return jVarLocalSelected;
};

export { StartFunc };
const StartFunc = () => {
    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => item.VOUCHERNUMBER))];
    console.log(unique); // ["usman", "zia"]

    const jVarLocalSelect = document.getElementById("VoucherTypeSelectId");

    jVarLocalSelect.innerHTML = unique.map(t => '<option value="' + t + '">' + t + '</option>');
    jVarLocalSelect.loadOptions();
};

export { StartFunc };

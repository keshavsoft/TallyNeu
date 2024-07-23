import { StartFunc as buttonClick } from "./buttonClick.js";
const CommonHtmlId = "VoucherTypeFilterId";

const StartFunc = () => {
    let jVarLocalTableOptions = $("#tableBS").bootstrapTable("getOptions");
    let jVarLocalTitle = jVarLocalTableOptions.columns[0][0].title;
    let jVarLocalField = jVarLocalTableOptions.columns[0][0].field;

    const unique = [...new Set(jVarGlobalPresentViewData.map((item) => {
        return item[jVarLocalField];
    }))];

    jFLocalInsertRow({
        inLabel: jVarLocalTitle,
        inData: unique
    });



    // jFLocalPopulateSelect({ inData: unique });
};

const jFLocalPopulateSelect = ({ inData }) => {
    const jVarLocalSelect = document.getElementById(CommonHtmlId);

    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    // $(`#${CommonHtmlId}`).chosen();
};

const jFLocalInsertRow = ({ inLabel, inData }) => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");

    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = inLabel;

    let jVarLocalSelect = clone.querySelector("select");
    // let t = "sssssssss";
    // jVarLocalSelect.innerHTML = '<option value="' + t + '">' + t + '</option>';
    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    let jVarLocalButton = clone.querySelector("button");
    jVarLocalButton.addEventListener('click', buttonClick);

    jVarLocalFiltersBodyId.appendChild(clone);

    $(jVarLocalFiltersBodyId.children[0].querySelector("select")).chosen();
};

export { StartFunc };

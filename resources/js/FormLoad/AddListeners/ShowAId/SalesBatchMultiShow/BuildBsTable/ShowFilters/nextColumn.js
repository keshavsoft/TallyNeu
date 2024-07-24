import { StartFunc as buttonClick } from "./buttonClick.js";
import { StartFunc as insertNewRow } from "./insertNewRow.js";

const CommonHtmlId = "VoucherTypeFilterId";

const StartFunc = ({ inColumnIndex }) => {
    let jVarLocalColumnIndex = inColumnIndex;
    let jVarLocalTableOptions = $("#tableBS").bootstrapTable("getOptions");
    let jVarLocalColumn = jVarLocalTableOptions.columns[0][inColumnIndex];
    let jVarLocalTitle = jVarLocalColumn.title;
    let jVarLocalField = jVarLocalColumn.field;

    let data = $("#tableBS").bootstrapTable('getData', { unfiltered: true });

    const unique = [...new Set(data.map((item) => {
        return item[jVarLocalField];
    }))];

    insertNewRow({
        inLabel: jVarLocalTitle,
        inData: unique,
        inColumnIndex: jVarLocalColumnIndex,
        inField: jVarLocalField
    });
};

const jFLocalInsertRow = ({ inLabel, inData, inColumnIndex }) => {
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");
    let jVarLocalTemplateRow = document.getElementById("TemplateFilterRowId");
    const clone = jVarLocalTemplateRow.content.cloneNode(true);

    jFLocalShowLabel({ inLabel, inClone: clone });
    jFLocalShowColumnIndex({ inClone: clone, inColumnIndex });

    let jVarLocalSelect = clone.querySelector("select");
    jVarLocalSelect.innerHTML = inData.map(t => '<option value="' + t + '">' + t + '</option>');

    let jVarLocalButton = clone.querySelector("button");
    jVarLocalButton.addEventListener('click', buttonClick);

    jVarLocalFiltersBodyId.appendChild(clone);

    $(jVarLocalFiltersBodyId.children[inColumnIndex].querySelector("select")).chosen();
};

const jFLocalShowLabel = ({ inLabel, inClone }) => {
    const clone = inClone;

    let jVarLocalOrderItemsCategoryClass = clone.querySelector("label");
    jVarLocalOrderItemsCategoryClass.innerHTML = inLabel;
};

const jFLocalShowColumnIndex = ({ inColumnIndex, inClone }) => {
    const clone = inClone;

    let jVarLocalOrderItemsCategoryClass = clone.querySelector(".row");
    jVarLocalOrderItemsCategoryClass.dataset.columnindex = inColumnIndex;
};

export { StartFunc };

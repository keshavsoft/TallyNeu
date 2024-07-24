import { StartFunc as nextColumn } from "./nextColumn.js";
const tableName = "tableBS";

const StartFunc = (evt) => {
    let jVarLocalCurrentTaget = evt.currentTarget;

    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");
    let jVarLocalColumnName = jVarLocalClosestRow.dataset.columnname;

    let jVarLocalSelect = jVarLocalClosestRow.querySelector("select");
    let jVarLocalSelected = $(jVarLocalSelect).val();
    let data = $("#tableBS").bootstrapTable('getData', { unfiltered: true });

    const jVarLocalFilteredRows = data.filter(element => {
        return jVarLocalSelected.includes(element[jVarLocalColumnName]);
    });

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarLocalFilteredRows);
    let jVarLocalPresentColumnIndex = jVarLocalClosestRow.dataset.columnindex;
    console.log("jVarLocalPresentColumnIndex : ", jVarLocalPresentColumnIndex);
    nextColumn({ inColumnIndex: parseInt(jVarLocalPresentColumnIndex) + 1 });
};

// BuildBsTable({ inData: jVarLocalFilteredRows });

export { StartFunc };

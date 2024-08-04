import { StartFunc as nextColumn } from "./nextColumn.js";
import { StartFunc as firstRow } from "./firstRow.js";
import { StartFunc as firstRowNextRows } from "./firstRowNextRows.js";

const tableName = "tableBS";

const StartFunc = (evt) => {
    let jVarLocalCurrentTaget = evt.currentTarget;
    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");
    let jVarLocalPresentColumnIndex = jVarLocalClosestRow.dataset.columnindex;
    let jVarLocalFiltersBodyId = document.getElementById("FiltersBodyId");

    switch (parseInt(jVarLocalPresentColumnIndex)) {
        case 0:
            firstRow({ inCurrentTarget: jVarLocalCurrentTaget });
            const firstElementChild = jVarLocalFiltersBodyId.firstElementChild;
            jVarLocalFiltersBodyId.innerHTML = '';
            jVarLocalFiltersBodyId.append(firstElementChild);
            break;
        default:
            firstRowNextRows({ inCurrentTarget: jVarLocalCurrentTaget });
            break;
    };

    nextColumn({ inColumnIndex: parseInt(jVarLocalPresentColumnIndex) + 1 });
};

const StartFunc1 = (evt) => {
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

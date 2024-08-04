import { StartFunc as insertNewRow } from "./insertNewRow.js";

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

export { StartFunc };

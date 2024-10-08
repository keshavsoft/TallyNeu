import { StartFunc as StartFuncTableTag } from "./TableTag.js";
import ColumnsJson from '../columns.json' with {type: 'json'};
const tableName = "tableBS";

const StartFunc = ({ inData, inColumnsArray }) => {
    StartFuncTableTag();
    jFLocalInitialize({ inData, inColumnsArray });
};

const jFLocalInitialize = ({ inData, inColumnsArray }) => {
    var $table = $(`#${tableName}`);

    $table.bootstrapTable("destroy").bootstrapTable({
        exportDataType: "all",
        exportTypes: ['json', 'xml', 'csv', 'txt', 'sql', 'excel', 'pdf'],
        data: inData,
        columns: inColumnsArray
    });
};

const jFLocalGetVisibleColumns = () => {
    let jVarLocalAllColumns = ColumnsJson;

    let jVarVisibleColumns = jVarLocalAllColumns.filter(element => {
        return ("visible" in element) === false || element.visible;
    });

    return jVarVisibleColumns;
};

export { StartFunc };

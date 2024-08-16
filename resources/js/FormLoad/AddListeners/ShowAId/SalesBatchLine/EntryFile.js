import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

const CommonKeyName = "SALES";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml",
        inColumnsArray: ColumnsJson
    });
    let jVarLocalDataToShow = JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName];
    console.log("aaaa : ", jVarLocalDataToShow);
    BuildBsTable({
        inData: jFLocalBatchWise({ inData: jVarLocalDataToShow }),
        inColumnsArray: ColumnsJson
    });
};

const jFLocalBatchWise = ({ inData }) => {
    let jVarLocalNewArray = [];

    inData.forEach(LoopBillLine => {
        if (Array.isArray(LoopBillLine.BATCHDETAILS)) {
            LoopBillLine.BATCHDETAILS.forEach(element => {
                let jVarlLoopInsideObject = { ...LoopBillLine, ...element };
                jVarLocalNewArray.push(jVarlLoopInsideObject);
            });
        } else {
            jVarLocalNewArray.push({ ...LoopBillLine, ...LoopBillLine.BATCHDETAILS });
        };
    });

    return jVarLocalNewArray;
};

export { StartFunc };
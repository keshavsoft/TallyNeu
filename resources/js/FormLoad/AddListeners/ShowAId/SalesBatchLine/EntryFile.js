import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";
const CommonKeyName = "SALES";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Transactions/Sales/BatchDate.xml",
        inColumnsArray: ColumnsJson
    });

    console.log("aaaa : ", JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName]);

};

export { StartFunc };
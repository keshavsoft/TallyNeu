import { StartFunc as CommonFuncs } from "../Common/WithFilters/EntryFile.js";

const CommonKeyName = "LEDGERS";
import ColumnsJson from './columns.json' with {type: 'json'};

let StartFunc = async () => {
    let jVarLocalTallyData = await CommonFuncs({
        inKeyName: CommonKeyName,
        inXmlPath: "Tally/xml/SelectCompany/Masters/Ledgers/simple.xml",
        inColumnsArray: ColumnsJson
    });

    let jVarLocalDataToShow = JSON.parse(jVarLocalTallyData).ENVELOPE[CommonKeyName];

    return jVarLocalDataToShow;
};

export { StartFunc };
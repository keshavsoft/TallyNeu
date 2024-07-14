import { StartFunc as xml2json } from "../../../../xml2json.js";
import { StartFunc as FromTally } from "./FromTally/EntryFile.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";
import { StartFunc as ToBatchWiseLines } from "./ToBatchWiseLines.js";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();

    if (jVarLocalTallyStatus.status === 200) {
        let jVarLocalResponseText = await jVarLocalTallyStatus.text();

        let dom = parseXml(jVarLocalResponseText);
        let jVarLocalJson = xml2json(dom, "");
        let jVarLocalBatchLineWise = ToBatchWiseLines({ inBillWise: JSON.parse(jVarLocalJson).ENVELOPE.SALES });
        console.log("jVarLocalBatchLineWise : ", jVarLocalBatchLineWise[0]);
        BuildBsTable({ inData: jVarLocalBatchLineWise });
    };
};

function parseXml(xml) {
    var dom = null;
    if (window.DOMParser) {
        try {
            dom = (new DOMParser()).parseFromString(xml, "text/xml");
        }
        catch (e) { dom = null; }
    }
    else if (window.ActiveXObject) {
        try {
            dom = new ActiveXObject('Microsoft.XMLDOM');
            dom.async = false;
            if (!dom.loadXML(xml)) // parse error ..

                window.alert(dom.parseError.reason + dom.parseError.srcText);
        }
        catch (e) { dom = null; }
    }
    else
        alert("cannot parse xml string!");
    return dom;
};

export { StartFunc };
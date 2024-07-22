import { StartFunc as xml2json } from "../../xml2json.js";
import { StartFunc as FromTally } from "./FromTally.js";
import { StartFunc as ShowInSelect } from "./ShowInSelect.js";

let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();

    if (jVarLocalTallyStatus.status === 200) {
        let jVarLocalResponseText = await jVarLocalTallyStatus.text();

        let dom = parseXml(jVarLocalResponseText);
        let jVarLocalJson = xml2json(dom, "");
        // console.log("jVarLocalJson : ", jVarLocalJson);
        ShowInSelect({ inJsonArray: jVarLocalJson });
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

let jFLocalToSelect = ({ inJsonArray }) => {
    let jVarLocalFromTally = JSON.parse(inJsonArray);

    let jVarLocalSelectCompanyId = document.getElementById('SelectCompanyId');

    jVarLocalSelectCompanyId.innerHTML = "";

    jVarLocalFromTally.ENVELOPE.COMPANIES.forEach(element => {
        jVarLocalSelectCompanyId.options.add(
            new Option(element.COMPANYNAME, element.COMPANYNAME)
        )
    });
};

export { StartFunc };
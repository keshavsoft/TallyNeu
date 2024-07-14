import { StartFunc as Sales } from "./Sales/EntryFile.js";
import { StartFunc as Ledgers } from "./Ledgers/EntryFile.js";

let jFLocalHideSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "none";
};

let jFLocalShowSpinner = () => {
    let jVarLocalSpinnerId = document.getElementById("SpinnerId");
    jVarLocalSpinnerId.style.display = "";
};

let StartFunc = async () => {
    jFLocalShowSpinner();
    let jVarLocalSelectedReport = jFLocalSelectReportId();

    switch (jVarLocalSelectedReport) {
        case "Sales":
            await Sales();
            break;
        case "Ledgers":
            await Ledgers();
            break;
        default:
            break;
    }

    jFLocalHideSpinner();
};

let jFLocalSelectReportId = () => {
    let jVarLocalSelectReportId = 'SelectReportId'
    let jVarLocalHtmlId = document.getElementById(jVarLocalSelectReportId);

    if (jVarLocalHtmlId === null === false) {
        return jVarLocalHtmlId.value.trim();
    };
};

export { StartFunc };
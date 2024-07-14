import { StartFunc as Sales } from "./Sales/EntryFile.js";

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
    console.log("jVarLocalSelectedReport : ", jVarLocalSelectedReport);
    switch (jVarLocalSelectedReport) {
        case "Sales":
            await Sales();
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
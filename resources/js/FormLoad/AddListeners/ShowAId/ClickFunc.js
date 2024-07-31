import { StartFunc as Sales } from "./Sales/EntryFile.js";
import { StartFunc as Ledgers } from "./Ledgers/EntryFile.js";
import { StartFunc as Items } from "./Items/EntryFile.js";
import { StartFunc as ItemsWithGroups } from "./ItemsWithGroups/EntryFile.js";
import { StartFunc as ItemGroups } from "./ItemGroups/EntryFile.js";
import { StartFunc as ItemCategories } from "./ItemCategories/EntryFile.js";

import { StartFunc as SalesBatchLine } from "./SalesBatchLine/EntryFile.js";
import { StartFunc as SalesBatchSortNumber } from "./SalesBatchSortNumber/EntryFile.js";
import { StartFunc as SalesBatchSortFilter } from "./SalesBatchSortFilter/EntryFile.js";
import { StartFunc as SalesBatchMultiSelect } from "./SalesBatchMultiSelect/EntryFile.js";
import { StartFunc as SalesBatchMultiShow } from "./SalesBatchMultiShow/EntryFile.js";

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
    // console.log("jVarLocalSelectedReport : ", jVarLocalSelectedReport);
    switch (jVarLocalSelectedReport) {
        case "ItemGroups":
            await ItemGroups();
            break;
        case "ItemCategories":
            await ItemCategories();
            break;
        case "Sales":
            await Sales();
            break;
        case "Ledgers":
            await Ledgers();
            break;
        case "Items":
            await Items();
            break;
        case "ItemsWithGroups":
            await ItemsWithGroups();
            break;
        case "SalesBatchLine":
            await SalesBatchLine();
            break;
        case "SalesBatchSortNumber":
            await SalesBatchSortNumber();
            break;
        case "SalesBatchSortFilter":
            await SalesBatchSortFilter();
            break;
        case "SalesBatchMultiSelect":
            await SalesBatchMultiSelect();
            break;
        case "SalesBatchMultiShow":
            await SalesBatchMultiShow();
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

export { StartFunc }; 92
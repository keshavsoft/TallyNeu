import { StartFunc as SelectedOptions } from "./SelectedOptions.js";
import { StartFunc as BuildBsTable } from "./BuildBsTable/EntryFile.js";

let StartFunc = () => {
    const jVarLocalSelected = SelectedOptions();

    const jVarLocalFilteredRows = jVarGlobalPresentViewData.filter(element => {
        return jVarLocalSelected.includes(element.VOUCHERNUMBER);
    });

    BuildBsTable({ inData: jVarLocalFilteredRows });
};

export { StartFunc };
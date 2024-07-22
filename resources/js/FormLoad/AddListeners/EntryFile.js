import { StartFunc as ShowAId } from "./ShowAId/EntryFile.js";
import { StartFunc as ApplyFilterId } from "./ApplyFilterId/EntryFile.js";

let StartFunc = () => {
    ShowAId();
    ApplyFilterId();
};

export { StartFunc };
import { StartFunc as StartFuncAddListeners } from "./AddListeners/EntryFile.js";
import { StartFunc as StartFuncCheckTally } from "./CheckTally/EntryFile.js";
import { StartFunc as openCompanies } from "./openCompanies/EntryFile.js";

let StartFunc = () => {
    StartFuncAddListeners();

    StartFuncCheckTally().then(() => {
        openCompanies().then(() => {
        });
    });
};

export { StartFunc };
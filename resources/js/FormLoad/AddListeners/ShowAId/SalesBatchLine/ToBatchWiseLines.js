const StartFunc = ({ inBillWise }) => {
    let jVarLocalinBillWise = inBillWise;
    let jVarLocalBatchWiseArray = [];
    console.log("inBillWise : ", inBillWise[0]);
    jVarLocalinBillWise.forEach(element => {
        if ("BATCHDETAILS" in element) {
            if (Array.isArray(element.BATCHDETAILS)) {
                element.BATCHDETAILS.forEach(LoopBatch => {
                    jVarLocalBatchWiseArray.push({
                        ...element,
                        ...LoopBatch,
                        BatchQtyOnly: LoopBatch["BATCHQTY"].split(" ")[0]
                    });
                });
            };
        };
    });

    return jVarLocalBatchWiseArray;
};

export { StartFunc };
let StartFunc = async () => {
    let jVarLocalTallyStatus = await FromTally();
    let jVarLocalMastersSvgId = document.getElementById('MastersSvgId');

    if (jVarLocalTallyStatus) {
        jVarLocalMastersSvgId.classList.remove("text-danger");
        jVarLocalMastersSvgId.classList.add("text-success");
        return;
    };

    jVarLocalMastersSvgId.classList.remove("text-success");
    jVarLocalMastersSvgId.classList.add("text-danger");
};

let FromTally = async () => {
    try {
        let jVarLocalResponse = await fetch("http://localhost:9000/");

        if (jVarLocalResponse.status === 200) {
            return await true;
        };
    } catch (error) {
        return await false;
    };
};

export { StartFunc };
const tableName = "tableBS";

const StartFunc = (evt) => {
    let jVarLocalCurrentTaget = evt.currentTarget;

    let jVarLocalClosestRow = jVarLocalCurrentTaget.closest(".row");

    let jVarLocalSelect = jVarLocalClosestRow.querySelector("select");
    let jVarLocalSelected = $(jVarLocalSelect).val();
    let data = $("#tableBS").bootstrapTable('getData', { unfiltered: true });

    const jVarLocalFilteredRows = data.filter(element => {
        return jVarLocalSelected.includes(element.VOUCHERTYPE);
    });

    var $table = $(`#${tableName}`);

    $table.bootstrapTable("load", jVarLocalFilteredRows);
};

// BuildBsTable({ inData: jVarLocalFilteredRows });

export { StartFunc };

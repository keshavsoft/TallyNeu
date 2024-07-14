import AttributesJson from './Attributes.json' with { type: "json" };
const tableName = "tableWithDateBS";

const StartFunc = () => {
    var $table = $(`#${tableName}`);

    $table.attr(AttributesJson.tableAttributes);
};

export { StartFunc };
$(".selectpicker").selectpicker({
    actionsBox: true,
    container: "body",
    countSelectedText: "counts > #",
    deselectAllText: "test",
    dropdownAlignRight: true,
    dropupAuto: true,
    header: "test",
    hideDisabled: true,
    iconBase: "fa",
    liveSearch: true,
    liveSearchNormalize: true,
    liveSearchPlaceholder: "test",
    liveSearchStyle: "contains",
    maxOptions: 10,
    maxOptionsText: "test",
    mobile: true,
    multipleSeparator: ", ",
    noneSelectedText: "test",
    selectAllText: "test",
    selectedTextFormat: "values",
    selectOnTab: true,
    showContent: true,
    showIcon: true,
    showSubtext: true,
    showTick: true,
    size: "auto",
    style: "test",
    tickIcon: "test",
    title: "test",
    width: "auto"
})

$(".selectpicker").selectpicker("val", "foo")
$(".selectpicker").selectpicker("val", ["foo", "bar"])
$(".selectpicker").selectpicker("selectAll")
$(".selectpicker").selectpicker("setStyle", "btn-large", "add")


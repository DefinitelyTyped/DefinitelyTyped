var is = {
    string: (msg: string) => {
        return true;
    },
};

// TreeView
$(() => {
    var treeview = <kendo.ui.TreeView> $("#treeview").data("kendoTreeView");

    is.string(treeview.text("#foo"));

    treeview.text("#foo", "bar");
});

// Window
$(() => {
    var window = <kendo.ui.Window> $("#window").data("kendoWindow");

    var dom = $("<em>Foo</em>");

    window.content(dom);
});

// Switch
$(() => {
    var switchId = "switch";
    var switchElement = $(`<div id="${switchId}-1"></div>`).kendoSwitch().appendTo($(document.body));
    switchElement = $(`<div id="${switchId}-2"></div>`).kendoSwitch({
        name: `${switchId}-2`,
        messages: { checked: "Yes", unchecked: "No" },
    }).appendTo($(document.body));

    var $switch = <kendo.ui.Switch> $(switchElement).data("kendoSwitch");
    $switch.readonly(true);
});

// SchedulerDataSource
$(() => {
    const dataSource = new kendo.data.SchedulerDataSource({
        data: [
            new kendo.data.SchedulerEvent({
                id: 1,
                title: "Event",
                start: new Date("2021/4/4 12:00"),
                end: new Date("2021/4/4 14:00"),
            }),
        ],
    });
    const occurrences = dataSource.expand(new Date("2021/4/1"), new Date("2021/5/1"));
    const firstOccurence = occurrences[0];
});

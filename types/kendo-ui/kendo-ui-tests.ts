var is = {
    string: (msg: string) => {
        return true;
    }
}

// TreeView
$(() => {
    var treeview = <kendo.ui.TreeView>$("#treeview").data("kendoTreeView");

    is.string(treeview.text("#foo"));

    treeview.text("#foo", "bar");
});

// Window
$(() => {
    var window = <kendo.ui.Window>$("#window").data("kendoWindow");

    var dom = $("<em>Foo</em>");

    window.content(dom);
});


// Switch
$(() => {
    var switchId = "switch";
    var switchElement = $(`<div id="${switchId}-1"></div>`).kendoSwitch().appendTo($(document.body));
    var switchElement = $(`<div id="${switchId}-2"></div>`).kendoSwitch({ name: `${switchId}-2`, messages: { checked: "Yes", unchecked: "No" } }).appendTo($(document.body));
})

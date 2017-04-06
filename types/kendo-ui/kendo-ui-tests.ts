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

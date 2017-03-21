import tabris = require("tabris");

var page = tabris.create("Page", {});

function test_events() {
  var listener = () => console.log("triggered");
  var widget = tabris.create("Composite", {});
  widget.on("foo", listener);
  widget.trigger("foo", "details");
  widget.off("foo", listener);
  widget.off("foo");
  widget.off(null, listener);
  widget.off();
}

function test_Action() {
  var widget: tabris.Action = tabris.create("Action", {});
  widget.set("foo", 23);
  widget.set({
    image: {src: "http://example.org"},
    title: "foo",
    placementPriority: "high"
  });
  var self: tabris.Action = widget.on("event", function(widget: tabris.Action) {});
}

function test_Button() {
  var widget: tabris.Button = tabris.create("Button", {});
  widget.set("foo", 23);
  widget.set({
    width: 200,
    height: 400,
    alignment: "center",
    image: {src: "http://example.org"},
    text: "foo"
  });
}

function test_CheckBox() {
  var widget: tabris.CheckBox = tabris.create("CheckBox", {});
  widget.set("foo", 23);
  widget.set({
    selection: true,
    text: "foo"
  });
}

function test_Canvas() {
  var widget: tabris.Canvas = tabris.create("Canvas", {});
  widget.set("foo", 23);
  widget.set({
  });
  var ctx: tabris.CanvasContext = widget.getContext("2d", 200, 300);
}

function test_Cell() {
  var widget: tabris.Cell = tabris.create("Cell", {});
  widget.set("foo", 23);
  widget.set({
  });
}

function test_CollectionView() {
  var widget: tabris.CollectionView = tabris.create("CollectionView", {});
  widget.set("foo", 23);
  widget.set({
    cellType: (item: any) => "foo",
    initializeCell: (cell: tabris.Cell, type: string) => {},
    itemHeight: (item: any, type: string) => 23,
    items: ["foo", "bar", "baz"],
    refreshEnabled: true,
    refreshIndicator: true,
    refreshMessage: "foo"
  });
  widget.insert(["item1", "item2"]);
  widget.insert(["item1", "item2"], 3);
  widget.refresh();
  widget.refresh(3);
  widget.remove(3);
  widget.remove(3, 2);
  widget.reveal(23);
}

function test_Composite() {
  var widget: tabris.Composite = tabris.create("Composite", {});
  widget.set("foo", 23);
  widget.set({
  });
}

function test_Drawer() {
  var widget: tabris.Drawer = tabris.create("Drawer", {});
  widget.set("foo", 23);
  widget.set({
  });
  var same: tabris.Drawer = widget.open();
  var same: tabris.Drawer = widget.close();
}

function test_ImageView() {
  var widget: tabris.ImageView = tabris.create("ImageView", {});
  widget.set("foo", 23);
  widget.set({
    image: {src: "http://example.com"},
    scaleMode: "auto"
  });
}

function test_Page() {
  var page: tabris.Page = tabris.create("Page", {});
  page.set("foo", 23);
  page.set({
    image: {src: "http://example.com"},
    title: "foo",
    topLevel: true
  });
  page.open().close();
}

function test_PageSelector() {
  var widget: tabris.PageSelector = tabris.create("PageSelector", {});
  widget.set("foo", 23);
  widget.set({
  });
}

function test_Picker() {
  var widget: tabris.Picker = tabris.create("Picker", {});
  widget.set("foo", 23);
  widget.set({
    selection: "foo",
    selectionIndex: 23,
    items: ["foo", "bar", "baz"]
  });
}

function test_ProgressBar() {
  var widget: tabris.ProgressBar = tabris.create("ProgressBar", {});
  widget.set("foo", 23);
  widget.set({
    minimum: 0,
    maximum: 100,
    selection: 23,
    state: "normal"
  });
}

function test_RadioButton() {
  var widget: tabris.RadioButton = tabris.create("RadioButton", {});
  widget.set("foo", 23);
  widget.set({
    selection: true,
    text: "foo"
  });
}

function test_ScrollView() {
  var widget: tabris.ScrollView = tabris.create("ScrollView", {});
  widget.set("foo", 23);
  widget.set({
    direction: "horizontal"
  });
}

function test_SearchAction() {
  var widget: tabris.SearchAction = tabris.create("SearchAction", {});
  widget.set("foo", 23);
  widget.set({
    message: "foo",
    proposals: ["foo", "bar", "baz"],
    text: "foo"
  });
}

function test_Slider() {
  var widget: tabris.Slider = tabris.create("Slider", {});
  widget.set("foo", 23);
  widget.set({
    minimum: 0,
    maximum: 100,
    selection: 23
  });
}

function test_Switch() {
  var widget: tabris.Switch = tabris.create("Switch", {});
  widget.set("foo", 23);
  widget.set({
    selection: true
  });
}

function test_TextInput() {
  var widget: tabris.TextInput = tabris.create("TextInput", {});
  widget.set("foo", 23);
  widget.set({
    alignment: "center",
    autoCapitalize: true,
    autoCorrect: false,
    editable: true,
    text: "foo",
    message: "bar",
    type: "search",
    keyboard: "ascii"
  });
}

function test_Tab() {
  var widget: tabris.Tab = tabris.create("Tab", {});
  widget.set("foo", 23);
  widget.set({
    badge: "foo",
    title: "bar",
    image: {src: "http://example.org"}
  });
}

function test_TabFolder() {
  var widget: tabris.TabFolder = tabris.create("TabFolder", {});
  widget.set("foo", 23);
  widget.set({
    paging: true,
    tabBarLocation: "auto",
    selection: tab1
  });
  var tab1: tabris.Tab, tab2: tabris.Tab;
  var same: tabris.TabFolder = widget.append(tab1, tab2);
}

function test_TextView() {
  var widget: tabris.TextView = tabris.create("TextView", {});
  widget.set("foo", 23);
  widget.set({
    alignment: "center",
    markupEnabled: true,
    maxLines: 23,
    text: "foo"
  });
}

function test_ToggleButton() {
  var widget: tabris.ToggleButton = tabris.create("ToggleButton", {});
  widget.set("foo", 23);
  widget.set({
    alignment: "center",
    image: {src: "http://example.org/"},
    selection: true,
    text: "foo"
  });
}

function test_Video() {
  var widget: tabris.Video = tabris.create("Video", {});
  widget.set("foo", 23);
  widget.set({
    url: "http://example.org"
  });
}

function test_WebView() {
  var widget: tabris.WebView = tabris.create("WebView", {});
  widget.set("foo", 23);
  widget.set({
    html: "<html>",
    url: "http://example.org"
  });
}

function test_WidgetCollection() {
  var collection: tabris.WidgetCollection = page.find();
  var length: number = collection.length;
  var grandParents: tabris.WidgetCollection = collection.parent().parent();
  var grandChildren: tabris.WidgetCollection = collection.children().children();
  var found: tabris.WidgetCollection = collection.find().find(".class");
  collection.appendTo(page);
  collection.dispose();
}

function test_tabris_app() {
  tabris.app.installPatch("url", (error: Error, patch: Object) => {});
  tabris.app.reload();
}

function test_tabris_device() {
  var lang: string = tabris.device.get("language");
  var model: string = tabris.device.get("model");
  var orient: string = tabris.device.get("orientation");
  var platform: string = tabris.device.get("platform");
  var factor: number = tabris.device.get("scaleFactor");
  var height: number = tabris.device.get("screenHeight");
  var width: number = tabris.device.get("screenWidth");
  var version: string = tabris.device.get("version");
  var same: tabris.Device = tabris.device.on("change:orientation", () => {}).off("change:orientation");
}

function test_tabris_ui() {
  var page: tabris.Page = tabris.ui.get("activePage");
  var bg: string = tabris.ui.get("background");
  var tc: string = tabris.ui.get("textColor");
  var visible: boolean = tabris.ui.get("toolbarVisible");
  var same: tabris.UI = tabris.ui.on("change:activePage", () => {}).off("change:activePage");
}

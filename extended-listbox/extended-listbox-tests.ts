/// <reference path="extended-listbox.d.ts" />


var $test = $("#test");

// Create Listbox with defaults
var rootElement: any = $test.listbox();


// Create with options
var options = <ListBoxOptions>{};
options.multiple = true;
options.onItemsChanged = (items: ListboxItem[]): void => {
    console.log(items);
};
options.getItems = function (): any[] {
    return ["Test1"];
};
options.searchBar = false;
options.searchBarWatermark = "Search";
options.onFilterChanged = (filter): void => {
    console.log(filter);
};
options.onValueChanged = function (value: any): void {
    console.log(value);
};
options.searchBarButton = { icon: "fa fa-search", visible: true, onClick: function () { alert(); } };

rootElement = $test.listbox(options);


// Add string item
rootElement.listbox("addItem", "Test2");


// Add item
var item: ListboxItem = <ListboxItem>{};
item.selected = true;
item.disabled = false;
item.childItems = ["Test4"];
item.groupHeader = false;
item.id = "ouetioreit";
item.index = 0;
item.text = "Test3";
var id: string = rootElement.listbox("addItem", item);


// Remove item
rootElement.listbox("removeItem", id);


// Get item
var i: ListboxItem = rootElement.listbox("getItem", id);


// Get items
var allItems: ListboxItem[] = rootElement.listbox("getItems");


// Move item up
var newIndex: number = rootElement.listbox("moveItemUp", i.id);


// Move item down
newIndex = rootElement.listbox("moveItemDown", i.id);


// Clear selection
newIndex = rootElement.listbox("clearSelection");


// Enable
newIndex = rootElement.listbox("enable", false);


// Destroy
newIndex = rootElement.listbox("destroy");




var $test = $("#test");

// Create Listbox with defaults
var instance: ExtendedListboxInstance = <ExtendedListboxInstance>$test.listbox();


// Create with options
var options = <ListBoxOptions>{};
options.multiple = true;
options.searchBar = false;
options.searchBarWatermark = "Search";
options.searchBarButton = { icon: "fa fa-search", visible: true, onClick: function () { alert(); } };
options.getItems = function (): any[] {
    return ["Test1"];
};
options.onItemsChanged = (event: ListboxEvent): void => {
    console.log(event.eventName);
    console.log(event.args);
    console.log(event.target);
};
options.onFilterChanged = (event: ListboxEvent): void => {
    console.log(event.args);
};
options.onValueChanged = function (event: ListboxEvent): void {
    console.log(event.args);
};
options.onItemDoubleClicked = function (event: ListboxEvent): void {
    console.log(event.args);
};
options.onItemEnterPressed = function (event: ListboxEvent): void {
    console.log(event.args);
};

instance = <ExtendedListboxInstance>$test.listbox(options);


/////// NEW API ///////

// Add string item
var id = instance.addItem("Test2");


// Add item
var item: ListboxItem = <ListboxItem>{};
item.selected = true;
item.disabled = false;
item.childItems = ["Test4"];
item.groupHeader = false;
item.id = "ouetioreit";
item.index = 0;
item.text = "Test3";
id = instance.addItem(item);


// Remove item
instance.removeItem(id);


// Get item
var i: ListboxItem = instance.getItem(id);


// Get items
var allItems: ListboxItem[] = instance.getItems();

// Get selected items
var allItems: ListboxItem[] = instance.getSelection();


// Move item up
var newIndex: number = instance.moveItemUp(i.id);


// Move item down
newIndex = instance.moveItemDown(i.id);


// Move item to top
var newIndex: number = instance.moveItemToTop(i.id);


// Move item to bottom
newIndex = instance.moveItemToBottom(i.id);


// Clear selection
instance.clearSelection();


// Enable
instance.enable(false);


// Destroy
instance.destroy();


// onValueChanged
instance.onValueChanged((event: ListboxEvent) => {
    console.log(event.args);
});


// onItemsChanged
instance.onItemsChanged((event: ListboxEvent) => {
    console.log(event.args);
});


// onFilterChanged
instance.onFilterChanged((event: ListboxEvent) => {
    console.log(event.args);
});


// onItemEnterPressed
instance.onItemEnterPressed((event: ListboxEvent) => {
    console.log(event.args);
});


// onItemDoubleClicked
instance.onItemDoubleClicked((event: ListboxEvent) => {
    console.log(event.args);
});



/////// LEGACY API ///////

// Add string item
instance.target.listbox("addItem", "Test2");


// Add item
var item: ListboxItem = <ListboxItem>{};
item.selected = true;
item.disabled = false;
item.childItems = ["Test4"];
item.groupHeader = false;
item.id = "ouetioreit";
item.index = 0;
item.text = "Test3";
var id: string = instance.target.listbox("addItem", item);


// Remove item
instance.target.listbox("removeItem", id);


// Get item
var i: ListboxItem = instance.target.listbox("getItem", id);


// Get items
var allItems: ListboxItem[] = instance.target.listbox("getItems");


// Move item up
var newIndex: number = instance.target.listbox("moveItemUp", i.id);


// Move item down
newIndex = instance.target.listbox("moveItemDown", i.id);


// Clear selection
instance.target.listbox("clearSelection");


// Enable
instance.target.listbox("enable", false);


// Destroy
instance.target.listbox("destroy");

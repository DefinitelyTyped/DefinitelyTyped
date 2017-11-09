const testElement: HTMLElement = document.getElementById("test");

// Create Listbox with defaults
let instance: SingleSelectListBox = new SingleSelectListBox(testElement);
instance = new MultiSelectListBox(testElement);


// Create with options
let settings = <ListBoxSettings>{};
settings.searchBar = false;
settings.searchBarWatermark = "Search";
settings.searchBarButton = { icon: "fa fa-search", visible: true, onClick: function () { alert(); } };
settings.getItems = (): (string|ListBoxItem)[] => {
    return ["Test1"];
};
settings.onItemsChanged = (event: ListBoxEvent): void => {
    console.log(event.eventName);
    console.log(event.args);
    console.log(event.target);
};
settings.onFilterChanged = (event: ListBoxEvent): void => {
    console.log(event.args);
};
settings.onValueChanged = (event: ListBoxEvent): void => {
    console.log(event.args);
};
settings.onItemDoubleClicked = (event: ListBoxEvent): void => {
    console.log(event.args);
};
settings.onItemEnterPressed = (event: ListBoxEvent): void => {
    console.log(event.args);
};

instance = new SingleSelectListBox(testElement, settings);
instance = new MultiSelectListBox(testElement, settings);


/////// NEW API ///////

// Add string item
var id: string = instance.addItem("Test2");


// Add item
var item: ListBoxItem = <ListBoxItem>{};
item.selected = true;
item.disabled = false;
item.childItems = [{ text: "Test4" }];
item.groupHeader = false;
item.id = "ouetioreit";
item.index = 0;
item.text = "Test3";
id = instance.addItem(item);


// Add string items
var ids: string[] = instance.addItems(["Test2", "Test1"]);


// Remove item
instance.removeItem(id);


// Remove items
instance.removeItems([id, ids[0]]);


// Get item
var i: ListBoxItem = instance.getItem(id);


// Get items
var allItems: ListBoxItem[] = instance.getItems();

// Get selected items
var allItems: ListBoxItem[] = instance.getSelection();


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
settings.onValueChanged = (event: ListBoxEvent) => {
    console.log(event.args);
};


// onItemsChanged
settings.onItemsChanged = (event: ListBoxEvent) => {
    console.log(event.args);
};


// onFilterChanged
settings.onFilterChanged = (event: ListBoxEvent) => {
    console.log(event.args);
};


// onItemEnterPressed
settings.onItemEnterPressed = (event: ListBoxEvent) => {
    console.log(event.args);
};


// onItemDoubleClicked
settings.onItemDoubleClicked = (event: ListBoxEvent) => {
    console.log(event.args);
};

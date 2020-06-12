import List from "list.js";

const list = new List(new HTMLElement(), {
    page: 3,
    searchClass: "class"
});

list.list; // $ExpectType HTMLElement
list.listContainer; // $ExpectType HTMLElement
list.items; // $ExpectType object[]
list.visibleItems; // $ExpectType object[]
list.matchingItems; // $ExpectType object[]
list.searched; // $ExpectType boolean
list.filtered; // $ExpectType boolean
list.alphabet; // $ExpectType string

list.add([{ // $ExpectType void
    name: "value",
    value: true
}], (item) => {}); // $ExpectType (item: ListItem) => void

list.remove("name", "value"); // $ExpectType number
list.get("name", "value"); // $ExpectType ListItem[]
list.sort("name", { // $ExpectType void
    order: "asec",
    alphabet: "ABCD1234EFGH"
});
list.search("name", ["col1", "col2"]); // $ExpectType void
list.clear(); // $ExpectType void
list.filter(); // $ExpectType void
list.filter((item) => {
    return true;
});
list.size(); // $ExpectType number
list.show(0, 0); // $ExpectType void
list.update(); // $ExpectType void
list.reIndex(); // $ExpectType void
list.fuzzySearch("search", ["col1", "col2"]); // $ExpectType void
list.on("event", () => { // void
   // Do Something
});

const item = list.get("name", "value")[0];

item.elm; // $ExpectType HTMLElement
item.values(["new1", "new2"]); // $ExpectType void
item.values(); // $ExpectType object
item.show(); // $ExpectType void
item.hide(); // $ExpectType void
item.matching(); // $ExpectType boolean
item.visible(); // $ExpectType boolean

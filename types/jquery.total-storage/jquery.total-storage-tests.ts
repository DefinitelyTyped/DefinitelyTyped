//direct call
$.totalStorage("test_key1", "test_value");
var val1:string = $.totalStorage("test_key");

//set/get
$.totalStorage.setItem("test_key2", 123);
var val2:number = $.totalStorage.getItem("test_key2");

//get all items
var list = $.totalStorage.getAll();

//delete item
var deleted = $.totalStorage.deleteItem("test_key1");
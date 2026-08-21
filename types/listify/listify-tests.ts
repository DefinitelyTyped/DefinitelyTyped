import listify = require("listify");

listify([1, "2"]); // $ExpectType string
listify([1, "2", 3], { separator: "… " }); // $ExpectType string
listify([1, "2", 3], { finalWord: false }); // $ExpectType string
listify([1, "2", 3], { separator: "… ", finalWord: "or" }); // $ExpectType string

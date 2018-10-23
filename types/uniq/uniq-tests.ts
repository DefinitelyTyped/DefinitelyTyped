

import unique = require("uniq");
var data = [1, 2, 2, 3, 4, 5, 5, 5, 6];
var datastr = ["1", "2", "2", "3", "4", "5", "5", "5", "6"];
var dataMix = ["1", 2,"2", {"2":2}, "3", "4", "5", "5", "5", "6"];
console.log(unique(data));
console.log(unique(datastr));
console.log(unique(dataMix));

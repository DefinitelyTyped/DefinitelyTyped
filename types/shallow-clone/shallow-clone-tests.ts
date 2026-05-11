import shallowClone = require("shallow-clone");

shallowClone({ a: "b" }); // $ExpectType { a: string; }

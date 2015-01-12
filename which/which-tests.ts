/// <reference path="./which.d.ts" />

import when = require("when");

when("cat", (err, path) => {
  console.log(path);
});

var path = when.sync("cat");
console.log(path);

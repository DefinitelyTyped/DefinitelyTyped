/// <reference path="./which.d.ts" />

import which = require("which");

which("cat", (err, path) => {
  console.log(path);
});

var path = which.sync("cat");
console.log(path);

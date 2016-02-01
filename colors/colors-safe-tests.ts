
///<reference path="colors-safe.d.ts" />

import colors = require("colors/safe");

console.log(colors.black.underline('test'));
console.log(colors.rainbow.black.blue.gray('test'));
console.log(colors.random.reset.bgWhite.dim('test'));

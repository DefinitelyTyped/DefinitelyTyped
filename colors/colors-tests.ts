
///<reference path="colors.d.ts" />

import colors = require("colors");

console.log(colors.black.underline('test'));
console.log(colors.rainbow.black.blue.gray('test'));
console.log(colors.random.reset.bgWhite.dim('test'));
console.log('test'.black.underline);
console.log('test'.rainbow.black.blue.gray);
console.log('test'.random.reset.bgWhite.dim);

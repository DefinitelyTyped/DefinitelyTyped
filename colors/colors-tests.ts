
///<reference path="colors.d.ts" />

import colors = require("colors");

colors.enabled = true;

console.log(colors.black.underline('test'));
console.log(colors.rainbow.black.blue.gray('test'));
console.log(colors.random.reset.bgWhite.dim('test'));
console.log(colors.random.reset.bgWhite.strip('test'));
console.log('test'.black.underline);
console.log('test'.rainbow.black.blue.gray);
console.log('test'.random.reset.bgWhite.dim);
console.log('test'.random.reset.bgWhite.dim.stripColors);

colors.enabled = false;

console.log(colors.black.underline('test'));

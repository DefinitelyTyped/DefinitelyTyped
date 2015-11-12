/// <reference path="long.d.ts" />

import Long = require("long");

var longVal = new Long(0xFFFFFFFF, 0x7FFFFFFF);
console.log(longVal.toString());
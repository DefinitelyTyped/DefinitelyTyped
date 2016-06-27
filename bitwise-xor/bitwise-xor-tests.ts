

"use strict";

import xor = require("bitwise-xor");

var b: Buffer;

b = xor("a", "b");
b = xor(new Buffer("a"), new Buffer("b"));

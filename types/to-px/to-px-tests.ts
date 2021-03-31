import toPX = require("to-px");

toPX("1em"); // $ExpectType number
toPX(".23vh"); // $ExpectType number
toPX("in"); // $ExpectType number

toPX("in", new HTMLElement()); // $ExpectType number

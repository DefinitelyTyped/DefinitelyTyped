import toPX = require("to-px");

toPX("incorrect-string"); // $ExpectType number | null
toPX("1em"); // $ExpectType number | null
toPX(".23vh"); // $ExpectType number | null
toPX("in"); // $ExpectType number | null

toPX("in", new HTMLElement()); // $ExpectType number | null

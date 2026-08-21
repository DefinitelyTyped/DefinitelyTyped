import intersect = require("intersect");

const a = ["foo", "bar", "baz"];
const b = ["nope", "bar", "baz"];
const c = ["foo", "beep", "boop"];

intersect(a, b); // ['bar', 'baz']
intersect([a, b]); // ['bar', 'baz']
intersect([a, b, c]); // []
intersect.big(a, b); // ['bar', 'baz']

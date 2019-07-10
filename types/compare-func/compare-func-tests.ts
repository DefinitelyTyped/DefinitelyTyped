import compareFunc = require("compare-func");

// This is taken from https://github.com/stevemao/compare-func/blob/master/README.md#usage and extended

// sort by an object property
[{ x: "b" }, { x: "a" }, { x: "c" }].sort(compareFunc("x"));
// => [{x: "a"}, {x: "b"}, {x: "c"}]

// sort by a nested object property
[{ x: { y: "b" } }, { x: { y: "a" } }].sort(compareFunc("x.y"));
// => [{x: {y: "a"}}, {x: {y: "b"}}]

// sort by the `x` property, then `y`
[{ x: "c", y: "c" }, { x: "b", y: "a" }, { x: "b", y: "b" }].sort(compareFunc(["x", "y"]));
// => [{x: "b", y: "a"}, {x: "b", y: "b"}, {x: "c", y: "c"}]

// sort by the returned value
[{ x: "b" }, { x: "a" }, { x: "c" }].sort(compareFunc((el) => el.x));
// => [{x: "a"}, {x: "b"}, {x: "c"}]

// sort by an array of functions
[{ x: "c", y: "c" }, { x: "b", y: "a" }, { x: "b", y: "b" }].sort(compareFunc([
    (el) => el.x,
    (el) => el.y,
]));
// => [{x: "a"}, {x: "b"}, {x: "c"}]

// sort by itself
[1, 3, 2].sort(compareFunc());
// => [1, 2, 3]

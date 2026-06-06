import fill = require("fill-range");

// $ExpectType number[]
fill(1, 10);

// $ExpectType string[]
fill("a", "z");

// $ExpectType number[]
fill(1, 10, 2);

// $ExpectType string[]
fill(1, 10, value => value.toString());

// $ExpectType string[]
fill("a", "z", {
    transform: value => value.toString(),
});

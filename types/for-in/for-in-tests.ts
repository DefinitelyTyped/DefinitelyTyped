import forIn = require("for-in");

const obj = { a: 1, b: "hello", c: true };

// Basic iteration
// $ExpectType void
forIn(obj, (value, key, o) => {});

// Early break by returning false
forIn(obj, (value, key) => {
    if (key === "b") return false;
});

// With thisArg
forIn(obj, function(value, key) {}, { context: true });

// @ts-expect-error - first argument must be an object
forIn("not an object", () => {});

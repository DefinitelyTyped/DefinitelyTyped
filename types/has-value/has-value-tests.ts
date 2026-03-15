import hasValue = require("has-value");

// Basic usage
const result: boolean = hasValue({ a: { b: "c" } }, "a.b");

// With array path
hasValue({ a: { b: "c" } }, ["a", "b"]);

// With options
hasValue({ a: "b" }, "a", { separator: "/" });

// Empty values
hasValue({ a: "" }, "a");
hasValue({ a: null }, "a");
hasValue({ a: [] }, "a");

// @ts-expect-error - path must be string or string[]
hasValue({ a: 1 }, 42);

import unionValue = require("union-value");

const obj: Record<string, any> = {};

// Basic usage
const result = unionValue(obj, "tags", ["a", "b"]);

// Append more values
unionValue(obj, "tags", ["c"]);

// Single value
unionValue(obj, "items", "foo");

// Nested path
unionValue(obj, "nested.path", [1, 2]);

// @ts-expect-error - prop must be a string
unionValue(obj, 42, "value");

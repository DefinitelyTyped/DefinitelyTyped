import extend = require("extend-shallow");

// Basic usage
const result = extend({ a: 1 }, { b: 2 });
result.a; // number
result.b; // any

// Multiple sources
extend({ a: 1 }, { b: 2 }, { c: 3 });

// Empty target
extend({}, { key: "value" });

// @ts-expect-error - target must be an object
extend(null, { a: 1 });

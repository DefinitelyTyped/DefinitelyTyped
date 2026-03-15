import staticExtend = require("static-extend");

// Basic usage
const extend = staticExtend(() => {});

extend(() => {});

// With prototype properties
extend(() => {}, { greet() {} });

// With custom extend function
const extend2 = staticExtend(() => {}, (child, parent) => {});
extend2(() => {});

// @ts-expect-error - Parent must be a function
staticExtend("not a function");

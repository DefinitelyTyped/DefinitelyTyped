import defineProperty = require("define-property");

const obj = {};

// Basic usage with value
const result = defineProperty(obj, "name", "value");

// With property descriptor
defineProperty(obj, "getter", {
    get() {
        return "hello";
    },
});

// On arrays
defineProperty([], "custom", 42);

// On functions
defineProperty(() => {}, "meta", true);

// @ts-expect-error - key must be a string
defineProperty(obj, 123, "value");

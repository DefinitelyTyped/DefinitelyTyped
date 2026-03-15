import visit = require("object-visit");

const obj = {
    set(key: string, val: unknown) {
        return this;
    },
};

// Basic usage
const result = visit(obj, "set", { a: "b", c: "d" });

// With additional arguments
visit(obj, "set", { x: 1 }, "extra");

// @ts-expect-error - method must be a string
visit(obj, 123, {});

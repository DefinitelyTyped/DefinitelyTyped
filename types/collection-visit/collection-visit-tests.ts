import visit = require("collection-visit");

const collection = {
    set(key: string, val: unknown) {
        return this;
    },
};

// Visit with an object
const result = visit(collection, "set", { a: "b", c: "d" });

// Visit with an array
visit(collection, "set", [{ a: "b" }, { c: "d" }]);

// @ts-expect-error - method must be a string
visit(collection, 123, {});

import mapVisit = require("map-visit");

const collection = {
    set(key: string, val: unknown) {
        return this;
    },
};

// Basic usage with array of objects
mapVisit(collection, "set", [{ a: "b" }, { c: "d" }]);

// With string elements
mapVisit(collection, "set", ["foo", "bar"]);

// @ts-expect-error - arr must be an array
mapVisit(collection, "set", "not an array");

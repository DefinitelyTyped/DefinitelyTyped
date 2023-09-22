import type { Diff } from "deep-diff";
import deepDiff = require("deep-diff");
const { diff, observableDiff, applyChange } = deepDiff;

let lhs = {
    name: "my object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "elements"],
    },
};

let rhs = {
    name: "updated object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "more", "elements", { than: "before" }],
    },
};

let differences: Array<Diff<any>> = diff(lhs, rhs);

console.log(differences);

// --------------------------

lhs = {
    name: "my object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "elements"],
    },
};

rhs = {
    name: "updated object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "more", "elements", { than: "before" }],
    },
};

observableDiff(lhs, rhs, d => {
    // Apply all changes except those to the 'name' property...
    if (d.path.length !== 1 || d.path.join(".") !== "name") {
        applyChange(lhs, rhs, d);
    }
});

// --------------------------

lhs = {
    name: "my object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "elements"],
    },
};

rhs = {
    name: "updated object",
    description: "it's an object!",
    details: {
        it: "has",
        an: "array",
        with: ["a", "few", "more", "elements", { than: "before" }],
    },
};

differences = deepDiff(lhs, rhs);

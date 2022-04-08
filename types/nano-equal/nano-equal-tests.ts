import nanoEqual = require("nano-equal");

const isEqual1: boolean = nanoEqual({}, {});
const isEqual2: boolean = nanoEqual({a: 1}, {a: 1});
const isEqual3: boolean = nanoEqual({a: 1}, {a: 2});
const isEqual4: boolean = nanoEqual(undefined, undefined);
const isEqual5: boolean = nanoEqual(3, false);
const isEqual6: boolean = nanoEqual("string", null);

console.log(isEqual1, isEqual2, isEqual3, isEqual4, isEqual5, isEqual6);

import isObject = require("is-object");

const obj = {};
if (isObject(obj)) isObject(obj["attr"]);

isObject(null);
isObject(undefined);
isObject(9);
isObject(new Object());
isObject(Array);

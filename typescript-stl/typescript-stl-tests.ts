/// <reference path="typescript-stl.d.ts" />

declare var global: any;
declare var require: any;

global["std"] = require("typescript-stl");

console.log(std);
std.example.test_all();
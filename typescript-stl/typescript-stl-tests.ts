/// <reference path="typescript-stl.d.ts" />

declare var global: any;
declare var require: any;

global["std"] = require("typescript-stl");
std.example.test_all();
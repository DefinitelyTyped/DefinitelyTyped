/// <reference path="samchon-framework.d.ts" />

declare var global: any;
declare var require: any;

global["samchon"] = require("samchon-framework");
console.log(samchon);
import implementation = require("./implementation");

declare function shim(): typeof implementation;
export = shim;

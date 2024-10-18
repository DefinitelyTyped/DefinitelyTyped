import impl = require("./implementation");

declare function shim(): typeof impl;
export = shim;

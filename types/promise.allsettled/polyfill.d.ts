import implementation = require("./implementation");

declare function getPolyfill(): typeof implementation;

export = getPolyfill;

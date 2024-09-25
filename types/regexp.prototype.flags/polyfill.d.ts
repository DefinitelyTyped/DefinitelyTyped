import implementation = require("./implementation");

declare function polyfill(): typeof implementation;

export = polyfill;

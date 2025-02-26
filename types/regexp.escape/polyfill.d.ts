import escape = require("./implementation");

declare function getPolyfill(): typeof escape;
export = getPolyfill;

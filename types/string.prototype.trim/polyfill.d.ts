import trim = require("./implementation");

declare function getPolyfill(): typeof trim;
export = getPolyfill;

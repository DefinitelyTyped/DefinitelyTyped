import flatMap = require("./implementation");

declare function getPolyfill(): typeof flatMap;
export = getPolyfill;

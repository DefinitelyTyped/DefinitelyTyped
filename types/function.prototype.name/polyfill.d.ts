import impl = require("./implementation");

declare function getPolyfill(): typeof impl;
export = getPolyfill;

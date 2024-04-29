import implementation = require("./implementation");
import getPolyfill = require("./polyfill");
import shim = require("./shim");

declare class AggregateError extends implementation {
    static getPolyfill: typeof getPolyfill;
    static implementation: typeof implementation;
    static shim: typeof shim;
}

export = AggregateError;

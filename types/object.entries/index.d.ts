import implementation = require("./implementation");
import getPolyfill = require("./polyfill");
import shim = require("./shim");

declare const ObjectEntries: typeof implementation & {
    readonly getPolyfill: typeof getPolyfill;
    readonly implementation: typeof implementation;
    readonly shim: typeof shim;
};
export = ObjectEntries;

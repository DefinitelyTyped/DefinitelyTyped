import implementation = require("./implementation");
import getPolyfill = require("./polyfill");
import shim = require("./shim");

type ExportedImplementationType = typeof implementation & {
    getPolyfill: typeof getPolyfill;
    implementation: typeof implementation;
    shim: typeof shim;
};

declare const exportedImplementation: ExportedImplementationType;

export = exportedImplementation;

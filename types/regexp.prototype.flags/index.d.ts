import implementation = require("./implementation");
import polyfill = require("./polyfill");
import shim = require("./shim");

type Implementation = typeof implementation;
type Polyfill = typeof polyfill;
type Shim = typeof shim;

declare namespace index {
    type Flags = implementation.Flags;

    const implementation: Implementation;
    const polyfill: Polyfill;
    const shim: Shim;
}

declare function index(re: ThisParameterType<Implementation>): implementation.Flags;

export = index;

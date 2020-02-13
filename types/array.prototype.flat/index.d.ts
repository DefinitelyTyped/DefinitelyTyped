// Type definitions for array.prototype.flat 1.2
// Project: https://github.com/es-shims/Array.prototype.flat#readme
// Definitions by: Kyle Lin <https://github.com/kylejlin>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import flatImpl = require('./implementation');

type FlatImpl = typeof flatImpl;

interface Flat extends FlatImpl {
    getPolyfill(): FlatImpl;
    implementation: FlatImpl;
    shim(): FlatImpl;
}

declare const flat: Flat;
export = flat;

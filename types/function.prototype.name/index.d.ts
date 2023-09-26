// Type definitions for function.prototype.name 1.1
// Project: https://github.com/es-shims/Function.prototype.name#readme
// Definitions by: Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import impl = require('./implementation');

type Impl = typeof impl;

type Func = (...args: any[]) => any;

interface Index {
    (fn: Func): ReturnType<Impl>;
    getPolyfill(): Impl;
    implementation: Impl;
    shim(): Impl;
}

declare const index: Index;
export = index;

import impl = require("./implementation");

type Impl = typeof impl;

type Func = ThisParameterType<Impl>;

interface Index {
    (fn: Func): ReturnType<Impl>;
    getPolyfill(): Impl;
    implementation: Impl;
    shim(): Impl;
}

declare const index: Index;
export = index;

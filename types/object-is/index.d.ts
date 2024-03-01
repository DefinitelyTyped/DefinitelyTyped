import implementation = require("./implementation");

type Implementation = typeof implementation;

interface Index {
    (
        value1: unknown,
        value2: unknown,
    ): boolean;
    getPolyfill(): Implementation;
    implementation: Implementation;
    shim(): Implementation;
}

declare const index: Index;
export = index;

import implementation = require("./implementation");

type Implementation = typeof implementation;

interface Index {
    <T>(
        array: readonly T[] | IArguments,
        callbackfn: (value: T, index: number, array: readonly T[]) => boolean,
        thisArg?: unknown,
    ): T | undefined;
    getPolyfill(): Implementation;
    implementation: Implementation;
    shim(): Implementation;
}

declare const index: Index;
export = index;

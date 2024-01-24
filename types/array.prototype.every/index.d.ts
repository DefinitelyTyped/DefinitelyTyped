import implementation = require("./implementation");

type Implementation = typeof implementation;

interface Every {
    <T>(
        array: T[] | IArguments,
        callbackfn: (value: T, index: number, array: T[]) => boolean,
        thisArg?: unknown,
    ): boolean;
    getPolyfill(): Implementation;
    implementation: Implementation;
    shim(): Implementation;
}

declare const every: Every;
export = every;

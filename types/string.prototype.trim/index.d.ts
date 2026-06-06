import trimImpl = require("./implementation");

type TrimImpl = typeof trimImpl;

type TrimBound = (thisArg: string) => string;

interface Trim extends TrimBound {
    getPolyfill(): TrimImpl;
    implementation: TrimImpl;
    shim(): TrimImpl;
}

declare const trim: Trim;
export = trim;

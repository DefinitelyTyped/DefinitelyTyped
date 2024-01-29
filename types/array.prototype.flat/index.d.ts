import flatImpl = require("./implementation");

type FlatImpl = typeof flatImpl;

interface Flat extends FlatImpl {
    getPolyfill(): FlatImpl;
    implementation: FlatImpl;
    shim(): FlatImpl;
}

declare const flat: Flat;
export = flat;

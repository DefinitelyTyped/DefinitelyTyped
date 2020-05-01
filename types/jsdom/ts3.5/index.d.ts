// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.4/index.d.ts"/>

interface Atomics {}
interface SharedArrayBufferConstructor {}

// tslint:disable-next-line: no-single-declare-module
declare module 'jsdom' {
    interface DOMWindow {
        Atomics: Atomics;
        BigInt: typeof BigInt;
        BigInt64Array: typeof BigInt64Array;
        BigUint64Array: typeof BigUint64Array;
        SharedArrayBuffer: SharedArrayBufferConstructor;
        WebAssembly: typeof WebAssembly;
    }
}

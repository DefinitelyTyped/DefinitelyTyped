// tslint:disable-next-line: no-bad-reference
/// <reference path="../ts3.4/index.d.ts"/>

// tslint:disable-next-line: no-single-declare-module
declare module 'jsdom' {
    interface DOMWindow {
        Atomics: typeof Atomics;
        BigInt: typeof BigInt;
        BigInt64Array: typeof BigInt64Array;
        BigUint64Array: typeof BigUint64Array;
        SharedArrayBuffer: typeof SharedArrayBuffer;
        WebAssembly: typeof WebAssembly;
    }
}

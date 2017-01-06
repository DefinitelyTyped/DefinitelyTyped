// Type definitions for http-assert 1.2
// Project: https://github.com/jshttp/http-assert
// Definitions by: jKey Lu <https://github.com/jkeylu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare interface createAssert {
    (value: any, status?: number, msg?: string, opts?: {}): void;
    equal(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
    notEqual(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
    strictEqual(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
    notStrictEqual(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
    deepEqual(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
    notDeepEqual(a: any, b: any, status?: number, msg?: string, opts?: {}): void;
}

declare const assert: createAssert;

export = assert;

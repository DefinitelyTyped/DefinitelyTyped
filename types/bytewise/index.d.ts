// Type definitions for bytewise 1.1
// Project: https://github.com/deanlandolt/bytewise
// Definitions by: Daniel Byrne <https://github.com/danwbyrne>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

/// <reference types= "node" />

interface Bytewise {
    encode: (value: any) => Buffer;
    decode: (value: Buffer) => any;
    [k: string]: any;
}

declare const bytewise: Bytewise;
export = bytewise;

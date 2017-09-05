// Type definitions for node-int64 v0.4.0
// Project: https://github.com/broofa/node-int64
// Definitions by: Benno Dreissig <https://github.com/x3cion>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />


declare class Int64 {

    static MAX_INT: number;
    static MIN_INT: number;

    constructor(buffer: Buffer, offset?: number);
    constructor(array: Uint8Array, offset?: number);
    constructor(str: string);
    constructor(hi: number, lo: number);


    _2scomp(): void;

    setValue(str: string): void;
    toNumber(allowImprecise?: boolean): number;
    valueOf(): number;
    toString(radix?: number): string;
    toOctetString(separator?: string): string;
    toBuffer(rawBuffer?: boolean): Buffer;
    copy(targetBuffer: Buffer, targetOffset?: number): void;
    compare(other: Int64): number;
    equals(other: Int64): boolean;
    inspect(): string;

}

export = Int64;

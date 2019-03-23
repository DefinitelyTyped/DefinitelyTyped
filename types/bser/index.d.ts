// Type definitions for bser 2.0
// Project: https://facebook.github.io/watchman/docs/bser.html
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.7

/// <reference types="node" />

import { EventEmitter } from "events";
import Int64 = require("node-int64");

export type InputWrapper =
    | Buffer
    | string
    | NodeJS.TypedArray
    | DataView
    | ArrayBuffer
    | SharedArrayBuffer;
export type IntWrapper = number | Int64;
export type AnyWrapper = boolean | IntWrapper | null | string | object;

export class Accumulator {
    buf: Buffer;
    readOffset: number;
    writeOffset: number;

    constructor(initsize?: number);

    append(buf: InputWrapper): void;

    assertReadableSize(size: number): void;

    peekDouble(): number;

    peekInt(size: number): IntWrapper;

    peekString(size: number): string;

    readAdvance(size: number): void;

    readAvail(): number;

    readDouble(): number;

    // replace "IntWrapper" with "number"?
    readInt(bytes: number): IntWrapper;

    readString(size: number): string;

    reserve(size: number): void;

    writeAvail(): number;

    writeByte(value: number): void;

    writeDouble(value: number): void;

    writeInt(value: number, size: number): void;
}

export class BunserBuf extends EventEmitter {
    buf: Accumulator;
    state: 0 | 1;
    // replace "IntWrapper" with "number"?
    pduLen?: false | IntWrapper;

    constructor();

    append(
        buf: InputWrapper,
        synchronous?: false
    ): AnyWrapper | AnyWrapper[] | undefined;
    append(buf: InputWrapper, synchronous: true): void;

    decodeAny(): AnyWrapper | AnyWrapper[];

    decodeArray(): AnyWrapper[];

    // replace "IntWrapper" with "number"?
    decodeInt(relaxSizeAsserts?: boolean): false | IntWrapper;

    decodeObject(): object;

    decodeString(): string;

    decodeTemplate(): AnyWrapper[];

    expectCode(expected: number): void;

    process(synchronous?: false): AnyWrapper | AnyWrapper[] | undefined;
    process(synchronous: true): void;

    processLater(): void;

    raise(reason: string): void;
}

export function dumpToBuffer(val: any): Buffer;

export function loadFromBuffer(input: InputWrapper): AnyWrapper | AnyWrapper[];

import { EventEmitter } from "events";

// Type definitions for bser 2.0
// Project: https://facebook.github.io/watchman/docs/bser.html
// Definitions by: Claas Ahlrichs <https://github.com/claasahl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
/// <reference types="node-int64" />

import Int64 from "node-int64";

type InputWrapper = Buffer | string | NodeJS.TypedArray | DataView | ArrayBuffer | SharedArrayBuffer;
type IntWrapper = number | Int64;
type AnyWrapper = boolean | IntWrapper | null | string | object;

export class Accumulator {
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

export namespace Accumulator {
    namespace prototype {
        function append(buf: InputWrapper): void;

        function assertReadableSize(size: number): void;

        function peekDouble(): number;
        
        function peekInt(size: number): IntWrapper;

        function peekString(size: number): string;

        function readAdvance(size: number): void;

        function readAvail(): number;

        function readDouble(): number;

        // replace "IntWrapper" with "number"?
        function readInt(bytes: number): IntWrapper;

        function readString(size: number): string;

        function reserve(size: number): void;

        function writeAvail(): number;

        function writeByte(value: number): void;

        function writeDouble(value: number): void;

        function writeInt(value: number, size: number): void;
    }

}

export class BunserBuf extends EventEmitter {
    constructor();

    append(buf: InputWrapper, synchronous?: false): AnyWrapper | AnyWrapper[] | undefined;
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

export namespace BunserBuf {
    namespace prototype {

        function append(buf: InputWrapper, synchronous?: false): AnyWrapper | AnyWrapper[] | undefined;
        function append(buf: InputWrapper, synchronous: true): void;

        function decodeAny(): AnyWrapper | AnyWrapper[];

        function decodeArray(): AnyWrapper[];

        // replace "IntWrapper" with "number"?
        function decodeInt(relaxSizeAsserts?: boolean): false | IntWrapper;

        function decodeObject(): object;

        function decodeString(): string;

        function decodeTemplate(): AnyWrapper[];

        function expectCode(expected: number): void;

        function process(synchronous?: false): AnyWrapper | AnyWrapper[] | undefined;
        function process(synchronous: true): void;

        function processLater(): void;

        function raise(reason: string): void;
    }

}

export function dumpToBuffer(val: any): Buffer;

export function loadFromBuffer(input: InputWrapper): AnyWrapper | AnyWrapper[];

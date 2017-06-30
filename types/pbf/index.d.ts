// Type definitions for pbf 3.0
// Project: https://github.com/mapbox/pbf
// Definitions by: Christian Schwarz <https://github.com/cschwarz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Pbf {
    buf: Uint8Array;
    pos: number;
    type: number;
    length: number;

    constructor(buffer?: Uint8Array);

    destroy(): void;
    readFields<T>(readField: (tag: number, result?: T, pbf?: Pbf) => void, result?: T, end?: number): T;
    readMessage<T>(readField: (tag: number, result?: T, pbf?: Pbf) => void, result?: T): T;
    readFixed32(): number;
    readSFixed32(): number;
    readFixed64(): number;
    readSFixed64(): number;
    readFloat(): number;
    readDouble(): number;
    readVarint(isSigned?: boolean): number;
    readVarint64(): number;
    readSVarint(): number;
    readBoolean(): boolean;
    readString(): string;
    readBytes(): Uint8Array;
    readPackedVarint(arr?: number[], isSigned?: boolean): number[];
    readPackedSVarint(arr?: number[]): number[];
    readPackedBoolean(arr?: boolean[]): boolean[];
    readPackedFloat(arr?: number[]): number[];
    readPackedDouble(arr?: number[]): number[];
    readPackedFixed32(arr?: number[]): number[];
    readPackedSFixed32(arr?: number[]): number[];
    readPackedFixed64(arr?: number[]): number[];
    readPackedSFixed64(arr?: number[]): number[];
    skip(val: number): void;
    writeTag(tag: number, type: number): void;
    realloc(min: number): void;
    finish(): Uint8Array;
    writeFixed32(val: number): void;
    writeSFixed32(val: number): void;
    writeFixed64(val: number): void;
    writeSFixed64(val: number): void;
    writeVarint(val: number): void;
    writeSVarint(val: number): void;
    writeBoolean(val: boolean): void;
    writeString(str: string): void;
    writeFloat(val: number): void;
    writeDouble(val: number): void;
    writeBytes(buffer: Uint8Array): void;
    writeRawMessage<T>(fn: (obj: T, pbf?: Pbf) => void, obj?: T): void;
    writeMessage<T>(tag: number, fn: (obj: T, pbf?: Pbf) => void, obj?: T): void;
    writePackedVarint(tag: number, arr: number[]): void;
    writePackedSVarint(tag: number, arr: number[]): void;
    writePackedBoolean(tag: number, arr: boolean[]): void;
    writePackedFloat(tag: number, arr: number[]): void;
    writePackedDouble(tag: number, arr: number[]): void;
    writePackedFixed32(tag: number, arr: number[]): void;
    writePackedSFixed32(tag: number, arr: number[]): void;
    writePackedFixed64(tag: number, arr: number[]): void;
    writePackedSFixed64(tag: number, arr: number[]): void;
    writeBytesField(tag: number, buffer: Uint8Array): void;
    writeFixed32Field(tag: number, val: number): void;
    writeSFixed32Field(tag: number, val: number): void;
    writeFixed64Field(tag: number, val: number): void;
    writeSFixed64Field(tag: number, val: number): void;
    writeVarintField(tag: number, val: number): void;
    writeSVarintField(tag: number, val: number): void;
    writeStringField(tag: number, str: string): void;
    writeFloatField(tag: number, val: number): void;
    writeDoubleField(tag: number, val: number): void;
    writeBooleanField(tag: number, val: boolean): void;
}

export = Pbf;

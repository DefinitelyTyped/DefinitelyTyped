export class StreamDeserializationContext {
    constructor(stream: Buffer | ArrayBuffer | Uint8Array | string | Array<number>);
    buffer: Uint8Array;
    counter: number;
    getOutput(): Uint8Array;
    getCounter(): number;
    readBuffer(l: number): Uint8Array | undefined;
    read(l: number): number[];
    readBool(): boolean;
    readVaruint(): number;
    readBytes(expectedLength?: number): number[];
    readVarbytes(maxLen: number, minLen?: number): number[];
    assertMagic(expectedMagic: number[]): void;
    assertEof(): void;
    toString(): string;
}

export class StreamSerializationContext {
    buffer: Uint8Array;
    length: number;
    getOutput(): Uint8Array;
    getLenght(): number;
    writeBool(value: boolean): void;
    writeVaruint(value: number): void;
    writeByte(value: number): void;
    writeBytes(value: number[]): void;
    writeVarbytes(value: number[]): void;
    toString(): string;
}

export class DeserializationError extends Error {
    constructor(message?: string);
}

export class BadMagicError extends DeserializationError {
    constructor(expectedMagic?: number[], actualMagic?: number[]);
}

export class UnsupportedMajorVersion extends Error {
    constructor(message?: string);
}

export class TruncationError extends DeserializationError {
    constructor(message?: string);
}

export class TrailingGarbageError extends DeserializationError {
    constructor(message?: string);
}

export class RecursionLimitError extends DeserializationError {
    constructor(message?: string);
}

export class SerializerTypeError extends TypeError {
    constructor(message?: string);
}

export class SerializerValueError extends ValueError {
    constructor(message?: string);
}

export class ValueError extends Error {
    constructor(message?: string);
}

export class TypeError extends Error {
    constructor(message?: string);
}

// Type definitions for ref-array-di 1.2
// Project: https://github.com/node-ffi-napi/ref-array-di
// Definitions by: Keerthi Niranjan <https://github.com/keerthi16>, Kiran Niranjan <https://github.com/KiranNiranjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import ref = require('ref-napi');

interface ArrayType<T> extends ref.Type {
    BYTES_PER_ELEMENT: number;
    fixedLength: number;
    /** The reference to the base type. */
    type: ref.Type;

    /**
     * Accepts a Buffer instance that should be an already-populated with data
     * for the ArrayType. The "length" of the Array is determined by searching
     * through the buffer's contents until an aligned NULL pointer is encountered.
     */
    untilZeros(buffer: Buffer): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };

    new (length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
    new (data: number[], length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
    new (data: Buffer, length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
    (length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
    (data: number[], length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
    (data: Buffer, length?: number): {
        [i: number]: T; length: number; toArray(): T[];
        toJSON(): T[]; inspect(): string; buffer: Buffer; ref(): Buffer;
    };
}

/**
 * The array type meta-constructor.
 * The returned constructor's API is highly influenced by the WebGL
 * TypedArray API.
 */
declare var ArrayType: {
    new <T>(type: ref.Type, length?: number): ArrayType<T>;
    new <T>(type: string, length?: number): ArrayType<T>;
    <T>(type: ref.Type, length?: number): ArrayType<T>;
    <T>(type: string, length?: number): ArrayType<T>;
};

export = ArrayType;

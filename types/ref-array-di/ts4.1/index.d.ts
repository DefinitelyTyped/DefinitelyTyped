import ref = require('ref-napi');

/**
 * The array type meta-constructor.
 * The returned constructor's API is highly influenced by the WebGL
 * TypedArray API.
 */
declare var ArrayType: {
    new <T>(type: string | ref.Type, length: number): array.FixedLengthArrayType<T>;
    new <T>(type: string | ref.Type, length?: number): array.ArrayType<T>;
    <T>(type: string | ref.Type, length: number): array.FixedLengthArrayType<T>;
    <T>(type: string | ref.Type, length?: number): array.ArrayType<T>;
};

type RefModuleLike = Pick<typeof ref, "coerceType" | "get" | "set" | "alignof" | "sizeof" | "readPointer" | "writePointer" | "reinterpret" | "reinterpretUntilZeros" | "ref" | "types" | "NULL">;

declare function array(ref: RefModuleLike): typeof ArrayType;
declare namespace array {
    interface TypedArray<T> {
        [i: number]: T;
        length: number;
        toArray(): T[];
        toJSON(): T[];
        inspect(): string;
        buffer: Buffer;
        ref(): Buffer;
    }
    interface ArrayType<T> extends ref.Type {
        BYTES_PER_ELEMENT: number;
        fixedLength?: number;
        /** The reference to the base type. */
        type: ref.Type;
        /**
         * Accepts a Buffer instance that should be an already-populated with data
         * for the ArrayType. The "length" of the Array is determined by searching
         * through the buffer's contents until an aligned NULL pointer is encountered.
         */
        untilZeros(buffer: Buffer): TypedArray<T>;
        new (length?: number): TypedArray<T>;
        new (data: number[], length?: number): TypedArray<T>;
        new (data: Buffer, length?: number): TypedArray<T>;
        (length?: number): TypedArray<T>;
        (data: number[], length?: number): TypedArray<T>;
        (data: Buffer, length?: number): TypedArray<T>;
    }
    interface FixedLengthArrayType<T> extends ArrayType<T> {
        fixedLength: number;
    }
}

export = array;

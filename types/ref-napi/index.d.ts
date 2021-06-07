// Type definitions for ref-napi 3.0
// Project: https://github.com/node-ffi-napi/ref-napi
// Definitions by: Keerthi Niranjan <https://github.com/keerthi16>, Kiran Niranjan <https://github.com/KiranNiranjan>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

/**
 * A set of commonly understood string names for types to help with completions.
 */
export type NamedType = "string" | "pointer" | keyof typeof types | `${keyof typeof types}${"*" | " *" | "**" | " **"}`;

/**
 * Base constraint for a type understood by the package.
 */
export type TypeLike = Type | string;

/**
 * Base constraint for a type understood by the package. This is similar to {@link TypeLike} but is more restrictive. Its
 * primary use is in overloads that take {@link TypeLike} in order to improve completions.
 */
export type NamedTypeLike = Type | NamedType;

/**
 * Gets the underlying type for a {@link Type} or {@link BaseNamedType}.
 */
export type UnderlyingType<T extends TypeLike> =
    T extends Type<infer U> ? U :
    T extends "void" ? void : // tslint:disable-line void-return
    T extends "bool" ? boolean :
    T extends "int8" | "uint8" | "int16" | "uint16" | "int32" | "uint32" | "float" | "double" | "byte" | "char" | "uchar" | "short" | "ushort" | "int" | "uint" ? number :
    T extends "int64" | "uint64" | "long" | "longlong" | "ulong" | "ulonglong" | "size_t" ? string | number :
    T extends "Object" ? unknown :
    T extends "CString" | "string" ? string | null :
    T extends "pointer" ? Pointer<any> :
    T extends `${infer U}${"" | " "}*` ? U extends "char" ? string : Pointer<UnderlyingType<U>> :
    unknown;

/**
 * Helper type to get a tuple of the underlying types of a tuple of {@link TypeLike} types.
 */
export type UnderlyingTypes<T extends readonly TypeLike[]> = Extract<{
    [P in keyof T]: P extends `${number}` ? UnderlyingType<Extract<T[P], TypeLike>> : T[P];
}, any[]>;

/**
 * Coerces a {@link TypeLike} to a {@link Type}.
 */
export type CoerceType<T extends TypeLike> = Type<UnderlyingType<T>>;

/**
 * Helper type to coerce a tuple of {@link TypeLike} types to a tuple of {@link Type} types.
 */
export type CoerceTypes<T extends readonly TypeLike[]> = Extract<{
    [P in keyof T]: P extends `${number}` ? CoerceType<Extract<T[P], TypeLike>> : T[P];
}, any[]>;

/**
 * Dereferences a type
 */
export type DerefType<T extends TypeLike> =
    UnderlyingType<T> extends Pointer<infer U> ? Type<U> :
    never;

/**
 * Helper type to deref a tuple of {@link TypeLike} types to a tuple of {@link Type} types.
 */
export type DerefTypes<T extends readonly TypeLike[]> = Extract<{
    [P in keyof T]: P extends `${number}` ? DerefType<Extract<T[P], TypeLike>> : T[P];
}, any[]>;

/**
 * A typed pointer.
 */
export interface Pointer<T> extends Buffer {
    ref(): Pointer<Pointer<T>>;
    deref(): T;
    type: Type<T>;
}

/**
 * A buffer representing a value.
 */
export interface Value<T> extends Buffer {
    ref(): Pointer<T>;
    deref(): never;
    type: Type<T>;
}

export interface Type<T = any> {
    /** The size in bytes required to hold this datatype. */
    size: number;
    /** The current level of indirection of the buffer. */
    indirection: number;
    /** To invoke when `ref.get` is invoked on a buffer of this type. */
    get(buffer: Buffer, offset: number): T;
    /** To invoke when `ref.set` is invoked on a buffer of this type. */
    set(buffer: Buffer, offset: number, value: T): void;
    /** The name to use during debugging for this datatype. */
    name?: string;
    /** The alignment of this datatype when placed inside a struct. */
    alignment?: number;
}

/** A Buffer that references the C NULL pointer. */
export declare var NULL: Value<null>;

/** A pointer-sized buffer pointing to NULL. */
export declare var NULL_POINTER: Pointer<Value<null>>;

/** Get the memory address of buffer. */
export declare function address(buffer: Buffer): number;

/** Get the memory address of buffer. */
export declare function hexAddress(buffer: Buffer): string;

/** Allocate the memory with the given value written to it. */
export declare function alloc<TType extends NamedType>(type: TType, value?: UnderlyingType<TType>):
    [UnderlyingType<TType>] extends [never] | [0] ? Value<any> :
    UnderlyingType<TType> extends Buffer ? UnderlyingType<TType> :
    Value<UnderlyingType<TType>>;
/** Allocate the memory with the given value written to it. */
export declare function alloc<TType extends TypeLike>(type: TType, value?: UnderlyingType<TType>):
    [UnderlyingType<TType>] extends [never] | [0] ? Value<any> :
    UnderlyingType<TType> extends Buffer ? UnderlyingType<TType> :
    Value<UnderlyingType<TType>>;

/**
 * Allocate the memory with the given string written to it with the given
 * encoding (defaults to utf8). The buffer is 1 byte longer than the
 * string itself, and is NULL terminated.
 */
export declare function allocCString(string: string, encoding?: BufferEncoding): Value<string>;
export declare function allocCString(string: string | null, encoding?: BufferEncoding): Value<string | null>;

/** Coerce a type. String are looked up from the ref.types object. */
export declare function coerceType<T extends NamedType>(type: T): Type<UnderlyingType<T>>;
export declare function coerceType<T extends TypeLike>(type: T): Type<UnderlyingType<T>>;

/**
 * Get value after dereferencing buffer.
 * That is, first it checks the indirection count of buffer's type, and
 * if it's greater than 1 then it merely returns another Buffer, but with
 * one level less indirection.
 */
export declare function deref<T>(buffer: Pointer<T>): T;
export declare function deref(buffer: Buffer): any;

/** Create clone of the type, with decremented indirection level by 1. */
export declare function derefType<T extends NamedType>(type: T): DerefType<T>;
export declare function derefType<T extends TypeLike>(type: T): DerefType<T>;
export declare function derefType(type: TypeLike): Type;

/** Represents the native endianness of the processor ("LE" or "BE"). */
export declare var endianness: "LE" | "BE";

/** Check the indirection level and return a dereferenced when necessary. */
export declare function get<T>(buffer: Pointer<T> | Value<T>, offset?: 0): T;
export declare function get<T extends NamedType>(buffer: Buffer, offset: number | undefined, type: T): UnderlyingType<T>;
export declare function get<T extends TypeLike>(buffer: Buffer, offset: number | undefined, type: T): UnderlyingType<T>;
export declare function get(buffer: Buffer, offset?: number, type?: TypeLike): any;

/** Get type of the buffer. Create a default type when none exists. */
export declare function getType<T>(buffer: Pointer<T>): Type<T>;
export declare function getType(buffer: Buffer): Type;

/** Check the NULL. */
export declare function isNull(buffer: Buffer): boolean;

/** Read C string until the first NULL. */
export declare function readCString(buffer: Buffer, offset?: number): string;

/**
 * Read a big-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64BE(buffer: Buffer, offset?: number): number | string;

/**
 * Read a little-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64LE(buffer: Buffer, offset?: number): number | string;

/** Read a JS Object that has previously been written. */
export declare function readObject<T>(buffer: Pointer<T>, offset?: 0): T;
export declare function readObject(buffer: Buffer, offset?: number): Object;

/** Read data from the pointer. */
export declare function readPointer(buffer: Buffer, offset?: number, length?: number): Buffer;

/**
 * Read a big-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64BE(buffer: Buffer, offset?: number): string | number;

/**
 * Read a little-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64LE(buffer: Buffer, offset?: number): string | number;

/** Create pointer to buffer. */
export declare function ref<T>(buffer: Pointer<T>): Pointer<Pointer<T>>;
export declare function ref<T>(buffer: Value<T>): Pointer<T>;
export declare function ref(buffer: Buffer): Buffer;

/** Create clone of the type, with incremented indirection level by 1. */
export declare function refType<T extends NamedTypeLike>(type: T): Type<Pointer<UnderlyingType<T>>>;
export declare function refType<T extends TypeLike>(type: T): Type<Pointer<UnderlyingType<T>>>;
export declare function refType(type: TypeLike): Type;

/**
 * Create buffer with the specified size, with the same address as source.
 * This function "attaches" source to the returned buffer to prevent it from
 * being garbage collected.
 */
export declare function reinterpret(buffer: Buffer, size: number, offset?: number): Buffer;

/**
 * Scan past the boundary of the buffer's length until it finds size number
 * of aligned NULL bytes.
 */
export declare function reinterpretUntilZeros(buffer: Buffer, size: number, offset?: number): Buffer;

/** Write pointer if the indirection is 1, otherwise write value. */
export declare function set<T>(buffer: Pointer<T> | Value<T>, offset: 0, value: T): void;
export declare function set<T extends NamedType>(buffer: Buffer, offset: number, value: UnderlyingType<T>, type: T): void;
export declare function set<T extends TypeLike>(buffer: Buffer, offset: number, value: UnderlyingType<T>, type: T): void;
export declare function set(buffer: Buffer, offset: number, value: any, type?: TypeLike): void;

/** Write the string as a NULL terminated. Default encoding is utf8. */
export declare function writeCString(buffer: Buffer, offset: number, string: string, encoding?: BufferEncoding): void;

/** Write a big-endian signed 64-bit int. */
export declare function writeInt64BE(buffer: Buffer, offset: number, input: string | number): void;

/** Write a little-endian signed 64-bit int. */
export declare function writeInt64LE(buffer: Buffer, offset: number, input: string | number): void;

/**
 * Write the JS Object. This function "attaches" object to buffer to prevent
 * it from being garbage collected.
 */
export declare function writeObject<T>(buffer: Value<T>, offset: 0, object: T): void;
export declare function writeObject(buffer: Buffer, offset: number, object: Object): void;

/**
 * Write the memory address of pointer to buffer at the specified offset. This
 * function "attaches" object to buffer to prevent it from being garbage collected.
 */
export declare function writePointer(buffer: Buffer, offset: number, pointer: Buffer): void;

/** Write a big-endian unsigned 64-bit int. */
export declare function writeUInt64BE(buffer: Buffer, offset: number, input: string | number): void;

/** Write a little-endian unsigned 64-bit int. */
export declare function writeUInt64LE(buffer: Buffer, offset: number, input: string | number): void;

/**
 * Attach object to buffer such.
 * It prevents object from being garbage collected until buffer does.
 */
export declare function _attach(buffer: Buffer, object: Object): void;

/** Same as ref.reinterpret, except that this version does not attach buffer. */
export declare function _reinterpret(buffer: Buffer, size: number, offset?: number): Buffer;

/** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
export declare function _reinterpretUntilZeros(buffer: Buffer, size: number, offset?: number): Buffer;

/** Same as ref.writePointer, except that this version does not attach pointer. */
export declare function _writePointer(buffer: Buffer, offset: number, pointer: Buffer): void;

/** Same as ref.writeObject, except that this version does not attach object. */
export declare function _writeObject<T>(buffer: Value<T>, offset: 0, object: T): void;
export declare function _writeObject(buffer: Buffer, offset: number, object: Object): void;

/** Default types. */
export declare var types: {
    void: Type<void>;
    int64: Type<string | number>;
    ushort: Type<number>;
    int: Type<number>;
    uint64: Type<string | number>;
    float: Type<number>;
    uint: Type<number>;
    long: Type<string | number>;
    double: Type<number>;
    int8: Type<number>;
    ulong: Type<string | number>;
    Object: Type<unknown>;
    uint8: Type<number>;
    longlong: Type<string | number>;
    CString: Type<string | null>;
    int16: Type<number>;
    ulonglong: Type<string | number>;
    bool: Type<boolean>;
    uint16: Type<number>;
    char: Type<number>;
    byte: Type<number>;
    int32: Type<number>;
    uchar: Type<number>;
    size_t: Type<string | number>;
    uint32: Type<number>;
    short: Type<number>;
};

export declare var alignof: {
    pointer: number;
    int64: number;
    ushort: number;
    int: number;
    uint64: number;
    float: number;
    uint: number;
    long: number;
    double: number;
    int8: number;
    ulong: number;
    Object: number;
    uint8: number;
    longlong: number;
    int16: number;
    ulonglong: number;
    bool: number;
    uint16: number;
    char: number;
    byte: number;
    int32: number;
    uchar: number;
    size_t: number;
    uint32: number;
    short: number;
};

export declare var sizeof: {
    pointer: number;
    int64: number;
    ushort: number;
    int: number;
    uint64: number;
    float: number;
    uint: number;
    long: number;
    double: number;
    int8: number;
    ulong: number;
    Object: number;
    uint8: number;
    longlong: number;
    int16: number;
    ulonglong: number;
    bool: number;
    uint16: number;
    char: number;
    byte: number;
    int32: number;
    uchar: number;
    size_t: number;
    uint32: number;
    short: number;
};

declare global {
  interface Buffer {
    address(): number;
    hexAddress(): string;
    isNull(): boolean;
    ref(): Buffer;
    deref(): any;
    readObject(offset?: number): Object;
    writeObject(offset: number, object: Object): void;
    readPointer(offset?: number, length?: number): Buffer;
    writePointer(offset: number, pointer: Buffer): void;
    readCString(offset?: number): string;
    writeCString(offset: number, string: string, encoding?: string): void;
    readInt64BE(offset?: number): string | number;
    writeInt64BE(offset: number, input: string | number): void;
    readUInt64BE(offset?: number): string | number;
    writeUInt64BE(offset: number, input: string | number): void;
    readInt64LE(offset?: number): string | number;
    writeInt64LE(offset: number, input: string | number): void;
    readUInt64LE(offset?: number): string | number;
    writeUInt64LE(offset: number, input: string | number): void;
    reinterpret(size: number, offset?: number): Buffer;
    reinterpretUntilZeros(size: number, offset?: number): Buffer;
    type?: Type;
  }
}

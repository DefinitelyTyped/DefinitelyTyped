import ref = require("ref-napi");

/**
 * The array type meta-constructor.
 * The returned constructor's API is highly influenced by the WebGL
 * TypedArray API.
 */
declare var ArrayType: {
    // NOTE: The `ref.NamedType` overload is a subset of the `ref.TypeLike` overload, but provides better completions.
    new<TType extends ref.NamedType, TLength extends number = number>(
        type: TType,
        length: TLength,
    ): array.FixedLengthArrayType<ref.UnderlyingType<TType>, TLength>;
    new<TType extends ref.TypeLike, TLength extends number = number>(
        type: TType,
        length: TLength,
    ): array.FixedLengthArrayType<ref.UnderlyingType<TType>, TLength>;
    new<T, TLength extends number = number>(
        type: ref.TypeLike,
        length: TLength,
    ): array.FixedLengthArrayType<T, TLength>;
    // NOTE: The `ref.NamedType` overload is a subset of the `ref.TypeLike` overload, but provides better completions.
    new<TType extends ref.NamedType>(type: TType, length?: number): array.ArrayType<ref.UnderlyingType<TType>>;
    new<TType extends ref.TypeLike>(type: TType, length?: number): array.ArrayType<ref.UnderlyingType<TType>>;
    new<T>(type: ref.TypeLike, length?: number): array.ArrayType<T>;

    // NOTE: The `ref.NamedType` overload is a subset of the `ref.TypeLike` overload, but provides better completions.
    <TType extends ref.NamedType, TLength extends number = number>(
        type: TType,
        length: TLength,
    ): array.FixedLengthArrayType<ref.UnderlyingType<TType>, TLength>;
    <TType extends ref.TypeLike, TLength extends number = number>(
        type: TType,
        length: TLength,
    ): array.FixedLengthArrayType<ref.UnderlyingType<TType>, TLength>;
    <T, TLength extends number = number>(type: ref.TypeLike, length: TLength): array.FixedLengthArrayType<T, TLength>;
    // NOTE: The `ref.NamedType` overload is a subset of the `ref.TypeLike` overload, but provides better completions.
    <TType extends ref.NamedType>(type: TType, length?: number): array.ArrayType<ref.UnderlyingType<TType>>;
    <TType extends ref.TypeLike>(type: TType, length?: number): array.ArrayType<ref.UnderlyingType<TType>>;
    <T>(type: ref.TypeLike, length?: number): array.ArrayType<T>;
};

type RefModuleLike = Pick<
    typeof ref,
    | "coerceType"
    | "get"
    | "set"
    | "alignof"
    | "sizeof"
    | "readPointer"
    | "writePointer"
    | "reinterpret"
    | "reinterpretUntilZeros"
    | "ref"
    | "types"
    | "NULL"
>;

declare function array(ref: RefModuleLike): typeof ArrayType;
declare namespace array {
    interface TypedArray<T, TLength extends number = number> {
        [i: number]: T;
        length: TLength;
        toArray(): T[];
        toJSON(): T[];
        inspect(): string;
        buffer: Buffer;
        ref(): Buffer;
    }

    interface ArrayType<T> extends ref.Type<TypedArray<T>> {
        BYTES_PER_ELEMENT: number;
        fixedLength?: number | undefined;

        /** The reference to the base type. */
        type: ref.Type<T>;

        /**
         * Accepts a Buffer instance that should be an already-populated with data
         * for the ArrayType. The "length" of the Array is determined by searching
         * through the buffer's contents until an aligned NULL pointer is encountered.
         */
        untilZeros(buffer: Buffer): TypedArray<T>;

        new<TLength extends number>(length: TLength): TypedArray<T, TLength>;
        new(length?: number): TypedArray<T>;
        new<TLength extends number>(data: readonly number[], length: TLength): TypedArray<T, TLength>;
        new<TData extends readonly number[] | []>(data: TData): TypedArray<T, TData["length"]>;
        new(data: readonly number[], length?: number): TypedArray<T>;
        new<TLength extends number>(data: Buffer, length: TLength): TypedArray<T, TLength>;
        new(data: Buffer, length?: number): TypedArray<T>;

        <TLength extends number>(length: TLength): TypedArray<T, TLength>;
        (length?: number): TypedArray<T>;
        <TLength extends number>(data: readonly number[], length: TLength): TypedArray<T, TLength>;
        <TData extends readonly number[] | []>(data: TData): TypedArray<T, TData["length"]>;
        (data: readonly number[], length?: number): TypedArray<T>;
        <TLength extends number>(data: Buffer, length: TLength): TypedArray<T, TLength>;
        (data: Buffer, length?: number): TypedArray<T>;
    }

    interface FixedLengthArrayType<T, TLength extends number = number>
        extends ArrayType<T>, ref.Type<TypedArray<T, TLength>>
    {
        fixedLength: TLength;

        /**
         * Accepts a Buffer instance that should be an already-populated with data
         * for the ArrayType. The "length" of the Array is determined by searching
         * through the buffer's contents until an aligned NULL pointer is encountered.
         */
        untilZeros(buffer: Buffer): TypedArray<T, TLength>;

        new(): TypedArray<T, TLength>;
        new<TLength extends number>(length: TLength): TypedArray<T, TLength>;
        new(length?: number): TypedArray<T>;
        new(data: readonly number[]): TypedArray<T, TLength>;
        new<TLength extends number>(data: readonly number[], length: TLength): TypedArray<T, TLength>;
        new(data: readonly number[], length?: number): TypedArray<T>;
        new(data: Buffer): TypedArray<T, TLength>;
        new<TLength extends number>(data: Buffer, length: TLength): TypedArray<T, TLength>;
        new(data: Buffer, length?: number): TypedArray<T>;

        (): TypedArray<T, TLength>;
        <TLength extends number>(length: TLength): TypedArray<T, TLength>;
        (length?: number): TypedArray<T>;
        (data: readonly number[]): TypedArray<T, TLength>;
        <TLength extends number>(data: readonly number[], length: TLength): TypedArray<T, TLength>;
        (data: readonly number[], length?: number): TypedArray<T>;
        (data: Buffer): TypedArray<T, TLength>;
        <TLength extends number>(data: Buffer, length: TLength): TypedArray<T, TLength>;
        (data: Buffer, length?: number): TypedArray<T>;

        get(buffer: Buffer, offset: number): TypedArray<T, TLength>;
        set(buffer: Buffer, offset: number, value: TypedArray<T, TLength>): void;
    }
}

export = array;

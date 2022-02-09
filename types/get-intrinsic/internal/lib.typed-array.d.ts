export {};

type numeric = number | bigint;
export interface TypedArrayLike<T extends numeric = numeric> extends Readonly<ArrayBufferView> {
    /** The length of the array. */
    readonly length: number;
    [index: number]: T;
}

export interface TypedArrayConstructor {
    readonly prototype: TypedArrayPrototype;
    new (...args: unknown[]): TypedArrayPrototype;

    /**
     * Returns a new typed array from a set of elements.
     * @param items A set of elements to include in the new typed array object.
     */
    of(this: new (length: number) => Int8Array, ...items: number[]): Int8Array;
    of(this: new (length: number) => Uint8Array, ...items: number[]): Uint8Array;
    of(this: new (length: number) => Uint8ClampedArray, ...items: number[]): Uint8ClampedArray;

    of(this: new (length: number) => Int16Array, ...items: number[]): Int16Array;
    of(this: new (length: number) => Uint16Array, ...items: number[]): Uint16Array;

    of(this: new (length: number) => Int32Array, ...items: number[]): Int32Array;
    of(this: new (length: number) => Uint32Array, ...items: number[]): Uint32Array;

    // For whatever reason, `array-type` considers `bigint` a non-simple type:
    // tslint:disable: array-type
    of(this: new (length: number) => BigInt64Array, ...items: bigint[]): BigInt64Array;
    of(this: new (length: number) => BigUint64Array, ...items: bigint[]): BigUint64Array;
    // tslint:enable: array-type

    of(this: new (length: number) => Float32Array, ...items: number[]): Float32Array;
    of(this: new (length: number) => Float64Array, ...items: number[]): Float64Array;

    /**
     * Creates a new typed array from an array-like or iterable object.
     * @param source An array-like or iterable object to convert to a typed array.
     * @param mapfn A mapping function to call on every element of the source object.
     * @param thisArg Value of 'this' used to invoke the mapfn.
     */
    from(this: new (length: number) => Int8Array, source: Iterable<number> | ArrayLike<number>): Int8Array;
    from<U>(
        this: new (length: number) => Int8Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Int8Array;

    from(this: new (length: number) => Uint8Array, source: Iterable<number> | ArrayLike<number>): Uint8Array;
    from<U>(
        this: new (length: number) => Uint8Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Uint8Array;

    from(
        this: new (length: number) => Uint8ClampedArray,
        source: Iterable<number> | ArrayLike<number>,
    ): Uint8ClampedArray;
    from<U>(
        this: new (length: number) => Uint8ClampedArray,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Uint8ClampedArray;

    from(this: new (length: number) => Int16Array, source: Iterable<number> | ArrayLike<number>): Int16Array;
    from<U>(
        this: new (length: number) => Int16Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Int16Array;

    from(this: new (length: number) => Uint16Array, source: Iterable<number> | ArrayLike<number>): Uint16Array;
    from<U>(
        this: new (length: number) => Uint16Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Uint16Array;

    from(this: new (length: number) => Int32Array, source: Iterable<number> | ArrayLike<number>): Int32Array;
    from<U>(
        this: new (length: number) => Int32Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Int32Array;

    from(this: new (length: number) => Uint32Array, source: Iterable<number> | ArrayLike<number>): Uint32Array;
    from<U>(
        this: new (length: number) => Uint32Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Uint32Array;

    from(this: new (length: number) => BigInt64Array, source: Iterable<bigint> | ArrayLike<bigint>): BigInt64Array;
    from<U>(
        this: new (length: number) => BigInt64Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => bigint,
        thisArg?: unknown,
    ): BigInt64Array;

    from(this: new (length: number) => BigUint64Array, source: Iterable<bigint> | ArrayLike<bigint>): BigUint64Array;
    from<U>(
        this: new (length: number) => BigUint64Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => bigint,
        thisArg?: unknown,
    ): BigUint64Array;

    from(this: new (length: number) => Float32Array, source: Iterable<number> | ArrayLike<number>): Float32Array;
    from<U>(
        this: new (length: number) => Float32Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Float32Array;

    from(this: new (length: number) => Float64Array, source: Iterable<number> | ArrayLike<number>): Float64Array;
    from<U>(
        this: new (length: number) => Float64Array,
        source: Iterable<U> | ArrayLike<U>,
        mapfn: (v: U, k: number) => number,
        thisArg?: unknown,
    ): Float64Array;
}

export interface TypedArrayPrototype {
    /** The ArrayBuffer instance referenced by the array. */
    readonly buffer: ArrayBufferLike;

    /** The length in bytes of the array. */
    readonly byteLength: number;

    /** The offset in bytes of the array. */
    readonly byteOffset: number;

    /**
     * Returns the this object after copying a section of the array identified by start and end
     * to the same array starting at position target
     * @param target If target is negative, it is treated as length+target where length is the
     * length of the array.
     * @param start If start is negative, it is treated as length+start. If end is negative, it
     * is treated as length+end.
     * @param end If not specified, length of the this object is used as its default value.
     */
    copyWithin<THIS extends TypedArrayLike>(this: THIS, target: number, start: number, end?: number): THIS;

    /** Yields index, value pairs for every entry in the array. */
    entries<T extends numeric>(this: TypedArrayLike<T>): IterableIterator<[number, T]>;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param callbackfn A function that accepts up to three arguments. The every method calls
     * the callbackfn function for each element in the array until the callbackfn returns false,
     * or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): boolean;

    /**
     * Returns the this object after filling the section identified by start and end with value
     * @param value value to fill array section with
     * @param start index to start filling the array at. If start is negative, it is treated as
     * length+start where length is the length of the array.
     * @param end index to stop filling the array at. If end is negative, it is treated as
     * length+end.
     */
    fill<T extends numeric, THIS extends TypedArrayLike<T>>(this: THIS, value: T, start?: number, end?: number): THIS;

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls
     * the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    filter<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): THIS;

    /**
     * Returns the value of the first element in the array where predicate is true, and undefined
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found, find
     * immediately returns that element value. Otherwise, find returns undefined.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    find<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): T | undefined;

    /**
     * Returns the index of the first element in the array where predicate is true, and -1
     * otherwise.
     * @param predicate find calls predicate once for each element of the array, in ascending
     * order, until it finds one where predicate returns true. If such an element is found,
     * findIndex immediately returns that element index. Otherwise, findIndex returns -1.
     * @param thisArg If provided, it will be used as the this value for each invocation of
     * predicate. If it is not provided, undefined is used instead.
     */
    findIndex<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): number;

    /**
     * Performs the specified action for each element in an array.
     * @param callbackfn A function that accepts up to three arguments. forEach calls the
     * callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    forEach<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        callbackfn: (value: T, index: number, array: THIS) => void,
        thisArg?: unknown,
    ): void;

    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    includes<T extends numeric>(this: TypedArrayLike<T>, searchElement: T, fromIndex?: number): boolean;

    /**
     * Returns the index of the first occurrence of a value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
     * search starts at index 0.
     */
    indexOf<T extends numeric>(this: TypedArrayLike<T>, searchElement: T, fromIndex?: number): boolean;

    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param separator A string used to separate one element of an array from the next in the
     * resulting String. If omitted, the array elements are separated with a comma.
     */
    join(this: TypedArrayLike, separator?: string): string;

    /** Yields each index in the array. */
    keys(this: TypedArrayLike): IterableIterator<number>;

    /**
     * Returns the index of the last occurrence of a value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
     * search starts at index 0.
     */
    lastIndexOf<T extends numeric>(this: TypedArrayLike<T>, searchElement: T, fromIndex?: number): boolean;

    /** The length of the array. */
    readonly length: number;

    /**
     * Calls a defined callback function on each element of an array, and returns an array that
     * contains the results.
     * @param callbackfn A function that accepts up to three arguments. The map method calls the
     * callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    map<T extends numeric, THIS extends TypedArrayLike>(
        this: THIS,
        mapper: (value: T, index: number, array: THIS) => T,
        thisArg?: unknown,
    ): THIS;

    /**
     * Calls the specified callback function for all the elements in an array. The return value of
     * the callback function is the accumulated result, and is provided as an argument in the next
     * call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduce method calls the
     * callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an argument
     * instead of an array value.
     */
    reduce<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        reducer: (previousValue: T, currentValue: T, currentIndex: number, array: THIS) => T,
    ): T;
    reduce<T extends numeric, U, THIS extends TypedArrayLike<T>>(
        this: THIS,
        reducer: (previousValue: U, currentValue: T, currentIndex: number, array: THIS) => U,
        initialValue: U,
    ): U;

    /**
     * Calls the specified callback function for all the elements in an array, in descending order.
     * The return value of the callback function is the accumulated result, and is provided as an
     * argument in the next call to the callback function.
     * @param callbackfn A function that accepts up to four arguments. The reduceRight method calls
     * the callbackfn function one time for each element in the array.
     * @param initialValue If initialValue is specified, it is used as the initial value to start
     * the accumulation. The first call to the callbackfn function provides this value as an
     * argument instead of an array value.
     */
    reduceRight<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        reducer: (previousValue: T, currentValue: T, currentIndex: number, array: THIS) => T,
    ): T;
    reduceRight<T extends numeric, U, THIS extends TypedArrayLike<T>>(
        this: THIS,
        reducer: (previousValue: U, currentValue: T, currentIndex: number, array: THIS) => U,
        initialValue: U,
    ): U;

    /** Reverses the elements in the array. */
    reverse<THIS extends TypedArrayLike>(this: THIS): THIS;

    /**
     * Sets a value or an array of values.
     * @param array A typed or untyped array of values to set.
     * @param offset The index in the current array at which the values are to be written.
     */
    set<T extends numeric>(this: TypedArrayLike<T>, array: ArrayLike<T>, offset?: number): void;

    /**
     * Returns a section of an array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array.
     */
    slice<THIS extends TypedArrayLike>(this: THIS, start?: number, end?: number): THIS;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param callbackfn A function that accepts up to three arguments. The some method calls the
     * callbackfn function for each element in the array until the callbackfn returns true, or until
     * the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some<T extends numeric, THIS extends TypedArrayLike<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): boolean;

    /**
     * Sorts the array.
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
     */
    sort<T extends numeric, THIS extends TypedArrayLike<T>>(this: THIS, comparator?: (a: T, b: T) => number): THIS;

    /**
     * Gets a new subview of the ArrayBuffer store for this array, referencing the elements
     * at begin, inclusive, up to end, exclusive.
     * @param begin The index of the beginning of the array.
     * @param end The index of the end of the array.
     */
    subarray<THIS extends TypedArrayLike>(this: THIS, begin?: number, end?: number): THIS;

    /** Converts the array to a string by using the current locale. */
    toLocaleString(this: TypedArrayLike, locales?: string | string[], options?: Intl.NumberFormatOptions): string;

    /** Returns a string representation of the array. */
    toString(): string;

    /** Yields each value in the array. */
    values<T extends numeric>(this: TypedArrayLike<T>): IterableIterator<T>;

    /** Yields each value in the array. */
    [Symbol.iterator]<T extends numeric>(this: TypedArrayLike<T>): IterableIterator<T>;

    readonly [Symbol.toStringTag]: string | undefined;
}

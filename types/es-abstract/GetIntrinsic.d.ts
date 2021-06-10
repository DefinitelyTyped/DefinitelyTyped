/**
 * Returns the ECMAScript intrinsic for the name.
 *
 * @param name The ECMAScript intrinsic name
 * @param allowMissing Whether the intrinsic can be missing in this environment
 *
 * @throws {SyntaxError} If the ECMAScript intrinsic doesn't exist
 * @throws {TypeError} If the ECMAScript intrinsic exists, but not in this environment and `allowMissing` is `false`.
 */
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
    name: K,
    allowMissing?: false,
): GetIntrinsic.Intrinsics[K];
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
    name: K,
    allowMissing: true,
): GetIntrinsic.Intrinsics[K] | undefined;
declare function GetIntrinsic<K extends keyof GetIntrinsic.Intrinsics>(
    name: K,
    allowMissing?: boolean,
): GetIntrinsic.Intrinsics[K] | undefined;
declare function GetIntrinsic(name: string, allowMissing?: boolean): unknown;
export = GetIntrinsic;

type numeric = number | bigint;
interface TypedArray<T extends numeric = numeric> extends Readonly<ArrayBufferView> {
    /** The length of the array. */
    readonly length: number;
    [index: number]: T;
}

interface TypedArrayConstructor {
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

interface TypedArrayPrototype {
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
    copyWithin<THIS extends TypedArray>(this: THIS, target: number, start: number, end?: number): THIS;

    /** Yields index, value pairs for every entry in the array. */
    entries<T extends numeric>(this: TypedArray<T>): IterableIterator<[number, T]>;

    /**
     * Determines whether all the members of an array satisfy the specified test.
     * @param callbackfn A function that accepts up to three arguments. The every method calls
     * the callbackfn function for each element in the array until the callbackfn returns false,
     * or until the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    every<T extends numeric, THIS extends TypedArray<T>>(
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
    fill<T extends numeric, THIS extends TypedArray<T>>(this: THIS, value: T, start?: number, end?: number): THIS;

    /**
     * Returns the elements of an array that meet the condition specified in a callback function.
     * @param callbackfn A function that accepts up to three arguments. The filter method calls
     * the callbackfn function one time for each element in the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    filter<T extends numeric, THIS extends TypedArray<T>>(
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
    find<T extends numeric, THIS extends TypedArray<T>>(
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
    findIndex<T extends numeric, THIS extends TypedArray<T>>(
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
    forEach<T extends numeric, THIS extends TypedArray<T>>(
        this: THIS,
        callbackfn: (value: T, index: number, array: THIS) => void,
        thisArg?: unknown,
    ): void;

    /**
     * Determines whether an array includes a certain element, returning true or false as appropriate.
     * @param searchElement The element to search for.
     * @param fromIndex The position in this array at which to begin searching for searchElement.
     */
    includes<T extends numeric>(this: TypedArray<T>, searchElement: T, fromIndex?: number): boolean;

    /**
     * Returns the index of the first occurrence of a value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
     * search starts at index 0.
     */
    indexOf<T extends numeric>(this: TypedArray<T>, searchElement: T, fromIndex?: number): boolean;

    /**
     * Adds all the elements of an array separated by the specified separator string.
     * @param separator A string used to separate one element of an array from the next in the
     * resulting String. If omitted, the array elements are separated with a comma.
     */
    join(this: TypedArray, separator?: string): string;

    /** Yields each index in the array. */
    keys(this: TypedArray): IterableIterator<number>;

    /**
     * Returns the index of the last occurrence of a value in an array.
     * @param searchElement The value to locate in the array.
     * @param fromIndex The array index at which to begin the search. If fromIndex is omitted, the
     * search starts at index 0.
     */
    lastIndexOf<T extends numeric>(this: TypedArray<T>, searchElement: T, fromIndex?: number): boolean;

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
    map<T extends numeric, THIS extends TypedArray>(
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
    reduce<T extends numeric, THIS extends TypedArray<T>>(
        this: THIS,
        reducer: (previousValue: T, currentValue: T, currentIndex: number, array: THIS) => T,
    ): T;
    reduce<T extends numeric, U, THIS extends TypedArray<T>>(
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
    reduceRight<T extends numeric, THIS extends TypedArray<T>>(
        this: THIS,
        reducer: (previousValue: T, currentValue: T, currentIndex: number, array: THIS) => T,
    ): T;
    reduceRight<T extends numeric, U, THIS extends TypedArray<T>>(
        this: THIS,
        reducer: (previousValue: U, currentValue: T, currentIndex: number, array: THIS) => U,
        initialValue: U,
    ): U;

    /** Reverses the elements in the array. */
    reverse<THIS extends TypedArray>(this: THIS): THIS;

    /**
     * Sets a value or an array of values.
     * @param array A typed or untyped array of values to set.
     * @param offset The index in the current array at which the values are to be written.
     */
    set<T extends numeric>(this: TypedArray<T>, array: ArrayLike<T>, offset?: number): void;

    /**
     * Returns a section of an array.
     * @param start The beginning of the specified portion of the array.
     * @param end The end of the specified portion of the array.
     */
    slice<THIS extends TypedArray>(this: THIS, start?: number, end?: number): THIS;

    /**
     * Determines whether the specified callback function returns true for any element of an array.
     * @param callbackfn A function that accepts up to three arguments. The some method calls the
     * callbackfn function for each element in the array until the callbackfn returns true, or until
     * the end of the array.
     * @param thisArg An object to which the this keyword can refer in the callbackfn function.
     * If thisArg is omitted, undefined is used as the this value.
     */
    some<T extends numeric, THIS extends TypedArray<T>>(
        this: THIS,
        predicate: (value: T, index: number, array: THIS) => unknown,
        thisArg?: unknown,
    ): boolean;

    /**
     * Sorts the array.
     * @param compareFn The function used to determine the order of the elements. If omitted, the elements are sorted in ascending order.
     */
    sort<T extends numeric, THIS extends TypedArray<T>>(this: THIS, comparator?: (a: T, b: T) => number): THIS;

    /**
     * Gets a new subview of the ArrayBuffer store for this array, referencing the elements
     * at begin, inclusive, up to end, exclusive.
     * @param begin The index of the beginning of the array.
     * @param end The index of the end of the array.
     */
    subarray<THIS extends TypedArray>(this: THIS, begin?: number, end?: number): THIS;

    /** Converts the array to a string by using the current locale. */
    toLocaleString(this: TypedArray, locales?: string | string[], options?: Intl.NumberFormatOptions): string;

    /** Returns a string representation of the array. */
    toString(): string;

    /** Yields each value in the array. */
    values<T extends numeric>(this: TypedArray<T>): IterableIterator<T>;

    /** Yields each value in the array. */
    [Symbol.iterator]<T extends numeric>(this: TypedArray<T>): IterableIterator<T>;

    readonly [Symbol.toStringTag]: string | undefined;
}

// ------------------------ >8 ------------------------
// autogenerated by scripts/collect-intrinsics.ts
// do not edit! 2020-07-08T00:53:03.057Z

// tslint:disable: ban-types
// prettier-ignore
declare namespace GetIntrinsic {
    interface Intrinsics {
        '%Array%': ArrayConstructor;
        '%ArrayBuffer%': ArrayBufferConstructor;
        '%ArrayBufferPrototype%': ArrayBuffer;
        '%ArrayIteratorPrototype%': IterableIterator<any>;
        '%ArrayPrototype%': typeof Array.prototype;
        '%ArrayProto_entries%': typeof Array.prototype.entries;
        '%ArrayProto_forEach%': typeof Array.prototype.forEach;
        '%ArrayProto_keys%': typeof Array.prototype.keys;
        '%ArrayProto_values%': typeof Array.prototype.values;
        '%AsyncFromSyncIteratorPrototype%': AsyncGenerator<any>;
        '%AsyncFunction%': FunctionConstructor;
        '%AsyncFunctionPrototype%': typeof Function.prototype;
        '%AsyncGenerator%': AsyncGeneratorFunction;
        '%AsyncGeneratorFunction%': AsyncGeneratorFunctionConstructor;
        '%AsyncGeneratorPrototype%': AsyncGenerator<any>;
        '%AsyncIteratorPrototype%': AsyncIterable<any>;
        '%Atomics%': Atomics;
        '%Boolean%': BooleanConstructor;
        '%BooleanPrototype%': typeof Boolean.prototype;
        '%DataView%': DataViewConstructor;
        '%DataViewPrototype%': DataView;
        '%Date%': DateConstructor;
        '%DatePrototype%': Date;
        '%decodeURI%': typeof decodeURI;
        '%decodeURIComponent%': typeof decodeURIComponent;
        '%encodeURI%': typeof encodeURI;
        '%encodeURIComponent%': typeof encodeURIComponent;
        '%Error%': ErrorConstructor;
        '%ErrorPrototype%': Error;
        '%eval%': typeof eval;
        '%EvalError%': EvalErrorConstructor;
        '%EvalErrorPrototype%': EvalError;
        '%Float32Array%': Float32ArrayConstructor;
        '%Float32ArrayPrototype%': Float32Array;
        '%Float64Array%': Float64ArrayConstructor;
        '%Float64ArrayPrototype%': Float64Array;
        '%Function%': FunctionConstructor;
        '%FunctionPrototype%': typeof Function.prototype;
        '%Generator%': GeneratorFunction;
        '%GeneratorFunction%': GeneratorFunctionConstructor;
        '%GeneratorPrototype%': Generator<any>;
        '%Int8Array%': Int8ArrayConstructor;
        '%Int8ArrayPrototype%': Int8Array;
        '%Int16Array%': Int16ArrayConstructor;
        '%Int16ArrayPrototype%': Int16Array;
        '%Int32Array%': Int32ArrayConstructor;
        '%Int32ArrayPrototype%': Int32Array;
        '%isFinite%': typeof isFinite;
        '%isNaN%': typeof isNaN;
        '%IteratorPrototype%': Iterable<any>;
        '%JSON%': JSON;
        '%JSONParse%': typeof JSON.parse;
        '%Map%': MapConstructor;
        '%MapIteratorPrototype%': IterableIterator<any>;
        '%MapPrototype%': typeof Map.prototype;
        '%Math%': Math;
        '%Number%': NumberConstructor;
        '%NumberPrototype%': typeof Number.prototype;
        '%Object%': ObjectConstructor;
        '%ObjectPrototype%': typeof Object.prototype;
        '%ObjProto_toString%': typeof Object.prototype.toString;
        '%ObjProto_valueOf%': typeof Object.prototype.valueOf;
        '%parseFloat%': typeof parseFloat;
        '%parseInt%': typeof parseInt;
        '%Promise%': PromiseConstructor;
        '%PromisePrototype%': typeof Promise.prototype;
        '%PromiseProto_then%': typeof Promise.prototype.then;
        '%Promise_all%': typeof Promise.all;
        '%Promise_reject%': typeof Promise.reject;
        '%Promise_resolve%': typeof Promise.resolve;
        '%Proxy%': ProxyConstructor;
        '%RangeError%': RangeErrorConstructor;
        '%RangeErrorPrototype%': RangeError;
        '%ReferenceError%': ReferenceErrorConstructor;
        '%ReferenceErrorPrototype%': ReferenceError;
        '%Reflect%': typeof Reflect;
        '%RegExp%': RegExpConstructor;
        '%RegExpPrototype%': RegExp;
        '%Set%': SetConstructor;
        '%SetIteratorPrototype%': IterableIterator<any>;
        '%SetPrototype%': typeof Set.prototype;
        '%SharedArrayBuffer%': SharedArrayBufferConstructor;
        '%SharedArrayBufferPrototype%': SharedArrayBuffer;
        '%String%': StringConstructor;
        '%StringIteratorPrototype%': IterableIterator<string>;
        '%StringPrototype%': typeof String.prototype;
        '%Symbol%': SymbolConstructor;
        '%SymbolPrototype%': typeof Symbol.prototype;
        '%SyntaxError%': SyntaxErrorConstructor;
        '%SyntaxErrorPrototype%': SyntaxError;
        '%ThrowTypeError%': () => never;
        '%TypedArray%': TypedArrayConstructor;
        '%TypedArrayPrototype%': TypedArrayPrototype;
        '%TypeError%': TypeErrorConstructor;
        '%TypeErrorPrototype%': TypeError;
        '%Uint8Array%': Uint8ArrayConstructor;
        '%Uint8ArrayPrototype%': Uint8Array;
        '%Uint8ClampedArray%': Uint8ClampedArrayConstructor;
        '%Uint8ClampedArrayPrototype%': Uint8ClampedArray;
        '%Uint16Array%': Uint16ArrayConstructor;
        '%Uint16ArrayPrototype%': Uint16Array;
        '%Uint32Array%': Uint32ArrayConstructor;
        '%Uint32ArrayPrototype%': Uint32Array;
        '%URIError%': URIErrorConstructor;
        '%URIErrorPrototype%': URIError;
        '%WeakMap%': WeakMapConstructor;
        '%WeakMapPrototype%': typeof WeakMap.prototype;
        '%WeakSet%': WeakSetConstructor;
        '%WeakSetPrototype%': typeof WeakSet.prototype;
    }

    interface Intrinsics {
        '%Array.prototype%': typeof Array.prototype;
        '%Array.prototype.length%': typeof Array.prototype.length;
        '%Array.prototype.concat%': typeof Array.prototype.concat;
        '%Array.prototype.copyWithin%': typeof Array.prototype.copyWithin;
        '%Array.prototype.fill%': typeof Array.prototype.fill;
        '%Array.prototype.find%': typeof Array.prototype.find;
        '%Array.prototype.findIndex%': typeof Array.prototype.findIndex;
        '%Array.prototype.lastIndexOf%': typeof Array.prototype.lastIndexOf;
        '%Array.prototype.pop%': typeof Array.prototype.pop;
        '%Array.prototype.push%': typeof Array.prototype.push;
        '%Array.prototype.reverse%': typeof Array.prototype.reverse;
        '%Array.prototype.shift%': typeof Array.prototype.shift;
        '%Array.prototype.unshift%': typeof Array.prototype.unshift;
        '%Array.prototype.slice%': typeof Array.prototype.slice;
        '%Array.prototype.sort%': typeof Array.prototype.sort;
        '%Array.prototype.splice%': typeof Array.prototype.splice;
        '%Array.prototype.includes%': typeof Array.prototype.includes;
        '%Array.prototype.indexOf%': typeof Array.prototype.indexOf;
        '%Array.prototype.join%': typeof Array.prototype.join;
        '%Array.prototype.keys%': typeof Array.prototype.keys;
        '%Array.prototype.entries%': typeof Array.prototype.entries;
        '%Array.prototype.values%': typeof Array.prototype.values;
        '%Array.prototype.forEach%': typeof Array.prototype.forEach;
        '%Array.prototype.filter%': typeof Array.prototype.filter;
        '%Array.prototype.flat%': typeof Array.prototype.flat;
        '%Array.prototype.flatMap%': typeof Array.prototype.flatMap;
        '%Array.prototype.map%': typeof Array.prototype.map;
        '%Array.prototype.every%': typeof Array.prototype.every;
        '%Array.prototype.some%': typeof Array.prototype.some;
        '%Array.prototype.reduce%': typeof Array.prototype.reduce;
        '%Array.prototype.reduceRight%': typeof Array.prototype.reduceRight;
        '%Array.prototype.toLocaleString%': typeof Array.prototype.toLocaleString;
        '%Array.prototype.toString%': typeof Array.prototype.toString;
        '%Array.isArray%': typeof Array.isArray;
        '%Array.from%': typeof Array.from;
        '%Array.of%': typeof Array.of;
        '%ArrayBuffer.prototype%': ArrayBuffer;
        '%ArrayBuffer.prototype.byteLength%': (this: ArrayBuffer) => typeof ArrayBuffer.prototype.byteLength;
        '%ArrayBuffer.prototype.slice%': typeof ArrayBuffer.prototype.slice;
        '%ArrayBuffer.isView%': typeof ArrayBuffer.isView;
        '%ArrayBufferPrototype.byteLength%': (this: ArrayBuffer) => typeof ArrayBuffer.prototype.byteLength;
        '%ArrayBufferPrototype.slice%': typeof ArrayBuffer.prototype.slice;
        '%ArrayIteratorPrototype.next%': IterableIterator<any>['next'];
        '%ArrayPrototype.length%': typeof Array.prototype.length;
        '%ArrayPrototype.concat%': typeof Array.prototype.concat;
        '%ArrayPrototype.copyWithin%': typeof Array.prototype.copyWithin;
        '%ArrayPrototype.fill%': typeof Array.prototype.fill;
        '%ArrayPrototype.find%': typeof Array.prototype.find;
        '%ArrayPrototype.findIndex%': typeof Array.prototype.findIndex;
        '%ArrayPrototype.lastIndexOf%': typeof Array.prototype.lastIndexOf;
        '%ArrayPrototype.pop%': typeof Array.prototype.pop;
        '%ArrayPrototype.push%': typeof Array.prototype.push;
        '%ArrayPrototype.reverse%': typeof Array.prototype.reverse;
        '%ArrayPrototype.shift%': typeof Array.prototype.shift;
        '%ArrayPrototype.unshift%': typeof Array.prototype.unshift;
        '%ArrayPrototype.slice%': typeof Array.prototype.slice;
        '%ArrayPrototype.sort%': typeof Array.prototype.sort;
        '%ArrayPrototype.splice%': typeof Array.prototype.splice;
        '%ArrayPrototype.includes%': typeof Array.prototype.includes;
        '%ArrayPrototype.indexOf%': typeof Array.prototype.indexOf;
        '%ArrayPrototype.join%': typeof Array.prototype.join;
        '%ArrayPrototype.keys%': typeof Array.prototype.keys;
        '%ArrayPrototype.entries%': typeof Array.prototype.entries;
        '%ArrayPrototype.values%': typeof Array.prototype.values;
        '%ArrayPrototype.forEach%': typeof Array.prototype.forEach;
        '%ArrayPrototype.filter%': typeof Array.prototype.filter;
        '%ArrayPrototype.flat%': typeof Array.prototype.flat;
        '%ArrayPrototype.flatMap%': typeof Array.prototype.flatMap;
        '%ArrayPrototype.map%': typeof Array.prototype.map;
        '%ArrayPrototype.every%': typeof Array.prototype.every;
        '%ArrayPrototype.some%': typeof Array.prototype.some;
        '%ArrayPrototype.reduce%': typeof Array.prototype.reduce;
        '%ArrayPrototype.reduceRight%': typeof Array.prototype.reduceRight;
        '%ArrayPrototype.toLocaleString%': typeof Array.prototype.toLocaleString;
        '%ArrayPrototype.toString%': typeof Array.prototype.toString;
        '%AsyncFromSyncIteratorPrototype.next%': AsyncGenerator<any>['next'];
        '%AsyncFromSyncIteratorPrototype.return%': AsyncGenerator<any>['return'];
        '%AsyncFromSyncIteratorPrototype.throw%': AsyncGenerator<any>['throw'];
        '%AsyncFunction.prototype%': typeof Function.prototype;
        '%AsyncGenerator.prototype%': AsyncGenerator<any>;
        '%AsyncGenerator.prototype.next%': AsyncGenerator<any>['next'];
        '%AsyncGenerator.prototype.return%': AsyncGenerator<any>['return'];
        '%AsyncGenerator.prototype.throw%': AsyncGenerator<any>['throw'];
        '%AsyncGeneratorFunction.prototype%': AsyncGeneratorFunction;
        '%AsyncGeneratorFunction.prototype.prototype%': AsyncGenerator<any>;
        '%AsyncGeneratorFunction.prototype.prototype.next%': AsyncGenerator<any>['next'];
        '%AsyncGeneratorFunction.prototype.prototype.return%': AsyncGenerator<any>['return'];
        '%AsyncGeneratorFunction.prototype.prototype.throw%': AsyncGenerator<any>['throw'];
        '%AsyncGeneratorPrototype.next%': AsyncGenerator<any>['next'];
        '%AsyncGeneratorPrototype.return%': AsyncGenerator<any>['return'];
        '%AsyncGeneratorPrototype.throw%': AsyncGenerator<any>['throw'];
        '%Atomics.load%': typeof Atomics.load;
        '%Atomics.store%': typeof Atomics.store;
        '%Atomics.add%': typeof Atomics.add;
        '%Atomics.sub%': typeof Atomics.sub;
        '%Atomics.and%': typeof Atomics.and;
        '%Atomics.or%': typeof Atomics.or;
        '%Atomics.xor%': typeof Atomics.xor;
        '%Atomics.exchange%': typeof Atomics.exchange;
        '%Atomics.compareExchange%': typeof Atomics.compareExchange;
        '%Atomics.isLockFree%': typeof Atomics.isLockFree;
        '%Atomics.wait%': typeof Atomics.wait;
        '%Atomics.notify%': typeof Atomics.notify;
        '%Boolean.prototype%': typeof Boolean.prototype;
        '%Boolean.prototype.toString%': typeof Boolean.prototype.toString;
        '%Boolean.prototype.valueOf%': typeof Boolean.prototype.valueOf;
        '%BooleanPrototype.toString%': typeof Boolean.prototype.toString;
        '%BooleanPrototype.valueOf%': typeof Boolean.prototype.valueOf;
        '%DataView.prototype%': DataView;
        '%DataView.prototype.buffer%': (this: DataView) => typeof DataView.prototype.buffer;
        '%DataView.prototype.byteLength%': (this: DataView) => typeof DataView.prototype.byteLength;
        '%DataView.prototype.byteOffset%': (this: DataView) => typeof DataView.prototype.byteOffset;
        '%DataView.prototype.getInt8%': typeof DataView.prototype.getInt8;
        '%DataView.prototype.setInt8%': typeof DataView.prototype.setInt8;
        '%DataView.prototype.getUint8%': typeof DataView.prototype.getUint8;
        '%DataView.prototype.setUint8%': typeof DataView.prototype.setUint8;
        '%DataView.prototype.getInt16%': typeof DataView.prototype.getInt16;
        '%DataView.prototype.setInt16%': typeof DataView.prototype.setInt16;
        '%DataView.prototype.getUint16%': typeof DataView.prototype.getUint16;
        '%DataView.prototype.setUint16%': typeof DataView.prototype.setUint16;
        '%DataView.prototype.getInt32%': typeof DataView.prototype.getInt32;
        '%DataView.prototype.setInt32%': typeof DataView.prototype.setInt32;
        '%DataView.prototype.getUint32%': typeof DataView.prototype.getUint32;
        '%DataView.prototype.setUint32%': typeof DataView.prototype.setUint32;
        '%DataView.prototype.getFloat32%': typeof DataView.prototype.getFloat32;
        '%DataView.prototype.setFloat32%': typeof DataView.prototype.setFloat32;
        '%DataView.prototype.getFloat64%': typeof DataView.prototype.getFloat64;
        '%DataView.prototype.setFloat64%': typeof DataView.prototype.setFloat64;
        '%DataView.prototype.getBigInt64%': typeof DataView.prototype.getBigInt64;
        '%DataView.prototype.setBigInt64%': typeof DataView.prototype.setBigInt64;
        '%DataView.prototype.getBigUint64%': typeof DataView.prototype.getBigUint64;
        '%DataView.prototype.setBigUint64%': typeof DataView.prototype.setBigUint64;
        '%DataViewPrototype.buffer%': (this: DataView) => typeof DataView.prototype.buffer;
        '%DataViewPrototype.byteLength%': (this: DataView) => typeof DataView.prototype.byteLength;
        '%DataViewPrototype.byteOffset%': (this: DataView) => typeof DataView.prototype.byteOffset;
        '%DataViewPrototype.getInt8%': typeof DataView.prototype.getInt8;
        '%DataViewPrototype.setInt8%': typeof DataView.prototype.setInt8;
        '%DataViewPrototype.getUint8%': typeof DataView.prototype.getUint8;
        '%DataViewPrototype.setUint8%': typeof DataView.prototype.setUint8;
        '%DataViewPrototype.getInt16%': typeof DataView.prototype.getInt16;
        '%DataViewPrototype.setInt16%': typeof DataView.prototype.setInt16;
        '%DataViewPrototype.getUint16%': typeof DataView.prototype.getUint16;
        '%DataViewPrototype.setUint16%': typeof DataView.prototype.setUint16;
        '%DataViewPrototype.getInt32%': typeof DataView.prototype.getInt32;
        '%DataViewPrototype.setInt32%': typeof DataView.prototype.setInt32;
        '%DataViewPrototype.getUint32%': typeof DataView.prototype.getUint32;
        '%DataViewPrototype.setUint32%': typeof DataView.prototype.setUint32;
        '%DataViewPrototype.getFloat32%': typeof DataView.prototype.getFloat32;
        '%DataViewPrototype.setFloat32%': typeof DataView.prototype.setFloat32;
        '%DataViewPrototype.getFloat64%': typeof DataView.prototype.getFloat64;
        '%DataViewPrototype.setFloat64%': typeof DataView.prototype.setFloat64;
        '%DataViewPrototype.getBigInt64%': typeof DataView.prototype.getBigInt64;
        '%DataViewPrototype.setBigInt64%': typeof DataView.prototype.setBigInt64;
        '%DataViewPrototype.getBigUint64%': typeof DataView.prototype.getBigUint64;
        '%DataViewPrototype.setBigUint64%': typeof DataView.prototype.setBigUint64;
        '%Date.prototype%': Date;
        '%Date.prototype.toString%': typeof Date.prototype.toString;
        '%Date.prototype.toDateString%': typeof Date.prototype.toDateString;
        '%Date.prototype.toTimeString%': typeof Date.prototype.toTimeString;
        '%Date.prototype.toISOString%': typeof Date.prototype.toISOString;
        '%Date.prototype.toUTCString%': typeof Date.prototype.toUTCString;
        '%Date.prototype.getDate%': typeof Date.prototype.getDate;
        '%Date.prototype.setDate%': typeof Date.prototype.setDate;
        '%Date.prototype.getDay%': typeof Date.prototype.getDay;
        '%Date.prototype.getFullYear%': typeof Date.prototype.getFullYear;
        '%Date.prototype.setFullYear%': typeof Date.prototype.setFullYear;
        '%Date.prototype.getHours%': typeof Date.prototype.getHours;
        '%Date.prototype.setHours%': typeof Date.prototype.setHours;
        '%Date.prototype.getMilliseconds%': typeof Date.prototype.getMilliseconds;
        '%Date.prototype.setMilliseconds%': typeof Date.prototype.setMilliseconds;
        '%Date.prototype.getMinutes%': typeof Date.prototype.getMinutes;
        '%Date.prototype.setMinutes%': typeof Date.prototype.setMinutes;
        '%Date.prototype.getMonth%': typeof Date.prototype.getMonth;
        '%Date.prototype.setMonth%': typeof Date.prototype.setMonth;
        '%Date.prototype.getSeconds%': typeof Date.prototype.getSeconds;
        '%Date.prototype.setSeconds%': typeof Date.prototype.setSeconds;
        '%Date.prototype.getTime%': typeof Date.prototype.getTime;
        '%Date.prototype.setTime%': typeof Date.prototype.setTime;
        '%Date.prototype.getTimezoneOffset%': typeof Date.prototype.getTimezoneOffset;
        '%Date.prototype.getUTCDate%': typeof Date.prototype.getUTCDate;
        '%Date.prototype.setUTCDate%': typeof Date.prototype.setUTCDate;
        '%Date.prototype.getUTCDay%': typeof Date.prototype.getUTCDay;
        '%Date.prototype.getUTCFullYear%': typeof Date.prototype.getUTCFullYear;
        '%Date.prototype.setUTCFullYear%': typeof Date.prototype.setUTCFullYear;
        '%Date.prototype.getUTCHours%': typeof Date.prototype.getUTCHours;
        '%Date.prototype.setUTCHours%': typeof Date.prototype.setUTCHours;
        '%Date.prototype.getUTCMilliseconds%': typeof Date.prototype.getUTCMilliseconds;
        '%Date.prototype.setUTCMilliseconds%': typeof Date.prototype.setUTCMilliseconds;
        '%Date.prototype.getUTCMinutes%': typeof Date.prototype.getUTCMinutes;
        '%Date.prototype.setUTCMinutes%': typeof Date.prototype.setUTCMinutes;
        '%Date.prototype.getUTCMonth%': typeof Date.prototype.getUTCMonth;
        '%Date.prototype.setUTCMonth%': typeof Date.prototype.setUTCMonth;
        '%Date.prototype.getUTCSeconds%': typeof Date.prototype.getUTCSeconds;
        '%Date.prototype.setUTCSeconds%': typeof Date.prototype.setUTCSeconds;
        '%Date.prototype.valueOf%': typeof Date.prototype.valueOf;
        '%Date.prototype.toJSON%': typeof Date.prototype.toJSON;
        '%Date.prototype.toLocaleString%': typeof Date.prototype.toLocaleString;
        '%Date.prototype.toLocaleDateString%': typeof Date.prototype.toLocaleDateString;
        '%Date.prototype.toLocaleTimeString%': typeof Date.prototype.toLocaleTimeString;
        '%Date.now%': typeof Date.now;
        '%Date.parse%': typeof Date.parse;
        '%Date.UTC%': typeof Date.UTC;
        '%DatePrototype.toString%': typeof Date.prototype.toString;
        '%DatePrototype.toDateString%': typeof Date.prototype.toDateString;
        '%DatePrototype.toTimeString%': typeof Date.prototype.toTimeString;
        '%DatePrototype.toISOString%': typeof Date.prototype.toISOString;
        '%DatePrototype.toUTCString%': typeof Date.prototype.toUTCString;
        '%DatePrototype.getDate%': typeof Date.prototype.getDate;
        '%DatePrototype.setDate%': typeof Date.prototype.setDate;
        '%DatePrototype.getDay%': typeof Date.prototype.getDay;
        '%DatePrototype.getFullYear%': typeof Date.prototype.getFullYear;
        '%DatePrototype.setFullYear%': typeof Date.prototype.setFullYear;
        '%DatePrototype.getHours%': typeof Date.prototype.getHours;
        '%DatePrototype.setHours%': typeof Date.prototype.setHours;
        '%DatePrototype.getMilliseconds%': typeof Date.prototype.getMilliseconds;
        '%DatePrototype.setMilliseconds%': typeof Date.prototype.setMilliseconds;
        '%DatePrototype.getMinutes%': typeof Date.prototype.getMinutes;
        '%DatePrototype.setMinutes%': typeof Date.prototype.setMinutes;
        '%DatePrototype.getMonth%': typeof Date.prototype.getMonth;
        '%DatePrototype.setMonth%': typeof Date.prototype.setMonth;
        '%DatePrototype.getSeconds%': typeof Date.prototype.getSeconds;
        '%DatePrototype.setSeconds%': typeof Date.prototype.setSeconds;
        '%DatePrototype.getTime%': typeof Date.prototype.getTime;
        '%DatePrototype.setTime%': typeof Date.prototype.setTime;
        '%DatePrototype.getTimezoneOffset%': typeof Date.prototype.getTimezoneOffset;
        '%DatePrototype.getUTCDate%': typeof Date.prototype.getUTCDate;
        '%DatePrototype.setUTCDate%': typeof Date.prototype.setUTCDate;
        '%DatePrototype.getUTCDay%': typeof Date.prototype.getUTCDay;
        '%DatePrototype.getUTCFullYear%': typeof Date.prototype.getUTCFullYear;
        '%DatePrototype.setUTCFullYear%': typeof Date.prototype.setUTCFullYear;
        '%DatePrototype.getUTCHours%': typeof Date.prototype.getUTCHours;
        '%DatePrototype.setUTCHours%': typeof Date.prototype.setUTCHours;
        '%DatePrototype.getUTCMilliseconds%': typeof Date.prototype.getUTCMilliseconds;
        '%DatePrototype.setUTCMilliseconds%': typeof Date.prototype.setUTCMilliseconds;
        '%DatePrototype.getUTCMinutes%': typeof Date.prototype.getUTCMinutes;
        '%DatePrototype.setUTCMinutes%': typeof Date.prototype.setUTCMinutes;
        '%DatePrototype.getUTCMonth%': typeof Date.prototype.getUTCMonth;
        '%DatePrototype.setUTCMonth%': typeof Date.prototype.setUTCMonth;
        '%DatePrototype.getUTCSeconds%': typeof Date.prototype.getUTCSeconds;
        '%DatePrototype.setUTCSeconds%': typeof Date.prototype.setUTCSeconds;
        '%DatePrototype.valueOf%': typeof Date.prototype.valueOf;
        '%DatePrototype.toJSON%': typeof Date.prototype.toJSON;
        '%DatePrototype.toLocaleString%': typeof Date.prototype.toLocaleString;
        '%DatePrototype.toLocaleDateString%': typeof Date.prototype.toLocaleDateString;
        '%DatePrototype.toLocaleTimeString%': typeof Date.prototype.toLocaleTimeString;
        '%Error.prototype%': Error;
        '%Error.prototype.name%': typeof Error.prototype.name;
        '%Error.prototype.message%': typeof Error.prototype.message;
        '%Error.prototype.toString%': typeof Error.prototype.toString;
        '%ErrorPrototype.name%': typeof Error.prototype.name;
        '%ErrorPrototype.message%': typeof Error.prototype.message;
        '%ErrorPrototype.toString%': typeof Error.prototype.toString;
        '%EvalError.prototype%': EvalError;
        '%EvalError.prototype.name%': typeof EvalError.prototype.name;
        '%EvalError.prototype.message%': typeof EvalError.prototype.message;
        '%EvalErrorPrototype.name%': typeof EvalError.prototype.name;
        '%EvalErrorPrototype.message%': typeof EvalError.prototype.message;
        '%Float32Array.prototype%': Float32Array;
        '%Float32Array.prototype.BYTES_PER_ELEMENT%': typeof Float32Array.prototype.BYTES_PER_ELEMENT;
        '%Float32Array.BYTES_PER_ELEMENT%': typeof Float32Array.BYTES_PER_ELEMENT;
        '%Float32ArrayPrototype.BYTES_PER_ELEMENT%': typeof Float32Array.prototype.BYTES_PER_ELEMENT;
        '%Float64Array.prototype%': Float64Array;
        '%Float64Array.prototype.BYTES_PER_ELEMENT%': typeof Float64Array.prototype.BYTES_PER_ELEMENT;
        '%Float64Array.BYTES_PER_ELEMENT%': typeof Float64Array.BYTES_PER_ELEMENT;
        '%Float64ArrayPrototype.BYTES_PER_ELEMENT%': typeof Float64Array.prototype.BYTES_PER_ELEMENT;
        '%Function.prototype%': typeof Function.prototype;
        '%Function.prototype.apply%': typeof Function.prototype.apply;
        '%Function.prototype.bind%': typeof Function.prototype.bind;
        '%Function.prototype.call%': typeof Function.prototype.call;
        '%Function.prototype.toString%': typeof Function.prototype.toString;
        '%FunctionPrototype.apply%': typeof Function.prototype.apply;
        '%FunctionPrototype.bind%': typeof Function.prototype.bind;
        '%FunctionPrototype.call%': typeof Function.prototype.call;
        '%FunctionPrototype.toString%': typeof Function.prototype.toString;
        '%Generator.prototype%': Generator<any>;
        '%Generator.prototype.next%': Generator<any>['next'];
        '%Generator.prototype.return%': Generator<any>['return'];
        '%Generator.prototype.throw%': Generator<any>['throw'];
        '%GeneratorFunction.prototype%': GeneratorFunction;
        '%GeneratorFunction.prototype.prototype%': Generator<any>;
        '%GeneratorFunction.prototype.prototype.next%': Generator<any>['next'];
        '%GeneratorFunction.prototype.prototype.return%': Generator<any>['return'];
        '%GeneratorFunction.prototype.prototype.throw%': Generator<any>['throw'];
        '%GeneratorPrototype.next%': Generator<any>['next'];
        '%GeneratorPrototype.return%': Generator<any>['return'];
        '%GeneratorPrototype.throw%': Generator<any>['throw'];
        '%Int8Array.prototype%': Int8Array;
        '%Int8Array.prototype.BYTES_PER_ELEMENT%': typeof Int8Array.prototype.BYTES_PER_ELEMENT;
        '%Int8Array.BYTES_PER_ELEMENT%': typeof Int8Array.BYTES_PER_ELEMENT;
        '%Int8ArrayPrototype.BYTES_PER_ELEMENT%': typeof Int8Array.prototype.BYTES_PER_ELEMENT;
        '%Int16Array.prototype%': Int16Array;
        '%Int16Array.prototype.BYTES_PER_ELEMENT%': typeof Int16Array.prototype.BYTES_PER_ELEMENT;
        '%Int16Array.BYTES_PER_ELEMENT%': typeof Int16Array.BYTES_PER_ELEMENT;
        '%Int16ArrayPrototype.BYTES_PER_ELEMENT%': typeof Int16Array.prototype.BYTES_PER_ELEMENT;
        '%Int32Array.prototype%': Int32Array;
        '%Int32Array.prototype.BYTES_PER_ELEMENT%': typeof Int32Array.prototype.BYTES_PER_ELEMENT;
        '%Int32Array.BYTES_PER_ELEMENT%': typeof Int32Array.BYTES_PER_ELEMENT;
        '%Int32ArrayPrototype.BYTES_PER_ELEMENT%': typeof Int32Array.prototype.BYTES_PER_ELEMENT;
        '%JSON.parse%': typeof JSON.parse;
        '%JSON.stringify%': typeof JSON.stringify;
        '%Map.prototype%': typeof Map.prototype;
        '%Map.prototype.get%': typeof Map.prototype.get;
        '%Map.prototype.set%': typeof Map.prototype.set;
        '%Map.prototype.has%': typeof Map.prototype.has;
        '%Map.prototype.delete%': typeof Map.prototype.delete;
        '%Map.prototype.clear%': typeof Map.prototype.clear;
        '%Map.prototype.entries%': typeof Map.prototype.entries;
        '%Map.prototype.forEach%': typeof Map.prototype.forEach;
        '%Map.prototype.keys%': typeof Map.prototype.keys;
        '%Map.prototype.size%': (this: Map<any, any>) => typeof Map.prototype.size;
        '%Map.prototype.values%': typeof Map.prototype.values;
        '%MapIteratorPrototype.next%': IterableIterator<any>['next'];
        '%MapPrototype.get%': typeof Map.prototype.get;
        '%MapPrototype.set%': typeof Map.prototype.set;
        '%MapPrototype.has%': typeof Map.prototype.has;
        '%MapPrototype.delete%': typeof Map.prototype.delete;
        '%MapPrototype.clear%': typeof Map.prototype.clear;
        '%MapPrototype.entries%': typeof Map.prototype.entries;
        '%MapPrototype.forEach%': typeof Map.prototype.forEach;
        '%MapPrototype.keys%': typeof Map.prototype.keys;
        '%MapPrototype.size%': (this: Map<any, any>) => typeof Map.prototype.size;
        '%MapPrototype.values%': typeof Map.prototype.values;
        '%Math.abs%': typeof Math.abs;
        '%Math.acos%': typeof Math.acos;
        '%Math.acosh%': typeof Math.acosh;
        '%Math.asin%': typeof Math.asin;
        '%Math.asinh%': typeof Math.asinh;
        '%Math.atan%': typeof Math.atan;
        '%Math.atanh%': typeof Math.atanh;
        '%Math.atan2%': typeof Math.atan2;
        '%Math.ceil%': typeof Math.ceil;
        '%Math.cbrt%': typeof Math.cbrt;
        '%Math.expm1%': typeof Math.expm1;
        '%Math.clz32%': typeof Math.clz32;
        '%Math.cos%': typeof Math.cos;
        '%Math.cosh%': typeof Math.cosh;
        '%Math.exp%': typeof Math.exp;
        '%Math.floor%': typeof Math.floor;
        '%Math.fround%': typeof Math.fround;
        '%Math.hypot%': typeof Math.hypot;
        '%Math.imul%': typeof Math.imul;
        '%Math.log%': typeof Math.log;
        '%Math.log1p%': typeof Math.log1p;
        '%Math.log2%': typeof Math.log2;
        '%Math.log10%': typeof Math.log10;
        '%Math.max%': typeof Math.max;
        '%Math.min%': typeof Math.min;
        '%Math.pow%': typeof Math.pow;
        '%Math.random%': typeof Math.random;
        '%Math.round%': typeof Math.round;
        '%Math.sign%': typeof Math.sign;
        '%Math.sin%': typeof Math.sin;
        '%Math.sinh%': typeof Math.sinh;
        '%Math.sqrt%': typeof Math.sqrt;
        '%Math.tan%': typeof Math.tan;
        '%Math.tanh%': typeof Math.tanh;
        '%Math.trunc%': typeof Math.trunc;
        '%Math.E%': typeof Math.E;
        '%Math.LN10%': typeof Math.LN10;
        '%Math.LN2%': typeof Math.LN2;
        '%Math.LOG10E%': typeof Math.LOG10E;
        '%Math.LOG2E%': typeof Math.LOG2E;
        '%Math.PI%': typeof Math.PI;
        '%Math.SQRT1_2%': typeof Math.SQRT1_2;
        '%Math.SQRT2%': typeof Math.SQRT2;
        '%Number.prototype%': typeof Number.prototype;
        '%Number.prototype.toExponential%': typeof Number.prototype.toExponential;
        '%Number.prototype.toFixed%': typeof Number.prototype.toFixed;
        '%Number.prototype.toPrecision%': typeof Number.prototype.toPrecision;
        '%Number.prototype.toString%': typeof Number.prototype.toString;
        '%Number.prototype.valueOf%': typeof Number.prototype.valueOf;
        '%Number.prototype.toLocaleString%': typeof Number.prototype.toLocaleString;
        '%Number.isFinite%': typeof Number.isFinite;
        '%Number.isInteger%': typeof Number.isInteger;
        '%Number.isNaN%': typeof Number.isNaN;
        '%Number.isSafeInteger%': typeof Number.isSafeInteger;
        '%Number.parseFloat%': typeof Number.parseFloat;
        '%Number.parseInt%': typeof Number.parseInt;
        '%Number.MAX_VALUE%': typeof Number.MAX_VALUE;
        '%Number.MIN_VALUE%': typeof Number.MIN_VALUE;
        '%Number.NaN%': typeof Number.NaN;
        '%Number.NEGATIVE_INFINITY%': typeof Number.NEGATIVE_INFINITY;
        '%Number.POSITIVE_INFINITY%': typeof Number.POSITIVE_INFINITY;
        '%Number.MAX_SAFE_INTEGER%': typeof Number.MAX_SAFE_INTEGER;
        '%Number.MIN_SAFE_INTEGER%': typeof Number.MIN_SAFE_INTEGER;
        '%Number.EPSILON%': typeof Number.EPSILON;
        '%NumberPrototype.toExponential%': typeof Number.prototype.toExponential;
        '%NumberPrototype.toFixed%': typeof Number.prototype.toFixed;
        '%NumberPrototype.toPrecision%': typeof Number.prototype.toPrecision;
        '%NumberPrototype.toString%': typeof Number.prototype.toString;
        '%NumberPrototype.valueOf%': typeof Number.prototype.valueOf;
        '%NumberPrototype.toLocaleString%': typeof Number.prototype.toLocaleString;
        '%Object.prototype%': typeof Object.prototype;
        '%Object.prototype.hasOwnProperty%': typeof Object.prototype.hasOwnProperty;
        '%Object.prototype.isPrototypeOf%': typeof Object.prototype.isPrototypeOf;
        '%Object.prototype.propertyIsEnumerable%': typeof Object.prototype.propertyIsEnumerable;
        '%Object.prototype.toString%': typeof Object.prototype.toString;
        '%Object.prototype.valueOf%': typeof Object.prototype.valueOf;
        '%Object.prototype.toLocaleString%': typeof Object.prototype.toLocaleString;
        '%Object.assign%': typeof Object.assign;
        '%Object.getOwnPropertyDescriptor%': typeof Object.getOwnPropertyDescriptor;
        '%Object.getOwnPropertyDescriptors%': typeof Object.getOwnPropertyDescriptors;
        '%Object.getOwnPropertyNames%': typeof Object.getOwnPropertyNames;
        '%Object.getOwnPropertySymbols%': typeof Object.getOwnPropertySymbols;
        '%Object.is%': typeof Object.is;
        '%Object.preventExtensions%': typeof Object.preventExtensions;
        '%Object.seal%': typeof Object.seal;
        '%Object.create%': typeof Object.create;
        '%Object.defineProperties%': typeof Object.defineProperties;
        '%Object.defineProperty%': typeof Object.defineProperty;
        '%Object.freeze%': typeof Object.freeze;
        '%Object.getPrototypeOf%': typeof Object.getPrototypeOf;
        '%Object.setPrototypeOf%': typeof Object.setPrototypeOf;
        '%Object.isExtensible%': typeof Object.isExtensible;
        '%Object.isFrozen%': typeof Object.isFrozen;
        '%Object.isSealed%': typeof Object.isSealed;
        '%Object.keys%': typeof Object.keys;
        '%Object.entries%': typeof Object.entries;
        '%Object.fromEntries%': typeof Object.fromEntries;
        '%Object.values%': typeof Object.values;
        '%ObjectPrototype.hasOwnProperty%': typeof Object.prototype.hasOwnProperty;
        '%ObjectPrototype.isPrototypeOf%': typeof Object.prototype.isPrototypeOf;
        '%ObjectPrototype.propertyIsEnumerable%': typeof Object.prototype.propertyIsEnumerable;
        '%ObjectPrototype.toString%': typeof Object.prototype.toString;
        '%ObjectPrototype.valueOf%': typeof Object.prototype.valueOf;
        '%ObjectPrototype.toLocaleString%': typeof Object.prototype.toLocaleString;
        '%Promise.prototype%': typeof Promise.prototype;
        '%Promise.prototype.then%': typeof Promise.prototype.then;
        '%Promise.prototype.catch%': typeof Promise.prototype.catch;
        '%Promise.prototype.finally%': typeof Promise.prototype.finally;
        '%Promise.all%': typeof Promise.all;
        '%Promise.race%': typeof Promise.race;
        '%Promise.resolve%': typeof Promise.resolve;
        '%Promise.reject%': typeof Promise.reject;
        '%Promise.allSettled%': typeof Promise.allSettled;
        '%PromisePrototype.then%': typeof Promise.prototype.then;
        '%PromisePrototype.catch%': typeof Promise.prototype.catch;
        '%PromisePrototype.finally%': typeof Promise.prototype.finally;
        '%Proxy.revocable%': typeof Proxy.revocable;
        '%RangeError.prototype%': RangeError;
        '%RangeError.prototype.name%': typeof RangeError.prototype.name;
        '%RangeError.prototype.message%': typeof RangeError.prototype.message;
        '%RangeErrorPrototype.name%': typeof RangeError.prototype.name;
        '%RangeErrorPrototype.message%': typeof RangeError.prototype.message;
        '%ReferenceError.prototype%': ReferenceError;
        '%ReferenceError.prototype.name%': typeof ReferenceError.prototype.name;
        '%ReferenceError.prototype.message%': typeof ReferenceError.prototype.message;
        '%ReferenceErrorPrototype.name%': typeof ReferenceError.prototype.name;
        '%ReferenceErrorPrototype.message%': typeof ReferenceError.prototype.message;
        '%Reflect.defineProperty%': typeof Reflect.defineProperty;
        '%Reflect.deleteProperty%': typeof Reflect.deleteProperty;
        '%Reflect.apply%': typeof Reflect.apply;
        '%Reflect.construct%': typeof Reflect.construct;
        '%Reflect.get%': typeof Reflect.get;
        '%Reflect.getOwnPropertyDescriptor%': typeof Reflect.getOwnPropertyDescriptor;
        '%Reflect.getPrototypeOf%': typeof Reflect.getPrototypeOf;
        '%Reflect.has%': typeof Reflect.has;
        '%Reflect.isExtensible%': typeof Reflect.isExtensible;
        '%Reflect.ownKeys%': typeof Reflect.ownKeys;
        '%Reflect.preventExtensions%': typeof Reflect.preventExtensions;
        '%Reflect.set%': typeof Reflect.set;
        '%Reflect.setPrototypeOf%': typeof Reflect.setPrototypeOf;
        '%RegExp.prototype%': RegExp;
        '%RegExp.prototype.exec%': typeof RegExp.prototype.exec;
        '%RegExp.prototype.dotAll%': (this: RegExp) => typeof RegExp.prototype.dotAll;
        '%RegExp.prototype.flags%': (this: RegExp) => typeof RegExp.prototype.flags;
        '%RegExp.prototype.global%': (this: RegExp) => typeof RegExp.prototype.global;
        '%RegExp.prototype.ignoreCase%': (this: RegExp) => typeof RegExp.prototype.ignoreCase;
        '%RegExp.prototype.multiline%': (this: RegExp) => typeof RegExp.prototype.multiline;
        '%RegExp.prototype.source%': (this: RegExp) => typeof RegExp.prototype.source;
        '%RegExp.prototype.sticky%': (this: RegExp) => typeof RegExp.prototype.sticky;
        '%RegExp.prototype.unicode%': (this: RegExp) => typeof RegExp.prototype.unicode;
        '%RegExp.prototype.compile%': typeof RegExp.prototype.compile;
        '%RegExp.prototype.toString%': typeof RegExp.prototype.toString;
        '%RegExp.prototype.test%': typeof RegExp.prototype.test;
        '%RegExpPrototype.exec%': typeof RegExp.prototype.exec;
        '%RegExpPrototype.dotAll%': (this: RegExp) => typeof RegExp.prototype.dotAll;
        '%RegExpPrototype.flags%': (this: RegExp) => typeof RegExp.prototype.flags;
        '%RegExpPrototype.global%': (this: RegExp) => typeof RegExp.prototype.global;
        '%RegExpPrototype.ignoreCase%': (this: RegExp) => typeof RegExp.prototype.ignoreCase;
        '%RegExpPrototype.multiline%': (this: RegExp) => typeof RegExp.prototype.multiline;
        '%RegExpPrototype.source%': (this: RegExp) => typeof RegExp.prototype.source;
        '%RegExpPrototype.sticky%': (this: RegExp) => typeof RegExp.prototype.sticky;
        '%RegExpPrototype.unicode%': (this: RegExp) => typeof RegExp.prototype.unicode;
        '%RegExpPrototype.compile%': typeof RegExp.prototype.compile;
        '%RegExpPrototype.toString%': typeof RegExp.prototype.toString;
        '%RegExpPrototype.test%': typeof RegExp.prototype.test;
        '%Set.prototype%': typeof Set.prototype;
        '%Set.prototype.has%': typeof Set.prototype.has;
        '%Set.prototype.add%': typeof Set.prototype.add;
        '%Set.prototype.delete%': typeof Set.prototype.delete;
        '%Set.prototype.clear%': typeof Set.prototype.clear;
        '%Set.prototype.entries%': typeof Set.prototype.entries;
        '%Set.prototype.forEach%': typeof Set.prototype.forEach;
        '%Set.prototype.size%': (this: Set<any>) => typeof Set.prototype.size;
        '%Set.prototype.values%': typeof Set.prototype.values;
        '%Set.prototype.keys%': typeof Set.prototype.keys;
        '%SetIteratorPrototype.next%': IterableIterator<any>['next'];
        '%SetPrototype.has%': typeof Set.prototype.has;
        '%SetPrototype.add%': typeof Set.prototype.add;
        '%SetPrototype.delete%': typeof Set.prototype.delete;
        '%SetPrototype.clear%': typeof Set.prototype.clear;
        '%SetPrototype.entries%': typeof Set.prototype.entries;
        '%SetPrototype.forEach%': typeof Set.prototype.forEach;
        '%SetPrototype.size%': (this: Set<any>) => typeof Set.prototype.size;
        '%SetPrototype.values%': typeof Set.prototype.values;
        '%SetPrototype.keys%': typeof Set.prototype.keys;
        '%SharedArrayBuffer.prototype%': SharedArrayBuffer;
        '%SharedArrayBuffer.prototype.byteLength%': (this: SharedArrayBuffer) => typeof SharedArrayBuffer.prototype.byteLength;
        '%SharedArrayBuffer.prototype.slice%': typeof SharedArrayBuffer.prototype.slice;
        '%SharedArrayBufferPrototype.byteLength%': (this: SharedArrayBuffer) => typeof SharedArrayBuffer.prototype.byteLength;
        '%SharedArrayBufferPrototype.slice%': typeof SharedArrayBuffer.prototype.slice;
        '%String.prototype%': typeof String.prototype;
        '%String.prototype.length%': typeof String.prototype.length;
        '%String.prototype.anchor%': typeof String.prototype.anchor;
        '%String.prototype.big%': typeof String.prototype.big;
        '%String.prototype.blink%': typeof String.prototype.blink;
        '%String.prototype.bold%': typeof String.prototype.bold;
        '%String.prototype.charAt%': typeof String.prototype.charAt;
        '%String.prototype.charCodeAt%': typeof String.prototype.charCodeAt;
        '%String.prototype.codePointAt%': typeof String.prototype.codePointAt;
        '%String.prototype.concat%': typeof String.prototype.concat;
        '%String.prototype.endsWith%': typeof String.prototype.endsWith;
        '%String.prototype.fontcolor%': typeof String.prototype.fontcolor;
        '%String.prototype.fontsize%': typeof String.prototype.fontsize;
        '%String.prototype.fixed%': typeof String.prototype.fixed;
        '%String.prototype.includes%': typeof String.prototype.includes;
        '%String.prototype.indexOf%': typeof String.prototype.indexOf;
        '%String.prototype.italics%': typeof String.prototype.italics;
        '%String.prototype.lastIndexOf%': typeof String.prototype.lastIndexOf;
        '%String.prototype.link%': typeof String.prototype.link;
        '%String.prototype.localeCompare%': typeof String.prototype.localeCompare;
        '%String.prototype.match%': typeof String.prototype.match;
        '%String.prototype.matchAll%': typeof String.prototype.matchAll;
        '%String.prototype.normalize%': typeof String.prototype.normalize;
        '%String.prototype.padEnd%': typeof String.prototype.padEnd;
        '%String.prototype.padStart%': typeof String.prototype.padStart;
        '%String.prototype.repeat%': typeof String.prototype.repeat;
        '%String.prototype.replace%': typeof String.prototype.replace;
        '%String.prototype.search%': typeof String.prototype.search;
        '%String.prototype.slice%': typeof String.prototype.slice;
        '%String.prototype.small%': typeof String.prototype.small;
        '%String.prototype.split%': typeof String.prototype.split;
        '%String.prototype.strike%': typeof String.prototype.strike;
        '%String.prototype.sub%': typeof String.prototype.sub;
        '%String.prototype.substr%': typeof String.prototype.substr;
        '%String.prototype.substring%': typeof String.prototype.substring;
        '%String.prototype.sup%': typeof String.prototype.sup;
        '%String.prototype.startsWith%': typeof String.prototype.startsWith;
        '%String.prototype.toString%': typeof String.prototype.toString;
        '%String.prototype.trim%': typeof String.prototype.trim;
        '%String.prototype.trimStart%': typeof String.prototype.trimStart;
        '%String.prototype.trimLeft%': typeof String.prototype.trimLeft;
        '%String.prototype.trimEnd%': typeof String.prototype.trimEnd;
        '%String.prototype.trimRight%': typeof String.prototype.trimRight;
        '%String.prototype.toLocaleLowerCase%': typeof String.prototype.toLocaleLowerCase;
        '%String.prototype.toLocaleUpperCase%': typeof String.prototype.toLocaleUpperCase;
        '%String.prototype.toLowerCase%': typeof String.prototype.toLowerCase;
        '%String.prototype.toUpperCase%': typeof String.prototype.toUpperCase;
        '%String.prototype.valueOf%': typeof String.prototype.valueOf;
        '%String.fromCharCode%': typeof String.fromCharCode;
        '%String.fromCodePoint%': typeof String.fromCodePoint;
        '%String.raw%': typeof String.raw;
        '%StringIteratorPrototype.next%': IterableIterator<string>['next'];
        '%StringPrototype.length%': typeof String.prototype.length;
        '%StringPrototype.anchor%': typeof String.prototype.anchor;
        '%StringPrototype.big%': typeof String.prototype.big;
        '%StringPrototype.blink%': typeof String.prototype.blink;
        '%StringPrototype.bold%': typeof String.prototype.bold;
        '%StringPrototype.charAt%': typeof String.prototype.charAt;
        '%StringPrototype.charCodeAt%': typeof String.prototype.charCodeAt;
        '%StringPrototype.codePointAt%': typeof String.prototype.codePointAt;
        '%StringPrototype.concat%': typeof String.prototype.concat;
        '%StringPrototype.endsWith%': typeof String.prototype.endsWith;
        '%StringPrototype.fontcolor%': typeof String.prototype.fontcolor;
        '%StringPrototype.fontsize%': typeof String.prototype.fontsize;
        '%StringPrototype.fixed%': typeof String.prototype.fixed;
        '%StringPrototype.includes%': typeof String.prototype.includes;
        '%StringPrototype.indexOf%': typeof String.prototype.indexOf;
        '%StringPrototype.italics%': typeof String.prototype.italics;
        '%StringPrototype.lastIndexOf%': typeof String.prototype.lastIndexOf;
        '%StringPrototype.link%': typeof String.prototype.link;
        '%StringPrototype.localeCompare%': typeof String.prototype.localeCompare;
        '%StringPrototype.match%': typeof String.prototype.match;
        '%StringPrototype.matchAll%': typeof String.prototype.matchAll;
        '%StringPrototype.normalize%': typeof String.prototype.normalize;
        '%StringPrototype.padEnd%': typeof String.prototype.padEnd;
        '%StringPrototype.padStart%': typeof String.prototype.padStart;
        '%StringPrototype.repeat%': typeof String.prototype.repeat;
        '%StringPrototype.replace%': typeof String.prototype.replace;
        '%StringPrototype.search%': typeof String.prototype.search;
        '%StringPrototype.slice%': typeof String.prototype.slice;
        '%StringPrototype.small%': typeof String.prototype.small;
        '%StringPrototype.split%': typeof String.prototype.split;
        '%StringPrototype.strike%': typeof String.prototype.strike;
        '%StringPrototype.sub%': typeof String.prototype.sub;
        '%StringPrototype.substr%': typeof String.prototype.substr;
        '%StringPrototype.substring%': typeof String.prototype.substring;
        '%StringPrototype.sup%': typeof String.prototype.sup;
        '%StringPrototype.startsWith%': typeof String.prototype.startsWith;
        '%StringPrototype.toString%': typeof String.prototype.toString;
        '%StringPrototype.trim%': typeof String.prototype.trim;
        '%StringPrototype.trimStart%': typeof String.prototype.trimStart;
        '%StringPrototype.trimLeft%': typeof String.prototype.trimLeft;
        '%StringPrototype.trimEnd%': typeof String.prototype.trimEnd;
        '%StringPrototype.trimRight%': typeof String.prototype.trimRight;
        '%StringPrototype.toLocaleLowerCase%': typeof String.prototype.toLocaleLowerCase;
        '%StringPrototype.toLocaleUpperCase%': typeof String.prototype.toLocaleUpperCase;
        '%StringPrototype.toLowerCase%': typeof String.prototype.toLowerCase;
        '%StringPrototype.toUpperCase%': typeof String.prototype.toUpperCase;
        '%StringPrototype.valueOf%': typeof String.prototype.valueOf;
        '%Symbol.prototype%': typeof Symbol.prototype;
        '%Symbol.prototype.toString%': typeof Symbol.prototype.toString;
        '%Symbol.prototype.valueOf%': typeof Symbol.prototype.valueOf;
        '%Symbol.prototype.description%': (this: symbol | Symbol) => typeof Symbol.prototype.description;
        '%Symbol.for%': typeof Symbol.for;
        '%Symbol.keyFor%': typeof Symbol.keyFor;
        '%Symbol.asyncIterator%': typeof Symbol.asyncIterator;
        '%Symbol.hasInstance%': typeof Symbol.hasInstance;
        '%Symbol.isConcatSpreadable%': typeof Symbol.isConcatSpreadable;
        '%Symbol.iterator%': typeof Symbol.iterator;
        '%Symbol.match%': typeof Symbol.match;
        '%Symbol.matchAll%': typeof Symbol.matchAll;
        '%Symbol.replace%': typeof Symbol.replace;
        '%Symbol.search%': typeof Symbol.search;
        '%Symbol.species%': typeof Symbol.species;
        '%Symbol.split%': typeof Symbol.split;
        '%Symbol.toPrimitive%': typeof Symbol.toPrimitive;
        '%Symbol.toStringTag%': typeof Symbol.toStringTag;
        '%Symbol.unscopables%': typeof Symbol.unscopables;
        '%SymbolPrototype.toString%': typeof Symbol.prototype.toString;
        '%SymbolPrototype.valueOf%': typeof Symbol.prototype.valueOf;
        '%SymbolPrototype.description%': (this: symbol | Symbol) => typeof Symbol.prototype.description;
        '%SyntaxError.prototype%': SyntaxError;
        '%SyntaxError.prototype.name%': typeof SyntaxError.prototype.name;
        '%SyntaxError.prototype.message%': typeof SyntaxError.prototype.message;
        '%SyntaxErrorPrototype.name%': typeof SyntaxError.prototype.name;
        '%SyntaxErrorPrototype.message%': typeof SyntaxError.prototype.message;
        '%TypedArray.prototype%': TypedArrayPrototype;
        '%TypedArray.prototype.buffer%': (this: TypedArray) => TypedArrayPrototype['buffer'];
        '%TypedArray.prototype.byteLength%': (this: TypedArray) => TypedArrayPrototype['byteLength'];
        '%TypedArray.prototype.byteOffset%': (this: TypedArray) => TypedArrayPrototype['byteOffset'];
        '%TypedArray.prototype.length%': (this: TypedArray) => TypedArrayPrototype['length'];
        '%TypedArray.prototype.entries%': TypedArrayPrototype['entries'];
        '%TypedArray.prototype.keys%': TypedArrayPrototype['keys'];
        '%TypedArray.prototype.values%': TypedArrayPrototype['values'];
        '%TypedArray.prototype.copyWithin%': TypedArrayPrototype['copyWithin'];
        '%TypedArray.prototype.every%': TypedArrayPrototype['every'];
        '%TypedArray.prototype.fill%': TypedArrayPrototype['fill'];
        '%TypedArray.prototype.filter%': TypedArrayPrototype['filter'];
        '%TypedArray.prototype.find%': TypedArrayPrototype['find'];
        '%TypedArray.prototype.findIndex%': TypedArrayPrototype['findIndex'];
        '%TypedArray.prototype.forEach%': TypedArrayPrototype['forEach'];
        '%TypedArray.prototype.includes%': TypedArrayPrototype['includes'];
        '%TypedArray.prototype.indexOf%': TypedArrayPrototype['indexOf'];
        '%TypedArray.prototype.join%': TypedArrayPrototype['join'];
        '%TypedArray.prototype.lastIndexOf%': TypedArrayPrototype['lastIndexOf'];
        '%TypedArray.prototype.map%': TypedArrayPrototype['map'];
        '%TypedArray.prototype.reverse%': TypedArrayPrototype['reverse'];
        '%TypedArray.prototype.reduce%': TypedArrayPrototype['reduce'];
        '%TypedArray.prototype.reduceRight%': TypedArrayPrototype['reduceRight'];
        '%TypedArray.prototype.set%': TypedArrayPrototype['set'];
        '%TypedArray.prototype.slice%': TypedArrayPrototype['slice'];
        '%TypedArray.prototype.some%': TypedArrayPrototype['some'];
        '%TypedArray.prototype.sort%': TypedArrayPrototype['sort'];
        '%TypedArray.prototype.subarray%': TypedArrayPrototype['subarray'];
        '%TypedArray.prototype.toLocaleString%': TypedArrayPrototype['toLocaleString'];
        '%TypedArray.prototype.toString%': TypedArrayPrototype['toString'];
        '%TypedArray.of%': TypedArrayConstructor['of'];
        '%TypedArray.from%': TypedArrayConstructor['from'];
        '%TypedArrayPrototype.buffer%': (this: TypedArray) => TypedArrayPrototype['buffer'];
        '%TypedArrayPrototype.byteLength%': (this: TypedArray) => TypedArrayPrototype['byteLength'];
        '%TypedArrayPrototype.byteOffset%': (this: TypedArray) => TypedArrayPrototype['byteOffset'];
        '%TypedArrayPrototype.length%': (this: TypedArray) => TypedArrayPrototype['length'];
        '%TypedArrayPrototype.entries%': TypedArrayPrototype['entries'];
        '%TypedArrayPrototype.keys%': TypedArrayPrototype['keys'];
        '%TypedArrayPrototype.values%': TypedArrayPrototype['values'];
        '%TypedArrayPrototype.copyWithin%': TypedArrayPrototype['copyWithin'];
        '%TypedArrayPrototype.every%': TypedArrayPrototype['every'];
        '%TypedArrayPrototype.fill%': TypedArrayPrototype['fill'];
        '%TypedArrayPrototype.filter%': TypedArrayPrototype['filter'];
        '%TypedArrayPrototype.find%': TypedArrayPrototype['find'];
        '%TypedArrayPrototype.findIndex%': TypedArrayPrototype['findIndex'];
        '%TypedArrayPrototype.forEach%': TypedArrayPrototype['forEach'];
        '%TypedArrayPrototype.includes%': TypedArrayPrototype['includes'];
        '%TypedArrayPrototype.indexOf%': TypedArrayPrototype['indexOf'];
        '%TypedArrayPrototype.join%': TypedArrayPrototype['join'];
        '%TypedArrayPrototype.lastIndexOf%': TypedArrayPrototype['lastIndexOf'];
        '%TypedArrayPrototype.map%': TypedArrayPrototype['map'];
        '%TypedArrayPrototype.reverse%': TypedArrayPrototype['reverse'];
        '%TypedArrayPrototype.reduce%': TypedArrayPrototype['reduce'];
        '%TypedArrayPrototype.reduceRight%': TypedArrayPrototype['reduceRight'];
        '%TypedArrayPrototype.set%': TypedArrayPrototype['set'];
        '%TypedArrayPrototype.slice%': TypedArrayPrototype['slice'];
        '%TypedArrayPrototype.some%': TypedArrayPrototype['some'];
        '%TypedArrayPrototype.sort%': TypedArrayPrototype['sort'];
        '%TypedArrayPrototype.subarray%': TypedArrayPrototype['subarray'];
        '%TypedArrayPrototype.toLocaleString%': TypedArrayPrototype['toLocaleString'];
        '%TypedArrayPrototype.toString%': TypedArrayPrototype['toString'];
        '%TypeError.prototype%': TypeError;
        '%TypeError.prototype.name%': typeof TypeError.prototype.name;
        '%TypeError.prototype.message%': typeof TypeError.prototype.message;
        '%TypeErrorPrototype.name%': typeof TypeError.prototype.name;
        '%TypeErrorPrototype.message%': typeof TypeError.prototype.message;
        '%Uint8Array.prototype%': Uint8Array;
        '%Uint8Array.prototype.BYTES_PER_ELEMENT%': typeof Uint8Array.prototype.BYTES_PER_ELEMENT;
        '%Uint8Array.BYTES_PER_ELEMENT%': typeof Uint8Array.BYTES_PER_ELEMENT;
        '%Uint8ArrayPrototype.BYTES_PER_ELEMENT%': typeof Uint8Array.prototype.BYTES_PER_ELEMENT;
        '%Uint8ClampedArray.prototype%': Uint8ClampedArray;
        '%Uint8ClampedArray.prototype.BYTES_PER_ELEMENT%': typeof Uint8ClampedArray.prototype.BYTES_PER_ELEMENT;
        '%Uint8ClampedArray.BYTES_PER_ELEMENT%': typeof Uint8ClampedArray.BYTES_PER_ELEMENT;
        '%Uint8ClampedArrayPrototype.BYTES_PER_ELEMENT%': typeof Uint8ClampedArray.prototype.BYTES_PER_ELEMENT;
        '%Uint16Array.prototype%': Uint16Array;
        '%Uint16Array.prototype.BYTES_PER_ELEMENT%': typeof Uint16Array.prototype.BYTES_PER_ELEMENT;
        '%Uint16Array.BYTES_PER_ELEMENT%': typeof Uint16Array.BYTES_PER_ELEMENT;
        '%Uint16ArrayPrototype.BYTES_PER_ELEMENT%': typeof Uint16Array.prototype.BYTES_PER_ELEMENT;
        '%Uint32Array.prototype%': Uint32Array;
        '%Uint32Array.prototype.BYTES_PER_ELEMENT%': typeof Uint32Array.prototype.BYTES_PER_ELEMENT;
        '%Uint32Array.BYTES_PER_ELEMENT%': typeof Uint32Array.BYTES_PER_ELEMENT;
        '%Uint32ArrayPrototype.BYTES_PER_ELEMENT%': typeof Uint32Array.prototype.BYTES_PER_ELEMENT;
        '%URIError.prototype%': URIError;
        '%URIError.prototype.name%': typeof URIError.prototype.name;
        '%URIError.prototype.message%': typeof URIError.prototype.message;
        '%URIErrorPrototype.name%': typeof URIError.prototype.name;
        '%URIErrorPrototype.message%': typeof URIError.prototype.message;
        '%WeakMap.prototype%': typeof WeakMap.prototype;
        '%WeakMap.prototype.delete%': typeof WeakMap.prototype.delete;
        '%WeakMap.prototype.get%': typeof WeakMap.prototype.get;
        '%WeakMap.prototype.set%': typeof WeakMap.prototype.set;
        '%WeakMap.prototype.has%': typeof WeakMap.prototype.has;
        '%WeakMapPrototype.delete%': typeof WeakMap.prototype.delete;
        '%WeakMapPrototype.get%': typeof WeakMap.prototype.get;
        '%WeakMapPrototype.set%': typeof WeakMap.prototype.set;
        '%WeakMapPrototype.has%': typeof WeakMap.prototype.has;
        '%WeakSet.prototype%': typeof WeakSet.prototype;
        '%WeakSet.prototype.delete%': typeof WeakSet.prototype.delete;
        '%WeakSet.prototype.has%': typeof WeakSet.prototype.has;
        '%WeakSet.prototype.add%': typeof WeakSet.prototype.add;
        '%WeakSetPrototype.delete%': typeof WeakSet.prototype.delete;
        '%WeakSetPrototype.has%': typeof WeakSet.prototype.has;
        '%WeakSetPrototype.add%': typeof WeakSet.prototype.add;
    }
}

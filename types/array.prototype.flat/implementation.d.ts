// Adapted from https://github.com/microsoft/TypeScript/blob/master/lib/lib.es2019.array.d.ts

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(receiver: U[][][][][][][][], depth: 7): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(receiver: U[][][][][][][], depth: 6): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(receiver: U[][][][][][], depth: 5): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(
    receiver:
        | readonly U[][][][][]
        | ReadonlyArray<readonly U[][][][]>
        | ReadonlyArray<Array<readonly U[][][]>>
        | ReadonlyArray<Array<Array<readonly U[][]>>>
        | ReadonlyArray<Array<Array<Array<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<readonly U[][][]>>
        | ReadonlyArray<ReadonlyArray<Array<Array<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<Array<Array<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<Array<Array<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<Array<readonly U[][]>>>
        | ReadonlyArray<ReadonlyArray<Array<readonly U[][]>>>
        | ReadonlyArray<ReadonlyArray<ReadonlyArray<readonly U[][]>>>
        | ReadonlyArray<ReadonlyArray<ReadonlyArray<Array<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<ReadonlyArray<Array<readonly U[]>>>>
        | ReadonlyArray<Array<ReadonlyArray<ReadonlyArray<readonly U[]>>>>
        | ReadonlyArray<ReadonlyArray<ReadonlyArray<ReadonlyArray<readonly U[]>>>>,
    depth: 4,
): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(
    receiver:
        | readonly U[][][][]
        | ReadonlyArray<Array<Array<readonly U[]>>>
        | ReadonlyArray<Array<readonly U[][]>>
        | ReadonlyArray<readonly U[][][]>
        | ReadonlyArray<ReadonlyArray<readonly U[][]>>
        | ReadonlyArray<ReadonlyArray<Array<readonly U[]>>>
        | ReadonlyArray<ReadonlyArray<Array<readonly U[]>>>
        | ReadonlyArray<ReadonlyArray<ReadonlyArray<readonly U[]>>>,
    depth: 3,
): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(
    receiver:
        | readonly U[][][]
        | ReadonlyArray<readonly U[][]>
        | ReadonlyArray<Array<readonly U[]>>
        | ReadonlyArray<ReadonlyArray<readonly U[]>>,
    depth: 2,
): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(receiver: readonly U[][] | ReadonlyArray<readonly U[]>, depth?: 1): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth.
 *
 * @param depth The maximum recursion depth
 */
declare function flat<U>(receiver: readonly U[], depth: 0): U[];

/**
 * Returns a new array with all sub-array elements concatenated into it recursively up to the
 * specified depth. If no depth is provided, flat method defaults to the depth of 1.
 *
 * @param depth The maximum recursion depth
 */
declare function flat(receiver: readonly any[], depth?: number): any[];

export = flat;

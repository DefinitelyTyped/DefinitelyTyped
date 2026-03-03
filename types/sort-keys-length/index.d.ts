/**
 * Options for sorting object keys by length.
 */
interface SortKeysLengthOptions {
    /**
     * Recursively sort keys.
     * @default false
     */
    deep?: boolean;
}

/**
 * Sort object keys by length in ascending order (shortest first).
 *
 * @param object - Object to sort
 * @param options - Sort options
 * @returns A new object with keys sorted by length in ascending order
 *
 * @example
 * ```javascript
 * sortKeysLength.asc({ab: 'x', a: 'y', abc: 'z'});
 * //=> {a: 'y', ab: 'x', abc: 'z'}
 * ```
 */
declare function asc<T extends object>(object: T, options?: SortKeysLengthOptions): T;

/**
 * Sort object keys by length in descending order (longest first).
 *
 * @param object - Object to sort
 * @param options - Sort options
 * @returns A new object with keys sorted by length in descending order
 *
 * @example
 * ```javascript
 * sortKeysLength.desc({ab: 'x', a: 'y', abc: 'z'});
 * //=> {abc: 'z', ab: 'x', a: 'y'}
 * ```
 */
declare function desc<T extends object>(object: T, options?: SortKeysLengthOptions): T;

export { asc, desc, SortKeysLengthOptions };

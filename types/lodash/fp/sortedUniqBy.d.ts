// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SortedUniqBy {
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (): SortedUniqBy;
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (iteratee: (value: string) => _.NotVoid): SortedUniqBy1x1;
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (iteratee: (value: string) => _.NotVoid, array: string | null | undefined): string[];
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    <T>(iteratee: _.ValueIteratee<T>): SortedUniqBy2x1<T>;
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    <T>(iteratee: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
}
interface SortedUniqBy1x1 {
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (): SortedUniqBy1x1;
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (array: string | null | undefined): string[];
}
interface SortedUniqBy2x1<T> {
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (): SortedUniqBy2x1<T>;
    /**
     * This method is like `_.uniqBy` except that it's designed and optimized
     * for sorted arrays.
     *
     * @category Array
     * @param array The array to inspect.
     * @param [iteratee] The iteratee invoked per element.
     * @returns Returns the new duplicate free array.
     * @example
     *
     * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
     * // => [1.1, 2.2]
     */
    (array: _.List<T> | null | undefined): T[];
}

declare const sortedUniqBy: SortedUniqBy;
export = sortedUniqBy;

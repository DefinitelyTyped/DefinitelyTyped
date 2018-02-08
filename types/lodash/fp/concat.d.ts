// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Concat {
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @category Array
     * @param array The array to concatenate.
     * @param [values] The values to concatenate.
     * @returns Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    (): Concat;
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @category Array
     * @param array The array to concatenate.
     * @param [values] The values to concatenate.
     * @returns Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    <T>(array: _.Many<T>): Concat1x1<T>;
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @category Array
     * @param array The array to concatenate.
     * @param [values] The values to concatenate.
     * @returns Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    <T>(array: _.Many<T>, values: _.Many<T>): T[];
}
interface Concat1x1<T> {
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @category Array
     * @param array The array to concatenate.
     * @param [values] The values to concatenate.
     * @returns Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    (): Concat1x1<T>;
    /**
     * Creates a new array concatenating `array` with any additional arrays
     * and/or values.
     *
     * @category Array
     * @param array The array to concatenate.
     * @param [values] The values to concatenate.
     * @returns Returns the new concatenated array.
     * @example
     *
     * var array = [1];
     * var other = _.concat(array, 2, [3], [[4]]);
     *
     * console.log(other);
     * // => [1, 2, 3, [4]]
     *
     * console.log(array);
     * // => [1]
     */
    (values: _.Many<T>): T[];
}

declare const concat: Concat;
declare namespace concat {}
export = concat;

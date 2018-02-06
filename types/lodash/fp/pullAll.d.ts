import _ = require("../index");

declare namespace Lodash {
    interface PullAll {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        (): PullAll;
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        <T>(values: _.List<T>): PullAll1x1<T>;
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        <T>(values: _.List<T>, array: ReadonlyArray<T>): T[];
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        <T>(values: _.List<T>, array: _.List<T>): _.List<T>;
    }
    interface PullAll1x1<T> {
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        (): PullAll1x1<T>;
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        (array: ReadonlyArray<T>): T[];
        /**
         * This method is like `_.pull` except that it accepts an array of values to remove.
         *
         * **Note:** Unlike `_.difference`, this method mutates `array`.
         *
         * @category Array
         * @param array The array to modify.
         * @param values The values to remove.
         * @returns Returns `array`.
         * @example
         *
         * var array = [1, 2, 3, 1, 2, 3];
         *
         * _.pull(array, [2, 3]);
         * console.log(array);
         * // => [1, 1]
         */
        (array: _.List<T>): _.List<T>;
    }
}

declare const pullAll: Lodash.PullAll;
export = pullAll;

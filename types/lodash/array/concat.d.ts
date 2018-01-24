import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
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
         concat<T>(array: Many<T>, ...values: Array<Many<T>>): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashImplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.compact
         */
        concat<T>(this: LoDashExplicitWrapper<Many<T>>, ...values: Array<Many<T>>): LoDashExplicitWrapper<T[]>;
    }
}
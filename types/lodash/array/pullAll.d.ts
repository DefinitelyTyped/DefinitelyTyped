import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
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
        pullAll<T>(
            array: T[],
            values?: List<T>,
        ): T[];

        /**
         * @see _.pullAll
         */
        pullAll<T>(
            array: List<T>,
            values?: List<T>,
        ): List<T>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashImplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.pullAll
         */
        pullAll<T>(
            this: LoDashExplicitWrapper<List<T>>,
            values?: List<T>
        ): this;
    }
}
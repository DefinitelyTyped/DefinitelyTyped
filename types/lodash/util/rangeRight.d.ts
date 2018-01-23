declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like `_.range` except that it populates values in
         * descending order.
         *
         * @category Util
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @returns Returns the new array of numbers.
         * @example
         *
         * _.rangeRight(4);
         * // => [3, 2, 1, 0]
         *
         * _.rangeRight(-4);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 5);
         * // => [4, 3, 2, 1]
         *
         * _.rangeRight(0, 20, 5);
         * // => [15, 10, 5, 0]
         *
         * _.rangeRight(0, -4, -1);
         * // => [-3, -2, -1, 0]
         *
         * _.rangeRight(1, 4, 0);
         * // => [1, 1, 1]
         *
         * _.rangeRight(0);
         * // => []
         */
        rangeRight(
            start: number,
            end?: number,
            step?: number
        ): number[];

        /**
         * This method is like _.range except that it populates values in
         * descending order.
         *
         * @param start The start of the range.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns a new range array.
         */
        rangeRight(
            end: number,
            index: string | number,
            guard: object
        ): number[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashImplicitWrapper<number[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.rangeRight
         */
        rangeRight(
            end?: number,
            step?: number
        ): LoDashExplicitWrapper<number[]>;
    }
}
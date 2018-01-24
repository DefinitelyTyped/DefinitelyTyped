declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         *
         * @param start The start of the range.
         * @param end The end of the range.
         * @param step The value to increment or decrement by.
         * @return Returns a new range array.
         */
        range(
            start: number,
            end?: number,
            step?: number
        ): number[];

        /**
         * Creates an array of numbers (positive and/or negative) progressing from start up to, but not including, end.
         * If end is not specified it’s set to start with start then set to 0. If end is less than start a zero-length
         * range is created unless a negative step is specified.
         *
         * @param start The start of the range.
         * @param index Not used in this overload.
         * @param guard Enables use as an iteratee for methods like _.map. You should not pass this parameter directly in your code.
         * @return Returns a new range array.
         */
        range(
            end: number,
            index: string | number,
            guard: object
        ): number[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashImplicitWrapper<number[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.range
         */
        range(
            end?: number,
            step?: number
        ): LoDashExplicitWrapper<number[]>;
    }
}
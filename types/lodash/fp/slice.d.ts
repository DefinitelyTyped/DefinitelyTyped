import _ = require("../index");

declare namespace Lodash {
    interface Slice {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        (): Slice;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        (end: number): Slice1x1;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        <T>(end: number, array: _.List<T> | null | undefined): Slice1x2<T>;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        <T>(end: number, array: _.List<T> | null | undefined, start: number): T[];
    }
    interface Slice1x1 {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        (): Slice1x1;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): Slice1x2<T>;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined, start: number): T[];
    }
    interface Slice1x2<T> {
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        (): Slice1x2<T>;
        /**
         * Creates a slice of array from start up to, but not including, end.
         *
         * @param array The array to slice.
         * @param start The start position.
         * @param end The end position.
         * @return Returns the slice of array.
         */
        (start: number): T[];
    }
}

declare const slice: Lodash.Slice;
export = slice;

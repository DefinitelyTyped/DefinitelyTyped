import _ = require("../index");

declare namespace Lodash {
    interface Fill {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (): Fill;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (end: number): Fill1x1;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (end: number, start: number): Fill1x2;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(end: number, start: number, array: U[] | null | undefined): Fill1x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(end: number, start: number, array: U[] | null | undefined, value: T): Array<T | U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(end: number, start: number, array: _.List<U> | null | undefined): Fill2x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(end: number, start: number, array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x1 {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (): Fill1x1;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (start: number): Fill1x2;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(start: number, array: U[] | null | undefined): Fill1x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(start: number, array: U[] | null | undefined, value: T): Array<T | U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (start: number): Fill2x2;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(start: number, array: _.List<U> | null | undefined): Fill2x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(start: number, array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x2 {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (): Fill1x2;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(array: U[] | null | undefined): Fill1x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(array: U[] | null | undefined, value: T): Array<T | U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <U>(array: _.List<U> | null | undefined): Fill2x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T, U>(array: _.List<U> | null | undefined, value: T): _.List<T | U>;
    }
    interface Fill1x3<U> {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (): Fill1x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T>(value: T): Array<T | U>;
    }
    interface Fill2x3<U> {
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        (): Fill2x3<U>;
        /**
         * Fills elements of array with value from start up to, but not including, end.
         *
         * Note: This method mutates array.
         *
         * @param array The array to fill.
         * @param value The value to fill array with.
         * @param start The start position.
         * @param end The end position.
         * @return Returns array.
         */
        <T>(value: T): _.List<T | U>;
    }
}

declare const fill: Lodash.Fill;
export = fill;

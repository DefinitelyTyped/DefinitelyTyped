// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    (start: number): Fill1x1;
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
    (start: number, end: number): Fill1x2;
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
    <T>(start: number, end: number, value: T): Fill1x3<T>;
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
    <T, U>(start: number, end: number, value: T, array: U[] | null | undefined): Array<T | U>;
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
    <T, U>(start: number, end: number, value: T, array: _.List<U> | null | undefined): _.List<T | U>;
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
    (end: number): Fill1x2;
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
    <T>(end: number, value: T): Fill1x3<T>;
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
    <T, U>(end: number, value: T, array: U[] | null | undefined): Array<T | U>;
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
    (end: number): Fill1x2;
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
    <T>(end: number, value: T): Fill1x3<T>;
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
    <T, U>(end: number, value: T, array: _.List<U> | null | undefined): _.List<T | U>;
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
    <T>(value: T): Fill1x3<T>;
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
    <T, U>(value: T, array: U[] | null | undefined): Array<T | U>;
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
    <T>(value: T): Fill1x3<T>;
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
    <T, U>(value: T, array: _.List<U> | null | undefined): _.List<T | U>;
}
interface Fill1x3<T> {
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
    (): Fill1x3<T>;
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
    <U>(array: U[] | null | undefined): Array<T | U>;
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
    <U>(array: _.List<U> | null | undefined): _.List<T | U>;
}

declare const fill: Fill;
declare namespace fill {}
export = fill;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface PullAt {
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    (): PullAt;
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    (indexes: _.Many<number>): PullAt1x1;
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    <T>(indexes: _.Many<number>, array: ReadonlyArray<T>): T[];
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    <T>(indexes: _.Many<number>, array: _.List<T>): _.List<T>;
}
interface PullAt1x1 {
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    (): PullAt1x1;
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    <T>(array: ReadonlyArray<T>): T[];
    /**
     * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
     * Indexes may be specified as an array of indexes or as individual arguments.
     *
     * Note: Unlike _.at, this method mutates array.
     *
     * @param array The array to modify.
     * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
     * @return Returns the new array of removed elements.
     */
    <T>(array: _.List<T>): _.List<T>;
}

declare const pullAt: PullAt;
declare namespace pullAt {}
export = pullAt;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface DropRight {
    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    (): DropRight;
    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    (n: number): DropRight1x1;
    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    <T>(n: number, array: _.List<T> | null | undefined): T[];
}
interface DropRight1x1 {
    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    (): DropRight1x1;
    /**
     * Creates a slice of array with n elements dropped from the end.
     *
     * @param array The array to query.
     * @param n The number of elements to drop.
     * @return Returns the slice of array.
     */
    <T>(array: _.List<T> | null | undefined): T[];
}

declare const dropRight: DropRight;
export = dropRight;

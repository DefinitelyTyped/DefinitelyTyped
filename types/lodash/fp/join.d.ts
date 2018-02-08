// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Join {
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @param array The array to convert.
     * @param separator The element separator.
     * @returns Returns the joined string.
     */
    (): Join;
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @param array The array to convert.
     * @param separator The element separator.
     * @returns Returns the joined string.
     */
    (separator: string): Join1x1;
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @param array The array to convert.
     * @param separator The element separator.
     * @returns Returns the joined string.
     */
    (separator: string, array: _.List<any> | null | undefined): string;
}
interface Join1x1 {
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @param array The array to convert.
     * @param separator The element separator.
     * @returns Returns the joined string.
     */
    (): Join1x1;
    /**
     * Converts all elements in `array` into a string separated by `separator`.
     *
     * @param array The array to convert.
     * @param separator The element separator.
     * @returns Returns the joined string.
     */
    (array: _.List<any> | null | undefined): string;
}

declare const join: Join;
declare namespace join {}
export = join;

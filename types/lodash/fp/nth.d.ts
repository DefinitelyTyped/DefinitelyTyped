// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Nth {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        (): Nth;
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        (n: number): Nth1x1;
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        <T>(n: number, array: _.List<T> | null | undefined): T | undefined;
    }
    interface Nth1x1 {
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        (): Nth1x1;
        /**
         * Gets the element at index `n` of `array`. If `n` is negative, the nth element from the end is returned.
         *
         * @param array array The array to query.
         * @param value The index of the element to return.
         * @return Returns the nth element of `array`.
         */
        <T>(array: _.List<T> | null | undefined): T | undefined;
    }
}

declare const nth: Lodash.Nth;
export = nth;

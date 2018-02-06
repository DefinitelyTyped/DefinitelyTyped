// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface TakeRight {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (): TakeRight;
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (n: number): TakeRight1x1;
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface TakeRight1x1 {
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (): TakeRight1x1;
        /**
         * Creates a slice of array with n elements taken from the end.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const takeRight: Lodash.TakeRight;
export = takeRight;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Drop {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        (): Drop;
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        (n: number): Drop1x1;
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface Drop1x1 {
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        (): Drop1x1;
        /**
         * Creates a slice of array with n elements dropped from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to drop.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const drop: Lodash.Drop;
export = drop;

import _ = require("../index");

declare namespace Lodash {
    interface Take {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (): Take;
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (n: number): Take1x1;
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        <T>(n: number, array: _.List<T> | null | undefined): T[];
    }
    interface Take1x1 {
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        (): Take1x1;
        /**
         * Creates a slice of array with n elements taken from the beginning.
         *
         * @param array The array to query.
         * @param n The number of elements to take.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const take: Lodash.Take;
export = take;

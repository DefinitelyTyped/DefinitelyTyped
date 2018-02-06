import _ = require("../index");

declare namespace Lodash {
    interface Tail {
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        (): Tail;
        /**
         * Gets all but the first element of array.
         *
         * @param array The array to query.
         * @return Returns the slice of array.
         */
        <T>(array: _.List<T> | null | undefined): T[];
    }
}

declare const tail: Lodash.Tail;
export = tail;

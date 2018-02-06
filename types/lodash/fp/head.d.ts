import _ = require("../index");

declare namespace Lodash {
    interface Head {
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        (): Head;
        /**
         * Gets the first element of array.
         *
         * @alias _.first
         *
         * @param array The array to query.
         * @return Returns the first element of array.
         */
        <T>(array: _.List<T> | null | undefined): T | undefined;
    }
}

declare const head: Lodash.Head;
export = head;

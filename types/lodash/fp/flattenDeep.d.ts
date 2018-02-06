import _ = require("../index");

declare namespace Lodash {
    interface FlattenDeep {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        (): FlattenDeep;
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        <T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }
}

declare const flattenDeep: Lodash.FlattenDeep;
export = flattenDeep;

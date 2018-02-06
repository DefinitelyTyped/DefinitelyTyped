import _ = require("../index");

declare namespace Lodash {
    interface Flatten {
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        (): Flatten;
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        <T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): Flatten1x1<T>;
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        <T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined, isDeep: boolean): T[];
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        <T>(array: _.List<_.Many<T>> | null | undefined): T[];
    }
    interface Flatten1x1<T> {
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        (): Flatten1x1<T>;
        /**
         * Flattens a nested array. If isDeep is true the array is recursively flattened, otherwise it’s only
         * flattened a single level.
         *
         * @param array The array to flatten.
         * @param isDeep Specify a deep flatten.
         * @return Returns the new flattened array.
         */
        (isDeep: boolean): T[];
    }
}

declare const flatten: Lodash.Flatten;
export = flatten;

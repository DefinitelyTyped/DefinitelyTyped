import _ = require("../index");

declare namespace Lodash {
    interface Zip {
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        (): Zip;
        /**
         * Creates an array of grouped elements, the first of which contains the first elements of the given arrays,
         * the second of which contains the second elements of the given arrays, and so on.
         *
         * @param arrays The arrays to process.
         * @return Returns the new array of grouped elements.
         */
        <T>(arrays: ReadonlyArray<_.List<T> | null | undefined>): (T | undefined)[][];
    }
}

declare const zipAll: Lodash.Zip;
export = zipAll;

import _ = require("../index");

declare namespace Lodash {
    interface Xor {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        (): Xor;
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        <T>(arrays: _.List<T> | null | undefined): T[];
    }
}

declare const xor: Lodash.Xor;
export = xor;

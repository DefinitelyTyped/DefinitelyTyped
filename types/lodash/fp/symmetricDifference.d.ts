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
        <T>(arrays2: _.List<T> | null | undefined): Xor1x1<T>;
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        <T>(arrays2: _.List<T> | null | undefined, arrays: _.List<T> | null | undefined): T[];
    }
    interface Xor1x1<T> {
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        (): Xor1x1<T>;
        /**
         * Creates an array of unique values that is the symmetric difference of the provided arrays.
         *
         * @param arrays The arrays to inspect.
         * @return Returns the new array of values.
         */
        (arrays: _.List<T> | null | undefined): T[];
    }
}

declare const symmetricDifference: Lodash.Xor;
export = symmetricDifference;

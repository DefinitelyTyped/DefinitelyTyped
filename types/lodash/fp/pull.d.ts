import _ = require("../index");

declare namespace Lodash {
    interface Pull {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        (): Pull;
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        <T>(values: T): Pull1x1<T>;
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        <T>(values: T, array: ReadonlyArray<T>): T[];
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        <T>(values: T, array: _.List<T>): _.List<T>;
    }
    interface Pull1x1<T> {
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        (): Pull1x1<T>;
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        (array: ReadonlyArray<T>): T[];
        /**
         * Removes all provided values from array using SameValueZero for equality comparisons.
         *
         * Note: Unlike _.without, this method mutates array.
         *
         * @param array The array to modify.
         * @param values The values to remove.
         * @return Returns array.
         */
        (array: _.List<T>): _.List<T>;
    }
}

declare const pull: Lodash.Pull;
export = pull;

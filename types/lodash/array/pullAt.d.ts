import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Removes elements from array corresponding to the given indexes and returns an array of the removed elements.
         * Indexes may be specified as an array of indexes or as individual arguments.
         *
         * Note: Unlike _.at, this method mutates array.
         *
         * @param array The array to modify.
         * @param indexes The indexes of elements to remove, specified as individual indexes or arrays of indexes.
         * @return Returns the new array of removed elements.
         */
        pullAt<T>(
            array: T[],
            ...indexes: Array<Many<number>>
        ): T[];

        /**
         * @see _.pullAt
         */
        pullAt<T>(
            array: List<T>,
            ...indexes: Array<Many<number>>
        ): List<T>;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.pullAt
         */
        pullAt(...indexes: Array<Many<number>>): this;
    }
}
import _ = require("../index");

declare namespace Lodash {
    interface SampleSize {
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        (): SampleSize;
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        (n: number): SampleSize1x1;
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        <T>(n: number, collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): T[];
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        <T extends object>(n: number, collection: T | null | undefined): Array<T[keyof T]>;
    }
    interface SampleSize1x1 {
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        (): SampleSize1x1;
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        <T>(collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): T[];
        /**
         * Gets n random elements at unique keys from collection up to the size of collection.
         *
         * @param collection The collection to sample.
         * @param n The number of elements to sample.
         * @return Returns the random elements.
         */
        <T extends object>(collection: T | null | undefined): Array<T[keyof T]>;
    }
}

declare const sampleSize: Lodash.SampleSize;
export = sampleSize;

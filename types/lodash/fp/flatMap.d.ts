import _ = require("../index");

declare namespace Lodash {
    interface FlatMap {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T, TResult>(iteratee: _.ListIterator<T, _.Many<TResult>>): FlatMap1x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T, TResult>(iteratee: _.ListIterator<T, _.Many<TResult>>, collection: _.List<T> | null | undefined): TResult[];
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, _.Many<TResult>>): FlatMap2x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, _.Many<TResult>>, collection: _.NumericDictionary<T> | null | undefined): TResult[];
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, _.Many<TResult>>): FlatMap3x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        <T extends object, TResult>(iteratee: _.ObjectIterator<T, _.Many<TResult>>, collection: T | null | undefined): TResult[];
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (iteratee: string): FlatMap4x1;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (iteratee: string, collection: object | null | undefined): any[];
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (iteratee: object): FlatMap5x1;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (iteratee: object, collection: object | null | undefined): boolean[];
    }
    interface FlatMap1x1<T, TResult> {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap1x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (collection: _.List<T> | null | undefined): TResult[];
    }
    interface FlatMap2x1<T, TResult> {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap2x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface FlatMap3x1<T extends object, TResult> {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap3x1<T, TResult>;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (collection: T | null | undefined): TResult[];
    }
    interface FlatMap4x1 {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap4x1;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (collection: object | null | undefined): any[];
    }
    interface FlatMap5x1 {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (): FlatMap5x1;
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        (collection: object | null | undefined): boolean[];
    }
}

declare const flatMap: Lodash.FlatMap;
export = flatMap;

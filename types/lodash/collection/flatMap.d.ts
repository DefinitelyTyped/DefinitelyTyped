import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Creates an array of flattened values by running each element in collection through iteratee
         * and concating its result to the other mapped values. The iteratee is invoked with three arguments:
         * (value, index|key, collection).
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function invoked per iteration.
         * @return Returns the new flattened array.
         */
        flatMap<T>(
            collection: List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined
        ): T[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined
        ): any[];

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            collection: List<T> | null | undefined,
            iteratee: ListIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            collection: T | null | undefined,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): TResult[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined,
            iteratee: string
        ): any[];

        /**
         * @see _.flatMap
         */
        flatMap(
            collection: object | null | undefined,
            iteratee: object
        ): boolean[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flatMap
         */
        flatMap<T>(this: LoDashImplicitWrapper<List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): LoDashImplicitWrapper<T[]>;

        /**
         * @see _.flatMap
         */
        flatMap(): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: string
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: object
        ): LoDashImplicitWrapper<boolean[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flatMap
         */
        flatMap<T>(this: LoDashExplicitWrapper<List<Many<T>> | Dictionary<Many<T>> | NumericDictionary<Many<T>> | null | undefined>): LoDashExplicitWrapper<T[]>;

        /**
         * @see _.flatMap
         */
        flatMap(): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            iteratee: NumericDictionaryIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            iteratee: ObjectIterator<T, Many<TResult>>
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: string
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.flatMap
         */
        flatMap(
            iteratee: object
        ): LoDashExplicitWrapper<boolean[]>;
    }
}
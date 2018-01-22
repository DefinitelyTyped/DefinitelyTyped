declare namespace _ {
    interface LoDashStatic {
        /**
        * Reduces a collection to a value which is the accumulated result of running each
        * element in the collection through the callback, where each successive callback execution
        * consumes the return value of the previous execution. If accumulator is not provided the
        * first element of the collection will be used as the initial accumulator value. The callback
        * is bound to thisArg and invoked with four arguments; (accumulator, value, index|key, collection).
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return Returns the accumulated value.
        **/
        reduce<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
         /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduce
        **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduce
        **/
        reduce<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
         * @see _.reduce
         **/
        reduce<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;
    }
}
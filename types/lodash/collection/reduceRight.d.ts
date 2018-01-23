declare namespace _ {
    interface LoDashStatic {
        /**
        * This method is like _.reduce except that it iterates over elements of a collection from
        * right to left.
        * @param collection The collection to iterate over.
        * @param callback The function called per iteration.
        * @param accumulator Initial value of the accumulator.
        * @return The accumulated value.
        **/
        reduceRight<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: T[] | null | undefined,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: List<T> | null | undefined,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            collection: T | null | undefined,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            collection: NumericDictionary<T> | null | undefined,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
         /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): TResult;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashImplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): TResult | undefined;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashImplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): TResult | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>,
            accumulator: TResult
        ): LoDashExplicitWrapper<TResult>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<T[] | null | undefined>,
            callback: MemoListIterator<T, TResult, T[]>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, List<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
        * @see _.reduceRight
        **/
        reduceRight<T extends object, TResult>(
            this: LoDashExplicitWrapper<T | null | undefined>,
            callback: MemoObjectIterator<T[keyof T], TResult, T>
        ): LoDashExplicitWrapper<TResult | undefined>;

        /**
         * @see _.reduceRight
         **/
        reduceRight<T, TResult>(
            this: LoDashExplicitWrapper<NumericDictionary<T> | null | undefined>,
            callback: MemoListIterator<T, TResult, NumericDictionary<T>>
        ): LoDashExplicitWrapper<TResult | undefined>;
    }
}
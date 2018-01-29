import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * An alternative to _.reduce; this method transforms object to a new accumulator object which is the result of
         * running each of its own enumerable properties through iteratee, with each invocation potentially mutating
         * the accumulator object. The iteratee is bound to thisArg and invoked with four arguments: (accumulator,
         * value, key, object). Iteratee functions may exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param accumulator The custom accumulator value.
         * @param thisArg The this binding of iteratee.
         * @return Returns the accumulated value.
         */
        transform<T, TResult>(
            object: T[],
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: T[],
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): Dictionary<TResult>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            object: Dictionary<T>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): TResult[];

        /**
         * @see _.transform
         */
        transform(
            object: any[],
        ): any[];

        /**
         * @see _.transform
         */
        transform(
            object: object,
        ): Dictionary<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator: Dictionary<TResult>
        ): LoDashImplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashImplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashImplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator: TResult[]
        ): LoDashImplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: LoDashImplicitWrapper<any[]>,
        ): LoDashImplicitWrapper<any[]>;

        /**
         * @see _.transform
         */
        transform(): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<T[]>,
            iteratee: MemoVoidArrayIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashExplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, Dictionary<TResult>>,
            accumulator?: Dictionary<TResult>
        ): LoDashExplicitWrapper<Dictionary<TResult>>;

        /**
         * @see _.transform
         */
        transform<T, TResult>(
            this: LoDashExplicitWrapper<Dictionary<T>>,
            iteratee: MemoVoidDictionaryIterator<T, TResult[]>,
            accumulator?: TResult[]
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.transform
         */
        transform(
            this: LoDashExplicitWrapper<any[]>,
        ): LoDashExplicitWrapper<any[]>;

        /**
         * @see _.transform
         */
        transform(): LoDashExplicitWrapper<Dictionary<any>>;
    }
}
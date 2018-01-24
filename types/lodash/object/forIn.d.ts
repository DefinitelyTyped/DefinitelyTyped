import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Iterates over own and inherited enumerable properties of an object invoking iteratee for each property. The
         * iteratee is bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may
         * exit iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forIn<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forIn
         */
        forIn<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forIn
         */
        forIn<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}
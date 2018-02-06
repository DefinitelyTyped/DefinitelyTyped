import _ = require("../index");

declare namespace Lodash {
    interface ForIn {
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
        (): ForIn;
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
        <T>(iteratee: _.ObjectIterator<T, any>): ForIn1x1<T>;
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
        <T>(iteratee: _.ObjectIterator<T, any>, object: T): T;
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
        <T>(iteratee: _.ObjectIterator<T, any>, object: T | null | undefined): T | null | undefined;
    }
    interface ForIn1x1<T> {
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
        (): ForIn1x1<T>;
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
        (object: T): T;
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
        (object: T | null | undefined): T | null | undefined;
    }
}

declare const forIn: Lodash.ForIn;
export = forIn;

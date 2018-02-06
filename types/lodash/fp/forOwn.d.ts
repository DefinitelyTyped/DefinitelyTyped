// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface ForOwn {
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        (): ForOwn;
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        <T>(iteratee: (value: T) => any): ForOwn1x1<T>;
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        <T>(iteratee: (value: T[keyof T]) => any, object: T): T;
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        <T>(iteratee: (value: T[keyof T]) => any, object: T | null | undefined): T | null | undefined;
    }
    interface ForOwn1x1<T> {
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        (): ForOwn1x1<T>;
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        (object: object): T;
        /**
         * Iterates over own enumerable properties of an object invoking iteratee for each property. The iteratee is
         * bound to thisArg and invoked with three arguments: (value, key, object). Iteratee functions may exit
         * iteration early by explicitly returning false.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        (object: object | null | undefined): T | null | undefined;
    }
}

declare const forOwn: Lodash.ForOwn;
export = forOwn;

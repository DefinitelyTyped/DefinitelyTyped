import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.forOwn except that it iterates over properties of object in the opposite order.
         *
         * @param object The object to iterate over.
         * @param iteratee The function invoked per iteration.
         * @param thisArg The this binding of iteratee.
         * @return Returns object.
         */
        forOwnRight<T>(
            object: T,
            iteratee?: ObjectIterator<T, any>
        ): T;

        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            object: T | null | undefined,
            iteratee?: ObjectIterator<T, any>
        ): T | null | undefined;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forOwnRight
         */
        forOwnRight<T>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}
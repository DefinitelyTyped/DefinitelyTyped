import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        eachRight: typeof _.forEachRight; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEachRight
         */
        eachRight<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}
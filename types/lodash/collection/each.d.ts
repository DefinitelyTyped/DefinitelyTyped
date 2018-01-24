import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        each: typeof _.forEach; // tslint:disable-line:no-unnecessary-qualifier
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.forEach
         */
        each<T>(
            this: LoDashWrapper<T[] | null | undefined>,
            iteratee?: ArrayIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        each(
            this: LoDashWrapper<string | null | undefined>,
            iteratee?: StringIterator<any>
        ): this;

        /**
         * @see _.forEach
         */
        each<T>(
            this: LoDashWrapper<List<T> | null | undefined>,
            iteratee?: ListIterator<T, any>
        ): this;

        /**
         * @see _.forEach
         */
        each<T extends object>(
            this: LoDashWrapper<T | null | undefined>,
            iteratee?: ObjectIterator<T, any>
        ): this;
    }
}
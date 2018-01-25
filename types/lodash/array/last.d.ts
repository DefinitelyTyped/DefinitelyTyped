import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Gets the last element of array.
         *
         * @param array The array to query.
         * @return Returns the last element of array.
         */
        last<T>(array: List<T> | null | undefined): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.last
         */
        last<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T | undefined>;
    }
}
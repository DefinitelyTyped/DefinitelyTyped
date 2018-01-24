import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Recursively flattens a nested array.
         *
         * @param array The array to recursively flatten.
         * @return Returns the new flattened array.
         */
        flattenDeep<T>(array: ListOfRecursiveArraysOrValues<T> | null | undefined): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashImplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.flattenDeep
         */
        flattenDeep<T>(this: LoDashExplicitWrapper<ListOfRecursiveArraysOrValues<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}
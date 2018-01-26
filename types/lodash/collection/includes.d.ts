import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Checks if target is in collection using SameValueZero for equality comparisons. If fromIndex is negative,
         * it’s used as the offset from the end of collection.
         *
         * @param collection The collection to search.
         * @param target The value to search for.
         * @param fromIndex The index to search from.
         * @return True if the target element is found, else false.
         */
        includes<T>(
            collection: List<T>|Dictionary<T> | null | undefined,
            target: T,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.includes
         */
        includes<T>(
            this: LoDashImplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            target: T,
            fromIndex?: number
        ): boolean;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.includes
         */
        includes<T>(
            this: LoDashExplicitWrapper<List<T> | Dictionary<T> | null | undefined>,
            target: T,
            fromIndex?: number
        ): LoDashExplicitWrapper<boolean>;
    }
}
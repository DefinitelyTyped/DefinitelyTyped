import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniq([1, 1, 2]);
         * // => [1, 2]
         */
        sortedUniq<T>(
            array: List<T> | null | undefined
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashImplicitWrapper<List<T> | null | undefined>): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniq
         */
        sortedUniq<T>(this: LoDashExplicitWrapper<List<T> | null | undefined>): LoDashExplicitWrapper<T[]>;
    }
}
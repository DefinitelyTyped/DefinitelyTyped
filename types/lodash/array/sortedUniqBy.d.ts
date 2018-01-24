import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.uniqBy` except that it's designed and optimized
         * for sorted arrays.
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
         * // => [1.1, 2.2]
         */
        sortedUniqBy(
            array: string | null | undefined,
            iteratee: StringIterator<NotVoid>
        ): string[];

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.sortedUniqBy
         */
        sortedUniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }
}
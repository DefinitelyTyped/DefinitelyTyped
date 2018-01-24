declare namespace _ {
    interface LoDashStatic {
        /**
         * This method is like `_.uniq` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * uniqueness is computed. The iteratee is invoked with one argument: (value).
         *
         * @category Array
         * @param array The array to inspect.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the new duplicate free array.
         * @example
         *
         * _.uniqBy([2.1, 1.2, 2.3], Math.floor);
         * // => [2.1, 1.2]
         *
         * // using the `_.property` iteratee shorthand
         * _.uniqBy([{ 'x': 1 }, { 'x': 2 }, { 'x': 1 }], 'x');
         * // => [{ 'x': 1 }, { 'x': 2 }]
         */
        uniqBy(
            array: string | null | undefined,
            iteratee: StringIterator<NotVoid>
        ): string[];

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            array: List<T> | null | undefined,
            iteratee: ListIteratee<T>
        ): T[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy(
            this: LoDashImplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashImplicitWrapper<string[]>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashImplicitWrapper<T[]>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.uniqBy
         */
        uniqBy(
            this: LoDashExplicitWrapper<string | null | undefined>,
            iteratee: StringIterator<NotVoid>
        ): LoDashExplicitWrapper<string[]>;

        /**
         * @see _.uniqBy
         */
        uniqBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee: ListIteratee<T>
        ): LoDashExplicitWrapper<T[]>;
    }
}
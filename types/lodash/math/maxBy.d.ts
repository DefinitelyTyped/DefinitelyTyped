import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * This method is like `_.max` except that it accepts `iteratee` which is
         * invoked for each element in `array` to generate the criterion by which
         * the value is ranked. The iteratee is invoked with one argument: (value).
         *
         * @category Math
         * @param array The array to iterate over.
         * @param [iteratee=_.identity] The iteratee invoked per element.
         * @returns Returns the maximum value.
         * @example
         *
         * var objects = [{ 'n': 1 }, { 'n': 2 }];
         *
         * _.maxBy(objects, function(o) { return o.a; });
         * // => { 'n': 2 }
         *
         * // using the `_.property` iteratee shorthand
         * _.maxBy(objects, 'n');
         * // => { 'n': 2 }
         */
        maxBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): T | undefined;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.maxBy
         */
        maxBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<T | undefined>;
    }
}
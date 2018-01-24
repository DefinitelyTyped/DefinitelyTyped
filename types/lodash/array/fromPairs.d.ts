import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * The inverse of `_.toPairs`; this method returns an object composed
         * from key-value `pairs`.
         *
         * @category Array
         * @param pairs The key-value pairs.
         * @returns Returns the new object.
         * @example
         *
         * _.fromPairs([['fred', 30], ['barney', 40]]);
         * // => { 'fred': 30, 'barney': 40 }
         */
        fromPairs<T>(
            pairs: List<[PropertyName, T]> | null | undefined
        ): Dictionary<T>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            pairs: List<any[]> | null | undefined
        ): Dictionary<any>;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashImplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashImplicitWrapper<List<any[]> | null | undefined>
        ): LoDashImplicitWrapper<Dictionary<any>>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.fromPairs
         */
        fromPairs<T>(
          this: LoDashExplicitWrapper<List<[PropertyName, T]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<T>>;

        /**
         @see _.fromPairs
         */
        fromPairs(
            this: LoDashExplicitWrapper<List<any[]> | null | undefined>
        ): LoDashExplicitWrapper<Dictionary<any>>;
    }
}
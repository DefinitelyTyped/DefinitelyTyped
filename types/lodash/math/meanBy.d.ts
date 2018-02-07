import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
      /**
       * Computes the mean of the provided propties of the objects in the `array`
       *
       * @category Math
       * @param array The array to iterate over.
       * @param [iteratee=_.identity] The iteratee invoked per element.
       * @returns Returns the mean.
       * @example
       *
       * _.mean([{ 'n': 4 }, { 'n': 2 }, { 'n': 8 }, { 'n': 6 }], 'n');
       * // => 5
       */
        meanBy<T>(
            collection: List<T> | null | undefined,
            iteratee?: ListIteratee<T>
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: LoDashImplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): number;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.meanBy
         */
        meanBy<T>(
            this: LoDashExplicitWrapper<List<T> | null | undefined>,
            iteratee?: ListIteratee<T>
        ): LoDashExplicitWrapper<number>;
    }
}
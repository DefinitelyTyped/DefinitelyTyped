import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Invokes the iteratee function n times, returning an array of the results of each invocation. The iteratee
         * is invoked with one argument; (index).
         *
         * @param n The number of times to invoke iteratee.
         * @param iteratee The function invoked per iteration.
         * @return Returns the array of results.
         */
        times<TResult>(
            n: number,
            iteratee: (num: number) => TResult
        ): TResult[];

        /**
         * @see _.times
         */
        times(n: number): number[];
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult
        ): TResult[];

        /**
         * @see _.times
         */
        times(): number[];
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.times
         */
        times<TResult>(
            iteratee: (num: number) => TResult
        ): LoDashExplicitWrapper<TResult[]>;

        /**
         * @see _.times
         */
        times(): LoDashExplicitWrapper<number[]>;
    }
}
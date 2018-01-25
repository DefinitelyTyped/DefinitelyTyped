import * as _ from "..";
declare module ".." {
    interface LoDashStatic {
        /**
         * Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
         *
         * @param func The function to delay.
         * @param wait The number of milliseconds to delay invocation.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        delay(
            func: (...args: any[]) => any,
            wait: number,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.delay
         */
        delay(
            wait: number,
            ...args: any[]
        ): LoDashExplicitWrapper<number>;
    }

    interface LoDashStatic {
        /**
         * Creates a function that invokes `func` with arguments reversed.
         *
         * @category Function
         * @param func The function to flip arguments for.
         * @returns Returns the new function.
         * @example
         *
         * var flipped = _.flip(function() {
         *   return _.toArray(arguments);
         * });
         *
         * flipped('a', 'b', 'c', 'd');
         * // => ['d', 'c', 'b', 'a']
         */
        flip<T extends (...args: any[]) => any>(func: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.flip
         */
        flip(): this;
    }
}
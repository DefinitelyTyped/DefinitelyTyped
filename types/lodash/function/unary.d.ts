declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to one argument, ignoring any
         * additional arguments.
         *
         * @category Function
         * @param func The function to cap arguments for.
         * @returns Returns the new function.
         * @example
         *
         * _.map(['6', '8', '10'], _.unary(parseInt));
         * // => [6, 8, 10]
         */
        unary<T, TResult>(func: (arg1: T, ...args: any[]) => TResult): (arg1: T) => TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unary
         */
        unary<T, TResult>(this: LoDashImplicitWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashImplicitWrapper<(arg1: T) => TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unary
         */
        unary<T, TResult>(this: LoDashExplicitWrapper<(arg1: T, ...args: any[]) => TResult>): LoDashExplicitWrapper<(arg1: T) => TResult>;
    }
}
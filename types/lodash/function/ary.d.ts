import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that accepts up to n arguments ignoring any additional arguments.
         *
         * @param func The function to cap arguments for.
         * @param n The arity cap.
         * @returns Returns the new function.
         */
        ary(
            func: (...args: any[]) => any,
            n?: number
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.ary
         */
        ary(n?: number): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.ary
         */
        ary(n?: number): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}
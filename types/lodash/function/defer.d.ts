import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to
         * func when it’s invoked.
         *
         * @param func The function to defer.
         * @param args The arguments to invoke the function with.
         * @return Returns the timer id.
         */
        defer(
            func: (...args: any[]) => any,
            ...args: any[]
        ): number;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): LoDashImplicitWrapper<number>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.defer
         */
        defer(...args: any[]): LoDashExplicitWrapper<number>;
    }
}
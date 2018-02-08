import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that returns its nth argument.
         *
         * @param n The index of the argument to return.
         * @return Returns the new function.
         */
        nthArg(n?: number): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.nthArg
         */
        nthArg(): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}
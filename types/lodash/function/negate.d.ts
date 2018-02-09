import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         *
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        negate<T extends (...args: any[]) => any>(predicate: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.negate
         */
        negate(): this;
    }
}
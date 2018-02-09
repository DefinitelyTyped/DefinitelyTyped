import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that is restricted to invoking func once. Repeat calls to the function return the value
         * of the first call. The func is invoked with the this binding and arguments of the created function.
         *
         * @param func The function to restrict.
         * @return Returns the new restricted function.
         */
        once<T extends (...args: any[]) => any>(func: T): T;
    }

    interface LoDashWrapper<TValue> {
        /**
         * @see _.once
         */
        once(): this;
    }
}
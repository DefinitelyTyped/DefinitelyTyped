import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates a function that runs each argument through a corresponding transform function.
         *
         * @param func The function to wrap.
         * @param transforms The functions to transform arguments, specified as individual functions or arrays
         * of functions.
         * @return Returns the new function.
         */
        overArgs(
            func: (...args: any[]) => any,
            ...transforms: Array<Many<(...args: any[]) => any>>
        ): (...args: any[]) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): LoDashImplicitWrapper<(...args: any[]) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.overArgs
         */
        overArgs(...transforms: Array<Many<(...args: any[]) => any>>): LoDashExplicitWrapper<(...args: any[]) => any>;
    }
}
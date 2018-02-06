import _ = require("../index");

declare namespace Lodash {
    interface Attempt {
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         *
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        (): Attempt;
        /**
         * Attempts to invoke func, returning either the result or the caught error object. Any additional arguments
         * are provided to func when it’s invoked.
         *
         * @param func The function to attempt.
         * @return Returns the func result or error object.
         */
        <TResult>(func: (...args: any[]) => TResult): TResult|Error;
    }
}

declare const attempt: Lodash.Attempt;
export = attempt;

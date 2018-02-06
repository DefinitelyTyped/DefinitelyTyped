import _ = require("../index");

declare namespace Lodash {
    interface Over {
        /**
         * Creates a function that invokes iteratees with the arguments provided to the created function and returns
         * their results.
         *
         * @param iteratees The iteratees to invoke.
         * @return Returns the new function.
         */
        (): Over;
        /**
         * Creates a function that invokes iteratees with the arguments provided to the created function and returns
         * their results.
         *
         * @param iteratees The iteratees to invoke.
         * @return Returns the new function.
         */
        <TResult>(...iteratees: Array<_.Many<(...args: any[]) => TResult>>): (...args: any[]) => TResult[];
    }
}

declare const over: Lodash.Over;
export = over;

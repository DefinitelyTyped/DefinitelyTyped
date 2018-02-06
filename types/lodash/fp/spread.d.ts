import _ = require("../index");

declare namespace Lodash {
    interface Spread {
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         *
         * Note: This method is based on the spread operator.
         *
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        (): Spread;
        /**
         * Creates a function that invokes func with the this binding of the created function and an array of arguments
         * much like Function#apply.
         *
         * Note: This method is based on the spread operator.
         *
         * @param func The function to spread arguments over.
         * @return Returns the new function.
         */
        <TResult>(func: (...args: any[]) => TResult): (...args: any[]) => TResult;
    }
}

declare const spread: Lodash.Spread;
export = spread;

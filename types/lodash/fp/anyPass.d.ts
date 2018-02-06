import _ = require("../index");

declare namespace Lodash {
    interface OverSome {
        /**
         * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        (): OverSome;
        /**
         * Creates a function that checks if any of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        <T>(predicates: _.Many<(...args: T[]) => boolean>): (...args: T[]) => boolean;
    }
}

declare const anyPass: Lodash.OverSome;
export = anyPass;

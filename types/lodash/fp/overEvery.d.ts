import _ = require("../index");

declare namespace Lodash {
    interface OverEvery {
        /**
         * Creates a function that checks if all of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        (): OverEvery;
        /**
         * Creates a function that checks if all of the predicates return truthy when invoked with the arguments
         * provided to the created function.
         *
         * @param predicates The predicates to check.
         * @return Returns the new function.
         */
        <T>(...predicates: Array<_.Many<(...args: T[]) => boolean>>): (...args: T[]) => boolean;
    }
}

declare const overEvery: Lodash.OverEvery;
export = overEvery;

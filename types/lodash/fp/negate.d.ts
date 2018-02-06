import _ = require("../index");

declare namespace Lodash {
    interface Negate {
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         *
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        (): Negate;
        /**
         * Creates a function that negates the result of the predicate func. The func predicate is invoked with
         * the this binding and arguments of the created function.
         *
         * @param predicate The predicate to negate.
         * @return Returns the new function.
         */
        <T extends (...args: any[]) => any>(predicate: T): T;
    }
}

declare const negate: Lodash.Negate;
export = negate;

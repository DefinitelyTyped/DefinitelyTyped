import _ = require("../index");

declare namespace Lodash {
    interface MethodOf {
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         *
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        (): MethodOf;
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         *
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        (object: object): (path: _.PropertyPath) => any;
    }
}

declare const methodOf: Lodash.MethodOf;
export = methodOf;

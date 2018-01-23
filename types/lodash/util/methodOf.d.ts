declare namespace _ {
    interface LoDashStatic {
        /**
         * The opposite of _.method; this method creates a function that invokes the method at a given path on object.
         * Any additional arguments are provided to the invoked method.
         *
         * @param object The object to query.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        methodOf(
            object: object,
            ...args: any[]
        ): (path: PropertyPath) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(
            ...args: any[]
        ): LoDashImplicitWrapper<(path: PropertyPath) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.methodOf
         */
        methodOf(
            ...args: any[]
        ): LoDashExplicitWrapper<(path: PropertyPath) => any>;
    }
}
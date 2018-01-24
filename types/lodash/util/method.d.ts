declare namespace _ {
    interface LoDashStatic {
        /**
         * Creates a function that invokes the method at path on a given object. Any additional arguments are provided
         * to the invoked method.
         *
         * @param path The path of the method to invoke.
         * @param args The arguments to invoke the method with.
         * @return Returns the new function.
         */
        method(
            path: PropertyPath,
            ...args: any[]
        ): (object: any) => any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): LoDashImplicitWrapper<(object: any) => any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.method
         */
        method(...args: any[]): LoDashExplicitWrapper<(object: any) => any>;
    }
}
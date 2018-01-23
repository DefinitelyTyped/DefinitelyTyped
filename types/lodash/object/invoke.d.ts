declare namespace _ {
    interface LoDashStatic {
        /**
        * Invokes the method at path of object.
        * @param object The object to query.
        * @param path The path of the method to invoke.
        * @param args The arguments to invoke the method with.
        **/
        invoke(
            object: any,
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): any;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
        * @see _.invoke
        **/
        invoke(
            path: PropertyPath,
            ...args: any[]): LoDashExplicitWrapper<any>;
    }
}
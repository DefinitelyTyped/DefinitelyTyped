import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Creates an object that inherits from the given prototype object. If a properties object is provided its own
         * enumerable properties are assigned to the created object.
         *
         * @param prototype The object to inherit from.
         * @param properties The properties to assign to the object.
         * @return Returns the new object.
         */
        create<T extends object, U extends object>(
            prototype: T,
            properties?: U
        ): T & U;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): LoDashImplicitWrapper<TValue & U>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.create
         */
        create<U extends object>(properties?: U): LoDashExplicitWrapper<TValue & U>;
    }
}
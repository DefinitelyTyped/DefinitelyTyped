import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Sets the value at path of object. If a portion of path doesn’t exist it’s created. Arrays are created for
         * missing index properties while objects are created for all other missing properties. Use _.setWith to
         * customize path creation.
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param value The value to set.
         * @return Returns object.
         */
        set<T extends object>(
            object: T,
            path: PropertyPath,
            value: any
        ): T;

        /**
         * @see _.set
         */
        set<TResult>(
            object: object,
            path: PropertyPath,
            value: any
        ): TResult;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): LoDashImplicitWrapper<TResult>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.set
         */
        set(
            path: PropertyPath,
            value: any
        ): this;

        /**
         * @see _.set
         */
        set<TResult>(
            path: PropertyPath,
            value: any
        ): LoDashExplicitWrapper<TResult>;
    }
}
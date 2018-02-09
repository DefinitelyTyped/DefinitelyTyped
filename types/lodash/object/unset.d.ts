import _ = require("../index");
declare module "../index" {
    interface LoDashStatic {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        unset(
            object: any,
            path: PropertyPath
        ): boolean;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): LoDashImplicitWrapper<boolean>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.unset
         */
        unset(path: PropertyPath): LoDashExplicitWrapper<boolean>;
    }
}
import * as _ from "../index";
declare module "../index" {
    interface LoDashStatic {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        update(
            object: object,
            path: PropertyPath,
            updater: (value: any) => any
        ): any;
    }

    interface LoDashImplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): LoDashImplicitWrapper<any>;
    }

    interface LoDashExplicitWrapper<TValue> {
        /**
         * @see _.update
         */
        update(
            path: PropertyPath,
            updater: (value: any) => any
        ): LoDashExplicitWrapper<any>;
    }
}
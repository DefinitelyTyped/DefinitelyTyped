import _ = require("../index");

declare namespace Lodash {
    interface Update {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (): Update;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (updater: (value: any) => any): Update1x1;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (updater: (value: any) => any, object: object): Update1x2;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (updater: (value: any) => any, object: object, path: _.PropertyPath): any;
    }
    interface Update1x1 {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (): Update1x1;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (object: object): Update1x2;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (object: object, path: _.PropertyPath): any;
    }
    interface Update1x2 {
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (): Update1x2;
        /**
         * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
         * customize path creation. The updater is invoked with one argument: (value).
         *
         * @param object The object to modify.
         * @param path The path of the property to set.
         * @param updater The function to produce the updated value.
         * @return Returns object.
         */
        (path: _.PropertyPath): any;
    }
}

declare const update: Lodash.Update;
export = update;

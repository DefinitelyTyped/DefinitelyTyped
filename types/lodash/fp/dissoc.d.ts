// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface Unset {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        (): Unset;
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        (path: _.PropertyPath): Unset1x1;
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        (path: _.PropertyPath, object: any): boolean;
    }
    interface Unset1x1 {
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        (): Unset1x1;
        /**
         * Removes the property at path of object.
         *
         * Note: This method mutates object.
         *
         * @param object The object to modify.
         * @param path The path of the property to unset.
         * @return Returns true if the property is deleted, else false.
         */
        (object: any): boolean;
    }
}

declare const dissoc: Lodash.Unset;
export = dissoc;

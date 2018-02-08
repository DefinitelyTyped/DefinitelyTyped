// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

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
    (path: _.PropertyPath): Update1x1;
    /**
     * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
     * customize path creation. The updater is invoked with one argument: (value).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @return Returns object.
     */
    (path: _.PropertyPath, updater: (value: any) => any): Update1x2;
    /**
     * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
     * customize path creation. The updater is invoked with one argument: (value).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @return Returns object.
     */
    (path: _.PropertyPath, updater: (value: any) => any, object: object): any;
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
    (updater: (value: any) => any): Update1x2;
    /**
     * This method is like _.set except that accepts updater to produce the value to set. Use _.updateWith to
     * customize path creation. The updater is invoked with one argument: (value).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param updater The function to produce the updated value.
     * @return Returns object.
     */
    (updater: (value: any) => any, object: object): any;
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
    (object: object): any;
}

declare const update: Update;
declare namespace update {}
export = update;

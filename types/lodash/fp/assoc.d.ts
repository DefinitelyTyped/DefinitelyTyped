// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Set {
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
    (): Set;
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
    (path: _.PropertyPath): Set1x1;
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
    (p1: _.__, value: any): Set1x2;
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
    (path: _.PropertyPath, value: any): Set1x3;
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
    <T extends object>(p1: _.__, p2: _.__, object: T): Set1x4<T>;
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
    <T extends object>(path: _.PropertyPath, p2: _.__, object: T): Set1x5<T>;
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
    <T extends object>(p1: _.__, value: any, object: T): Set1x6<T>;
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
    <T extends object>(path: _.PropertyPath, value: any, object: T): T;
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
    (p1: _.__, p2: _.__, object: object): Set2x4;
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
    (path: _.PropertyPath, p2: _.__, object: object): Set2x5;
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
    (p1: _.__, value: any, object: object): Set2x6;
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
    <TResult>(path: _.PropertyPath, value: any, object: object): TResult;
}
interface Set1x1 {
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
    (): Set1x1;
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
    (value: any): Set1x3;
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
    <T extends object>(p1: _.__, object: T): Set1x5<T>;
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
    <T extends object>(value: any, object: T): T;
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
    (p1: _.__, object: object): Set2x5;
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
    <TResult>(value: any, object: object): TResult;
}
interface Set1x2 {
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
    (): Set1x2;
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
    (path: _.PropertyPath): Set1x3;
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
    <T extends object>(p1: _.__, object: T): Set1x6<T>;
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
    <T extends object>(path: _.PropertyPath, object: T): T;
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
    (p1: _.__, object: object): Set2x6;
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
    <TResult>(path: _.PropertyPath, object: object): TResult;
}
interface Set1x3 {
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
    (): Set1x3;
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
    <T extends object>(object: T): T;
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
    <TResult>(object: object): TResult;
}
interface Set1x4<T extends object> {
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
    (): Set1x4<T>;
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
    (path: _.PropertyPath): Set1x5<T>;
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
    (p1: _.__, value: any): Set1x6<T>;
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
    (path: _.PropertyPath, value: any): T;
}
interface Set1x5<T extends object> {
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
    (): Set1x5<T>;
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
    (value: any): T;
}
interface Set1x6<T extends object> {
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
    (): Set1x6<T>;
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
    (path: _.PropertyPath): T;
}
interface Set2x4 {
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
    (): Set2x4;
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
    (path: _.PropertyPath): Set2x5;
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
    (p1: _.__, value: any): Set2x6;
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
    <TResult>(path: _.PropertyPath, value: any): TResult;
}
interface Set2x5 {
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
    (): Set2x5;
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
    <TResult>(value: any): TResult;
}
interface Set2x6 {
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
    (): Set2x6;
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
    <TResult>(path: _.PropertyPath): TResult;
}

declare const assoc: Set;
export = assoc;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface SetWith {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): SetWith1x1<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): SetWith1x2<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any, object: T): T;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object, TResult>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any, object: T): TResult;
}
interface SetWith1x1<T extends object> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x1<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath): SetWith1x2<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, value: any): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, value: any, object: T): T;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <TResult>(path: _.PropertyPath, value: any, object: T): TResult;
}
interface SetWith1x2<T extends object> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x2<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (value: any): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (value: any, object: T): T;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <TResult>(value: any, object: T): TResult;
}
interface SetWith1x3<T extends object> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    (object: T): T;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @parem customizer The function to customize assigned values.
     * @return Returns object.
     */
    <TResult>(object: T): TResult;
}

declare const setWith: SetWith;
export = setWith;

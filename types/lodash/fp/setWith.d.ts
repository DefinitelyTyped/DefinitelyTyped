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
     * @param customizer The function to customize assigned values.
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
     * @param customizer The function to customize assigned values.
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
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath): SetWith1x2;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, p2: _.__, value: any): SetWith1x4;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, value: any): SetWith1x5<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath, value: any): SetWith1x6;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, p2: _.__, p3: _.__, object: T): SetWith1x8<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, p3: _.__, object: T): SetWith1x9<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, p3: _.__, object: T): SetWith1x10<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, p3: _.__, object: T): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, p2: _.__, value: any, object: T): SetWith1x12<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, value: any, object: T): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, value: any, object: T): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any, object: T): T;
}
interface SetWith1x1<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
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
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, value: any): SetWith1x5<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, value: any): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, p2: _.__, object: T): SetWith1x9<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, p2: _.__, object: T): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, value: any, object: T): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, value: any, object: T): T;
}
interface SetWith1x2 {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x2;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): SetWith1x3<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, value: any): SetWith1x6;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, value: any): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, p2: _.__, object: T): SetWith1x10<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, object: T): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, value: any, object: T): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, value: any, object: T): T;
}
interface SetWith1x3<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
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
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (value: any): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, object: T): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (value: any, object: T): T;
}
interface SetWith1x4 {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x4;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): SetWith1x5<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath): SetWith1x6;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, p2: _.__, object: T): SetWith1x12<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, p2: _.__, object: T): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, path: _.PropertyPath, object: T): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, object: T): T;
}
interface SetWith1x5<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x5<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, object: T): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, object: T): T;
}
interface SetWith1x6 {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x6;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(p1: _.__, object: T): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    <T extends object>(customizer: _.SetWithCustomizer<T>, object: T): T;
}
interface SetWith1x7<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x7<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (object: T): T;
}
interface SetWith1x8<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x8<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>): SetWith1x9<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath): SetWith1x10<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, p2: _.__, value: any): SetWith1x12<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>, p2: _.__, value: any): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath, value: any): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath, value: any): T;
}
interface SetWith1x9<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x9<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, value: any): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath, value: any): T;
}
interface SetWith1x10<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x10<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, value: any): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>, value: any): T;
}
interface SetWith1x11<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x11<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (value: any): T;
}
interface SetWith1x12<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x12<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (p1: _.__, path: _.PropertyPath): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>, path: _.PropertyPath): T;
}
interface SetWith1x13<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x13<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (path: _.PropertyPath): T;
}
interface SetWith1x14<T> {
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (): SetWith1x14<T>;
    /**
     * This method is like _.set except that it accepts customizer which is invoked to produce the objects of
     * path. If customizer returns undefined path creation is handled by the method instead. The customizer is
     * invoked with three arguments: (nsValue, key, nsObject).
     *
     * @param object The object to modify.
     * @param path The path of the property to set.
     * @param value The value to set.
     * @param customizer The function to customize assigned values.
     * @return Returns object.
     */
    (customizer: _.SetWithCustomizer<T>): T;
}

declare const setWith: SetWith;
export = setWith;

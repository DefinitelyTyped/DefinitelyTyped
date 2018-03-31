// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Get {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey]): Get1x1<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object>(path: _.__, object: TObject): Get1x2<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey], object: TObject): TObject[TKey];
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object>(path: _.__, object: TObject | null | undefined): Get2x2<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey], object: TObject | null | undefined): TObject[TKey] | undefined;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: number): Get3x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(path: _.__, object: _.NumericDictionary<T>): Get3x2<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(path: number, object: _.NumericDictionary<T>): T;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(path: _.__, object: _.NumericDictionary<T> | null | undefined): Get4x2<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(path: number, object: _.NumericDictionary<T> | null | undefined): T | undefined;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): Get5x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.__, object: null | undefined): Get5x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath, object: null | undefined): undefined;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.__, object: any): Get6x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath, object: any): any;
}
interface Get1x1<TObject, TKey extends keyof TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x1<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: TObject): TObject[TKey];
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: TObject | null | undefined): TObject[TKey] | undefined;
}
interface Get1x2<TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x2<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TKey extends keyof TObject>(path: TKey | [TKey]): TObject[TKey];
}
interface Get2x2<TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x2<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TKey extends keyof TObject>(path: TKey | [TKey]): TObject[TKey] | undefined;
}
interface Get3x1 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(object: _.NumericDictionary<T>): T;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(object: _.NumericDictionary<T> | null | undefined): T | undefined;
}
interface Get3x2<T> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x2<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: number): T;
}
interface Get4x2<T> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x2<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: number): T | undefined;
}
interface Get5x1 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get5x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: null | undefined): undefined;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: any): any;
}
interface Get5x2 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get5x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): undefined;
}
interface Get6x2 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get6x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): any;
}

declare const get: Get;
export = get;

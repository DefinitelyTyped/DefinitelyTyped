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
    (path: _.PropertyPath, object: any): any;
}
interface Get1x1<TObject extends object, TKey extends keyof TObject> {
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

declare const prop: Get;
export = prop;

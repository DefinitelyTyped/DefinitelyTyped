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
    <TDefault>(defaultValue: TDefault): Get1x1<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(p1: _.__, path: TKey | [TKey]): Get1x2<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject, TDefault>(defaultValue: TDefault, path: TKey | [TKey]): Get1x3<TObject, TKey, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object>(p1: _.__, p2: _.__, object: TObject | null | undefined): Get1x4<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TDefault>(defaultValue: TDefault, p2: _.__, object: TObject | null | undefined): Get1x5<TObject, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(p1: _.__, path: TKey | [TKey], object: TObject | null | undefined): Get1x6<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject, TDefault>(defaultValue: TDefault, path: TKey | [TKey], object: TObject | null | undefined): TObject[TKey] | TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: number): Get2x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, path: number): Get2x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(p1: _.__, p2: _.__, object: _.NumericDictionary<T> | null | undefined): Get2x4<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T, TDefault>(defaultValue: TDefault, p2: _.__, object: _.NumericDictionary<T> | null | undefined): Get2x5<T, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(p1: _.__, path: number, object: _.NumericDictionary<T> | null | undefined): Get2x6<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T, TDefault>(defaultValue: TDefault, path: number, object: _.NumericDictionary<T> | null | undefined): T | TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: _.PropertyPath): Get3x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, path: _.PropertyPath): Get3x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, p2: _.__, object: null | undefined): Get3x4;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, p2: _.__, object: null | undefined): Get3x5<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: _.PropertyPath, object: null | undefined): Get3x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, path: _.PropertyPath, object: null | undefined): TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any): Get4x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any, path: _.PropertyPath): Get4x3;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, p2: _.__, object: any): Get4x4;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any, p2: _.__, object: any): Get4x5;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: _.PropertyPath, object: any): Get4x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any, path: _.PropertyPath, object: any): any;
}
interface Get1x1<TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x1<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey]): Get1x3<TObject, TKey, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object>(p1: _.__, object: TObject | null | undefined): Get1x5<TObject, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey], object: TObject | null | undefined): TObject[TKey] | TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: number): Get2x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(p1: _.__, object: _.NumericDictionary<T> | null | undefined): Get2x5<T, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(path: number, object: _.NumericDictionary<T> | null | undefined): T | TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): Get3x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, object: null | undefined): Get3x5<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath, object: null | undefined): TDefault;
}
interface Get1x2<TObject, TKey extends keyof TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x2<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get1x3<TObject, TKey, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, object: TObject | null | undefined): Get1x6<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, object: TObject | null | undefined): TObject[TKey] | TDefault;
}
interface Get1x3<TObject, TKey extends keyof TObject, TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x3<TObject, TKey, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: TObject | null | undefined): TObject[TKey] | TDefault;
}
interface Get1x4<TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x4<TObject>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get1x5<TObject, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TKey extends keyof TObject>(p1: _.__, path: TKey | [TKey]): Get1x6<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TKey extends keyof TObject, TDefault>(defaultValue: TDefault, path: TKey | [TKey]): TObject[TKey] | TDefault;
}
interface Get1x5<TObject, TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x5<TObject, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TKey extends keyof TObject>(path: TKey | [TKey]): TObject[TKey] | TDefault;
}
interface Get1x6<TObject, TKey extends keyof TObject> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get1x6<TObject, TKey>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): TObject[TKey] | TDefault;
}
interface Get2x2 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get2x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(p1: _.__, object: _.NumericDictionary<T> | null | undefined): Get2x6<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T, TDefault>(defaultValue: TDefault, object: _.NumericDictionary<T> | null | undefined): T | TDefault;
}
interface Get2x3<TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <T>(object: _.NumericDictionary<T> | null | undefined): T | TDefault;
}
interface Get2x4<T> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x4<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get2x5<T, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: number): Get2x6<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, path: number): T | TDefault;
}
interface Get2x5<T, TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x5<T, TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: number): T | TDefault;
}
interface Get2x6<T> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get2x6<T>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): T | TDefault;
}
interface Get3x2 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x2;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get3x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, object: null | undefined): Get3x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, object: null | undefined): TDefault;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any): Get4x3;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, object: any): Get4x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any, object: any): any;
}
interface Get3x3<TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x3<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (object: null | undefined): TDefault;
}
interface Get3x4 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x4;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): Get3x5<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: _.PropertyPath): Get3x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault, path: _.PropertyPath): TDefault;
}
interface Get3x5<TDefault> {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x5<TDefault>;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): TDefault;
}
interface Get3x6 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get3x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    <TDefault>(defaultValue: TDefault): TDefault;
}
interface Get4x1 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x1;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (path: _.PropertyPath): Get4x3;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, object: any): Get4x5;
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
interface Get4x3 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x3;
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
interface Get4x4 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x4;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any): Get4x5;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (p1: _.__, path: _.PropertyPath): Get4x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any, path: _.PropertyPath): any;
}
interface Get4x5 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x5;
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
interface Get4x6 {
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (): Get4x6;
    /**
     * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
     * in its place.
     *
     * @param object The object to query.
     * @param path The path of the property to get.
     * @param defaultValue The value returned if the resolved value is undefined.
     * @return Returns the resolved value.
     */
    (defaultValue: any): any;
}

declare const pathOr: Get;
export = pathOr;

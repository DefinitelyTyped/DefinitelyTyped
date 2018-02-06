import _ = require("../index");

declare namespace Lodash {
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
        <TObject extends object, TKey extends keyof TObject, TDefault>(defaultValue: TDefault, path: TKey | [TKey]): Get1x2<TObject, TKey, TDefault>;
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
        <TDefault>(defaultValue: TDefault, path: number): Get2x2<TDefault>;
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
        <TDefault>(defaultValue: TDefault, path: _.PropertyPath): Get3x2<TDefault>;
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
        (defaultValue: any, path: _.PropertyPath): Get4x2;
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
        <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey]): Get1x2<TObject, TKey, TDefault>;
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
        (path: number): Get2x2<TDefault>;
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
        (path: _.PropertyPath): Get3x2<TDefault>;
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
    interface Get1x2<TObject extends object, TKey extends keyof TObject, TDefault> {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        (): Get1x2<TObject, TKey, TDefault>;
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
    interface Get2x2<TDefault> {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        (): Get2x2<TDefault>;
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
    interface Get3x2<TDefault> {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        (): Get3x2<TDefault>;
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
        (path: _.PropertyPath): Get4x2;
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
    interface Get4x2 {
        /**
         * Gets the property value at path of object. If the resolved value is undefined the defaultValue is used
         * in its place.
         *
         * @param object The object to query.
         * @param path The path of the property to get.
         * @param defaultValue The value returned if the resolved value is undefined.
         * @return Returns the resolved value.
         */
        (): Get4x2;
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
}

declare const propOr: Lodash.Get;
export = propOr;

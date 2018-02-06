import _ = require("../index");

declare namespace Lodash {
    interface Get {
        (): Get;
        <TKey extends keyof TObject>(path: TKey | [TKey]): Get1x1<TObject, TKey>;
        <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey], object: TObject): TObject[TKey];
        <TObject extends object, TKey extends keyof TObject>(path: TKey | [TKey], object: TObject | null | undefined): TObject[TKey] | undefined;
        (path: number): Get3x1<T>;
        <T>(path: number, object: _.NumericDictionary<T>): T;
        <T>(path: number, object: _.NumericDictionary<T> | null | undefined): T | undefined;
        (path: _.PropertyPath): Get5x1;
        (path: _.PropertyPath, object: null | undefined): undefined;
    }
    interface Get1x1<TObject extends object, TKey extends keyof TObject> {
        (): Get1x1<TObject, TKey>;
        (object: TObject): TObject[TKey];
        (object: TObject | null | undefined): TObject[TKey] | undefined;
    }
    interface Get3x1<T> {
        (): Get3x1<T>;
        (object: _.NumericDictionary<T>): T;
        (object: _.NumericDictionary<T> | null | undefined): T | undefined;
    }
    interface Get5x1 {
        (): Get5x1;
        (object: null | undefined): undefined;
    }
}

declare const get: Lodash.Get;
export = get;

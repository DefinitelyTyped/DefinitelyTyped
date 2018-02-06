import _ = require("../index");

declare namespace Lodash {
    interface Map {
        (): Map;
        <T, TResult>(iteratee: _.ListIterator<T, TResult>): Map1x1<T, TResult>;
        <T, TResult>(iteratee: _.ListIterator<T, TResult>, collection: _.List<T> | null | undefined): TResult[];
        <T, TResult>(iteratee: _.DictionaryIterator<T, TResult>): Map2x1<T, TResult>;
        <T, TResult>(iteratee: _.DictionaryIterator<T, TResult>, collection: _.Dictionary<T> | null | undefined): TResult[];
        <K extends keyof T>(iteratee: K): Map3x1<T, K>;
        <T, K extends keyof T>(iteratee: K, collection: _.List<T> | _.Dictionary<T> | null | undefined): Array<T[K]>;
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, TResult>): Map4x1<T, TResult>;
        <T, TResult>(iteratee: _.NumericDictionaryIterator<T, TResult>, collection: _.NumericDictionary<T> | null | undefined): TResult[];
        (iteratee: string): Map5x1<T, TResult>;
        <T, TResult>(iteratee: string, collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): TResult[];
        (iteratee: object): Map6x1<T>;
        <T>(iteratee: object, collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): boolean[];
    }
    interface Map1x1<T, TResult> {
        (): Map1x1<T, TResult>;
        (collection: _.List<T> | null | undefined): TResult[];
    }
    interface Map2x1<T, TResult> {
        (): Map2x1<T, TResult>;
        (collection: _.Dictionary<T> | null | undefined): TResult[];
    }
    interface Map3x1<T, K extends keyof T> {
        (): Map3x1<T, K>;
        (collection: _.List<T> | _.Dictionary<T> | null | undefined): Array<T[K]>;
    }
    interface Map4x1<T, TResult> {
        (): Map4x1<T, TResult>;
        (collection: _.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface Map5x1<T, TResult> {
        (): Map5x1<T, TResult>;
        (collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): TResult[];
    }
    interface Map6x1<T> {
        (): Map6x1<T>;
        (collection: _.List<T>|_.Dictionary<T>|_.NumericDictionary<T> | null | undefined): boolean[];
    }
}

declare const map: Lodash.Map;
export = map;

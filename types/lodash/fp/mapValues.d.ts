import _ = require("../index");

declare namespace Lodash {
    interface MapValues {
        (): MapValues;
        <T extends object, TResult>(callback: _.ObjectIterator<T, TResult>): MapValues1x1<T, TResult>;
        <T extends object, TResult>(callback: _.ObjectIterator<T, TResult>, obj: T | null | undefined): { [P in keyof T]: TResult };
        (iteratee: object): MapValues2x1<T>;
        <T extends object>(iteratee: object, obj: T | null | undefined): { [P in keyof T]: boolean };
        <TKey extends keyof T>(iteratee: TKey): MapValues3x1<T, TKey>;
        <T, TKey extends keyof T>(iteratee: TKey, obj: _.Dictionary<T> | null | undefined): _.Dictionary<T[TKey]>;
        (iteratee: string): MapValues4x1<T>;
        <T extends object, TKey extends keyof T>(iteratee: string, obj: T | null | undefined): { [P in keyof T]: any };
        <TResult>(callback: _.StringIterator<TResult>): MapValues5x1<TResult>;
        <TResult>(callback: _.StringIterator<TResult>, obj: string | null | undefined): _.NumericDictionary<TResult>;
    }
    interface MapValues1x1<T extends object, TResult> {
        (): MapValues1x1<T, TResult>;
        (obj: T | null | undefined): { [P in keyof T]: TResult };
    }
    interface MapValues2x1<T extends object> {
        (): MapValues2x1<T>;
        (obj: T | null | undefined): { [P in keyof T]: boolean };
    }
    interface MapValues3x1<T, TKey extends keyof T> {
        (): MapValues3x1<T, TKey>;
        (obj: _.Dictionary<T> | null | undefined): _.Dictionary<T[TKey]>;
    }
    interface MapValues4x1<T extends object> {
        (): MapValues4x1<T>;
        <TKey extends keyof T>(obj: T | null | undefined): { [P in keyof T]: any };
    }
    interface MapValues5x1<TResult> {
        (): MapValues5x1<TResult>;
        (obj: string | null | undefined): _.NumericDictionary<TResult>;
    }
}

declare const mapValues: Lodash.MapValues;
export = mapValues;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ForEachRight {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T>(iteratee: (value: T) => any): ForEachRight1x1<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T>(p1: _.__, collection: ReadonlyArray<T>): ForEachRight1x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T>(iteratee: (value: T) => any, collection: ReadonlyArray<T>): T[];
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: string) => any): ForEachRight2x1;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (p1: _.__, collection: string): ForEachRight2x2;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: string) => any, collection: string): string;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T>(p1: _.__, collection: _.List<T>): ForEachRight3x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T>(iteratee: (value: T) => any, collection: _.List<T>): _.List<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T extends object>(p1: _.__, collection: T): ForEachRight4x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T extends object>(iteratee: (value: T[keyof T]) => any, collection: T): T;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T, TArray extends T[] | null | undefined>(p1: _.__, collection: TArray & (T[] | null | undefined)): ForEachRight5x2<T, TArray>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T, TArray extends T[] | null | undefined>(iteratee: (value: T) => any, collection: TArray & (T[] | null | undefined)): TArray;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <TString extends string | null | undefined>(p1: _.__, collection: TString): ForEachRight6x2<TString>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <TString extends string | null | undefined>(iteratee: (value: string) => any, collection: TString): TString;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T, TList extends _.List<T> | null | undefined>(p1: _.__, collection: TList & (_.List<T> | null | undefined)): ForEachRight7x2<T, TList>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T, TList extends _.List<T> | null | undefined>(iteratee: (value: T) => any, collection: TList & (_.List<T> | null | undefined)): TList;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T extends object>(p1: _.__, collection: T | null | undefined): ForEachRight8x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T extends object>(iteratee: (value: T[keyof T]) => any, collection: T | null | undefined): T | null | undefined;
}
interface ForEachRight1x1<T> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight1x1<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (collection: ReadonlyArray<T>): T[];
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (collection: _.List<T>): _.List<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T1 extends object>(collection: T1): T1;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined)): TArray;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <TList extends _.List<T> | null | undefined>(collection: TList & (_.List<T> | null | undefined)): TList;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <T1 extends object>(collection: T1 | null | undefined): T1 | null | undefined;
}
interface ForEachRight1x2<T> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight1x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T) => any): T[];
}
interface ForEachRight2x1 {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight2x1;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (collection: string): string;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    <TString extends string | null | undefined>(collection: TString): TString;
}
interface ForEachRight2x2 {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight2x2;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: string) => any): string;
}
interface ForEachRight3x2<T> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight3x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T) => any): _.List<T>;
}
interface ForEachRight4x2<T> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight4x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T[keyof T]) => any): T;
}
interface ForEachRight5x2<T, TArray> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight5x2<T, TArray>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T) => any): TArray;
}
interface ForEachRight6x2<TString> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight6x2<TString>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: string) => any): TString;
}
interface ForEachRight7x2<T, TList> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight7x2<T, TList>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T) => any): TList;
}
interface ForEachRight8x2<T> {
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (): ForEachRight8x2<T>;
    /**
     * This method is like _.forEach except that it iterates over elements of collection from right to left.
     *
     * @alias _.eachRight
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function called per iteration.
     * @param thisArg The this binding of callback.
     */
    (iteratee: (value: T[keyof T]) => any): T | null | undefined;
}

declare const forEachRight: ForEachRight;
export = forEachRight;

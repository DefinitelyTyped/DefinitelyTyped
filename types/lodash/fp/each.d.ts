// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface ForEach {
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (): ForEach;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T>(iteratee: (value: T) => any): ForEach1x1<T>;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T>(iteratee: (value: T) => any, collection: ReadonlyArray<T>): T[];
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (iteratee: (value: string) => any): ForEach2x1;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (iteratee: (value: string) => any, collection: string): string;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T>(iteratee: (value: T) => any, collection: _.List<T>): _.List<T>;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T extends object>(iteratee: (value: T[keyof T]) => any, collection: T): T;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T, TArray extends T[] | null | undefined>(iteratee: (value: T) => any, collection: TArray & (T[] | null | undefined)): TArray;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <TString extends string | null | undefined>(iteratee: (value: string) => any, collection: TString): TString;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T, TList extends _.List<T> | null | undefined>(iteratee: (value: T) => any, collection: TList & (_.List<T> | null | undefined)): TList;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T extends object>(iteratee: (value: T[keyof T]) => any, collection: T | null | undefined): T | null | undefined;
}
interface ForEach1x1<T> {
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (): ForEach1x1<T>;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (collection: ReadonlyArray<T>): T[];
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (collection: _.List<T>): _.List<T>;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T1 extends object>(collection: T1): T1;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <TArray extends T[] | null | undefined>(collection: TArray & (T[] | null | undefined)): TArray;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <TList extends _.List<T> | null | undefined>(collection: TList & (_.List<T> | null | undefined)): TList;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <T1 extends object>(collection: T1 | null | undefined): T1 | null | undefined;
}
interface ForEach2x1 {
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (): ForEach2x1;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    (collection: string): string;
    /**
     * Iterates over elements of collection invoking iteratee for each element. The iteratee is bound to thisArg
     * and invoked with three arguments:
     * (value, index|key, collection). Iteratee functions may exit iteration early by explicitly returning false.
     *
     * Note: As with other "Collections" methods, objects with a "length" property are iterated like arrays. To
     * avoid this behavior _.forIn or _.forOwn may be used for object iteration.
     *
     * @alias _.each
     *
     * @param collection The collection to iterate over.
     * @param iteratee The function invoked per iteration.
     * @param thisArg The this binding of iteratee.
     */
    <TString extends string | null | undefined>(collection: TString): TString;
}

declare const each: ForEach;
declare namespace each {}
export = each;

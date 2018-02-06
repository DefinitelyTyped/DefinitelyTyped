import _ = require("../index");

declare namespace Lodash {
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
        <T>(iteratee: _.ArrayIterator<T, any>): ForEachRight1x1<T>;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T>(iteratee: _.ArrayIterator<T, any>, collection: T[]): T[];
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (iteratee: _.StringIterator<any>): ForEachRight2x1;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (iteratee: _.StringIterator<any>, collection: string): string;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T>(iteratee: _.ListIterator<T, any>): ForEachRight3x1<T>;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T>(iteratee: _.ListIterator<T, any>, collection: _.List<T>): _.List<T>;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T extends object>(iteratee: _.ObjectIterator<T, any>): ForEachRight4x1<T>;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T): T;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T, TArray extends T[] | null | undefined>(iteratee: _.ArrayIterator<T, any>, collection: TArray & (T[] | null | undefined)): TArray;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <TString extends string | null | undefined>(iteratee: _.StringIterator<any>, collection: TString): TString;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T, TList extends _.List<T> | null | undefined>(iteratee: _.ListIterator<T, any>, collection: TList & (_.List<T> | null | undefined)): TList;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        <T extends object>(iteratee: _.ObjectIterator<T, any>, collection: T | null | undefined): T | null | undefined;
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
        (collection: T[]): T[];
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
    interface ForEachRight3x1<T> {
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (): ForEachRight3x1<T>;
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
        <TList extends _.List<T> | null | undefined>(collection: TList & (_.List<T> | null | undefined)): TList;
    }
    interface ForEachRight4x1<T extends object> {
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (): ForEachRight4x1<T>;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (collection: T): T;
        /**
         * This method is like _.forEach except that it iterates over elements of collection from right to left.
         *
         * @alias _.eachRight
         *
         * @param collection The collection to iterate over.
         * @param iteratee The function called per iteration.
         * @param thisArg The this binding of callback.
         */
        (collection: T | null | undefined): T | null | undefined;
    }
}

declare const eachRight: Lodash.ForEachRight;
export = eachRight;

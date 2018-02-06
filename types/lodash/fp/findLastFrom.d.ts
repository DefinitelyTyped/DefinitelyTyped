import _ = require("../index");

declare namespace Lodash {
    interface FindLast {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (fromIndex: number): FindLast1x1;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(fromIndex: number, collection: _.List<T> | null | undefined): FindLast1x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T, S extends T>(fromIndex: number, collection: _.List<T> | null | undefined, predicate: _.ValueIteratorTypeGuard<T, S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(fromIndex: number, collection: _.List<T> | null | undefined, predicate: _.ValueIterateeCustom<T, boolean>): T|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(fromIndex: number, collection: T | null | undefined): FindLast3x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object, S extends T[keyof T]>(fromIndex: number, collection: T | null | undefined, predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(fromIndex: number, collection: T | null | undefined, predicate: _.ValueIterateeCustom<T[keyof T], boolean>): T[keyof T]|undefined;
    }
    interface FindLast1x1 {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast1x1;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(collection: _.List<T> | null | undefined): FindLast1x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T, S extends T>(collection: _.List<T> | null | undefined, predicate: _.ValueIteratorTypeGuard<T, S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(collection: _.List<T> | null | undefined): FindLast2x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(collection: _.List<T> | null | undefined, predicate: _.ValueIterateeCustom<T, boolean>): T|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(collection: T | null | undefined): FindLast3x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object, S extends T[keyof T]>(collection: T | null | undefined, predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(collection: T | null | undefined): FindLast4x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(collection: T | null | undefined, predicate: _.ValueIterateeCustom<T[keyof T], boolean>): T[keyof T]|undefined;
    }
    interface FindLast1x2<T> {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast1x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (predicate: _.ValueIterateeCustom<T, boolean>): T|undefined;
    }
    interface FindLast3x2<T extends object> {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast3x2<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (predicate: _.ValueIterateeCustom<T[keyof T], boolean>): T[keyof T]|undefined;
    }
}

declare const findLastFrom: Lodash.FindLast;
export = findLastFrom;

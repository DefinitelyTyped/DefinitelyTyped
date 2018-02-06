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
        <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): FindLast1x1<T, S>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, collection: _.List<T> | null | undefined): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): FindLast2x1<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): FindLast3x1<T, S>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, collection: T | null | undefined): S|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): T[keyof T]|undefined;
    }
    interface FindLast1x1<T, S extends T> {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast1x1<T, S>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (collection: _.List<T> | null | undefined): S|undefined;
    }
    interface FindLast2x1<T> {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast2x1<T>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (collection: _.List<T> | null | undefined): T|undefined;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (collection: object | null | undefined): T[keyof T]|undefined;
    }
    interface FindLast3x1<T extends object, S extends T[keyof T]> {
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (): FindLast3x1<T, S>;
        /**
        * This method is like _.find except that it iterates over elements of a collection from
        * right to left.
        * @param collection Searches for a value in this list.
        * @param predicate The function called per iteration.
        * @param fromIndex The index to search from.
        * @return The found element, else undefined.
        **/
        (collection: T | null | undefined): S|undefined;
    }
}

declare const findLast: Lodash.FindLast;
export = findLast;

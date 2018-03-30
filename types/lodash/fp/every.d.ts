// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Every {
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (): Every;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): Every1x1<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    <T>(p1: _.__, collection: _.List<T> | null | undefined): Every1x2<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): boolean;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    <T extends object>(p1: _.__, collection: T | null | undefined): Every2x2<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): boolean;
}
interface Every1x1<T> {
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (): Every1x1<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (collection: _.List<T> | object | null | undefined): boolean;
}
interface Every1x2<T> {
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (): Every1x2<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (predicate: _.ValueIterateeCustom<T, boolean>): boolean;
}
interface Every2x2<T extends object> {
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (): Every2x2<T>;
    /**
     * Checks if predicate returns truthy for all elements of collection. Iteration is stopped once predicate
     * returns falsey. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if all elements pass the predicate check, else false.
     */
    (predicate: _.ValueIterateeCustom<T[keyof T], boolean>): boolean;
}

declare const every: Every;
export = every;

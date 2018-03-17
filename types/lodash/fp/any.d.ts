// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Some {
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    (): Some;
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): Some1x1<T>;
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): boolean;
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): boolean;
}
interface Some1x1<T> {
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    (): Some1x1<T>;
    /**
     * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate
     * returns truthy. The predicate is invoked with three arguments: (value, index|key, collection).
     *
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @return Returns true if any element passes the predicate check, else false.
     */
    (collection: _.List<T> | object | null | undefined): boolean;
}

declare const any: Some;
export = any;

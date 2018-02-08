// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Find {
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (): Find;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): Find1x1<T, S>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, collection: _.List<T> | null | undefined): S|undefined;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): Find2x1<T>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T|undefined;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): Find3x1<T, S>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, collection: T | null | undefined): S|undefined;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): T[keyof T]|undefined;
}
interface Find1x1<T, S extends T> {
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (): Find1x1<T, S>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (collection: _.List<T> | null | undefined): S|undefined;
}
interface Find2x1<T> {
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (): Find2x1<T>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (collection: _.List<T> | null | undefined): T|undefined;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (collection: object | null | undefined): T|undefined;
}
interface Find3x1<T extends object, S extends T[keyof T]> {
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (): Find3x1<T, S>;
    /**
     * Iterates over elements of collection, returning the first element predicate returns truthy for.
     * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * have the properties of the given object, else false.
     *
     * @param collection The collection to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the matched element, else undefined.
     */
    (collection: T | null | undefined): S|undefined;
}

declare const find: Find;
declare namespace find {}
export = find;

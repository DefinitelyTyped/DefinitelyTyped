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
    (predicate: _.__, fromIndex: number): Find1x2;
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
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, fromIndex: number): Find1x3<T, S>;
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
    <T>(predicate: _.__, fromIndex: _.__, collection: _.List<T> | null | undefined): Find1x4<T>;
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
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, fromIndex: _.__, collection: _.List<T> | null | undefined): Find1x5<S>;
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
    <T>(predicate: _.__, fromIndex: number, collection: _.List<T> | null | undefined): Find1x6<T>;
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
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, fromIndex: number, collection: _.List<T> | null | undefined): S|undefined;
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
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, fromIndex: number): Find2x3<T>;
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
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, fromIndex: _.__, collection: _.List<T> | null | undefined): Find2x5<T>;
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
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, fromIndex: number, collection: _.List<T> | null | undefined): T|undefined;
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
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, fromIndex: number): Find3x3<T, S>;
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
    <T extends object>(predicate: _.__, fromIndex: _.__, collection: T | null | undefined): Find3x4<T>;
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
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, fromIndex: _.__, collection: T | null | undefined): Find3x5<S>;
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
    <T extends object>(predicate: _.__, fromIndex: number, collection: T | null | undefined): Find3x6<T>;
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
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, fromIndex: number, collection: T | null | undefined): S|undefined;
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
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, fromIndex: _.__, collection: T | null | undefined): Find4x5<T>;
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
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, fromIndex: number, collection: T | null | undefined): T[keyof T]|undefined;
}
interface Find1x1<T, S> {
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
    (fromIndex: number): Find1x3<T, S>;
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
    (fromIndex: _.__, collection: _.List<T> | null | undefined): Find1x5<S>;
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
    (fromIndex: number, collection: _.List<T> | null | undefined): S|undefined;
}
interface Find1x2 {
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
    (): Find1x2;
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
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): Find1x3<T, S>;
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
    <T>(predicate: _.__, collection: _.List<T> | null | undefined): Find1x6<T>;
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
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): Find2x3<T>;
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
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): Find3x3<T, S>;
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
    <T extends object>(predicate: _.__, collection: T | null | undefined): Find3x6<T>;
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
interface Find1x3<T, S> {
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
    (): Find1x3<T, S>;
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
interface Find1x4<T> {
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
    (): Find1x4<T>;
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
    <S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): Find1x5<S>;
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
    (predicate: _.__, fromIndex: number): Find1x6<T>;
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
    <S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, fromIndex: number): S|undefined;
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
    (predicate: _.ValueIterateeCustom<T, boolean>): Find2x5<T>;
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
    (predicate: _.ValueIterateeCustom<T, boolean>, fromIndex: number): T|undefined;
}
interface Find1x5<S> {
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
    (): Find1x5<S>;
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
    (fromIndex: number): S|undefined;
}
interface Find1x6<T> {
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
    (): Find1x6<T>;
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
    <S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): S|undefined;
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
    (predicate: _.ValueIterateeCustom<T, boolean>): T|undefined;
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
    (fromIndex: number): Find2x3<T>;
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
    (fromIndex: _.__, collection: _.List<T> | null | undefined): Find2x5<T>;
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
    (fromIndex: number, collection: _.List<T> | object | null | undefined): T|undefined;
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
    <T1 extends object>(fromIndex: _.__, collection: T1 | null | undefined): Find4x5<T>;
}
interface Find2x3<T> {
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
    (): Find2x3<T>;
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
    (collection: object | null | undefined): object|undefined;
}
interface Find2x5<T> {
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
    (): Find2x5<T>;
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
    (fromIndex: number): T|undefined;
}
interface Find3x1<T, S> {
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
    (fromIndex: number): Find3x3<T, S>;
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
    (fromIndex: _.__, collection: T | null | undefined): Find3x5<S>;
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
    (fromIndex: number, collection: T | null | undefined): S|undefined;
}
interface Find3x3<T, S> {
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
    (): Find3x3<T, S>;
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
interface Find3x4<T> {
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
    (): Find3x4<T>;
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
    <S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): Find3x5<S>;
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
    (predicate: _.__, fromIndex: number): Find3x6<T>;
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
    <S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, fromIndex: number): S|undefined;
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
    (predicate: _.ValueIterateeCustom<T[keyof T], boolean>): Find4x5<T>;
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
    (predicate: _.ValueIterateeCustom<T[keyof T], boolean>, fromIndex: number): T[keyof T]|undefined;
}
interface Find3x5<S> {
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
    (): Find3x5<S>;
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
    (fromIndex: number): S|undefined;
}
interface Find3x6<T> {
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
    (): Find3x6<T>;
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
    <S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): S|undefined;
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
    (predicate: _.ValueIterateeCustom<T[keyof T], boolean>): T[keyof T]|undefined;
}
interface Find4x5<T> {
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
    (): Find4x5<T>;
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
    (fromIndex: number): T[keyof T]|undefined;
}

declare const findFrom: Find;
export = findFrom;

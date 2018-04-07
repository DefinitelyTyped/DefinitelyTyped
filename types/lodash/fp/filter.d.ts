// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Filter {
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (): Filter;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (predicate: (value: string) => boolean): Filter1x1;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (predicate: (value: string) => boolean, collection: string | null | undefined): string[];
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>): Filter2x1<T, S>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T, S extends T>(predicate: _.ValueIteratorTypeGuard<T, S>, collection: _.List<T> | null | undefined): S[];
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): Filter3x1<T>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, collection: _.List<T> | null | undefined): T[];
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>): Filter4x1<T, S>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T extends object, S extends T[keyof T]>(predicate: _.ValueIteratorTypeGuard<T[keyof T], S>, collection: T | null | undefined): S[];
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    <T extends object>(predicate: _.ValueIterateeCustom<T[keyof T], boolean>, collection: T | null | undefined): Array<T[keyof T]>;
}
interface Filter1x1 {
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (): Filter1x1;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (collection: string | null | undefined): string[];
}
interface Filter2x1<T, S extends T> {
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (): Filter2x1<T, S>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (collection: _.List<T> | null | undefined): S[];
}
interface Filter3x1<T> {
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (): Filter3x1<T>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (collection: _.List<T> | object | null | undefined): T[];
}
interface Filter4x1<T extends object, S extends T[keyof T]> {
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (): Filter4x1<T, S>;
    /**
     * Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The
     * predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
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
     * @param collection The collection to iterate over.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new filtered array.
     */
    (collection: T | null | undefined): S[];
}

declare const filter: Filter;
export = filter;

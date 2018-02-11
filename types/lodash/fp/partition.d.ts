// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Partition {
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    (): Partition;
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    <T>(callback: _.ValueIteratee<T>): Partition1x1<T>;
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    <T>(callback: _.ValueIteratee<T>, collection: _.List<T> | null | undefined): [T[], T[]];
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    <T extends object>(callback: _.ValueIteratee<T[keyof T]>, collection: T | null | undefined): [Array<T[keyof T]>, Array<T[keyof T]>];
}
interface Partition1x1<T> {
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    (): Partition1x1<T>;
    /**
    * Creates an array of elements split into two groups, the first of which contains elements predicate returns truthy for,
    * while the second of which contains elements predicate returns falsey for.
    * The predicate is bound to thisArg and invoked with three arguments: (value, index|key, collection).
    *
    * If a property name is provided for predicate the created _.property style callback
    * returns the property value of the given element.
    *
    * If a value is also provided for thisArg the created _.matchesProperty style callback
    * returns true for elements that have a matching property value, else false.
    *
    * If an object is provided for predicate the created _.matches style callback returns
    * true for elements that have the properties of the given object, else false.
    *
    * @param collection The collection to iterate over.
    * @param callback The function called per iteration.
    * @param thisArg The this binding of predicate.
    * @return Returns the array of grouped elements.
    **/
    (collection: _.List<T> | object | null | undefined): [T[], T[]];
}

declare const partition: Partition;
export = partition;

// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface DropRightWhile {
    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    (): DropRightWhile;
    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    <T>(predicate: _.ValueIteratee<T>): DropRightWhile1x1<T>;
    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
}
interface DropRightWhile1x1<T> {
    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    (): DropRightWhile1x1<T>;
    /**
     * Creates a slice of array excluding elements dropped from the end. Elements are dropped until predicate
     * returns falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
     *
     * If a property name is provided for predicate the created _.property style callback returns the property
     * value of the given element.
     *
     * If a value is also provided for thisArg the created _.matchesProperty style callback returns true for
     * elements that have a matching property value, else false.
     *
     * If an object is provided for predicate the created _.matches style callback returns true for elements that
     * match the properties of the given object, else false.
     *
     * @param array The array to query.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the slice of array.
     */
    (array: _.List<T> | null | undefined): T[];
}

declare const dropLastWhile: DropRightWhile;
export = dropLastWhile;

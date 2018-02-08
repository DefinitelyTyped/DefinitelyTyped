// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface Remove {
    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    (): Remove;
    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    <T>(predicate: _.ValueIteratee<T>): Remove1x1<T>;
    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    <T>(predicate: _.ValueIteratee<T>, array: _.List<T>): T[];
}
interface Remove1x1<T> {
    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    (): Remove1x1<T>;
    /**
     * Removes all elements from array that predicate returns truthy for and returns an array of the removed
     * elements. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
     * Note: Unlike _.filter, this method mutates array.
     *
     * @param array The array to modify.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the new array of removed elements.
     */
    (array: _.List<T>): T[];
}

declare const remove: Remove;
declare namespace remove {}
export = remove;

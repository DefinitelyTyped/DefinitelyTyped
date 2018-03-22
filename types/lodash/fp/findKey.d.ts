// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface FindKey {
    /**
     * This method is like _.find except that it returns the key of the first element predicate returns truthy for
     * instead of the element itself.
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
     * @param object The object to search.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the key of the matched element, else undefined.
     */
    (): FindKey;
    /**
     * This method is like _.find except that it returns the key of the first element predicate returns truthy for
     * instead of the element itself.
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
     * @param object The object to search.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the key of the matched element, else undefined.
     */
    <T>(predicate: _.ValueIteratee<T>): FindKey1x1<T>;
    /**
     * This method is like _.find except that it returns the key of the first element predicate returns truthy for
     * instead of the element itself.
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
     * @param object The object to search.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the key of the matched element, else undefined.
     */
    <T>(predicate: _.ValueIteratee<T[keyof T]>, object: T | null | undefined): string | undefined;
}
interface FindKey1x1<T> {
    /**
     * This method is like _.find except that it returns the key of the first element predicate returns truthy for
     * instead of the element itself.
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
     * @param object The object to search.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the key of the matched element, else undefined.
     */
    (): FindKey1x1<T>;
    /**
     * This method is like _.find except that it returns the key of the first element predicate returns truthy for
     * instead of the element itself.
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
     * @param object The object to search.
     * @param predicate The function invoked per iteration.
     * @param thisArg The this binding of predicate.
     * @return Returns the key of the matched element, else undefined.
     */
    (object: object | null | undefined): string | undefined;
}

declare const findKey: FindKey;
export = findKey;

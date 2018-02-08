// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

interface FindLastIndex {
    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
     * @param array The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    (): FindLastIndex;
    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
     * @param array The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>): FindLastIndex1x1<T>;
    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
     * @param array The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    <T>(predicate: _.ValueIterateeCustom<T, boolean>, array: _.List<T> | null | undefined): number;
}
interface FindLastIndex1x1<T> {
    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
     * @param array The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    (): FindLastIndex1x1<T>;
    /**
     * This method is like _.findIndex except that it iterates over elements of collection from right to left.
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
     * @param array The array to search.
     * @param predicate The function invoked per iteration.
     * @param fromIndex The index to search from.
     * @return Returns the index of the found element, else -1.
     */
    (array: _.List<T> | null | undefined): number;
}

declare const findLastIndex: FindLastIndex;
declare namespace findLastIndex {}
export = findLastIndex;

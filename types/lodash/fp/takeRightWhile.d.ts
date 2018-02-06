// AUTO-GENERATED: do not modify this file directly.
// If you need to make changes, modify generate-fp.ts (if necessary), then open a terminal in types/lodash/scripts, and do:
// npm run fp

import _ = require("../index");

declare namespace Lodash {
    interface TakeRightWhile {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        (): TakeRightWhile;
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        <T>(predicate: _.ValueIteratee<T>): TakeRightWhile1x1<T>;
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        <T>(predicate: _.ValueIteratee<T>, array: _.List<T> | null | undefined): T[];
    }
    interface TakeRightWhile1x1<T> {
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        (): TakeRightWhile1x1<T>;
        /**
         * Creates a slice of array with elements taken from the end. Elements are taken until predicate returns
         * falsey. The predicate is bound to thisArg and invoked with three arguments: (value, index, array).
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
         * @param array The array to query.
         * @param predicate The function invoked per iteration.
         * @param thisArg The this binding of predicate.
         * @return Returns the slice of array.
         */
        (array: _.List<T> | null | undefined): T[];
    }
}

declare const takeRightWhile: Lodash.TakeRightWhile;
export = takeRightWhile;

import _ = require("../index");

declare namespace Lodash {
    interface FindLastKey {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
        (): FindLastKey;
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
        <T>(predicate: _.ValueIteratee<T>): FindLastKey1x1<T>;
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
    interface FindLastKey1x1<T> {
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
        (): FindLastKey1x1<T>;
        /**
         * This method is like _.findKey except that it iterates over elements of a collection in the opposite order.
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
}

declare const findLastKey: Lodash.FindLastKey;
export = findLastKey;

import _ = require("../index");

declare namespace Lodash {
    interface FindIndex {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
        (): FindIndex;
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
        <T>(predicate: _.ValueIterateeCustom<T, boolean>): FindIndex1x1<T>;
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
    interface FindIndex1x1<T> {
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
        (): FindIndex1x1<T>;
        /**
         * This method is like _.find except that it returns the index of the first element predicate returns truthy
         * for instead of the element itself.
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
}

declare const findIndex: Lodash.FindIndex;
export = findIndex;

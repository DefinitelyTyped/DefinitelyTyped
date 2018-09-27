import ComputedProperty from "@ember/object/computed";
import Mixin from "@ember/object/mixin";
import NativeArray from "@ember/array/-private/native-array";
import EmberArray from '@ember/array';
/**
 * This mixin defines the common interface implemented by enumerable objects
 * in Ember. Most of these methods follow the standard Array iteration
 * API defined up to JavaScript 1.8 (excluding language-specific features that
 * cannot be emulated in older versions of JavaScript).
 */
interface Enumerable<T> {
    /**
     * Helper method returns the first object from a collection. This is usually
     * used by bindings and other parts of the framework to extract a single
     * object if the enumerable contains only one item.
     */
    firstObject: ComputedProperty<T | undefined>;
    /**
     * Helper method returns the last object from a collection. If your enumerable
     * contains only one object, this method should always return that object.
     * If your enumerable is empty, this method should return `undefined`.
     */
    lastObject: ComputedProperty<T | undefined>;
    /**
     * @deprecated Use `Enumerable#includes` instead.
     */
    contains(obj: T): boolean;
    /**
     * Iterates through the enumerable, calling the passed function on each
     * item. This method corresponds to the `forEach()` method defined in
     * JavaScript 1.6.
     */
    forEach: T[]['forEach'];
    /**
     * Alias for `mapBy`
     */
    getEach(key: string): any[];
    /**
     * Sets the value on the named property for each member. This is more
     * ergonomic than using other methods defined on this helper. If the object
     * implements Ember.Observable, the value will be changed to `set(),` otherwise
     * it will be set directly. `null` objects are skipped.
     */
    setEach(key: string, value: any): any;
    /**
     * Maps all of the items in the enumeration to another value, returning
     * a new array. This method corresponds to `map()` defined in JavaScript 1.6.
     */
    map: T[]['map'];
    /**
     * Similar to map, this specialized function returns the value of the named
     * property on all items in the enumeration.
     */
    mapBy(key: string): any[];
    /**
     * Returns an array with all of the items in the enumeration that the passed
     * function returns true for. This method corresponds to `filter()` defined in
     * JavaScript 1.6.
     */
    filter: T[]['filter'];
    /**
     * Returns an array with all of the items in the enumeration where the passed
     * function returns false. This method is the inverse of filter().
     */
    reject(
        callbackfn: (value: T, index: number, array: T[]) => any,
        thisArg?: any
    ): NativeArray<T>;
    /**
     * Returns an array with just the items with the matched property. You
     * can pass an optional second argument with the target value. Otherwise
     * this will match any property that evaluates to `true`.
     */
    filterBy(key: string, value?: any): NativeArray<T>;
    /**
     * Returns an array with the items that do not have truthy values for
     * key.  You can pass an optional second argument with the target value.  Otherwise
     * this will match any property that evaluates to false.
     */
    rejectBy(key: string, value?: any): NativeArray<T>;
    /**
     * Returns the first item in the array for which the callback returns true.
     * This method works similar to the `filter()` method defined in JavaScript 1.6
     * except that it will stop working on the array once a match is found.
     */
    find: T[]['find'];
    /**
     * Returns the first item with a property matching the passed value. You
     * can pass an optional second argument with the target value. Otherwise
     * this will match any property that evaluates to `true`.
     */
    findBy(key: string, value?: any): T | undefined;
    /**
     * Returns `true` if the passed function returns true for every item in the
     * enumeration. This corresponds with the `every()` method in JavaScript 1.6.
     */
    every: T[]['every'];
    /**
     * Returns `true` if the passed property resolves to the value of the second
     * argument for all items in the enumerable. This method is often simpler/faster
     * than using a callback.
     */
    isEvery(key: string, value?: any): boolean;
    /**
     * Returns `true` if the passed function returns true for any item in the
     * enumeration.
     */
    any(
        callback: (value: T, index: number, array: T[]) => boolean,
        target?: {}
    ): boolean;
    /**
     * Returns `true` if the passed property resolves to the value of the second
     * argument for any item in the enumerable. This method is often simpler/faster
     * than using a callback.
     */
    isAny(key: string, value?: any): boolean;
    /**
     * This will combine the values of the enumerator into a single value. It
     * is a useful way to collect a summary value from an enumeration. This
     * corresponds to the `reduce()` method defined in JavaScript 1.8.
     */
    reduce: T[]['reduce'];
    /**
     * Invokes the named method on every object in the receiver that
     * implements it. This method corresponds to the implementation in
     * Prototype 1.6.
     */
    invoke(methodName: keyof T, ...args: any[]): any[];
    /**
     * Simply converts the enumerable into a genuine array. The order is not
     * guaranteed. Corresponds to the method implemented by Prototype.
     */
    toArray(): T[];
    /**
     * Returns a copy of the array with all `null` and `undefined` elements removed.
     */
    compact(): NativeArray<T>;
    /**
     * Returns a new enumerable that excludes the passed value. The default
     * implementation returns an array regardless of the receiver type.
     * If the receiver does not contain the value it returns the original enumerable.
     */
    without(value: T): NativeArray<T>;
    /**
     * Returns a new enumerable that contains only unique values. The default
     * implementation returns an array regardless of the receiver type.
     */
    uniq(): NativeArray<T>;
    /**
     * Converts the enumerable into an array and sorts by the keys
     * specified in the argument.
     */
    sortBy(property: string): NativeArray<T>;
    /**
     * Returns a new enumerable that contains only items containing a unique property value.
     * The default implementation returns an array regardless of the receiver type.
     */
    uniqBy(property: string): NativeArray<T>;
    /**
     * Returns `true` if the passed object can be found in the enumerable.
     */
    includes(searchElement: T, fromIndex?: number): boolean;
    /**
     * This is the handler for the special array content property. If you get
     * this property, it will return this. If you set this property to a new
     * array, it will replace the current content.
     */
    '[]': ComputedProperty<this>;
}
declare const Enumerable: Mixin<Enumerable<any>>;

export default Enumerable;

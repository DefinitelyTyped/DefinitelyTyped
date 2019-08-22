// Type definitions for non-npm package @ember/array 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Farray
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import ComputedProperty from "@ember/object/computed";
import Mixin from "@ember/object/mixin";
import Enumerable from "@ember/array/-private/enumerable";
import NativeArray from "@ember/array/-private/native-array";

/**
 * This module implements Observer-friendly Array-like behavior. This mixin is picked up by the
 * Array class as well as other controllers, etc. that want to appear to be arrays.
 */
interface Array<T> extends Enumerable<T> {
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    length: number | ComputedProperty<number>;
    /**
     * Returns the object at the given `index`. If the given `index` is negative
     * or is greater or equal than the array length, returns `undefined`.
     */
    objectAt(idx: number): T | undefined;
    /**
     * This returns the objects at the specified indexes, using `objectAt`.
     */
    // tslint:disable-next-line:array-type
    objectsAt(indexes: number[]): Array<T>;
    /**
     * Returns a new array that is a slice of the receiver. This implementation
     * uses the observable array methods to retrieve the objects for the new
     * slice.
     */
    slice(beginIndex?: number, endIndex?: number): T[];
    /**
     * Returns the index of the given object's first occurrence.
     * If no `startAt` argument is given, the starting location to
     * search is 0. If it's negative, will count backward from
     * the end of the array. Returns -1 if no match is found.
     */
    indexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Returns the index of the given object's last occurrence.
     * If no `startAt` argument is given, the search starts from
     * the last position. If it's negative, will count backward
     * from the end of the array. Returns -1 if no match is found.
     */
    lastIndexOf(searchElement: T, fromIndex?: number): number;
    /**
     * Adds an array observer to the receiving array. The array observer object
     * normally must implement two methods:
     */
    addArrayObserver(target: {}, opts: {}): this;
    /**
     * Removes an array observer from the object if the observer is current
     * registered. Calling this method multiple times with the same object will
     * have no effect.
     */
    removeArrayObserver(target: {}, opts: {}): this;
    /**
     * Becomes true whenever the array currently has observers watching changes
     * on the array.
     */
    hasArrayObservers: ComputedProperty<boolean>;
    /**
     * If you are implementing an object that supports `Ember.Array`, call this
     * method just before the array content changes to notify any observers and
     * invalidate any related properties. Pass the starting index of the change
     * as well as a delta of the amounts to change.
     */
    arrayContentWillChange(startIdx: number, removeAmt: number, addAmt: number): this;
    /**
     * If you are implementing an object that supports `Ember.Array`, call this
     * method just after the array content changes to notify any observers and
     * invalidate any related properties. Pass the starting index of the change
     * as well as a delta of the amounts to change.
     */
    arrayContentDidChange(startIdx: number, removeAmt: number, addAmt: number): this;
    /**
     * Returns a special object that can be used to observe individual properties
     * on the array. Just get an equivalent property on this object and it will
     * return an enumerable that maps automatically to the named key on the
     * member objects.
     */
    '@each': ComputedProperty<T>;
}
// Ember.Array rather than Array because the `array-type` lint rule doesn't realize the global is shadowed
// tslint:disable-next-line:array-type
declare const Array: Mixin<Array<any>>;
export default Array;

/**
 * Creates an `Ember.NativeArray` from an Array like object.
 * Does not modify the original object's contents. Ember.A is not needed if
 * `EmberENV.EXTEND_PROTOTYPES` is `true` (the default value). However,
 * it is recommended that you use Ember.A when creating addons for
 * ember or when you can not guarantee that `EmberENV.EXTEND_PROTOTYPES`
 * will be `true`.
 */
export function A<T>(arr?: T[]): NativeArray<T>;

/**
 * Returns true if the passed object is an array or Array-like.
 */
export function isArray(obj: any): obj is ArrayLike<any>;

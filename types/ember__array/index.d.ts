// Type definitions for non-npm package @ember/array 4.0
// Project: https://emberjs.com/api/ember/4.0/modules/@ember%2Farray
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

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
    objectsAt(indexes: number[]): Array<T | undefined>;
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
     * Returns a special object that can be used to observe individual properties
     * on the array. Just get an equivalent property on this object and it will
     * return an enumerable that maps automatically to the named key on the
     * member objects.
     */
    '@each': ComputedProperty<T>;
}
// Ember.Array rather than Array because the `array-type` lint rule doesn't realize the global is shadowed
// tslint:disable-next-line:array-type
declare const Array: Mixin<Array<unknown>>;
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
export function isArray(obj: unknown): obj is ArrayLike<unknown>;

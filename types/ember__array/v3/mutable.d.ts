import EmberArray from "@ember/array";
import Enumerable from "@ember/array/-private/enumerable";
import MutableEnumerable from "@ember/array/-private/mutable-enumerable";
import Mixin from "@ember/object/mixin";

/**
 * This mixin defines the API for modifying array-like objects. These methods
 * can be applied only to a collection that keeps its items in an ordered set.
 * It builds upon the Array mixin and adds methods to modify the array.
 * One concrete implementations of this class include ArrayProxy.
 */
interface MutableArray<T> extends EmberArray<T>, MutableEnumerable<T> {
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    replace(idx: number, amt: number, objects: any[]): any;
    /**
     * Remove all elements from the array. This is useful if you
     * want to reuse an existing array without having to recreate it.
     */
    clear(): this;
    /**
     * This will use the primitive `replace()` method to insert an object at the
     * specified index.
     */
    insertAt(idx: number, object: {}): this;
    /**
     * Remove an object at the specified index using the `replace()` primitive
     * method. You can pass either a single index, or a start and a length.
     */
    removeAt(start: number, len?: number): this;
    /**
     * Push the object onto the end of the array. Works just like `push()` but it
     * is KVO-compliant.
     */
    pushObject(obj: T): T;
    /**
     * Add the objects in the passed numerable to the end of the array. Defers
     * notifying observers of the change until all objects are added.
     */
    pushObjects(objects: Enumerable<T>): this;
    /**
     * Pop object from array or nil if none are left. Works just like `pop()` but
     * it is KVO-compliant.
     */
    popObject(): T;
    /**
     * Shift an object from start of array or nil if none are left. Works just
     * like `shift()` but it is KVO-compliant.
     */
    shiftObject(): T;
    /**
     * Unshift an object to start of array. Works just like `unshift()` but it is
     * KVO-compliant.
     */
    unshiftObject(obj: T): T;
    /**
     * Adds the named objects to the beginning of the array. Defers notifying
     * observers until all objects have been added.
     */
    unshiftObjects(objects: Enumerable<T>): this;
    /**
     * Reverse objects in the array. Works just like `reverse()` but it is
     * KVO-compliant.
     */
    reverseObjects(): this;
    /**
     * Replace all the receiver's content with content of the argument.
     * If argument is an empty array receiver will be cleared.
     */
    setObjects(objects: EmberArray<T>): this;
}
declare const MutableArray: Mixin<MutableArray<any>>;

export default MutableArray;

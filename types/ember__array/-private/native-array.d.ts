import MutableArray from '@ember/array/mutable';
import Observable from '@ember/object/observable';
import Mixin from '@ember/object/mixin';

// Get an alias to the global Array type to use in inner scope below.
type GlobalArray<T> = T[];

/**
 * The NativeArray mixin contains the properties needed to make the native
 * Array support Ember.MutableArray and all of its dependent APIs. Unless you
 * have `EmberENV.EXTEND_PROTOTYPES` or `EmberENV.EXTEND_PROTOTYPES.Array` set to
 * false, this will be applied automatically. Otherwise you can apply the mixin
 * at anytime by calling `Ember.NativeArray.apply(Array.prototype)`.
 */
interface NativeArray<T> extends GlobalArray<T>, MutableArray<T>, Observable {
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    length: number;
}

declare const NativeArray: Mixin<NativeArray<unknown>>;
export default NativeArray;

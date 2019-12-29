import MutableArray from "@ember/array/mutable";
import EmberObject from "@ember/object";
import NativeArray from "@ember/array/-private/native-array";

/**
 * An ArrayProxy wraps any other object that implements Ember.Array and/or Ember.MutableArray,
 * forwarding all requests. This makes it very useful for a number of binding use cases or other cases
 * where being able to swap out the underlying array is useful.
 */
interface ArrayProxy<T> extends MutableArray<T> {}
declare class ArrayProxy<T> extends EmberObject.extend(MutableArray as {}) {
    content: NativeArray<T>;

    /**
     * Should actually retrieve the object at the specified index from the
     * content. You can override this method in subclasses to transform the
     * content item to something new.
     */
    objectAtContent(idx: number): T | undefined;
}
export default ArrayProxy;

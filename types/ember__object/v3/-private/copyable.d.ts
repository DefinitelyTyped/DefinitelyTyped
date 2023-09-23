import Mixin from "@ember/object/mixin";

/**
 * Implements some standard methods for copying an object. Add this mixin to
 * any object you create that can create a copy of itself. This mixin is
 * added automatically to the built-in array.
 */
interface Copyable {
    /**
     * __Required.__ You must implement this method to apply this mixin.
     */
    copy(deep: boolean): Copyable;
    /**
     * If the object implements `Ember.Freezable`, then this will return a new
     * copy if the object is not frozen and the receiver if the object is frozen.
     */
    frozenCopy(): Copyable;
}
declare const Copyable: Mixin<Copyable>;
export default Copyable;

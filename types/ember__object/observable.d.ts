import { UnwrapComputedPropertyGetter, UnwrapComputedPropertyGetters, UnwrapComputedPropertySetters, ObserverMethod } from "@ember/object/-private/types";
import Mixin from "@ember/object/mixin";
import CoreObject from "@ember/object/core";

/**
 * This mixin provides properties and property observing functionality, core features of the Ember object model.
 */
interface Observable {
    /**
     * Retrieves the value of a property from the object.
     */
    get<K extends keyof this>(key: K): UnwrapComputedPropertyGetter<this[K]>;
    /**
     * To get the values of multiple properties at once, call `getProperties`
     * with a list of strings or an array:
     */
    getProperties<K extends keyof this>(
        list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    getProperties<K extends keyof this>(
        ...list: K[]
    ): Pick<UnwrapComputedPropertyGetters<this>, K>;
    /**
     * Sets the provided key or path to the value.
     */
    set<K extends keyof this>(key: K, value: this[K]): this[K];
    set<T>(key: keyof this, value: T): T;
    /**
     * Sets a list of properties at once. These properties are set inside
     * a single `beginPropertyChanges` and `endPropertyChanges` batch, so
     * observers will be buffered.
     */
    setProperties<K extends keyof this>(
        hash: Pick<this, K>
    ): Pick<UnwrapComputedPropertySetters<this>, K>;
    setProperties<K extends keyof this>(
        // tslint:disable-next-line:unified-signatures
        hash: { [KK in K]: any }
    ): Pick<UnwrapComputedPropertySetters<this>, K>;
    /**
     * Convenience method to call `propertyWillChange` and `propertyDidChange` in
     * succession.
     */
    notifyPropertyChange(keyName: string): this;
    /**
     * Adds an observer on a property.
     */
    addObserver<Target>(
        key: keyof this,
        target: Target,
        method: ObserverMethod<Target, this>
    ): this;
    addObserver(key: keyof this, method: ObserverMethod<this, this>): this;
    /**
     * Remove an observer you have previously registered on this object. Pass
     * the same key, target, and method you passed to `addObserver()` and your
     * target will no longer receive notifications.
     */
    removeObserver<Target>(
        key: keyof this,
        target: Target,
        method: ObserverMethod<Target, this>
    ): this;
    removeObserver(key: keyof this, method: ObserverMethod<this, this>): this;
    /**
     * Retrieves the value of a property, or a default value in the case that the
     * property returns `undefined`.
     */
    getWithDefault<K extends keyof this>(
        key: K,
        defaultValue: UnwrapComputedPropertyGetter<this[K]>
    ): UnwrapComputedPropertyGetter<this[K]>;
    /**
     * Set the value of a property to the current value plus some amount.
     */
    incrementProperty(keyName: keyof this, increment?: number): number;
    /**
     * Set the value of a property to the current value minus some amount.
     */
    decrementProperty(keyName: keyof this, decrement?: number): number;
    /**
     * Set the value of a boolean property to the opposite of its
     * current value.
     */
    toggleProperty(keyName: keyof this): boolean;
    /**
     * Returns the cached value of a computed property, if it exists.
     * This allows you to inspect the value of a computed property
     * without accidentally invoking it if it is intended to be
     * generated lazily.
     */
    cacheFor<K extends keyof this>(
        key: K
    ): UnwrapComputedPropertyGetter<this[K]> | undefined;
}
declare const Observable: Mixin<Observable, CoreObject>;
export default Observable;

// Type definitions for @ember/object 3.0
// Project: https://emberjs.com/api/ember/3.4/modules/@ember%2Fobject
// Definitions by: Mike North <https://github.com/mike-north>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import CoreObject from '@ember/object/core';
import Observable from '@ember/object/observable';
import {
    ComputedPropertyCallback,
    UnwrapComputedPropertyGetter,
    UnwrapComputedPropertySetter,
    UnwrapComputedPropertyGetters,
    UnwrapComputedPropertySetters
} from '@ember/object/-private/types';
import ComputedProperty from '@ember/object/computed';

/**
 * `Ember.Object` is the main base class for all Ember objects. It is a subclass
 * of `Ember.CoreObject` with the `Ember.Observable` mixin applied. For details,
 * see the documentation for each of these.
 */
export default class EmberObject extends CoreObject.extend(Observable) {}

export const computed: {
    <T>(cb: ComputedPropertyCallback<T>): ComputedProperty<T>;
    <T>(k1: string, cb: ComputedPropertyCallback<T>): ComputedProperty<T>;
    <T>(
        k1: string,
        k2: string,
        cb: ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    <T>(
        k1: string,
        k2: string,
        k3: string,
        cb: ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    <T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        cb: ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    <T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        cb: ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    <T>(
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        k6: string,
        cb: ComputedPropertyCallback<T>
    ): ComputedProperty<T>;
    (
        k1: string,
        k2: string,
        k3: string,
        k4: string,
        k5: string,
        k6: string,
        k7: string,
        ...rest: any[]
    ): ComputedProperty<any>;

    /**
     * A computed property that returns true if the value of the dependent
     * property is null, an empty string, empty array, or empty function.
     */
    empty(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the value of the dependent
     * property is NOT null, an empty string, empty array, or empty function.
     */
    notEmpty(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the value of the dependent
     * property is null or undefined. This avoids errors from JSLint complaining
     * about use of ==, which can be technically confusing.
     */
    none(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that returns the inverse boolean value
     * of the original value for the dependent property.
     */
    not(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property that converts the provided dependent property
     * into a boolean value.
     */
    bool(dependentKey: string): ComputedProperty<boolean>;
    /**
     * A computed property which matches the original value for the
     * dependent property against a given RegExp, returning `true`
     * if the value matches the RegExp and `false` if it does not.
     */
    match(dependentKey: string, regexp: RegExp): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is equal to the given value.
     */
    equal(dependentKey: string, value: any): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is greater than the provided value.
     */
    gt(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is greater than or equal to the provided value.
     */
    gte(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is less than the provided value.
     */
    lt(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that returns true if the provided dependent property
     * is less than or equal to the provided value.
     */
    lte(dependentKey: string, value: number): ComputedProperty<boolean>;
    /**
     * A computed property that performs a logical `and` on the
     * original values for the provided dependent properties.
     */
    and(...dependentKeys: string[]): ComputedProperty<boolean>;
    /**
     * A computed property which performs a logical `or` on the
     * original values for the provided dependent properties.
     */
    or(...dependentKeys: string[]): ComputedProperty<boolean>;
    /**
     * Creates a new property that is an alias for another property
     * on an object. Calls to `get` or `set` this property behave as
     * though they were called on the original property.
     */
    alias(dependentKey: string): ComputedProperty<any>;
    /**
     * Where `computed.alias` aliases `get` and `set`, and allows for bidirectional
     * data flow, `computed.oneWay` only provides an aliased `get`. The `set` will
     * not mutate the upstream property, rather causes the current property to
     * become the value set. This causes the downstream property to permanently
     * diverge from the upstream property.
     */
    oneWay(dependentKey: string): ComputedProperty<any>;
    /**
     * This is a more semantically meaningful alias of `computed.oneWay`,
     * whose name is somewhat ambiguous as to which direction the data flows.
     */
    reads(dependentKey: string): ComputedProperty<any>;
    /**
     * Where `computed.oneWay` provides oneWay bindings, `computed.readOnly` provides
     * a readOnly one way binding. Very often when using `computed.oneWay` one does
     * not also want changes to propagate back up, as they will replace the value.
     */
    readOnly(dependentKey: string): ComputedProperty<any>;
    /**
     * Creates a new property that is an alias for another property
     * on an object. Calls to `get` or `set` this property behave as
     * though they were called on the original property, but also
     * print a deprecation warning.
     */
    deprecatingAlias(
        dependentKey: string,
        options: { id: string; until: string }
    ): ComputedProperty<any>;
    /**
     * @deprecated Missing deprecation options: https://emberjs.com/deprecations/v2.x/#toc_ember-debug-function-options
     */
    deprecatingAlias(
        dependentKey: string,
        options?: { id?: string; until?: string }
    ): ComputedProperty<any>;
    /**
     * A computed property that returns the sum of the values
     * in the dependent array.
     */
    sum(dependentKey: string): ComputedProperty<number>;
    /**
     * A computed property that calculates the maximum value in the
     * dependent array. This will return `-Infinity` when the dependent
     * array is empty.
     */
    max(dependentKey: string): ComputedProperty<number>;
    /**
     * A computed property that calculates the minimum value in the
     * dependent array. This will return `Infinity` when the dependent
     * array is empty.
     */
    min(dependentKey: string): ComputedProperty<number>;
    /**
     * Returns an array mapped via the callback
     */
    map<U>(
        dependentKey: string,
        callback: (value: any, index: number, array: any[]) => U
    ): ComputedProperty<U[]>;
    /**
     * Returns an array mapped to the specified key.
     */
    mapBy(dependentKey: string, propertyKey: string): ComputedProperty<any[]>;
    /**
     * Filters the array by the callback.
     */
    filter(
        dependentKey: string,
        callback: (value: any, index: number, array: any[]) => boolean
    ): ComputedProperty<any[]>;
    /**
     * Filters the array by the property and value
     */
    filterBy(
        dependentKey: string,
        propertyKey: string,
        value?: any
    ): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from one or more dependent arrays.
     */
    uniq(propertyKey: string): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from an array, with uniqueness determined by specific key.
     */
    uniqBy(dependentKey: string, propertyKey: string): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the unique
     * elements from one or more dependent arrays.
     */
    union(...propertyKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the elements
     * two or more dependent arrays have in common.
     */
    intersect(...propertyKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the
     * properties from the first dependent array that are not in the second
     * dependent array.
     */
    setDiff(
        setAProperty: string,
        setBProperty: string
    ): ComputedProperty<any[]>;
    /**
     * A computed property that returns the array of values
     * for the provided dependent properties.
     */
    collect(...dependentKeys: string[]): ComputedProperty<any[]>;
    /**
     * A computed property which returns a new array with all the
     * properties from the first dependent array sorted based on a property
     * or sort function.
     */
    sort(
        itemsKey: string,
        sortDefinition: string | ((itemA: any, itemB: any) => number)
    ): ComputedProperty<any[]>;
};
/**
 * Specify a method that observes property changes.
 */
export function observer<Fn extends (target: any, key: string) => void>(
    key1: string,
    func: Fn
): Fn;
export function observer<Fn extends (target: any, key: string) => void>(
    key1: string,
    key2: string,
    func: Fn
): Fn;
export function observer<Fn extends (target: any, key: string) => void>(
    key1: string,
    key2: string,
    key3: string,
    func: Fn
): Fn;
export function observer<Fn extends (target: any, key: string) => void>(
    key1: string,
    key2: string,
    key3: string,
    key4: string,
    func: Fn
): Fn;
export function observer<Fn extends (target: any, key: string) => void>(
    key1: string,
    key2: string,
    key3: string,
    key4: string,
    key5: string,
    func: Fn
): Fn;

/**
 * Makes a method available via an additional name.
 */
export function aliasMethod(methodName: string): ComputedProperty<any>;

/**
 * Gets the value of a property on an object. If the property is computed,
 * the function will be invoked. If the property is not defined but the
 * object implements the `unknownProperty` method then that will be invoked.
 */
export function get<T, K extends keyof T>(
    obj: T,
    key: K
): UnwrapComputedPropertyGetter<T[K]>;
/**
 * Retrieves the value of a property from an Object, or a default value in the
 * case that the property returns `undefined`.
 */
export function getWithDefault<T, K extends keyof T>(
    obj: T,
    key: K,
    defaultValue: UnwrapComputedPropertyGetter<T[K]>
): UnwrapComputedPropertyGetter<T[K]>;

/**
 * Sets the value of a property on an object, respecting computed properties
 * and notifying observers and other listeners of the change. If the
 * property is not defined but the object implements the `setUnknownProperty`
 * method then that will be invoked as well.
 */
export function set<T, K extends keyof T>(
    obj: T,
    key: K,
    value: UnwrapComputedPropertySetter<T[K]>
): UnwrapComputedPropertyGetter<T[K]>;
export function set<T, K extends keyof T>(obj: T, key: K, value: T[K]): T[K];

/**
 * To get multiple properties at once, call `Ember.getProperties`
 * with an object followed by a list of strings or an array:
 */
export function getProperties<T, K extends keyof T>(
    obj: T,
    list: K[]
): Pick<UnwrapComputedPropertyGetters<T>, K>; // for dynamic K
export function getProperties<T, K extends keyof T>(
    obj: T,
    ...list: K[]
): Pick<UnwrapComputedPropertyGetters<T>, K>;

/**
 * Set a list of properties on an object. These properties are set inside
 * a single `beginPropertyChanges` and `endPropertyChanges` batch, so
 * observers will be buffered.
 */
export function setProperties<T, K extends keyof T>(
    obj: T,
    hash: Pick<UnwrapComputedPropertySetters<T>, K>
): Pick<UnwrapComputedPropertyGetters<T>, K>;
// TODO: in TS2.9 - Pick<UnwrapComputedPropertySetters<T> | T, K>
export function setProperties<T, K extends keyof T>(
    obj: T,
    hash: Pick<T, K>
): Pick<T, K>;

/**
 * Error-tolerant form of `Ember.set`. Will not blow up if any part of the
 * chain is `undefined`, `null`, or destroyed.
 */
export function trySet(root: object, path: string, value: any): any;

/**
 * NOTE: This is a low-level method used by other parts of the API.
 * You almost never want to call this method directly. Instead you
 * should use mixin() to define new properties.
 */
export function defineProperty(
    obj: object,
    keyName: string,
    desc?: PropertyDescriptor | ComputedProperty<any>,
    data?: any,
    meta?: any
): void;

declare module '@ember/utils/-private/types' {
    interface TypeLookup {
        class: typeof EmberObject;
        instance: EmberObject;
    }
}

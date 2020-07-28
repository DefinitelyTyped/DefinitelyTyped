// Type definitions for non-npm package @ember/object 3.12
// Project: https://emberjs.com/api/ember/3.16/modules/@ember%2Fobject
// Definitions by: Mike North <https://github.com/mike-north>
//                 Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.7

import CoreObject from "@ember/object/core";
import Observable from "@ember/object/observable";
import {
    ComputedPropertyCallback,
    UnwrapComputedPropertyGetter,
    UnwrapComputedPropertySetter,
    UnwrapComputedPropertyGetters,
    UnwrapComputedPropertySetters,
    ExtractPropertyNamesOfType
} from "@ember/object/-private/types";
import ComputedProperty, * as ComputedNamespace from "@ember/object/computed";

/**
 * `Ember.Object` is the main base class for all Ember objects. It is a subclass
 * of `Ember.CoreObject` with the `Ember.Observable` mixin applied. For details,
 * see the documentation for each of these.
 */
export default class EmberObject extends CoreObject.extend(Observable) {}
declare function computed(...deps: string[]): MethodDecorator;
declare function computed<T>(
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    k2: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    k2: string,
    k3: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    k2: string,
    k3: string,
    k4: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    k2: string,
    k3: string,
    k4: string,
    k5: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed<T>(
    k1: string,
    k2: string,
    k3: string,
    k4: string,
    k5: string,
    k6: string,
    cb: ComputedPropertyCallback<T>
): ComputedProperty<T>;
declare function computed(
    k1: string,
    k2: string,
    k3: string,
    k4: string,
    k5: string,
    k6: string,
    k7: string,
    ...rest: any[]
): ComputedProperty<any>;

declare namespace computed {
    const empty: typeof ComputedNamespace.empty;
    const notEmpty: typeof ComputedNamespace.notEmpty;
    const none: typeof ComputedNamespace.none;
    const not: typeof ComputedNamespace.not;
    const bool: typeof ComputedNamespace.bool;
    const match: typeof ComputedNamespace.match;
    const equal: typeof ComputedNamespace.equal;
    const gt: typeof ComputedNamespace.gt;
    const gte: typeof ComputedNamespace.gte;
    const lt: typeof ComputedNamespace.lt;
    const lte: typeof ComputedNamespace.lte;
    const and: typeof ComputedNamespace.and;
    const or: typeof ComputedNamespace.or;
    const alias: typeof ComputedNamespace.alias;
    const oneWay: typeof ComputedNamespace.oneWay;
    const reads: typeof ComputedNamespace.reads;
    const readOnly: typeof ComputedNamespace.readOnly;
    const deprecatingAlias: typeof ComputedNamespace.deprecatingAlias;
    const sum: typeof ComputedNamespace.sum;
    const max: typeof ComputedNamespace.max;
    const min: typeof ComputedNamespace.min;
    const map: typeof ComputedNamespace.map;
    const mapBy: typeof ComputedNamespace.mapBy;
    const filter: typeof ComputedNamespace.filter;
    const filterBy: typeof ComputedNamespace.filterBy;
    const uniq: typeof ComputedNamespace.uniq;
    const uniqBy: typeof ComputedNamespace.uniqBy;
    const union: typeof ComputedNamespace.union;
    const intersect: typeof ComputedNamespace.intersect;
    const setDiff: typeof ComputedNamespace.setDiff;
    const collect: typeof ComputedNamespace.collect;
    const sort: typeof ComputedNamespace.sort;
}

export { computed };
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

export function notifyPropertyChange(obj: object, keyName: string): void;

export const action: MethodDecorator;

declare module "@ember/utils/-private/types" {
    interface TypeLookup {
        class: typeof EmberObject;
        instance: EmberObject;
    }
}

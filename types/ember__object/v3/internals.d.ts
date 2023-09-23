import { UnwrapComputedPropertyGetter } from "@ember/object/-private/types";

/**
 * Returns the cached value for a property, if one exists.
 * This can be useful for peeking at the value of a computed
 * property that is generated lazily, without accidentally causing
 * it to be created.
 */
export function cacheFor<T, K extends keyof T>(
    obj: T,
    key: K,
): UnwrapComputedPropertyGetter<T[K]> | undefined;
/**
 * Creates a shallow copy of the passed object. A deep copy of the object is
 * returned if the optional `deep` argument is `true`.
 *
 * @deprecated as of Ember 3.3, to be removed in Ember 4.0. See how to migrate
 * [here][deprecation].
 *
 * [deprecation]: https://emberjs.com/deprecations/v3.x#toc_ember-runtime-deprecate-copy-copyable
 */
export function copy<T>(obj: T, deep: true): T;
export function copy(obj: any, deep?: boolean): any;
/**
 * Returns a unique id for the object. If the object does not yet have a guid,
 * one will be assigned to it. You can call this on any object,
 * `Ember.Object`-based or not, but be aware that it will add a `_guid`
 * property.
 */
export function guidFor(obj: any): string;

import { computed } from "@ember/object";
import { ComputedPropertyMarker } from "./-private/types";

/**
 * A computed property transforms an objects function into a property.
 * By default the function backing the computed property will only be called once and the result
 * will be cached. You can specify various properties that your computed property is dependent on.
 * This will force the cached result to be recomputed if the dependencies are modified.
 */
export default class ComputedProperty<Get, Set = Get> {
    /**
     * Call on a computed property to set it into non-cached mode. When in this
     * mode the computed property will not automatically cache the return value.
     */
    volatile(): this;
    /**
     * Call on a computed property to set it into read-only mode. When in this
     * mode the computed property will throw an error when set.
     */
    readOnly(): this;
    /**
     * Sets the dependent keys on this computed property. Pass any number of
     * arguments containing key paths that this computed property depends on.
     */
    property(...path: string[]): this;
    /**
     * In some cases, you may want to annotate computed properties with additional
     * metadata about how they function or what values they operate on. For example,
     * computed property functions may close over variables that are then no longer
     * available for introspection.
     */
    meta(meta: {}): this;
    meta(): {};
}

// Computed property definitions also act as property decorators, including those
// returned from "macros" in third-party code. We additionally include a marker
// interface that we use in `UnwrapComputedProperty{G,S}etters`.
export default interface ComputedProperty<Get, Set = Get>
    extends PropertyDecorator, ComputedPropertyMarker<Get, Set> {}

/**
 * Creates a new property that is an alias for another property
 * on an object. Calls to `get` or `set` this property behave as
 * though they were called on the original property.
 */
export function alias(
    dependentKey: string
): ComputedProperty<unknown>;
/**
 * A computed property that performs a logical `and` on the
 * original values for the provided dependent properties.
 */
export function and(
    ...dependentKeys: string[]
): ComputedProperty<unknown>;
/**
 * A computed property that converts the provided dependent property
 * into a boolean value.
 */
export function bool(
    dependentKey: string
): ComputedProperty<boolean>;

/**
 * A computed property that returns the array of values
 * for the provided dependent properties.
 */
export function collect(
    ...dependentKeys: string[]
): ComputedProperty<unknown[]>;

/**
 * Creates a new property that is an alias for another property
 * on an object. Calls to `get` or `set` this property behave as
 * though they were called on the original property, but also
 * print a deprecation warning.
 */
export function deprecatingAlias(
    dependentKey: string,
    options: { id: string; until: string }
): ComputedProperty<unknown>;

/**
 * A computed property that returns true if the value of the dependent
 * property is null, an empty string, empty array, or empty function.
 */
export function empty(
    dependentKey: string
): ComputedProperty<boolean>;
/**
 * A computed property that returns true if the provided dependent property
 * is equal to the given value.
 */
export function equal(
    dependentKey: string,
    value: unknown
): ComputedProperty<boolean>;
/**
 * Expands `pattern`, invoking `callback` for each expansion.
 */
export function expandProperties(
    pattern: string,
    callback: (expanded: string) => void
): void;

/**
 * Filters the array by the callback.
 */
export function filter(
    dependentKey: string,
    callback: (value: unknown, index: number, array: unknown[]) => boolean
): ComputedProperty<unknown[]>;

/**
 * Filters the array by the callback and an array of additional dependent keys.
 */
export function filter(
    dependentKey: string,
    additionalDependentKeys: string[],
    callback: (value: unknown, index: number, array: unknown[]) => boolean
): ComputedProperty<unknown[]>;

/**
 * Filters the array by the property and value
 */
export function filterBy(
    dependentKey: string,
    propertyKey: string,
    value?: unknown
): ComputedProperty<unknown[]>;

/**
 * A computed property that returns true if the provided dependent property
 * is greater than the provided value.
 */
export function gt(
    dependentKey: string,
    value: number
): ComputedProperty<boolean>;
/**
 * A computed property that returns true if the provided dependent property
 * is greater than or equal to the provided value.
 */
export function gte(
    dependentKey: string,
    value: number
): ComputedProperty<boolean>;

/**
 * A computed property which returns a new array with all the elements
 * two or more dependent arrays have in common.
 */
export function intersect(
    ...propertyKeys: string[]
): ComputedProperty<unknown[]>;

/**
 * A computed property that returns true if the provided dependent property
 * is less than the provided value.
 */
export function lt(
    dependentKey: string,
    value: number
): ComputedProperty<boolean>;
/**
 * A computed property that returns true if the provided dependent property
 * is less than or equal to the provided value.
 */
export function lte(
    dependentKey: string,
    value: number
): ComputedProperty<boolean>;

/**
 * Returns an array mapped via the callback
 */
export function map<U>(
    dependentKey: string,
    callback: (value: unknown, index: number, array: unknown[]) => U
): ComputedProperty<U[]>;

/**
 * Returns an array mapped to the specified key.
 */
export function mapBy(
    dependentKey: string,
    propertyKey: string
): ComputedProperty<unknown[]>;

/**
 * A computed property which matches the original value for the
 * dependent property against a given RegExp, returning `true`
 * if the value matches the RegExp and `false` if it does not.
 */
export function match(
    dependentKey: string,
    regexp: RegExp
): ComputedProperty<boolean>;

/**
 * A computed property that calculates the maximum value in the
 * dependent array. This will return `-Infinity` when the dependent
 * array is empty.
 */
export function max(
    dependentKey: string
): ComputedProperty<number>;

/**
 * A computed property that calculates the minimum value in the
 * dependent array. This will return `Infinity` when the dependent
 * array is empty.
 */
export function min(
    dependentKey: string
): ComputedProperty<number>;

/**
 * A computed property that returns true if the value of the dependent
 * property is null or undefined. This avoids errors from JSLint complaining
 * about use of ==, which can be technically confusing.
 */
export function none(
    dependentKey: string
): ComputedProperty<boolean>;
/**
 * A computed property that returns the inverse boolean value
 * of the original value for the dependent property.
 */
export function not(
    dependentKey: string
): ComputedProperty<boolean>;
/**
 * A computed property that returns true if the value of the dependent
 * property is NOT null, an empty string, empty array, or empty function.
 */
export function notEmpty(
    dependentKey: string
): ComputedProperty<boolean>;
/**
 * Where `computed.alias` aliases `get` and `set`, and allows for bidirectional
 * data flow, `computed.oneWay` only provides an aliased `get`. The `set` will
 * not mutate the upstream property, rather causes the current property to
 * become the value set. This causes the downstream property to permanently
 * diverge from the upstream property.
 */
export function oneWay(
    dependentKey: string
): ComputedProperty<unknown>;
/**
 * A computed property which performs a logical `or` on the
 * original values for the provided dependent properties.
 */
export function or(
    ...dependentKeys: string[]
): ComputedProperty<unknown>;
/**
 * Where `computed.oneWay` provides oneWay bindings, `computed.readOnly` provides
 * a readOnly one way binding. Very often when using `computed.oneWay` one does
 * not also want changes to propagate back up, as they will replace the value.
 */
export function readOnly(
    dependentKey: string
): ComputedProperty<unknown>;
/**
 * This is a more semantically meaningful alias of `computed.oneWay`,
 * whose name is somewhat ambiguous as to which direction the data flows.
 */
export function reads(
    dependentKey: string
): ComputedProperty<unknown>;

/**
 * A computed property which returns a new array with all the
 * properties from the first dependent array that are not in the second
 * dependent array.
 */
export function setDiff(
    setAProperty: string,
    setBProperty: string
): ComputedProperty<unknown[]>;

/**
 * A computed property which returns a new array with all the properties from
 * the first dependent array sorted based on a property or sort function.
 *
 * If used with an array of sort properties, it must receive exactly two
 * arguments: the key of the array to sort, and the key of the array of sort
 * properties. Alternatively the key of the array to sort, and a the sort
 * function may be used.
 */
export function sort<T>(
    itemsKey: string,
    sortDefinition: string | ((itemA: T, itemB: T) => number)
): ComputedProperty<T[]>;

/**
 * A computed property which returns a new array with all the properties from
 * the first dependent array sorted based on a property or sort function.
 *
 * It may receive three arguments: the key of the array to sort, an array of
 * dependent keys for the computed property, and the sort function.
 */
export function sort<T>(
    itemsKey: string,
    dependentKeys: string[],
    sortDefinition: string | ((itemA: T, itemB: T) => number)
): ComputedProperty<T[]>;

/**
 * A computed property that returns the sum of the values
 * in the dependent array.
 */
export function sum(
    dependentKey: string
): ComputedProperty<number>;

/**
 * A computed property which returns a new array with all the unique
 * elements from one or more dependent arrays.
 */
export function uniq(
    propertyKey: string
): ComputedProperty<unknown[]>;

/**
 * A computed property which returns a new array with all the unique
 * elements from one or more dependent arrays.
 */
export function union(
    ...propertyKeys: string[]
): ComputedProperty<unknown[]>;

/**
 * A computed property which returns a new array with all the unique
 * elements from an array, with uniqueness determined by specific key.
 */
export function uniqBy(
    dependentKey: string,
    propertyKey: string
): ComputedProperty<any[]>;

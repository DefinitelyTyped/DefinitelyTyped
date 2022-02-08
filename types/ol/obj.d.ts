/**
 * Polyfill for Object.assign().  Assigns enumerable and own properties from
 * one or more source objects to a target object.
 * See https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign.
 */
export const assign: (target: any, ...var_sources: any[]) => any;
/**
 * Removes all properties from an object.
 */
export function clear(object: any): void;
/**
 * Polyfill for Object.values().  Get an array of property values from an object.
 * See https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/values
 */
export function getValues<V>(object: { [key in string | number]: V }): V[];
/**
 * Determine if an object has any properties.
 */
export function isEmpty(object: any): boolean;

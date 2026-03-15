/**
 * Utils for working with JavaScript classes and prototype methods.
 */

/** Returns true if the value is an object or function */
export function isObject(val: unknown): boolean;

/** Returns true if the value has a constructor property */
export function hasConstructor(val: unknown): boolean;

/** Returns a no-op function */
export function noop(): void;

/** Returns the given value unchanged */
export function identity<T>(val: T): T;

/** Converts a value to an array */
export function arrayify<T>(val: T | T[]): T[];

/** Check if an array or object contains given value(s) */
export function has(obj: object | any[], val: string | string[]): boolean;

/** Check if an array or object has all given values */
export function hasAll(val: object | any[], values: string[]): boolean;

/** Get own property names from an object's constructor */
export function nativeKeys(val: object): string[];

/** Get a property descriptor */
export function getDescriptor(obj: object, key: string): PropertyDescriptor | undefined;

/** Copy a property descriptor from one object to another */
export function copyDescriptor(receiver: object, provider: object, name: string): void;

/** Copy static properties and descriptors between objects */
export function copy(receiver: object, provider: object, omit?: string | string[]): object;

/** Inherit static properties, prototype properties, and descriptors */
export function inherit(receiver: object, provider: object, omit?: string | string[]): object;

/** Returns a function for extending constructors */
export function extend(Parent: (...args: any[]) => any): (...args: any[]) => void;

/** Set up event bubbling from parent to child constructors */
export function bubble(Parent: (...args: any[]) => any, events?: string[]): void;

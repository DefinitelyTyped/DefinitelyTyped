import { FunctionArgs, TypeLookup, TypeOf } from "./-private/types";

/**
 * Compares two javascript values and returns:
 */
export function compare(v: any, w: any): number;

/**
 * A value is blank if it is empty or a whitespace string.
 */
export function isBlank(obj?: any): boolean;

/**
 * Verifies that a value is `null` or an empty string, empty array,
 * or empty function.
 */
export function isEmpty(obj?: any): boolean;

/**
 * Compares two objects, returning true if they are equal.
 */
export function isEqual(a: any, b: any): boolean;

/**
 * Returns true if the passed value is null or undefined. This avoids errors
 * from JSLint complaining about use of ==, which can be technically
 * confusing.
 */
export function isNone(obj?: any): obj is null | undefined;

/**
 * A value is present if it not `isBlank`.
 */
export function isPresent(obj?: any): boolean;

/**
 * Checks to see if the `methodName` exists on the `obj`,
 * and if it does, invokes it with the arguments passed.
 */
export function tryInvoke<FNAME extends keyof T, T extends object>(
    obj: T,
    methodName: FNAME,
    args: FunctionArgs<T[FNAME]>,
): T[FNAME] extends (...args: any[]) => any ? ReturnType<T[FNAME]> : undefined;
export function tryInvoke<FNAME extends keyof T, T extends object>(
    obj: T,
    methodName: FNAME,
): T[FNAME] extends () => any ? ReturnType<T[FNAME]> : undefined;
export function tryInvoke(obj: object, methodName: string, args?: any[]): undefined;

/**
 * Returns a consistent type for the passed object.
 */
export function typeOf<T>(value: T): TypeOf<TypeLookup, T>;
export function typeOf(): "undefined";
export function typeOf(item: any): string;

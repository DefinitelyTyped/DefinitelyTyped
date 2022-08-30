// Type definitions for non-npm package @ember/utils 4.0
// Project: https://api.emberjs.com/ember/3.16/modules/@ember%2Futils
// Definitions by: Chris Krycho <https://github.com/chriskrycho>
//                 Dan Freeman <https://github.com/dfreeman>
//                 James C. Davis <https://github.com/jamescdavis>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.4

import { TypeOf } from './-private/types';

/**
 * Compares two javascript values and returns:
 */
export function compare(v: unknown, w: unknown): number;

/**
 * A value is blank if it is empty or a whitespace string.
 */
export function isBlank(obj?: unknown): boolean;

/**
 * Verifies that a value is `null` or an empty string, empty array,
 * or empty function.
 */
export function isEmpty(obj?: unknown): boolean;

/**
 * Compares two objects, returning true if they are equal.
 */
export function isEqual(a: unknown, b: unknown): boolean;

/**
 * Returns true if the passed value is null or undefined. This avoids errors
 * from JSLint complaining about use of ==, which can be technically
 * confusing.
 */
export function isNone(obj?: unknown): obj is null | undefined;

/**
 * A value is present if it not `isBlank`.
 */
export function isPresent(obj?: unknown): boolean;

/**
 * Returns a consistent type for the passed object.
 */
export function typeOf<T>(value: T): TypeOf<T>;
export function typeOf(): 'undefined';

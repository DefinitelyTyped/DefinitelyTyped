// Type definitions for hoek 4.1
// Project: https://github.com/hapijs/hoek
// Definitions by: Prashant Tiwari <https://github.com/prashaantt>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ContainOptions {
    /** Perform a deep comparison of the values? */
    deep?: boolean;
    /** Allow only one occurrence of each value? */
    once?: boolean;
    /** Don't allow values not explicitly listed? */
    only?: boolean;
    /** Allow partial match of the values? */
    part?: boolean;
}

export interface ReachOptions {
    /** String to split chain path on. Defaults to ".". */
    separator?: string;
    /** Value to return if the path or value is not present. Default is undefined. */
    default?: any;
    /** Throw an error on missing member? Default is false. */
    strict?: boolean;
    /** Allow traversing functions for properties? */
    functions?: boolean;
}

// Object

/**
 * Clone an object or an array.
 */
export function clone<T>(obj: T): T;

/**
 * Clone an object or array.
 */
export function cloneWithShallow(obj: any, keys: string[]): any;

/**
 * Merge all the properties of source into target.
 */
export function merge<T1, T2>(target: T1, source: T2, isNullOverride?: boolean, isMergeArrays?: boolean): T1 & T2;

/**
 * Apply options to a copy of the defaults.
 */
export function applyToDefaults<T1, T2>(defaults: T1, options: T2, isNullOverride?: boolean): T1 & T2;

/**
 * Apply options to a copy of the defaults.
 */
export function applyToDefaultsWithShallow<T1, T2>(defaults: T1, options: T2, keys?: string[]): T1 & T2;

/**
 * Perform a deep comparison of the two values.
 */
export function deepEqual<T>(b: T, a: T, options?: any): T;

/**
 * Remove duplicate items from Array.
 */
export function unique<T>(array: T[], key?: string): T[];

/**
 * Convert an Array into an Object.
 */
export function mapToObject(array: any[], key?: string): any;

/**
 * Find the common unique items in two arrays.
 */
export function intersect(array1: any[], array2: any[]): any;

/**
 * Test if the reference value contains the provided values.
 */
export function contain(ref: any, values: any, options?: ContainOptions): boolean;

/**
 * Flatten an array.
 */
export function flatten(array: any[], target?: any[]): any[];

/**
 * Convert an object key chain string to reference.
 */
export function reach(obj: any, chain: any, options?: ReachOptions): any;

/**
 * Replace string parameters ({name}) with their corresponding object key values.
 */
export function reachTemplate(obj: any, template: string, options?: ReachOptions): any;

/**
 * Transform an existing object into a new one based on the supplied obj and transform map.
 */
export function transform(obj: any, transform: any, options?: ReachOptions): any;

/**
 * Perform a shallow copy by copying the references of all the top level children.
 */
export function shallow(obj: any): any;

/**
 * Convert an object to string. Any errors are caught and reported back in the form of the returned string.
 */
export function stringify(obj: any): string;

// Timer

/**
 * A Timer object.
 */
export class Timer {
    /** The number of milliseconds elapsed since the epoch. */
    ts: number;
    /** The time (ms) elapsed since the timer was created. */
    elapsed(): number;
}

// Bench

/**
 * Same as Timer, except ts stores the internal node clock.
 */
export class Bench {
    /** The number of milliseconds on the node clock elapsed since the epoch. */
    ts: number;
    /** The time (ms) elapsed since the timer was created. */
    elapsed(): number;
}

// Binary Encoding/Decoding

/**
 * Encode value of string or buffer type in Base64 or URL encoding.
 */
export function base64urlEncode(value: string): string;

/**
 * Decode string into Base64 or URL encoding.
 */
export function base64urlDecode(value: string): string;

// Escaping Characters

/**
 * Escape html characters.
 */
export function escapeHtml(htmlString: string): string;

/**
 * Escape attribute value for use in HTTP header.
 */
export function escapeHeaderAttribute(attribute: string): string;

/**
 * Escape string for Regex construction.
 */
export function escapeRegex(regexString: string): string;

// Errors

/**
 * Print message or throw error if condition fails.
 */
export function assert(condition: boolean, message: string | Error): void | Error;

/**
 * Throw if process.env.NODE_ENV === 'test'. Else display most recent stack and exit process.
 */
export function abort(message: string | Error): void;

/**
 * Display the trace stack.
 */
export function displayStack(slice?: any): string[];

/**
 * Return a trace stack array.
 */
export function callStack(slice?: any): any[];

// Function

/**
 * Wrap fn in process.nextTick.
 */
export function nextTick(fn: () => void): () => void;

/**
 * Make sure fn is only run once.
 */
export function once(fn: () => void): () => void;

/**
 * A simple no-op function.
 */
export function ignore(): void;

// Miscellaneous

/**
 * path to prepend to a randomly generated file name.
 */
export function uniqueFilename(path: string, extension?: string): string;

/**
 * Check value to see if it is an integer.
 */
export function isInteger(value: any): boolean;

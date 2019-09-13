// Type definitions for @hapi/hoek 8.2
// Project: https://github.com/hapijs/hoek
// Definitions by: Prashant Tiwari <https://github.com/prashaantt>
//                 Silas Rech <https://github.com/lenovouser>
//                 Simon Schick <https://github.com/SimonSchick>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.1

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
    default?: unknown;
    /** Throw an error on missing member? Default is false. */
    strict?: boolean;
    /** Allow traversing functions for properties? */
    functions?: boolean;
}

export interface DeepEqualOptions {
    /**
     * When true, function values are deep compared using their source code and object properties.
     * @default false
     */
    deepFunction?: boolean;
    /**
     * When true, allows a partial match where some of b is present in a. Defaults to false.
     * prototype - when false, prototype comparisons are skipped.
     * @default true
     */
    part?: boolean;

    /**
     * When false, prototype comparisons are skipped.
     * @default true
     */
    prototype?: boolean;

    /**
     * An array of key name strings to skip comparing.
     * The keys can be found in any level of the object.
     * Note that both values must contain the key - only the value comparison is skipped.
     * Only applies to plain objects and deep functions (not to map, sets, etc.).
     */
    skip?: string[];
    /**
     * When false, symbol properties are ignored.
     * @default true
     */
    symbols?: boolean;
}

// Object

/**
 * Clone an object or an array.
 */
export function clone<T>(obj: T): T;

/**
 * Merge all the properties of source into target.
 */
export function merge<T1, T2>(target: T1, source: T2, isNullOverride?: boolean, isMergeArrays?: boolean): T1 & T2;

/**
 * Apply options to a copy of the defaults.
 */
export function applyToDefaults<T1, T2>(defaults: T1, options: T2, isNullOverride?: boolean): T1 & T2;

/**
 * Perform a deep comparison of the two values.
 */
export function deepEqual<T>(b: T, a: T, options?: DeepEqualOptions): T;

/**
 * Remove duplicate items from Array.
 */
export function unique<T>(array: T[], key?: string): T[];

/**
 * Find the common unique items in two arrays.
 */
export function intersect<T>(array1: T[], array2: T[]): T[];
export function intersect<T>(array1: T[], array2: T[], options: { first: true }): T;
export function intersect<T>(array1: T[], array2: T[], options: { first: boolean }): T | T[];

/**
 * Test if the reference value contains the provided values.
 */
export function contain(ref: unknown[] | object, values: unknown | unknown[], options?: ContainOptions): boolean;
export function contain(ref: string, values: string | string[], options?: ContainOptions): boolean;

/**
 * Flatten an array.
 */
export function flatten(array: unknown[], target?: unknown[]): unknown[];

/**
 * Convert an object key chain string to reference.
 */
export function reach(obj: unknown, chain: string | Array<string | number>, options?: ReachOptions): unknown;

/**
 * Replace string parameters ({name}) with their corresponding object key values.
 */
export function reachTemplate(obj: unknown, template: string, options?: ReachOptions): unknown;

/**
 * Convert an object to string. Any errors are caught and reported back in the form of the returned string.
 */
export function stringify(obj: unknown): string;

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

// Function

/**
 * Make sure fn is only run once.
 */
export function once<TArgs extends unknown[]>(fn: (...args: TArgs) => unknown): (...args: TArgs) => void;

/**
 * A simple no-op function.
 */
export function ignore(): void;

/**
 * Resolve the promise after timeout.
 * @param timeout In milliseconds
 */
export function wait(timeout: number): Promise<void>;

/**
 * A no-op Promise.
 * Never resolves.
 */
export function block(): Promise<never>;

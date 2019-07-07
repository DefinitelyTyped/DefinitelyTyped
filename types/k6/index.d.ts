// Type definitions for k6 0.24
// Project: https://docs.k6.io/docs
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
//                 Book Moons <https://github.com/bookmoons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/*
 * Uses a branding pattern throughout to reflect the custom classes exposed by
 * the k6 runtime. These classes have internal state not visible in JavaScript.
 * The object passed back to k6 must be an actual instance created on the
 * golang side. Duck typed objects are not safe.
 *
 * Each class includes a protected property __brand: never. The brand breaks
 * duck typing for noninstances with an identical public shape.
 *
 * This follows the pattern used in the TypeScript compiler:
 * https://github.com/Microsoft/TypeScript/blob/7b48a182c05ea4dea81bab73ecbbe9e013a79e99/src/compiler/types.ts#L693-L698
 */

import './global'; // Type global environment

// Expose everything to autoimport
import './crypto';
import './encoding';
import './html';
import './http';
import './metrics';
import './options';
import './ws';

export function check<T>(val: T, sets: Checkers<T>, tags?: object): boolean;
/**
 * Immediately throw an error, aborting the current script iteration.
 *
 * @param err - Error message that gets printed to stderr.
 *
 * @remarks
 * fail() is a simple convenience wrapper on top of JavaScript's `throw()`
 * (because the latter cannot be used as `[expr] || throw`, which is a
 * convenient way to write k6 test code).
 */
export function fail(err?: string): never;
/**
 * Run code inside a group.
 *
 * @param name - Name of the group.
 * @param fn - Group body. Code to be executed in the group context.
 * @returns The return value of `fn`.
 *
 * @remarks
 * Groups are used to organize results in a test.
 */
export function group<T>(name: string, fn: () => T): T;
/**
 * Suspend VU execution for the specified duration.
 *
 * @param t - Duration, in seconds.
 */
export function sleep(t: number): void;

export interface Checker<T> {
    (val: T): boolean;
}
export interface Checkers<T> {
    [description: string]: Checker<T>;
}

// Common types
export type byte = number; // [0,256)
export type bytes = byte[];

// JavaScript value representable with JSON
export type JSONValue = null | boolean | number | string | JSONArray | JSONObject;
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
    [key: string]: JSONValue;
}

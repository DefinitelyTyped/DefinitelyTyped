// Type definitions for k6 0.24
// Project: https://docs.k6.io/docs
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
//                 Book Moons <https://github.com/bookmoons>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/**
 * k6 JavaScript API.
 * https://docs.k6.io/docs
 *
 * @privateRemarks
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
 *
 * @packageDocumentation
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

// === Main

/**
 * Run checks on a value.
 * https://docs.k6.io/docs/check-val-sets-tags
 * @param val - Value to test.
 * @param sets - Tests (checks) to run on the value.
 * @param tags - Extra tags to attach to metrics emitted.
 * @returns `true` if all checks have succeeded, otherwise `false`.
 * @public
 */
export function check<T>(val: T, sets: Checkers<T>, tags?: object): boolean;

/**
 * Immediately throw an error, aborting the current script iteration.
 * https://docs.k6.io/docs/fail-err
 * @param err - Error message that gets printed to stderr.
 * @public
 */
export function fail(err?: string): never;

/**
 * Run code inside a group.
 * https://docs.k6.io/docs/group-name-fn-cond
 * @param name - Name of the group.
 * @param fn - Group body. Code to be executed in the group context.
 * @returns The return value of `fn`.
 * @public
 */
export function group<T>(name: string, fn: () => T): T;

/**
 * Suspend VU execution for the specified duration.
 * @param t - Duration, in seconds.
 * @public
 */
export function sleep(t: number): void;

/**
 * Check procedure.
 * @typeParam VT - Value type.
 * @public
 */
export interface Checker<VT> {
    /**
     * Check procedure.
     * @param val - Value to check.
     * @return Whether check passed.
     */
    (val: VT): boolean;
}

/**
 * Named check procedures.
 * @typeParam VT - Value type.
 * @public
 */
export interface Checkers<VT> {
    [description: string]: Checker<VT>;
}

// === Common types

export type byte = number; // [0,256)
export type bytes = byte[];

// === JavaScript value representable with JSON

export type JSONValue = null | boolean | number | string | JSONArray | JSONObject;
export interface JSONArray extends Array<JSONValue> {}
export interface JSONObject {
    [key: string]: JSONValue;
}

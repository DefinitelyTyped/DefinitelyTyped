// Type definitions for k6 0.28
// Project: https://k6.io/docs
// Definitions by: MajorBreakfast <https://github.com/MajorBreakfast>
//                 Book Moons <https://github.com/bookmoons>
//                 na-- <https://github.com/na-->
//                 Pepe Cano <https://github.com/ppcano>
//                 Simon Aronsson <https://github.com/simskij>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

/**
 * k6 JavaScript API.
 * https://k6.io/docs
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

// === Main ===
// ------------

/**
 * Run checks on a value.
 * https://k6.io/docs/javascript-api/k6/check-val-sets-tags
 * @typeParam VT - Value type.
 * @param val - Value to test.
 * @param sets - Tests (checks) to run on the value.
 * @param tags - Extra tags to attach to metrics emitted.
 * @returns `true` if all checks have succeeded, otherwise `false`.
 * @example
 * check(res, {
 *  "response code was 200": (res) => res.status == 200,
 *  "body size was 1234 bytes": (res) => res.body.length == 1234,
 * });
 */
export function check<VT>(val: VT, sets: Checkers<VT>, tags?: object): boolean;

/**
 * Immediately throw an error, aborting the current script iteration.
 * https://k6.io/docs/javascript-api/k6/fail-err
 * @param err - Error message that gets printed to stderr.
 * @example
 * fail("abort current iteration");
 */
export function fail(err?: string): never;

/**
 * Run code inside a group.
 * https://k6.io/docs/javascript-api/k6/group-name-fn
 * @typeParam RT - Return type.
 * @param name - Name of the group.
 * @param fn - Group body. Code to be executed in the group context.
 * @returns The return value of `fn`.
 * @example
 * group("group name", function() {
 *  ..
 * });
 */
export function group<RT>(name: string, fn: () => RT): RT;

/**
 * Suspend VU execution for the specified duration.
 * https://k6.io/docs/javascript-api/k6/sleep-t
 * @param t - Duration, in seconds.
 * @example
 * sleep(3);
 */
export function sleep(t: number): void;

/**
 * Check procedure.
 * @typeParam VT - Value type.
 */
export interface Checker<VT> {
    /**
     * Check procedure.
     * @param val - Value to check.
     * @returns Whether check passed.
     */
    (val: VT): boolean;
}

/**
 * Named check procedures.
 * @typeParam VT - Value type.
 */
export interface Checkers<VT> {
    [description: string]: Checker<VT>;
}

// === Common types ===
// --------------------

/**
 * Byte represented as number. Value range [0,256)
 */
export type byte = number;

/**
 * Byte array.
 */
export type bytes = byte[];

// === JSON ===
// ------------

/**
 * JavaScript value representable with JSON.
 */
export type JSONValue = null | boolean | number | string | JSONArray | JSONObject;

/**
 * Array representable with JSON.
 */
export interface JSONArray extends Array<JSONValue> {}

/**
 * Object representable with JSON.
 */
export interface JSONObject {
    [key: string]: JSONValue;
}

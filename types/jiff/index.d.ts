// Type definitions for jiff 0.7
// Project: https://github.com/cujojs/jiff#readme
// Definitions by: Daniel Kneip <https://github.com/daedal-knickerbockers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace jiff {
    export type JSONArray = JSONValue[];
    export interface JSONObject {
        [key: string]: JSONValue;
    }
    export type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

    export type JSONPatch = Array<{
        op: 'add' | 'remove' | 'replace' | 'move' | 'copy' | 'test';
        path: string;
        value?: any;
        from?: string;
    }>;

    export type InvalidPatchOpertaionError = Error & { name: 'InvalidPatchOpertaionError' };
    export type TestFailedError = Error & { name: 'TestFailedError' };
    export type PatchNotInvertibleError = Error & { name: 'PatchNotInvertibleError' };

    export type HashFunction = (value: any) => string | number;

    export interface DiffOptions {
        /** used to hash array items in order to recognize identical objects, defaults to JSON.stringify */
        hash?: HashFunction;
        /** used to generate patch context. If not provided, context will not be generated */
        makeContext?: (index: number, array: any[]) => any;
        invertible?: boolean;
    }

    export interface PatchOptions {
        /** function used adjust array indexes for smarty/fuzzy patching, for patches containing context */
        findContext?: (index: number, array: any[]) => any;
    }
    /**
     * Create a deep copy of x which must be a legal JSON object/array/value
     * @param x object/array/value to clone
     * @returns clone of x
     */
    export function clone<T extends JSONValue>(x: T): T;
    /**
     * Compute a JSON Patch representing the differences between a and b.
     * @param a
     * @param b
     * @param options if a function, see options.hash
     * @returns JSON Patch such that patch(diff(a, b), a) ~ b
     */
    export function diff(a: JSONValue, b: JSONValue, options?: HashFunction | DiffOptions): JSONPatch;
    export function inverse(patch: JSONPatch): JSONPatch;
    /**
     * Apply the supplied JSON Patch to x
     * @param changes JSON Patch
     * @param x object/array/value to patch
     * @param options
     *
     * @returns patched version of x. If x is
     *  an array or object, it will be mutated and returned. Otherwise, if
     *  x is a value, the new value will be returned.
     */
    export function patch(changes: JSONPatch, x: JSONValue, options?: PatchOptions): JSONValue;
    export function patchInPlace(patch: JSONPatch, a: JSONValue): void;
}

export = jiff;

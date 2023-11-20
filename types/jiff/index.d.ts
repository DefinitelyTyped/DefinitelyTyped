declare namespace jiff {
    type JSONArray = JSONValue[];
    type JSONObject = object;
    type JSONValue = string | number | boolean | null | JSONObject | JSONArray;

    type JSONPatch = Array<{
        op: "add" | "remove" | "replace" | "move" | "copy" | "test";
        path: string;
        value?: any;
        from?: string;
        context?: any;
    }>;

    type HashFunction = (value: any) => string | number;

    interface DiffOptions {
        /** used to hash array items in order to recognize identical objects, defaults to JSON.stringify */
        hash?: HashFunction;
        /** used to generate patch context. If not provided, context will not be generated */
        makeContext?: (index: number, array: any[]) => any;
        invertible?: boolean;
    }

    interface PatchOptions {
        /** function used adjust array indexes for smarty/fuzzy patching, for patches containing context */
        findContext?: (index: number, array: any[], context: any) => any;
    }
}

declare var jiff: {
    InvalidPatchOperationError: new(message: string) => Error & { name: "InvalidPatchOperationError" };
    TestFailedError: new(message: string) => Error & { name: "TestFailedError" };
    PatchNotInvertibleError: new(message: string) => Error & { name: "PatchNotInvertibleError" };
    /**
     * Create a deep copy of x which must be a legal JSON object/array/value
     * @param x object/array/value to clone
     * @returns clone of x
     */
    clone<T extends jiff.JSONValue>(x: T): T;
    /**
     * Compute a JSON Patch representing the differences between a and b.
     * @param a
     * @param b
     * @param options if a function, see options.hash
     * @returns JSON Patch such that patch(diff(a, b), a) ~ b
     */
    diff(a: jiff.JSONValue, b: jiff.JSONValue, options?: jiff.HashFunction | jiff.DiffOptions): jiff.JSONPatch;
    inverse(patch: jiff.JSONPatch): jiff.JSONPatch;
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
    patch(changes: jiff.JSONPatch, x: jiff.JSONValue, options?: jiff.PatchOptions): jiff.JSONValue;
    patchInPlace(patch: jiff.JSONPatch, a: jiff.JSONValue): void;
};

export = jiff;

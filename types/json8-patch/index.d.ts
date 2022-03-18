// Type definitions for json8-patch 1.0
// Project: https://github.com/sonnyp/JSON8/tree/master/packages/patch
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans>
//                 Paweł Uchida-Psztyć <https://github.com/jarrodek>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Typescript Version: 2.9

export interface BaseOperation {
    path: string;
}

export interface AddOperation extends BaseOperation {
    op: "add";
    value: any;
}

export interface RemoveOperation extends BaseOperation {
    op: "remove";
}

/**
 * The JSON patch replace operation
 */
export interface ReplaceOperation extends BaseOperation {
    op: "replace";
    value: any;
}

/**
 * The JSON patch move operation
 */
export interface MoveOperation extends BaseOperation {
    op: "move";
    from: any;
}

/**
 * The JSON patch copy operation.
 */
export interface CopyOperation extends BaseOperation {
    op: "copy";
    from: any;
}

/**
 * The JSON patch test operation
 */
export interface TestOperation extends BaseOperation {
    op: "test";
    value: any;
}

/**
 * All possible JSON patch operations
 */
export type JsonPatchOperation = AddOperation | RemoveOperation | ReplaceOperation | MoveOperation | CopyOperation | TestOperation;

/**
 * A JSON patch as specified in RFC 6902
 */
export type JsonPatch = JsonPatchOperation[];

export interface ApplyResult {
    doc: unknown;
}

export interface ApplyResultWithRevert extends ApplyResult {
    revert: JsonPatch;
}

export type PatchResult = ApplyResult;
export type PatchResultWithRevert = ApplyResultWithRevert;

/**
 * The operation is atomic, if any of the patch operation fails, the document will be restored to its original state and an error will be thrown.
 * @param doc The document to apply the patch operation to
 * @param patch The patch operations
 * @param options With `{reversible: false}` it will not return an additional value in the form of a `revert` property.
 * @returns An object with a doc property because per specification a patch can replace the original root document.
 */
export function apply(doc: any, patch: JsonPatch, options?: { reversible: false }): ApplyResult;
/**
 * The operation is atomic, if any of the patch operation fails, the document will be restored to its original state and an error will be thrown.
 * @param doc The document to apply the patch operation to
 * @param patch The patch operations
 * @param options With `{reversible: true}` it will return an additional value in the form of a `revert` property.
 * @returns An object with a doc property because per specification a patch can replace the original root document.
 */
export function apply(doc: any, patch: JsonPatch, options?: { reversible: true }): ApplyResultWithRevert;
/**
 * Alias for the `apply()` method.
 */
export function patch(doc: any, patch: JsonPatch, options?: { reversible: false }): PatchResult;
/**
 * Alias for the `apply()` method.
 */
export function patch(doc: any, patch: JsonPatch, options?: { reversible: true }): PatchResultWithRevert;
/**
 * ```javascript
 * ooPatch.diff(true, false);
 * // [{"op": "replace", "path": "", "value": "false"}]
 *
 * ooPatch.diff([], []);
 * // []
 *
 * ooPatch.diff({}, { foo: "bar" });
 * // [{"op": "add", "path": "/foo", "value": "bar"}]
 * ```
 *
 * @returns A diff in the form of a JSON Patch for 2 JSON values.
 */
export function diff(doc1: unknown, doc2: unknown): JsonPatch;
/**
 * If the patch or apply method is called with a third argument `{reversible: true}` it will return an additional value in the form of a revert property.
 *
 * The revert object can be used to revert a patch on a document.
 *
 * ```javascript
 * // apply the patch with the reversible option
 * var applyResult = ooPatch.apply(doc, patch, { reversible: true });
 * doc = applyResult.doc;
 *
 * // revert the patch
 * doc = ooPatch.revert(doc, applyResult.revert).doc;
 * // doc is strictly identical to the original
 * ```
 *
 * See also the `buildRevertPatch()` function which offers more flexibility.
 */
export function revert(doc: any, revertPatch: JsonPatch): ApplyResult;
/**
 * This method only check for JSON Patch semantic.
 *
 * ```javascript
 * ooPatch.valid({})  // false
 * ooPatch.valid([{}] // false
 * ooPatch.valid([{op: "foo", path: null, value: undefined}]) // false
 * ooPatch.valid([{op: "add", path: "/foo"}]) // false
 *
 * ooPatch.valid([]) // true
 * ooPatch.valid([{op: "add", path: "/foo", value: "bar"}]) // true
 * ```
 *
 * @returns `true` if the patch is valid, `false` otherwise.
 */
export function valid(patch: JsonPatch): boolean;
/**
 * Builds a valid JSON Patch from the result of a reversible `apply` operation.
 * You can then use this patch with `apply()` method to revert a previously applied patch.
 *
 * Because `buildRevertPatch` + `apply` offers more flexibility over `revert` it is preferred.
 *
 * - use pack/unpack with the result of `buildRevertPatch` making it ideal for storage or transport
 * - reverse a revert (and so on...) with `{reversible: true}`
 * - `diff` between reverts
 * - merge multiple reverts into one
 * - rebase reverts
 *
 * @param revert The revert value from the `apply()` or `patch()` method with `{reversible: true}`
 * @returns JSON Patch
 */
export function buildRevertPatch(revert: JsonPatch): JsonPatch;

export interface OperationResult {
    /**
     * The patched document
     */
    doc: unknown;
    /**
     * The previous/replaced value if any
     */
    previous?: any;
    idx?: number;
}

/**
 * Add the value to the specified JSON Pointer location.
 * @param doc JSON document to set the value to
 * @param path JSON Pointer string or tokens path
 * @param value The value to add
 */
export function add(doc: any, path: string | string[], value: unknown): OperationResult;
/**
 * Copy the value at the specified JSON Pointer location to another location.
 *
 * @param doc JSON document to copy the value from and to
 * @param path JSON Pointer string or tokens path
 * @param dest JSON Pointer string destination of the value
 */
export function copy(doc: any, path: string | string[], dest: string): OperationResult;
/**
 * Moves the value at the specified JSON Pointer location to another location.
 *
 * @param doc JSON document to move the value from and to
 * @param path JSON Pointer string or tokens path
 * @param dest JSON Pointer string destination of the value
 */
export function move(doc: any, path: string | string[], dest: string): OperationResult;
/**
 * Removes the value at the JSON Pointer location.
 *
 * @param doc JSON document to search into
 * @param path JSON Pointer string or tokens patch
 */
export function remove(doc: any, path: string | string[]): OperationResult;
/**
 * Replaces the value at the JSON Pointer location
 *
 * @param doc JSON document
 * @param path JSON Pointer string or tokens patch
 * @param value JSON object to replace with
 */
export function replace(doc: any, path: string | string[], value: unknown): OperationResult;
/**
 * Tests that the value at the specified JSON Pointer location is equal to the specified value.
 *
 * @param doc JSON document
 * @param path JSON Pointer string or tokens patch
 * @param value The value to compare with
 */
export function test(doc: any, path: string | string[], value: unknown): OperationResult;
/**
 * Get the value at the JSON Pointer location.
 *
 * @param doc JSON document
 * @param path JSON Pointer string or tokens patch
 * @returns The value at the JSON Pointer location
 */
export function get(doc: unknown, path: string | string[]): unknown;
/**
 * Checks if the document has the property at the specified JSON Pointer location.
 *
 * @param doc JSON document
 * @param path JSON Pointer string or tokens path
 */
export function has(doc: unknown, path: string | string[]): boolean;
/**
 * Per specification patches are pretty verbose. JSON8 provides the `pack()` and the `unpack()` methods
 * to reduce the size of patches and save memory / space / bandwidth.
 *
 * ```javascript
 * var patch = [
 *   { op: "add", path: "/a/b/c", value: ["foo", "bar"] },
 *   { op: "remove", path: "/a/b/c" },
 *   { op: "replace", path: "/a/b/c", value: 42 },
 *   { op: "move", from: "/a/b/c", path: "/a/b/d" },
 *   { op: "copy", from: "/a/b/c", path: "/a/b/e" },
 *   { op: "test", path: "/a/b/c", value: "foo" },
 * ];
 *
 * var packed = ooPatch.pack(patch);
 *
 * // [
 * //   [0, "/a/b/c", ["foo", "bar"]],
 * //   [1, "/a/b/c"],
 * //   [2, "/a/b/c", 42],
 * //   [3, "/a/b/d", "/a/b/c"],
 * //   [4, "/a/b/e", "/a/b/c"],
 * //   [5, "/a/b/c", "foo"]
 * // ]
 * ```
 */
export function pack(patch: JsonPatch): any[];
/**
 * Reverses the `pack()` on a patch.
 *
 * @param packed Previously packed values.
 * @returns Restored patch value.
 */
export function unpack(packed: any[]): JsonPatch;
/**
 * Concatenates multiple patches into one.
 */
export function concat(...patches: JsonPatch): JsonPatch;

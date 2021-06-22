// Type definitions for json8-patch 1.0
// Project: https://github.com/sonnyp/JSON8/tree/master/packages/patch
// Definitions by: Peter Kooijmans <https://github.com/peterkooijmans>
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
    doc: any;
}

export interface ApplyResultWithRevert extends ApplyResult {
    revert: JsonPatch;
}

export type PatchResult = ApplyResult;
export type PatchResultWithRevert = ApplyResultWithRevert;

export function apply(doc: any, patch: JsonPatch, options?: { reversible: false }): ApplyResult;
export function apply(doc: any, patch: JsonPatch, options?: { reversible: true }): ApplyResultWithRevert;

export function patch(doc: any, patch: JsonPatch, options?: { reversible: false }): PatchResult;
export function patch(doc: any, patch: JsonPatch, options?: { reversible: true }): PatchResultWithRevert;

export function diff(doc1: any, doc2: any): JsonPatch;

export function revert(doc: any, revertPatch: JsonPatch): ApplyResult;

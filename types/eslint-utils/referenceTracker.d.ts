import { Scope } from 'eslint';
import { Node } from 'estree';

export interface ReferenceTrackerOptions {
    /**
     * The variable names for Global Object.
     */
    globalObjectNames?: string[];

    /**
     * The mode to determine the ImportDeclaration's behavior for CJS modules.
     */
    mode?: 'legacy' | 'strict';
}

export interface TraceMap {
    [i: string]: TraceMapObject;
}

export interface TraceMapObject {
    [i: string]: TraceMapObject;
    [CALL]?: boolean;
    [CONSTRUCT]?: boolean;
    [ESM]?: boolean;
    [READ]?: boolean;
}

export const CALL: unique symbol;
export const CONSTRUCT: unique symbol;
export const ESM: unique symbol;
export const READ: unique symbol;

export interface TrackedReferences {
    entry: unknown;
    node: Node;
    path: string[];
    type: symbol;
}

export class ReferenceTracker {
    static readonly CALL: typeof CALL;
    static readonly CONSTRUCT: typeof CONSTRUCT;
    static readonly ESM: typeof ESM;
    static readonly READ: typeof READ;

    constructor(globalScope: Scope.Scope, options?: ReferenceTrackerOptions);

    /**
     * Iterate the references of CommonJS modules.
     */
    iterateCjsReferences(traceMap: TraceMap): IterableIterator<TrackedReferences>;

    /**
     * Iterate the references of ES modules.
     */
    iterateEsmReferences(traceMap: TraceMap): IterableIterator<TrackedReferences>;

    /**
     * Iterate the references of global variables.
     */
    iterateGlobalReferences(traceMap: TraceMap): IterableIterator<TrackedReferences>;
}

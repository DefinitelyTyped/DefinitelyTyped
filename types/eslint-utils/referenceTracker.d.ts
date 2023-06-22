import { Scope, Rule } from 'eslint';

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

export interface TraceMap<T = unknown> {
    [i: string]: TraceMapObject<T>;
}

export interface TraceMapObject<T> {
    [i: string]: TraceMapObject<T>;
    [CALL]?: T;
    [CONSTRUCT]?: T;
    [ESM]?: boolean;
    [READ]?: T;
}

export const CALL: unique symbol;
export const CONSTRUCT: unique symbol;
export const ESM: unique symbol;
export const READ: unique symbol;

export interface TrackedReferences<T> {
    info: T;
    node: Rule.Node;
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
    iterateCjsReferences<T = unknown>(traceMap: TraceMap<T>): IterableIterator<TrackedReferences<T>>;

    /**
     * Iterate the references of ES modules.
     */
    iterateEsmReferences<T = unknown>(traceMap: TraceMap<T>): IterableIterator<TrackedReferences<T>>;

    /**
     * Iterate the references of global variables.
     */
    iterateGlobalReferences<T = unknown>(traceMap: TraceMap<T>): IterableIterator<TrackedReferences<T>>;
}

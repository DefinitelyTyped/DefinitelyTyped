/**
 * An alternative to setImmediate based on Promise.
 */
declare function resolveImmediate(callback: () => any): void;

declare namespace resolveImmediate {}

export = resolveImmediate;

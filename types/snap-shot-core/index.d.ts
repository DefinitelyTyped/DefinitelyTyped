// Type definitions for snap-shot-core 10.2
// Project: https://github.com/bahmutov/snap-shot-core
// Definitions by: SPGoding <https://github.com/SPGoding>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

export type CompareFunction<T extends {} | null> = (options: { value: T; expected: unknown }) => Result;

// https://github.com/bahmutov/snap-shot-core/blob/4d238b869c78b21ae77e2a7e1fc83038c1be810d/src/file-system.js#L221-L223
export interface Result {
    orElse: (callback: (message: string) => void) => void;
}

export interface Opts {
    ci?: boolean;
    dryRun?: boolean;
    show?: boolean;
    sortSnapshots?: boolean;
    update?: boolean;
    useRelativePath?: boolean;
}

/**
 * Returns object with "value" property (stored value)
 * and "key" (formed snapshot name).
 *
 * Note: when throwing an error,
 * "key" property is attached to the thrown error instance.
 */
export function core<T extends {} | null, U = T>(options: {
    /**
     * The value to store.
     * Cannot be `undefined` (see https://github.com/bahmutov/snap-shot-core/issues/111).
     */
    what: T;
    /**
     * Either `file` or `__filename` must be defined.
     */
    file?: string;
    /**
     * Alias of `file`.
     * Either `file` or `__filename` must be defined.
     */
    __filename?: string;
    /**
     * Either `specName` or `exactSpecName` must be defined.
     */
    specName?: string;
    /**
     * Either `specName` or `exactSpecName` must be defined.
     */
    exactSpecName?: string;
    /**
     * A function that transforms the value before storing it as snapshots.
     * Defaults to the identity function.
     */
    store?: (value: T) => U;
    /**
     * A function that checks if the given value matches the expected value.
     */
    compare?: CompareFunction<T>;
    /**
     * A function that throws an error when the given value does not match the expected value.
     */
    raiser?: (options: { value: T; expected: unknown; specName: string; compare: CompareFunction<T> }) => void;
    ext?: `.${string}`;
    comment?: string;
    opts?: Opts;
}): {
    /**
     * The stored value.
     */
    value: U;
    /**
     * The formed snapshot name.
     */
    key: string;
};

/**
 * Restores the counter of tests.
 *
 * When no arguments are provided, all counters are restored.
 * Otherwise only the counter for the specified test is restored.
 */
export function restore(options?: { file: string; specName: string }): void;

/**
 * Prunes all unused snapshots for given tests.
 */
export function prune(
    options: {
        tests: ReadonlyArray<{ specFile: string; key: string }>;
        /**
         * Defaults to `.snapshot.js`.
         */
        ext?: `.${string}`;
    },
    opts?: {
        useRelativePath?: boolean;
        sortSnapshots?: boolean;
    },
): void;

/**
 * Throws a "Cannot store new snapshot value [...] when running on CI" error.
 */
export function throwCannotSaveOnCI(options: {
    value?: unknown;
    fileParameter: string;
    exactSpecName?: string;
    specName?: string;
    index?: number;
}): never;

/**
 * Returns the name of the snapshot when it is saved.
 * Could be either an exact string or a combination of the spec name and index
 */
export function savedSnapshotName(options?: { exactSpecName?: string; specName?: string; index?: number }): string;

/**
 * Stores new snapshot value if possible.
 * Returns the key for the value
 */
export function storeValue(options: {
    file: string;
    specName?: string;
    exactSpecName?: string;
    index?: number;
    value: {} | null;
    ext?: `.${string}`;
    comment?: string;
    opts?: Opts;
}): string;

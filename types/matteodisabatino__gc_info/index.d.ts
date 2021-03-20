// Type definitions for @matteodisabatino/gc_info 0.2
// Project: https://github.com/matteodisabatino/gc_info#readme
// Definitions by: Matteo Di Sabatino <https://github.com/matteodisabatino>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum GcType {
    Scavenge = 1,
    'Mark/Sweep/Compact' = 2,
    IncrementalMarking = 4,
    'Weak/PhantomCallbackProcessing' = 8,
    All = 15,
}

export interface GcStats {
    /**
     * Number of bytes V8 has allocated for the heap.
     */
    totalHeapSize: number;

    /**
     * Number of bytes for compiled bytecode and JITed code.
     */
    totalHeapSizeExecutable: number;

    /**
     * Number of bytes in use by application data.
     */
    usedHeapSize: number;

    /**
     * The absolute limit the heap cannot exceed.
     */
    heapSizeLimit: number;

    /**
     * Committed size.
     */
    totalPhysicalSize: number;

    /**
     * Available heap size.
     */
    totalAvailableSize: number;

    /**
     * Current amount of memory, obtained via malloc.
     */
    mallocedMemory: number;

    /**
     * Peak amount of memory, obtained via malloc.
     */
    peakMallocedMemory: number;

    /**
     * Number of the top-level contexts currently active.
     */
    numberOfNativeContexts: number;

    /**
     * Number of contexts that were detached and not yet garbage collected.
     */
    numberOfDetachedContexts: number;

    /**
     * Number of bytes of memory allocated outside of v8's heap. (Node.js 12+)
     */
    externalMemory?: number;

    /**
     * Size of all global handles in the heap. (Node.js 14+)
     */
    totalGlobalHandlesSize?: number;

    /**
     * Size of all allocated/used global handles in the heap. (Node.js 14+)
     */
    usedGlobalHandlesSize?: number;
}

export interface GcInfo {
    /**
     * The moment the GC started (Unix timestamp in milliseconds).
     */
    startedAt: number;

    /**
     * The moment the GC ended (Unix timestamp in milliseconds).
     */
    endedAt: number;

    /**
     * The time the GC has been active (difference between endedAt and
     * startedAt).
     */
    duration: number;

    /**
     * Memory allocation type.
     */
    gctype: GcType;

    /**
     * Stats at the moment the GC started
     */
    pre: GcStats;

    /**
     * Stats at the moment the GC ended
     */
    post: GcStats;

    /**
     * Effective stats (difference between post and pre).
     */
    diff: GcStats;
}

export const path: string;
export function off(event: string, callback?: (stats: GcInfo) => void): void;
export function on(event: string, callback: (stats: GcInfo) => void): void;

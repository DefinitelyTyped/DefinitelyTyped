// Type definitions for node-memwatch 1.0
// Project: https://github.com/eduardbcom/node-memwatch#readme
// Definitions by: Eunchong Yu <https://github.com/Kroisse>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from 'events';

export = memwatch;

declare const memwatch: memwatch.MemWatch;

/**
 * Compare the state of your heap between two points in time, telling you what has been allocated, and what has been released.
 */
declare class HeapDiff {
    constructor();

    /**
     * Compute the diff.
     */
    end: () => memwatch.HeapDiffInformation;
}

declare namespace memwatch {
    interface MemWatch extends EventEmitter {
        on(eventName: "leak", callback: (event: LeakInformation) => void): this;
        on(eventName: "stats", callback: (event: StatsInformation) => void): this;

        /**
         * Force V8 to do a full GC and heap compaction.
         *
         * It's intended to be used for debugging. Calling it in production is highly discouraged.
         */
        gc(): void;

        HeapDiff: typeof HeapDiff;
    }

    interface StatsInformation {
        current_base: number;
        estimated_base: number;
        heap_compactions: number;
        max: number;
        min: number;
        num_full_gc: number;
        num_inc_gc: number;
        usage_trend: number;
    }

    interface LeakInformation {
        /**
         * Amount of heap growth in bytes.
         */
        growth: number;

        /**
         * Human-readable description.
         */
        reason: string;
    }

    interface HeapDiffInformation {
        before: HeapDiffSnapshot;
        after: HeapDiffSnapshot;
        change: HeapDiffChange;
    }

    interface HeapDiffSnapshot {
        nodes: number;
        size_bytes: number;
        size: string;
    }

    interface HeapDiffChange {
        size_bytes: number;
        size: string;
        freed_nodes: number;
        allocated_nodes: number;
        details: HeapDiffDetail[];
    }

    interface HeapDiffDetail {
        what: string;
        size_bytes: number;
        size: string;
        "+": number;
        "-": number;
    }
}

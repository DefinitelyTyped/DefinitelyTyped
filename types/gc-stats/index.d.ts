// Type definitions for gc-stats 1.4
// Project: https://github.com/dainis/node-gcstats#readme
// Definitions by: Vitor Fernandes <https://github.com/vfernandestoptal>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { EventEmitter } from "events";

declare namespace GCStats {
    interface MemoryStatistics {
        totalHeapSize: number;
        totalHeapExecutableSize: number;
        usedHeapSize: number;
        heapSizeLimit: number;
        totalPhysicalSize: number;
        totalAvailableSize: number;
        mallocedMemory?: number; // became available with node 7+
        peakMallocedMemory?: number; // became available with node 7+
        numberOfNativeContexts?: number; // became available with node 10+
        numberOfDetachedContexts?: number; // became available with node 10+
    }

    interface GCStatistics {
        startTime: number;
        endTime: number;
        pause: number;
        pauseMS: number;
        gctype: 1 | 2 | 4 | 8 | 15;
        before: MemoryStatistics;
        after: MemoryStatistics;
        diff: MemoryStatistics;
    }

    type GCStatsListener = (stats: GCStatistics) => void;

    interface GCStatsEventEmitter extends EventEmitter {
        on(event: "stats", listener: GCStatsListener): this;
        addListener(event: "stats", listener: GCStatsListener): this;
        once(event: "stats", listener: GCStatsListener): this;
    }
}

declare function GCStats(): GCStats.GCStatsEventEmitter;

export = GCStats;

// Type definitions for gc-stats 1.2
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
        mallocedMemory: number;
        peakMallocedMemory: number;
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
}

declare function GCStats(): EventEmitter;

export = GCStats;

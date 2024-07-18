export interface GcStats {
    gcScavengeCount: number;
    gcScavengeTime: number; // nanoseconds
    gcMarkSweepCompactCount: number;
    gcMarkSweepCompactTime: number; // nanoseconds
    gcIncrementalMarkingCount: number;
    gcIncrementalMarkingTime: number; // nanoseconds
    gcProcessWeakCallbacksCount: number;
    gcProcessWeakCallbacksTime: number; // nanoseconds
    total_heap_size: number; // bytes
    total_heap_size_executable: number; // bytes
    total_physical_size: number; // bytes
    total_available_size: number; // bytes
    used_heap_size: number; // bytes
    heap_size_limit: number; // bytes
    malloced_memory: number;
    peak_malloced_memory: number;
    gc_time: number; // nanoseconds
}

export interface HeapInfo {
    nodes: number;
    size_bytes: number;
    size: string;
}

export interface HeapChangeDetails {
    what: string;
    size_bytes: number;
    size: string;
    "+": number;
    "-": number;
}

export interface HeapChange {
    size_bytes: number;
    size: string;
    freed_nodes: number;
    allocated_nodes: number;
    details: HeapChangeDetails[];
}

export interface HeapDiffResult {
    before: HeapInfo;
    after: HeapInfo;
    change: HeapChange;
}

export function on(event: "stats", callback: (stats: GcStats) => void): void;

export class HeapDiff {
    end(): HeapDiffResult;
}

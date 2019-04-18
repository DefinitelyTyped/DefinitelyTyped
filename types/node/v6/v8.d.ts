declare module "v8" {
    interface HeapSpaceInfo {
        space_name: string;
        space_size: number;
        space_used_size: number;
        space_available_size: number;
        physical_space_size: number;
    }

    const enum DoesZapCodeSpaceFlag {
        Disabled = 0,
        Enabled = 1
    }

    interface HeapInfo {
        total_heap_size: number;
        total_heap_size_executable: number;
        total_physical_size: number;
        total_available_size: number;
        used_heap_size: number;
        heap_size_limit: number;
        malloced_memory: number;
        peak_malloced_memory: number;
        does_zap_garbage: DoesZapCodeSpaceFlag;
    }

    export function getHeapStatistics(): HeapInfo;
    export function getHeapSpaceStatistics(): HeapSpaceInfo[];
    export function setFlagsFromString(flags: string): void;
}

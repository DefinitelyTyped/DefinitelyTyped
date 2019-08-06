declare module "v8" {
    import { Readable } from "stream";

    interface HeapSpaceInfo {
        space_name: string;
        space_size: number;
        space_used_size: number;
        space_available_size: number;
        physical_space_size: number;
    }

    // ** Signifies if the --zap_code_space option is enabled or not.  1 == enabled, 0 == disabled. */
    type DoesZapCodeSpaceFlag = 0 | 1;

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
        number_of_native_contexts: number;
        number_of_detached_contexts: number;
    }

    function getHeapStatistics(): HeapInfo;
    function getHeapSpaceStatistics(): HeapSpaceInfo[];
    function setFlagsFromString(flags: string): void;
    /**
     * Generates a snapshot of the current V8 heap and returns a Readable
     * Stream that may be used to read the JSON serialized representation.
     * This conversation was marked as resolved by joyeecheung
     * This JSON stream format is intended to be used with tools such as
     * Chrome DevTools. The JSON schema is undocumented and specific to the
     * V8 engine, and may change from one version of V8 to the next.
     */
    function getHeapSnapshot(): Readable;

    /**
     *
     * @param fileName The file path where the V8 heap snapshot is to be
     * saved. If not specified, a file name with the pattern
     * `'Heap-${yyyymmdd}-${hhmmss}-${pid}-${thread_id}.heapsnapshot'` will be
     * generated, where `{pid}` will be the PID of the Node.js process,
     * `{thread_id}` will be `0` when `writeHeapSnapshot()` is called from
     * the main Node.js thread or the id of a worker thread.
     */
    function writeHeapSnapshot(fileName?: string): string;
}

export interface ProcessInfo {
    /**
     * the percentage of total CPU usage
     */
    cpuUsage?: number;
    /**
     * the application name
     */
    name?: string;
    /**
     * the current nonpaged pool usage in bytes
     */
    nonPagedPoolUsage?: number;
    /**
     * the number of page faults
     */
    pageFaultCount?: number;
    /**
     * the current paged pool usage in bytes
     */
    pagedPoolUsage?: number;
    /**
     * the total amount of memory in bytes that the memory manager has committed
     */
    pagefileUsage?: number;
    /**
     * the peak nonpaged pool usage in bytes
     */
    peakNonPagedPoolUsage?: number;
    /**
     * the peak paged pool usage in bytes
     */
    peakPagedPoolUsage?: number;
    /**
     * the peak value in bytes of pagefileUsage during the lifetime of this process
     */
    peakPagefileUsage?: number;
    /**
     * the peak working set size in bytes
     */
    peakWorkingSetSize?: number;
    /**
     * the native process identifier
     */
    processId?: number;
    /**
     * the application UUID
     */
    uuid?: string;
    /**
     * the current working set size (both shared and private data) in bytes
     */
    workingSetSize?: number;
}

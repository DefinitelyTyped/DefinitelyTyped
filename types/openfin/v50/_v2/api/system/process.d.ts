export interface ProcessInfo {
    cpuUsage?: number | undefined;
    name?: string | undefined;
    nonPagedPoolUsage?: number | undefined;
    pageFaultCount?: number | undefined;
    pagedPoolUsage?: number | undefined;
    pagefileUsage?: number | undefined;
    peakNonPagedPoolUsage?: number | undefined;
    peakPagedPoolUsage?: number | undefined;
    peakPagefileUsage?: number | undefined;
    peakWorkingSetSize?: number | undefined;
    processId?: number | undefined;
    uuid?: string | undefined;
    workingSetSize?: number | undefined;
}

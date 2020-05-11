export interface ProcessInfo {
    cpuUsage?: number;
    name?: string;
    nonPagedPoolUsage?: number;
    pageFaultCount?: number;
    pagedPoolUsage?: number;
    pagefileUsage?: number;
    peakNonPagedPoolUsage?: number;
    peakPagedPoolUsage?: number;
    peakPagefileUsage?: number;
    peakWorkingSetSize?: number;
    processId?: number;
    uuid?: string;
    workingSetSize?: number;
}

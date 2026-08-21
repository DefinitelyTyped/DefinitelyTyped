export = SystemMonitor;
declare function SystemMonitor(): void;
declare class SystemMonitor {
    usedPhysical: number;
    peakPhysical: number;
    usedVirtual: number;
    peakVirtual: number;
    totalPhysical: number;
    availablePhysical: number;
    totalPageFile: number;
    availablePageFile: number;
    statefulSessionsCount: number;
    statelessSessionsCount: number;
    standaloneSessionsCount: number;
    idoCacheSize: number;
    allocated: number;
    virtualAllocated: number;
}
declare namespace SystemMonitor {
    function getInstance(): SystemMonitor;
}

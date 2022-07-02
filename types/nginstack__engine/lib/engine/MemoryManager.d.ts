export = MemoryManager;
declare function MemoryManager(): void;
declare class MemoryManager {
    allocated: number;
    objectCount: number;
    virtualAllocated: number;
    virtualObjectCount: number;
    totalPhysical: number;
    availablePhysical: number;
    totalPageFile: number;
    availablePageFile: number;
    totalVirtual: number;
    availableVirtual: number;
    statefulSessionsCount: number;
    statelessSessionsCount: number;
    standaloneSessionsCount: number;
    idoCacheSize: number;
}

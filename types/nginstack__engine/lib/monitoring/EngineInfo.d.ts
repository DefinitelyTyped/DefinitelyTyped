export = EngineInfo;
declare function EngineInfo(): void;
declare class EngineInfo {
    cpuInfo: CpuInfo;
    memoryStats: MemoryStats;
    dbCache: DBCacheInfo;
    scheduler: SchedulerInfo;
    transactionLogger: TransactionLoggerInfo;
    paths: PathsConfig;
    ports: PortConfig[];
    databases: DatabaseConfig[];
    config: EngineConfig;
    applicationSessions: ApplicationSessionInfo[];
    alerts: EngineAlert[];
    name: string;
    usedVirtualMemory: number;
    startedAt: number;
    updatedAt: number;
    version: string;
    instanceId: string;
    arch: string;
    platform: string;
    providerName: string;
    mainDatabase: string;
    hostName: string;
    hostAddress: string;
    mainHttpPort: number;
    osName: string;
    freeDisk: number;
    openSocketCount: number;
    openFileCount: number;
}
declare namespace EngineInfo {
    export {
        fromDataSet,
        DataSet,
        CpuInfo,
        MemoryStats,
        DBCacheInfo,
        SchedulerInfo,
        TransactionLoggerInfo,
        PathsConfig,
        PortConfig,
        DatabaseConfig,
        EngineConfig,
        EngineAlert,
    };
}
import ApplicationSessionInfo = require('./ApplicationSessionInfo.js');
declare function fromDataSet(engines: DataSet, sessions?: DataSet): EngineInfo;
type DataSet = import('../dataset/DataSet');
interface CpuInfo {
    modelName: string;
    vendorId: string;
    family: number;
    model: number;
    stepping: number;
    physicalCores: number;
    logicalCores: number;
    addressWidth: number;
}
interface MemoryStats {
    usedVirtual: number;
    usedPhysical: number;
    totalPhysical: number;
    availablePhysical: number;
    totalPageFile: number;
    availablePageFile: number;
    statefulSessionsCount: number;
    statelessSessionsCount: number;
    standaloneSessionsCount: number;
}
interface DBCacheInfo {
    version: number;
    lastSyncError: string;
    lastSyncDuration: number;
    syncing: boolean;
    size: number;
    pageSize: number;
    idoCacheSize: number;
    tableCount: number;
}
interface SchedulerInfo {
    taskCount: number;
    runningTaskCount: number;
    failingTaskCount: number;
    maxConcurrentTaskCount: number;
}
interface TransactionLoggerInfo {
    pendingLogs: number;
    sendingError: number;
}
interface PathsConfig {
    mainProgram: string;
    dataDir: string;
    programDir: string;
    logDir: string;
    tempDir: string;
}
interface PortConfig {
    port: number;
    protocol: string;
    address: string;
    cipherList: string;
    disabledOnStartup: boolean;
    enabled: boolean;
}
interface DatabaseConfig {
    name: string;
    type: string;
    reference: string;
    userName: string;
    maxConnections: number;
    enabled: boolean;
}
interface EngineConfig {
    syncToDisk: boolean;
    automaticUpgrade: boolean;
    timeZoneBias: number;
}
interface EngineAlert {
    severity: import('./AlertSeverity.js').AlertSeverityType;
    code: string;
    message: string;
    engineId: string;
}

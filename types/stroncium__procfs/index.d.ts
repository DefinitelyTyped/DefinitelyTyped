// Type definitions for @stroncium/procfs 1.2
// Project: https://github.com/stroncium/nodejs-procfs
// Definitions by: pauhull <https://github.com/pauhull>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface ProcessMountinfo {
    devId: number;
    mountId: number;
    mountOptions: string[];
    mountPoint: string;
    mountSource: string;
    optionalFields: string[];
    parentId: number;
    root: string;
    superOptions: string[];
    type: string[];
}

export interface ProcessIo {
    read: number;
    readReal: number;
    readSyscalls: number;
    write: number;
    writeCancelled: number;
    writeReal: number;
    writeSyscalls: number;
}

export interface ProcessIdMapRange {
    length: number;
    start: number;
    targetStart: number;
}

export interface ProcessAutogroup {
    name: string;
    nice: number;
}

export interface ProcessStatm {
    data: number;
    resident: number;
    shared: number;
    size: number;
    text: number;
}

export interface ProcessCgroup {
    hierarchyId: number;
    path: string;
    controllers?: string[];
}

export interface ProcessLimit {
    name: string;
    hard?: number;
    soft?: number;
    units?: string;
}

export type ProcessState = 'R' | 'S' | 'D' | 'Z' | 'T' | 't' | 'X';

export interface ProcessStat {
    blockIoTicks: number;
    childGuestTicks: number;
    childKernelTicks: number;
    childMajorFaults: number;
    childMinorFaults: number;
    childUserTicks: number;
    comm: string;
    exitSignal: number;
    flags: number;
    guestTicks: number;
    kernelTicks: number;
    lastCpu: number;
    majorFaults: number;
    minorFaults: number;
    nice: number;
    parent: number;
    pid: number;
    priority: number;
    processGroup: number;
    realtimePriority: number;
    rss: number;
    rssSoftLimit: number;
    schedulingPolicy: number;
    session: number;
    startTicks: number;
    state: ProcessState;
    terminalProcessGroup: number;
    threads: number;
    tty: number;
    userTicks: number;
    vsize: number;
}

export interface ProcessStatus {
    contextSwitchesNonvoluntary: number;
    contextSwitchesVoluntary: number;
    cpusAllowedMask: number;
    fdSlots: number;
    gidEffective: number;
    gidFilesystem: number;
    gidReal: number;
    gidSavedSet: number;
    groups: number[];
    hugetlbPagesSize: number;
    memoriesAllowedMask: number;
    name: string;
    numaGroupId: number;
    parentPid: number;
    pid: number;
    rtSignalsBlocked: number;
    rtSignalsCaught: number;
    rtSignalsIgnored: number;
    sharedSignalsPending: number;
    signalsBlocked: number;
    signalsCaught: number;
    signalsIgnored: number;
    signalsPending: number;
    signalsQueued: number;
    signalsQueuedLimit: number;
    state: ProcessState;
    threadGroupId: number;
    threads: number;
    tracerPid: number;
    uidEffective: number;
    uidFilesystem: number;
    uidReal: number;
    uidSavedSet: number;
    vmData: number;
    vmExe: number;
    vmHwm: number;
    vmLib: number;
    vmLocked: number;
    vmPeak: number;
    vmPinned: number;
    vmPte: number;
    vmRss: number;
    vmSize: number;
    vmStack: number;
    vmSwap: number;
    namespacePids?: number[];
    namespaceProcessGroupIds?: number[];
    namespaceSessionIds?: number[];
    namespaceThreadGroupIds?: number[];
    rssAnon?: number;
    rssFile?: number;
    rssShmem?: number;
    seccompMode?: number;
    speculationStoreBypass?: string;
    umask?: number;
}

export type ProcessFdinfoType = 'regular' | 'event' | 'epoll' | 'signal' | 'inotify' | 'fanotify' | 'timer';

export interface ProcessFdinfoEpollCounter {
    fd: number;
    mask: number;
}

export interface ProcessFdinfoFanotifyMark {
    devId: number;
    flags: number;
    ignoredMask: number;
    inode: number;
    mask: number;
}

export interface ProcessFdinfoInotifyFile {
    devId: number;
    ignoredMask: number;
    inode: number;
    mask: number;
    wd: number;
}

export interface ProcessFdinfo {
    flags: number;
    mountId: number;
    position: number;
    type: ProcessFdinfoType;
    epollCounters?: ProcessFdinfoEpollCounter[];
    eventCounter?: number;
    fanotifyEventFlags?: number;
    fanotifyFlags?: number;
    fanotifyMarks?: ProcessFdinfoFanotifyMark[];
    inotifyFiles?: ProcessFdinfoInotifyFile[];
    rtSignalMask?: number;
    signalMask?: number;
    timerClockId?: number;
    timerInterval?: number[];
    timerSettimeFlags?: number;
    timerTicks?: number;
    timerValue?: number[];
}

export type ProcessFdType = 'pipe' | 'socket' | 'file' | 'anon-inode';

export interface ProcessFd {
    type: ProcessFdType;
    anonInodeType?: string;
    inode?: number;
    path?: string;
}

export interface ProcessExe {
    deleted: boolean;
    path: string;
}

export interface NetDevice {
    name: string;
    rxBytes: number;
    rxCompressed: number;
    rxDrop: number;
    rxErrors: number;
    rxFifo: number;
    rxFrame: number;
    rxMulticast: number;
    rxPackets: number;
    txBytes: number;
    txCarrier: number;
    txColls: number;
    txCompressed: number;
    txDrop: number;
    txErrors: number;
    txFifo: number;
    txPackets: number;
}

export interface NetWirelessDevice {
    discardedCrypt: number;
    discardedFrag: number;
    discardedMisc: number;
    discardedNwid: number;
    discardedRetry: number;
    level: number;
    link: number;
    missedBeacons: number;
    name: string;
    noise: number;
}

export interface NetUnixSocket {
    referenceCount: number;
    slot: string;
    type: number;
    path?: string;
}

export interface NetSocket4 {
    localAddress: number;
    localPort: number;
    remoteAddress: number;
    remotePort: number;
    rxQueue: number;
    slot: number;
    txQueue: number;
    uid: number;
}

export interface NetSocket6 {
    localAddress: string;
    localPort: number;
    remoteAddress: number;
    remotePort: number;
    rxQueue: number;
    slot: number;
    txQueue: number;
    uid: number;
}

export interface CpuCoreInfo {
    addressSizes: string;
    apicId: number;
    bugs: string[];
    cacheAlignment: number;
    cacheSize: string;
    clflushSize: number;
    coreId: number;
    cores: number;
    cpuMhz: number;
    cpuidLevel: number;
    family: number;
    flags: string[];
    fpu: boolean;
    fpuException: boolean;
    id: number;
    initialApicId: number;
    microcode: string;
    model: number;
    modelName: string;
    physicalId: number;
    siblings: number;
    stepping: number;
    vendorId: string;
    wp: boolean;
    bogoMips?: number;
}

export interface Loadavg {
    existingEntities: number;
    jobsAverage15Minutes: number;
    jobsAverage1Minute: number;
    jobsAverage5Minutes: number;
    mostRecentlyCreatedPid: number;
    runnableEntities: number;
}

export interface Uptime {
    idle: number;
    time: number;
}

export interface Swap {
    path: string;
    priority: number;
    size: number;
    type: string;
    used: number;
}

export interface StatCpuTime {
    guest: number;
    guestNice: number;
    idle: number;
    iowait: number;
    irq: number;
    nice: number;
    softirq: number;
    steal: number;
    system: number;
    user: number;
}

export interface Stat {
    bootTime: Date;
    contextSwitches: number;
    cpuTime: StatCpuTime[];
    forks: number;
    interrupts: number;
    numberedInterrupts: number[];
    numberedSoftInterrupts: number[];
    processesBlocked: number;
    processesRunning: number;
    softInterrupts: number;
    systemCpuTime: StatCpuTime;
}

export type DeviceType = 'character' | 'block';

export interface Device {
    group: string;
    major: number;
    type: DeviceType;
}

export interface Filesystem {
    name: string;
    requiresBlockDevice: boolean;
}

export interface Diskstat {
    currentIoCount: number;
    devId: number;
    ioTime: number;
    name: string;
    readTime: number;
    reads: number;
    readsMerged: number;
    sectorsRead: number;
    sectorsWritten: number;
    weightedIoTime: number;
    writeTime: number;
    writes: number;
    writesMerged: number;
}

export interface Partition {
    blocks: number;
    devId: number;
    name: string;
}

export interface Meminfo {
    active: number;
    anonHugePages: number;
    anonPages: number;
    available: number;
    bounceBuffers: number;
    buffers: number;
    cached: number;
    commitLimit: number;
    directMap1G: number;
    directMap2M: number;
    directMap4K: number;
    directMap4M: number;
    dirty: number;
    free: number;
    inactive: number;
    kernelStack: number;
    mapped: number;
    pageTables: number;
    shmem: number;
    slab: number;
    slabReclaimable: number;
    slabUnreclaimable: number;
    swapCached: number;
    swapFree: number;
    swapTotal: number;
    total: number;
    vmallocTotal: number;
    writeback: number;
    writebackTmp: number;
    hardwareCorrupted?: number;
    hugepageSize?: number;
    hugepagesFree?: number;
    hugepagesReserved?: number;
    hugepagesSurplus?: number;
    hugepagesTotal?: number;
    kernelReclaimable?: number;
    shmemHugePages?: number;
    shmemPmdMapped?: number;
}

export interface CgroupController {
    cgroupsNumber: number;
    enabled: boolean;
    hierarchyId: number;
    name: string;
}

export type ProcfsErrorCode = 'EPARSE' | 'EUNKNOWN' | 'ENOENT';

export class ProcfsError extends Error {
    static ERR_PARSING_FAILED: 'EPARSE';
    static ERR_UNKNOWN: 'EUNKNOWN';
    static ERR_NOT_FOUND: 'ENOENT';
    constructor(code: ProcfsErrorCode, message?: string, sourceError?: string);
    code: ProcfsErrorCode;
    sourceText?: string;
    sourceError?: string;
}

export class Procfs {
    constructor(root?: string);
    processMountinfo(pid?: number): ProcessMountinfo;
    processIo(pid?: number): ProcessIo;
    processUidMap(pid?: number): ProcessIdMapRange[];
    processGidMap(pid?: number): ProcessIdMapRange[];
    processEnviron(pid?: number): string[][];
    processOomScore(pid?: number): number;
    processTimerslackNs(pid?: number): number;
    processCmdline(pid?: number): string[];
    processAutogroup(pid?: number): ProcessAutogroup;
    processStatm(pid?: number): ProcessStatm;
    processComm(pid?: number): string;
    processCgroups(pid?: number): ProcessCgroup[];
    processPersonality(pid?: number): number;
    processCpuset(pid?: number): string;
    processLimits(pid?: number): ProcessLimit[];
    processStat(pid?: number): ProcessStat;
    processStatus(pid?: number): ProcessStatus;
    processFds(pid?: number): number[];
    processThreads(pid?: number): number[];
    processFdinfo(fd: number, pid?: number): ProcessFdinfo;
    processFd(fd: number, pid?: number): ProcessFd;
    processExe(pid?: number): ProcessExe;
    processCwd(pid?: number): string;
    processNetDev(pid?: number): NetDevice[];
    processNetWireless(pid?: number): NetWirelessDevice[];
    processNetUnix(pid?: number): NetUnixSocket[];
    processNetTcp4(pid?: number): NetSocket4[];
    processNetUdp4(pid?: number): NetSocket4[];
    processNetTcp6(pid?: number): NetSocket6[];
    processNetUdp6(pid?: number): NetSocket6[];
    netDev(): NetDevice[];
    netWireless(): NetWirelessDevice[];
    netUnix(): NetUnixSocket[];
    netTcp4(): NetSocket4[];
    netUdp4(): NetSocket4[];
    netTcp6(): NetSocket6[];
    netUdp6(): NetSocket6[];
    cpuinfo(): CpuCoreInfo[];
    loadavg(): Loadavg;
    uptime(): Uptime;
    version(): string;
    cmdline(): string;
    swaps(): Swap[];
    stat(): Stat;
    devices(): Device[];
    filesystems(): Filesystem[];
    diskstats(): Diskstat[];
    partitions(): Partition[];
    meminfo(): Meminfo;
    processes(): number[];
    config(): string;
    cgroups(): CgroupController[];
    devIdGetMinor(devId: number): number;
    devIdGetMajor(devId: number): number;
    devIdFromMajorMinor(major: number, minor: number): number;
}

export const procfs: Procfs;

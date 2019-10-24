// Type definitions for node-os-utils 1.0
// Project: https://github.com/SunilWang/node-os-utils
// Definitions by: Nasreddine Bac Ali <https://github.com/bacali95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

type Platform = 'aix'
    | 'android'
    | 'darwin'
    | 'freebsd'
    | 'linux'
    | 'openbsd'
    | 'sunos'
    | 'win32'
    | 'cygwin';

declare class Cpu {
    average(): CpuAverageInfo;

    usage(interval?: number): Promise<number>;

    free(interval?: number): Promise<number>;

    count(): number;

    model(): string;

    loadavg(): number[];

    loadavgTime(time: string | number): number;
}

export interface CpuAverageInfo {
    totalIdle: number;
    totalTick: number;
    avgIdle: number;
    avgTotal: number;
}

declare class Drive {
    info(diskName: string): Promise<DriveInfo>;

    free(diskName: string): Promise<DriveFreeInfo>;

    used(diskName: string): Promise<DriveUsedInfo>;
}

export interface DriveFreeInfo {
    totalGb: number;
    freeGb: number;
    freePercentage: number;
}

export interface DriveUsedInfo {
    totalGb: number;
    usedGb: number;
    usedPercentage: number;
}

export interface DriveInfo extends DriveFreeInfo, DriveUsedInfo {
}

declare class Mem {
    info(): Promise<MemInfo>;

    free(): Promise<MemFreeInfo>;

    used(): Promise<MemUsedInfo>;

    totalMem(): number;
}

export interface MemFreeInfo {
    totalMemMb: number;
    freeMemMb: number;
}

export interface MemUsedInfo {
    totalMemMb: number;
    usedMemMb: number;
}

export interface MemInfo extends MemFreeInfo, MemUsedInfo {
    freeMemPercentage: number;
}

declare class NetStat {
    stats(): Promise<NetStatInfo[]>;

    inOut(interval?: number): Promise<NetStatMetrics | string>;
}

export interface NetStatInfo {
    interface: string;
    inputBytes: string;
    outputBytes: string;
}

export interface NetStatMetrics {
    total: { inputMb: number; outputMb: number; };

    [key: string]: { inputMb: number; outputMb: number; };
}

declare class OpenFiles {
    openFd(): Promise<number>;
}

declare class Os {
    oos(): () => Promise<string>;

    platform(): Platform;

    uptime(): number;

    ip(): string;

    hostname(): string;

    type(): string;

    arch(): string;
}

declare class OsCmd {
    topCpu(): () => Promise<string>;

    topMem: () => Promise<string>;
    vmstats: () => Promise<string>;
    processesUsers: () => Promise<string>;
    diskUsage: () => Promise<string>;
    who: () => Promise<string>;
    whoami: () => Promise<string>;
    openPorts: () => Promise<string>;
    ifconfig: () => Promise<string>;
}

declare class Proc {
    totalProcesses(): Promise<number | string>;

    zombieProcesses(): Promise<number | string>;
}

declare class Users {
    openedCount(): Promise<number | string>;
}

export let cpu: Cpu;
export let drive: Drive;
export let mem: Mem;
export let netstat: NetStat;
export let openfiles: OpenFiles;
export let os: Os;
export let osCmd: OsCmd;
export let proc: Proc;
export let users: Users;
export let options: { NOT_SUPPORTED_VALUE: string, INTERVAL: number };

export function exec(command: string): () => Promise<string>;

export {};

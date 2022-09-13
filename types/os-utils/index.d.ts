// Type definitions for os-utils 0.0
// Project: https://github.com/oscmejia/os-utils
// Definitions by: Nasreddine Bac Ali <https://github.com/bacali95>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type Platform = 'aix'
    | 'android'
    | 'darwin'
    | 'freebsd'
    | 'linux'
    | 'openbsd'
    | 'sunos'
    | 'win32'
    | 'cygwin';

/**
 * returns platform.
 * @return Platform
 */
export function platform(): Platform;

/**
 * returns number of cpus.
 * @return number
 */
export function cpuCount(): number;

/**
 * returns system up time in seconds.
 * @return number
 */
export function sysUptime(): number;

/**
 * returns process up time in seconds.
 * @return number
 */
export function processUptime(): number;

/**
 * returns free memory in megabytes.
 * @return number
 */
export function freemem(): number;

/**
 * returns total memory in megabytes.
 * @return number
 */
export function totalmem(): number;

/**
 * returns the percentage of free memory.
 * @return number
 */
export function freememPercentage(): number;

/**
 * execute free command (only linux).
 */
export function freeCommand(callback: (used_mem: number) => any): void;

/**
 * execute df -k command.
 */
export function harddrive(callback: (total: number, free: number, used: number) => any): void;

/**
 * return process running current.
 */
export function getProcesses(callback: (result: string) => any): void;

/**
 * return process running current.
 */
export function getProcesses(nProcess: number, callback: (result: string) => any): void;

/**
 * returns all the load average usage for 1, 5 or 15 minutes.
 * @return string
 */
export function allLoadavg(): string;

/**
 * returns the load average usage for 1, 5 or 15 minutes.
 * @return number
 */
export function loadavg(_time?: number): number;

/**
 * returns the free percentage of cpu usage.
 */
export function cpuFree(callback: (percentage: number) => any): void;

/**
 * returns the percentage of cpu usage.
 */
export function cpuUsage(callback: (percentage: number) => any): void;

export {};

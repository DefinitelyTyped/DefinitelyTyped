// Type definitions for @hapi/sntp 3.1
// Project: https://github.com/hapijs/sntp
// Definitions by: Silas Rech <https://github.com/lenovouser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

export interface Options {
    host?: string;
    port?: number;
    resolveReference?: boolean;
    timeout?: number;
}

export interface TimeOptions {
    isValid: boolean;
    leapIndicator: string;
    version: number;
    mode: string;
    stratum: string;
    pollInterval: number;
    precision: number;
    rootDelay: number;
    rootDispersion: number;
    referenceId: string;
    referenceTimestamp: number;
    originateTimestamp: number;
    receiveTimestamp: number;
    transmitTimestamp: number;
    d: number;
    t: number;
    receivedLocally: number;
}

export function start(options?: Options): Promise<void>;

export function stop(): void;

export function offset(): Promise<number>;

export function time(options?: Options): Promise<TimeOptions>;

export function now(): number;

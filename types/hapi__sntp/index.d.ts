export interface Options {
    host?: string | undefined;
    port?: number | undefined;
    resolveReference?: boolean | undefined;
    timeout?: number | undefined;
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

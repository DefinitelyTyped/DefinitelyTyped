// Type definitions for ps-node 0.1
// Project: https://github.com/neekey/ps#readme
// Definitions by: Kyle Hensel <https://github.com/k-yle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Program {
    arguments: string[];
    command: string;
    pid: number;
}

export interface Query {
    pid?: string | string[] | number;
    ppid?: number;
    command?: string | RegExp;
    arguments?: string | RegExp;
    psargs?: string | string[];
}

export interface Signal {
    signal: string;
    timeout: number;
}

/** Query Process: Focus on pid & cmd */
export function lookup(query: Query, cb: (err: Error, list: Program[]) => void): void;

export function kill(pID: number | string, cb?: (err?: Error) => void): void;
export function kill(pID: number | string, signal?: string | Signal, cb?: (err?: Error) => void): void;

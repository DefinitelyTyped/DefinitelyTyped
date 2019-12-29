// Type definitions for tcp-ping 0.1
// Project: https://github.com/wesolyromek/tcp-ping
// Definitions by: JUNG YONG WOO <https://github.com/stegano>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    address?: string;
    port?: number;
    attempts?: number;
    timeout?: number;
}

export interface Results {
    seq: number | undefined;
    time: number | undefined;
    error?: Error;
}

export interface Result {
    address: string;
    port: number;
    attempts: number;
    avg: number;
    max: number;
    min: number;
    results: Results[];
}

export function ping(options: Options, callback: (error: Error, result: Result) => void): void;
export function probe(address: string, port: number, callback: (error: Error, result: Result) => void): void;

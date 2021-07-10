// Type definitions for tcp-ping 0.1
// Project: https://github.com/wesolyromek/tcp-ping
// Definitions by: JUNG YONG WOO <https://github.com/stegano>
//                 rymate1234 <https://github.com/rymate1234>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    address?: string | undefined;
    port?: number | undefined;
    attempts?: number | undefined;
    timeout?: number | undefined;
}

export interface Results {
    seq: number;
    time: number | undefined;
    err?: Error | undefined;
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
export function probe(address: string, port: number, callback: (error: Error, result: boolean) => void): void;

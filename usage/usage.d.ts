// Type definitions for usage
// Project: https://github.com/arunoda/node-usage
// Definitions by: Pascal Vomhoff <https://github.com/pvomhoff>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped



export interface ResultObject {
    memory: number;
    memoryInfo: {
        rss: number;
        vsize: number;
    }
    cpu: number;
}

export interface Options {
    keepHistory: boolean;
}

declare export function lookup(pid: number, callback: (err: Error, result: ResultObject) => void): void;
declare export function lookup(pid: number, options: Options, callback: (err: Error, result: ResultObject) => void): void;

//Only availible on linux
declare export function clearHistory(pid?: number): void;

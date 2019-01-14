// Type definitions for pidusage 2.0
// Project: https://github.com/soyuka/pidusage
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 wujingtao <https://github.com/mx601595686>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

interface IStat {
    /**
     * percentage (from 0 to 100*vcore)
     */
    cpu: number;

    /**
     * bytes
     */
    memory: number;

    /**
     * PPID
     */
    ppid: number;

    /**
     * PID
     */
    pid: number;

    /**
     * ms user + system time
     */
    ctime: number;

    /**
     * ms since the start of the process
     */
    elapsed: number;

    /**
     * ms since epoch
     */
    timestamp: number;
}

declare function pidusage(pid: number | string, callback: (err: Error | null, stats: IStat) => void): void;
declare function pidusage(pid: number | string, options: { [key: string]: any }, callback: (err: Error | null, stats: IStat) => void): void;
declare function pidusage(pids: Array<number | string>, callback: (err: Error | null, stats: { [key: string]: IStat }) => void): void;
declare function pidusage(pids: Array<number | string>, options: { [key: string]: any }, callback: (err: Error | null, stats: { [key: string]: IStat }) => void): void;
declare function pidusage(pid: number | string): Promise<IStat>;
declare function pidusage(pid: number | string, options: { [key: string]: any }): Promise<IStat>;
declare function pidusage(pids: Array<number | string>): Promise<{ [key: string]: IStat }>;
declare function pidusage(pids: Array<number | string>, options: { [key: string]: any }): Promise<{ [key: string]: IStat }>;

declare namespace pidusage {
    export type Status = IStat;

    /**
     * If needed this function can be used to clear the event loop. 
     * Indeed, we're registering an interval to free up the in-memory metrics. 
     * By calling this, it will clear this interval and all delete all in-memory data
     */
    export const clear: () => void;
}

export = pidusage;

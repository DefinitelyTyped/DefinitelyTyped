// Type definitions for pidusage 2.0
// Project: https://github.com/soyuka/pidusage
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 wujingtao <https://github.com/mx601595686>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

declare function pidusage(pid: number | string, callback: (err: Error | null, stats: Stat) => void): void;
declare function pidusage(pids: Array<number | string>, callback: (err: Error | null, stats: { [key: string]: Stat }) => void): void;
declare function pidusage(pid: number | string): Promise<Stat>;
declare function pidusage(pids: Array<number | string>): Promise<{ [key: string]: Stat }>;

export default pidusage;

export interface Stat {
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

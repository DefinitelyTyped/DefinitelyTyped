// Type definitions for pidusage 2.0
// Project: https://github.com/soyuka/pidusage
// Definitions by: Cyril Schumacher <https://github.com/cyrilschumacher>
//                 wujingtao <https://github.com/mx601595686>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/**
 * @param pids A pid or a list of pids.
 * @param callback Called when the statistics are ready.
 */
declare function pidusage(pids: number | number[] | string | string[], callback: (err: Error | null, stats: pidusage.Stat) => void): void;
/**
 * @param pids A pid or a list of pids.
 */
declare function pidusage(pids: number | number[] | string | string[]): Promise<pidusage.Stat>;

declare namespace pidusage {
    interface Stat {
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
}

export = pidusage;

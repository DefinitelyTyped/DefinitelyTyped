/// <reference types="node" />
import * as GCProfiler from "gc-profiler";

export = memoryUsage;

/**
 * Creates a readable stream that samples and emits memory usage over time.
 *
 * The stream emits samples in the form of JavaScript objects:
 *
 * ```
 * {
 *   rss: 4935680,       // Resident set size: Memory assigned to the process in bytes
 *   heapTotal: 1826816, // V8 heap memory allocated in bytes
 *   heapUsed: 650472,   // V8 heap memory used in bytes
 *   ts: 1479179912921,  // UNIX epoch timestamp for sample in milliseconds (only present if `options.ts` is `true`)
 *   gc: null            // Indicates if sample was taken after a garbage collection run (only present if `options.gc` is `true`)
 * }
 * ```
 *
 * @example
 * import * as fs from 'fs'
 * import csvWriter = require('csv-write-stream')
 * import memoryUsage = require('memory-usage')
 *
 * memoryUsage(2000)
 *   .pipe(csvWriter())
 *   .pipe(fs.createWriteStream('memory.csv'))
 */
declare function memoryUsage(opts?: number | memoryUsage.Options): NodeJS.ReadableStream;

declare namespace memoryUsage {
    interface Options {
        /**
         * The sampling frequency in milliseconds.
         *
         * @default 5000
         */
        freq?: number | undefined;
        /**
         * Whether a timestamp should be outputtet along with the memory samples.
         *
         * @default false
         */
        ts?: boolean | undefined;
        /**
         * Whether garbage collection should be profiled and logged along with the memory samples.
         *
         * @default false
         */
        gc?: boolean | undefined;
    }

    interface Sample extends NodeJS.MemoryUsage {
        /**
         * Resident set size: Memory assigned to the process in bytes.
         */
        rss: number;
        /**
         * V8 heap memory allocated in bytes.
         */
        heapTotal: number;
        /**
         * V8 heap memory used in bytes.
         */
        heapUsed: number;
        /**
         * UNIX epoch timestamp for sample in milliseconds (only present if `options.ts` is `true`).
         */
        ts?: number | undefined;
        /**
         * Indicates if sample was taken after a garbage collection run (only present if `options.gc` is `true`).
         *
         * If the `gc` property is `null`, it means that the sample wasn't taken
         * after a garbage collection run. If the value is a string, it will
         * indicate the type of garbage collection run.
         *
         * Note that samples indicating a garbage collection run might be a few
         * hundred milliseconds delayed. This means that you might see a regular
         * timed sample appear prior in the stream with reduced memory usage, even
         * though there's no official indication of a garbage collection run yet.
         */
        gc?: GCType | null | undefined;
    }

    type GCType = GCProfiler.GCType;
}

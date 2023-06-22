// Type definitions for ansi-diff-stream 1.2
// Project: https://github.com/mafintosh/ansi-diff-stream
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { Transform } from 'stream';

export = ansiDiffStream;

/**
 * Create a new diff stream. You should pipe it to a ansi capable stream.
 *
 * @example
 * import differ = require('ansi-diff-stream')
 * const diff = differ()
 *
 * setInterval(() => {
 *   diff.write(`\
 * This is a demo
 * The time is: ${new Date()}
 * That is all`);
 * }, 500)
 *
 * diff.pipe(process.stdout)
 * // =>
 * // This is a demo
 * // The time is: Thu Jul 14 2016 19:46:56 GMT+0200 (CEST)
 * // That is all
 */
declare function ansiDiffStream(): ansiDiffStream.AnsiDiffStream;

declare namespace ansiDiffStream {
    interface AnsiDiffStream extends Transform {
        /**
         * Will reset the diff. Useful you print something manually in between updates.
         */
        reset(): void;
        /**
         * Clear the last printed output from the screen. Similar to doing stream.write('').
         */
        clear(): void;
    }
}

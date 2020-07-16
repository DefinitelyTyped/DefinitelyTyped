/*
 * Custom entities exposed in the global environment.
 *
 * The global environment changes with execution context. Some items are
 * available only in the init context, others only during VU logic execution,
 * others in both contexts. Comments note availability.
 */

import { bytes } from '.';

export {};

// Available without importing
declare global {
    // === Init context only ===
    // -------------------------

    /**
     * Opens a file, reading all its contents into memory.
     * https://k6.io/docs/javascript-api/init-context/open-filepath-mode
     * @param filePath - Path to file.
     * @returns File contents decoded as UTF-8.
     * @example
     * let binFile = open('/path/to/file.bin', 'b');
     * export default function () {
     * var data = {
     *    field: 'this is a standard form field',
     *    file: http.file(binFile, 'test.bin'),
     *  };
     *  const res = http.post('https://example.com/upload', data);
     *  sleep(3);
     * }
     */
    function open(filePath: string): string;

    /**
     * Opens a file, reading all its contents into memory.
     * https://k6.io/docs/javascript-api/init-context/open-filepath-mode
     * @param filePath - Path to file.
     * @returns Binary file contents.
     * @example
     * let binFile = open('/path/to/file.bin', 'b');
     * export default function () {
     * var data = {
     *    field: 'this is a standard form field',
     *    file: http.file(binFile, 'test.bin'),
     *  };
     *  const res = http.post('https://example.com/upload', data);
     *  sleep(3);
     * }
     */
    function open(filePath: string, mode: 'b'): bytes;

    // === Init context and VU logic ===
    // ---------------------------------

    /**
     * Environment variables.
     * https://k6.io/docs/using-k6/environment-variables
     */
    const __ENV: { [name: string]: string };

    // === VU logic only ===
    // ---------------------

    /**
     * Interface to system console.
     */
    let console: Console;

    /**
     * Current VU number.
     * https://k6.io/docs/using-k6/execution-context-variables
     */
    const __VU: number;

    /**
     * Current iteration number.
     * https://k6.io/docs/using-k6/execution-context-variables
     */
    const __ITER: number;
}

interface Console {
    /** Log debug message. */
    debug: Logger;

    /** Log error message. */
    error: Logger;

    /** Log informational message. */
    info: Logger;

    /** Log message. */
    log: Logger;

    /** Log warning message. */
    warn: Logger;
}

/**
 * Log message procedure.
 */
interface Logger {
    /**
     * @param msg - Message to log.
     * @param fields - Arbitrary data to attach to message.
     */
    (msg: any, ...fields: any[]): void;
}

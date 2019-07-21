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
    // === Init context only

    /**
     * Opens a file, reading all its contents into memory.
     * https://docs.k6.io/docs/open-filepath-mode
     * @param filePath - Path to file.
     * @returns File contents decoded as UTF-8.
     * @public
     */
    function open(filePath: string): string;

    /**
     * Opens a file, reading all its contents into memory.
     * https://docs.k6.io/docs/open-filepath-mode
     * @param filePath - Path to file.
     * @returns Binary file contents.
     * @public
     */
    function open(filePath: string, mode: 'b'): bytes;

    // === Init context and VU body
    const __ENV: object;

    // === VU body only
    let console: Console;
    const __VU: number; // Changes across VUs
    const __ITER: number; // Changes across iterations
}

interface Console {
    debug(msg: any, ...fields: any[]): void;
    error(msg: any, ...fields: any[]): void;
    info(msg: any, ...fields: any[]): void;
    log(msg: any, ...fields: any[]): void;
    warn(msg: any, ...fields: any[]): void;
}

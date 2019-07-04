import { bytes } from '.';

export {};

// Available without importing
declare global {
    // Init context only
    function open(filePath: string): string;
    function open(filePath: string, mode: 'b'): bytes;

    // Init context and VU body
    const __ENV: object;

    // VU body only
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

// Type definitions for std-mocks 1.0
// Project: https://github.com/neoziro/std-mocks#readme
// Definitions by: Jeff Dickey <https://github.com/jdxcode>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Options {
    stdout?: boolean;
    stderr?: boolean;
}

/**
 * Start mocking std output
 */
export function use(opts?: Options & {print?: boolean}): void;

/**
 * Restore std output
 */
export function restore(opts?: Options): void;

/**
 * Flush collected output
 */
export function flush(opts: Options & {stdout: false, stderr: false}): {};
export function flush(opts: Options & {stderr: false}): {stdout: string[]};
export function flush(opts: Options & {stdout: false}): {stderr: string[]};
export function flush(opts?: Options): {stdout: string[], stderr: string[]};

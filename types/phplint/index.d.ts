// Type definitions for phplint 2.0
// Project: https://github.com/wayneashleyberry/phplint
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="grunt" />

export interface Options {
    stdout?: boolean | undefined;
    stderr?: boolean | undefined;
    limit?: number | undefined;
    suppress?: boolean | undefined;
    useCache?: boolean | undefined;
    cacheDirName?: string | undefined;
    tmpDir?: string | undefined;
    phpCmd?: string | undefined;
}

export type Callback = (error: string, stdout?: string, stderr?: string) => void;

export function cli(paths: string | readonly string[], options: Options, callback?: Callback): void;

export function lint(files: string | readonly string[], options: Options, callback: Callback): void;
export function lint(files: string | readonly string[], callback: Callback): void;

export function clearCache(cacheDirName: string, tmpDir: string, callback: Callback): void;
export function clearCache(callback: Callback): void;

export function gruntPlugin(grunt: IGrunt): void;

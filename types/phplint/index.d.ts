// Type definitions for phplint 2.0
// Project: https://github.com/wayneashleyberry/phplint
// Definitions by: Adam Thompson-Sharpe <https://github.com/MysteryBlokHed>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 2.8
import grunt = require('grunt');
type IGrunt = typeof grunt;

export interface Options {
    stdout?: boolean;
    stderr?: boolean;
    limit?: number;
    suppress?: boolean;
    useCache?: boolean;
    cacheDirName?: string;
    tmpDir?: string;
    phpCmd?: string;
}

export type Callback = (error: string, stdout?: string, stderr?: string) => void;

export function cli(paths: string | readonly string[], options: Options, callback?: Callback): void;

export function lint(files: string | readonly string[], options: Options, callback: Callback): void;
export function lint(files: string | readonly string[], callback: Callback): void;

export function clearCache(cacheDirName: string, tmpDir: string, callback: Callback): void;
export function clearCache(callback: Callback): void;

export function gruntPlugin(grunt: IGrunt): void;

export {};

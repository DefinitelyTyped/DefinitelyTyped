// Type definitions for selenium-standalone 6.15
// Project: https://github.com/vvo/selenium-standalone
// Definitions by: Sander de Waal <https://github.com/SanderDeWaal1992>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from "http";
import { URL } from "url";
import { ChildProcess, SpawnOptions } from "child_process";

export function install(cb: (error: Error | undefined, fsPaths: FsPaths) => void): void;
export function install(opts: InstallOpts, cb: (error: Error | undefined, fsPaths: FsPaths) => void): void;
export function install(optsCb: InstallOpts | ((error: Error | undefined, fsPaths: FsPaths) => void), cb?: (error: Error | undefined, fsPaths: FsPaths) => void): void;

export function start(cb: (error: Error | null, selenium: ChildProcess) => void): void;
export function start(opts: StartOpts, cb: (error: Error | null, selenium: ChildProcess) => void): void;
export function start(optsCb: StartOpts | ((error: Error | null, selenium: ChildProcess) => void), cb?: (error: Error | null, selenium: ChildProcess) => void): void;

export interface InstallOpts {
    baseURL?: string;
    basePath?: string;
    version?: string;
    drivers?: {
        [browser: string]: {
            version?: string;
            arch: string | "ia32" | "x64";
            baseURL: string;
        }
    };
    progressCb?: (totalLength: number, progressLength: number, chunkLength: number) => void;
    logger?: (message: string) => void;
    requestOpts?: http.RequestOptions | string | URL;
    cb?: (error: Error) => void;
}

export interface StartOpts {
    basePath?: string;
    version?: string;
    drivers?: {
        [browser: string]: {
            version?: string;
            arch: string | "ia32" | "x64";
            baseURL: string;
        }
    };
    seleniumArgs?: string[];
    javaArgs?: string[];
    spawnOptions?: SpawnOptions;
    spawnCb?: (selenium?: ChildProcess) => void;
    javaPath?: string;
    requestOpts?: http.RequestOptions | string | URL;
    cb?: (error: Error, child: ChildProcess) => void;
}

export interface FsPaths {
    [x: string]: any;
    chrome?: {
        [x: string]: any;
        installPath: string;
    };
    ie?: {
        [x: string]: any;
        installPath: string;
    };
    edge?: {
        [x: string]: any;
        installPath: string;
    };
    firefox?: {
        [x: string]: any;
        installPath: string;
    };
    selenium?: {
        [x: string]: any;
        installPath: string;
    };
}

export { ChildProcess, SpawnOptions } from "child_process";

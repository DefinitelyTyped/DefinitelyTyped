// Type definitions for selenium-standalone 7.0
// Project: https://github.com/vvo/selenium-standalone
// Definitions by: Sander de Waal <https://github.com/SanderDeWaal1992>
//                 Mykola Grybyk <https://github.com/mgrybyk>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as http from "http";
import { URL } from "url";
import { ChildProcess, SpawnOptions } from "child_process";

export function install(opts?: InstallOpts): Promise<void>;

export function start(opts?: StartOpts): Promise<ChildProcess>;

export interface InstallOpts {
    baseURL?: string;
    basePath?: string;
    version?: string;
    drivers?: {
        [browser: string]: DriverOptions
    };
    progressCb?: (totalLength: number, progressLength: number, chunkLength: number) => void;
    logger?: (message: string) => void;
    requestOpts?: http.RequestOptions | string | URL;
}

export interface StartOpts {
    basePath?: string;
    version?: string;
    drivers?: {
        [browser: string]: DriverOptions
    };
    seleniumArgs?: string[];
    javaArgs?: string[];
    spawnOptions?: SpawnOptions;
    javaPath?: string;
    requestOpts?: http.RequestOptions | string | URL;
}

export interface DriverOptions {
    version?: string;
    arch?: string | "ia32" | "x64";
    baseURL?: string;
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

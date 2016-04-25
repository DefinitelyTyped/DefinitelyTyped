// Type definitions for temp 0.8.3
// Project: https://www.npmjs.com/package/temp, https://github.com/bruce/node-temp
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../node/node.d.ts" />


import * as temp from "temp";
import * as fs from "fs";

export interface AffixOptions {
    prefix?: string;
    suffix?: string;
    dir?: string;
}

export declare var dir: string;

export declare function track(value?: boolean): typeof temp;

export declare function mkdir(affixes: string, callback?: (err: any, dirPath: string) => void): void;
export declare function mkdir(affixes: AffixOptions, callback?: (err: any, dirPath: string) => void): void;

export declare function mkdirSync(affixes: string): string;
export declare function mkdirSync(affixes: AffixOptions): string;

export declare function open(affixes: string, callback?: (err: any, result: { path: string, fd: number }) => void): void;
export declare function open(affixes: AffixOptions, callback?: (err: any, result: { path: string, fd: number }) => void): void;

export declare function openSync(affixes: string): { path: string, fd: number };
export declare function openSync(affixes: AffixOptions): { path: string, fd: number };

export declare function path(affixes: string, defaultPrefix?: string): string;
export declare function path(affixes: AffixOptions, defaultPrefix?: string): string;

export declare function cleanup(callback?: (result: boolean | { files: number, dirs?: number }) => void): void;

export declare function cleanupSync(): boolean | { files: number, dirs: number };

export declare function createWriteStream(affixes: string): fs.WriteStream;
export declare function createWriteStream(affixes: AffixOptions): fs.WriteStream;

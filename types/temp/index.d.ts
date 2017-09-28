// Type definitions for temp 0.8.3
// Project: https://www.npmjs.com/package/temp, https://github.com/bruce/node-temp
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as temp from "temp";
import * as fs from "fs";

export interface OpenFile {
  path: string;
  fd: number;
}

export interface Stats {
  files: number;
  dirs: number;
}

export interface AffixOptions {
  prefix?: string;
  suffix?: string;
  dir?: string;
}

export declare var dir: string;

export declare function track(value?: boolean): typeof temp;

export declare function mkdir(affixes?: string, callback?: (err: any, dirPath: string) => void): void;
export declare function mkdir(affixes?: AffixOptions, callback?: (err: any, dirPath: string) => void): void;

export declare function mkdirSync(affixes?: string): string;
export declare function mkdirSync(affixes?: AffixOptions): string;

export declare function open(affixes?: string, callback?: (err: any, result: OpenFile) => void): void;
export declare function open(affixes?: AffixOptions, callback?: (err: any, result: OpenFile) => void): void;

export declare function openSync(affixes?: string): OpenFile;
export declare function openSync(affixes?: AffixOptions): OpenFile;

export declare function path(affixes?: string, defaultPrefix?: string): string;
export declare function path(affixes?: AffixOptions, defaultPrefix?: string): string;

export declare function cleanup(callback?: (result: boolean | Stats) => void): void;

export declare function cleanupSync(): boolean | Stats;

export declare function createWriteStream(affixes?: string): fs.WriteStream;
export declare function createWriteStream(affixes?: AffixOptions): fs.WriteStream;


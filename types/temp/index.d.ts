// Type definitions for temp 0.8
// Project: https://www.npmjs.com/package/temp, https://github.com/bruce/node-temp
// Definitions by: Daniel Rosenwasser <https://github.com/DanielRosenwasser>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as temp from ".";
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

export let dir: string;

export function track(value?: boolean): typeof temp;

export function mkdir(affixes?: string | AffixOptions, callback?: (err: any, dirPath: string) => void): void;

export function mkdirSync(affixes?: string | AffixOptions): string;

export function open(affixes?: string | AffixOptions, callback?: (err: any, result: OpenFile) => void): void;

export function openSync(affixes?: string | AffixOptions): OpenFile;

export function path(affixes?: string | AffixOptions, defaultPrefix?: string): string;

export function cleanup(callback?: (result: boolean | Stats) => void): void;

export function cleanupSync(): boolean | Stats;

export function createWriteStream(affixes?: string | AffixOptions): fs.WriteStream;

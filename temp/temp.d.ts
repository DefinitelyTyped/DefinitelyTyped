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

declare export var dir: string;

declare export function track(value?: boolean): typeof temp;

declare export function mkdir(affixes: string, callback?: (err: any, dirPath: string) => void): void;
declare export function mkdir(affixes: AffixOptions, callback?: (err: any, dirPath: string) => void): void;

declare export function mkdirSync(affixes: string): string;
declare export function mkdirSync(affixes: AffixOptions): string;

declare export function open(affixes: string, callback?: (err: any, result: { path: string, fd: number }) => void): void;
declare export function open(affixes: AffixOptions, callback?: (err: any, result: { path: string, fd: number }) => void): void;

declare export function openSync(affixes: string): { path: string, fd: number };
declare export function openSync(affixes: AffixOptions): { path: string, fd: number };

declare export function path(affixes: string, defaultPrefix?: string): string;
declare export function path(affixes: AffixOptions, defaultPrefix?: string): string;

declare export function cleanup(callback?: (result: boolean | { files: number, dirs?: number }) => void): void;

declare export function cleanupSync(): boolean | { files: number, dirs: number };

declare export function createWriteStream(affixes: string): fs.WriteStream;
declare export function createWriteStream(affixes: AffixOptions): fs.WriteStream;

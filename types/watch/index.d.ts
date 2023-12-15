// Imported from: https://github.com/soywiz/typescript-node-definitions/watch.d.ts

/// <reference types="node" />

import fs = require("fs");
import events = require("events");

export interface Files {
    [key: string]: fs.Stats;
}

export interface Monitor extends events.EventEmitter {
    files: Files;

    on(event: "created" | "removed", listener: (f: string, stat: fs.Stats) => void): this;
    on(event: "changed", listener: (f: string, current: fs.Stats, prev: fs.Stats) => void): this;
    on(event: string, listener: (...args: any[]) => void): this;
    stop(): void;
}

export interface BaseOptions {
    ignoreDotFiles?: boolean | undefined;
    filter?(path: string, stat: fs.Stats): boolean;
}

export interface Options extends BaseOptions {
    interval?: number | undefined;
}

export interface WalkOptions extends BaseOptions {
    ignoreUnreadableDir?: boolean | undefined;
    ignoreNotPermitted?: boolean | undefined;
    ignoreDirectoryPattern?: RegExp | undefined;
}

export function watchTree(root: string, callback: (f: string, curr: fs.Stats, prev: fs.Stats) => void): void;
export function watchTree(
    root: string,
    options: Options,
    callback: (f: string, curr: fs.Stats, prev: fs.Stats) => void,
): void;
export function unwatchTree(root: string): void;
export function createMonitor(root: string, callback: (monitor: Monitor) => void): void;
export function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void): void;
export function walk(root: string, callback: (error: Error | null, files: Files | undefined) => void): void;
export function walk(
    root: string,
    options: WalkOptions,
    callback: (error: Error | null, files: Files | undefined) => void,
): void;

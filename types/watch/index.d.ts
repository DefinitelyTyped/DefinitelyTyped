// Type definitions for watch 1.0
// Project: https://github.com/mikeal/watch
// Definitions by: Carlos Ballesteros Velasco <https://github.com/soywiz>, Gyusun Yeom <https://github.com/Perlmint>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/watch.d.ts

/// <reference types="node" />

import fs = require("fs");
import events = require("events");

export type FileOrFiles = fs.Stats | {[key: string]: fs.Stats};

export interface Monitor extends events.EventEmitter {
    files: {[key: string]: fs.Stats};

    on(event: "created" | "removed", listener: (f: FileOrFiles, stat: fs.Stats) => void): this;
    on(event: "changed", listener: (f: FileOrFiles, current: fs.Stats, prev: fs.Stats) => void): this;
    on(event: string | symbol, listener: (...args: any[]) => void): this;
    stop(): void;
}

export interface Options {
    ignoreDotFiles?: boolean;
    filter?(path: string, stat: fs.Stats): boolean;
    interval?: number;
    ignoreUnreadableDir?: boolean;
    ignoreNotPermitted?: boolean;
    ignoreDirectoryPattern?: boolean;
}

export function watchTree(root: string, callback: (f: FileOrFiles, curr: fs.Stats, prev: fs.Stats) => void): void;
export function watchTree(root: string, options: Options, callback: (f: FileOrFiles, curr: fs.Stats, prev: fs.Stats) => void): void;
export function unwatchTree(root: string): void;
export function createMonitor(root: string, callback: (monitor: Monitor) => void): void;
export function createMonitor(root: string, options: Options, callback: (monitor: Monitor) => void): void;

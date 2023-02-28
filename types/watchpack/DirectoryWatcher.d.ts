/// <reference types="node" />

import { EventEmitter } from 'events';
import fs = require('graceful-fs');
import Watcher = require('./Watcher');
import Watchpack = require('.');

declare class DirectoryWatcher extends EventEmitter {
    options: Watchpack.WatcherOptions;
    directories: {
        [path: string]: Watcher | true;
    };
    files: {
        [path: string]: [number, number];
    };
    initialScan: boolean;
    initialScanRemoved: string[];
    nestedWatching: boolean;
    path: string;
    refs: number;
    watcher: fs.FSWatcher;
    watchers: {
        [path: string]: Watcher[];
    };

    constructor(directoryPath: string, options: Watchpack.WatcherOptions);

    setFileTime(filePath: string, mtime: number, initial: boolean, type?: string | boolean): void;

    setDirectory(directoryPath: string, exist: boolean, initial: boolean): void;

    createNestedWatcher(directoryPath: string): void;

    setNestedWatching(flag: boolean): void;

    watch(filePath: string, startTime: number): Watcher;

    onFileAdded(filePath: string, stat: fs.Stats): void;

    onDirectoryAdded(directoryPath: string): void;

    onChange(filePath: string, stat: fs.Stats): void;

    onFileUnlinked(filePath: string): void;

    onDirectoryUnlinked(directoryPath: string): void;

    onWatcherError(): void;

    doInitialScan(): void;

    getTimes(): {
        [path: string]: number;
    };

    close(): void;
}

export = DirectoryWatcher;

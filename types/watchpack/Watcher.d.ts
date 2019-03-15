/// <reference types="node" />
import { EventEmitter } from 'events';
import DirectoryWatcher = require('./DirectoryWatcher');

declare class Watcher extends EventEmitter {
    data: number;
    directoryWatcher: DirectoryWatcher;
    path: string;
    startTime: number;

    constructor(directoryWatcher: DirectoryWatcher, filePath: string, startTime: number);

    checkStartTime(mtime: number, initial: boolean): boolean;

    close(): void;
}

export = Watcher;

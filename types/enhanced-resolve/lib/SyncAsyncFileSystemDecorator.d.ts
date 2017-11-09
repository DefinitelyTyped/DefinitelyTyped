/// <reference types="node" />
import fs = require('fs');
import { AbstractInputFileSystem } from './common-types';

declare class SyncAsyncFileSystemDecorator {
    fs: AbstractInputFileSystem;

    readdir?(path: string, callback: (err: NodeJS.ErrnoException | null, files?: string[]) => void): void;

    readFile?(filename: string, callback: (err: NodeJS.ErrnoException | null, data?: Buffer) => void): void;

    readJson?(path: string, callback: (err: NodeJS.ErrnoException | null, data?: any) => void): void;

    readlink?(path: string, callback: (err: NodeJS.ErrnoException | null, linkString?: string) => void): void;

    stat?(path: string, callback: (err: NodeJS.ErrnoException | null, stats?: fs.Stats) => void): void;

    constructor(fs: AbstractInputFileSystem);
}

export = SyncAsyncFileSystemDecorator;

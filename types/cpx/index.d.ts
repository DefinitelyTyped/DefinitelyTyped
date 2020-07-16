// Type definitions for cpx 1.5
// Project: https://github.com/mysticatea/cpx
// Definitions by: Alan Agius <https://github.com/alan-agius4>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as stream from "stream";
import { EventEmitter } from 'events';

export interface SyncOptions {
    /** remove files that copied on past before copy. */
    clean?: boolean;
    /** Follow symbolic links when copying from them. */
    dereference?: boolean;
    /** Copy empty directories which is matched with the glob. */
    includeEmptyDirs?: boolean;
    /** Preserve UID, GID, ATIME, and MTIME of files. */
    preserve?: boolean;
    /** Do not overwrite files on destination if the source file is older. */
    update?: boolean;
}

export interface AsyncOptions extends SyncOptions {
    /** Function that creates a `stream.Transform` object to transform each copying file. */
    transform?(filepath: string): stream.Transform[];
}

export interface WatchOptions extends AsyncOptions, SyncOptions {
    /** Flag to not copy at the initial time of watch. */
    initialCopy?: boolean;
}

export class Watcher extends EventEmitter {
    constructor(options: WatchOptions);
    open(): void;
    close(): void;
}

export function copy(source: string, dest: string, options?: AsyncOptions, callback?: (error: Error | null) => void): void;
export function copy(source: string, dest: string, callback?: (error: Error | null) => void): void;

export function copySync(source: string, dest: string, options?: SyncOptions): void;

export function watch(source: string, dest: string, options?: WatchOptions): Watcher;

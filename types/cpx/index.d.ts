/// <reference types="node" />

import { EventEmitter } from "events";
import * as stream from "stream";

export interface SyncOptions {
    /** remove files that copied on past before copy. */
    clean?: boolean | undefined;
    /** Follow symbolic links when copying from them. */
    dereference?: boolean | undefined;
    /** Copy empty directories which is matched with the glob. */
    includeEmptyDirs?: boolean | undefined;
    /** Preserve UID, GID, ATIME, and MTIME of files. */
    preserve?: boolean | undefined;
    /** Do not overwrite files on destination if the source file is older. */
    update?: boolean | undefined;
}

export interface AsyncOptions extends SyncOptions {
    /** Function that creates a `stream.Transform` object to transform each copying file. */
    transform?(filepath: string): stream.Transform[];
}

export interface WatchOptions extends AsyncOptions, SyncOptions {
    /** Flag to not copy at the initial time of watch. */
    initialCopy?: boolean | undefined;
}

export class Watcher extends EventEmitter {
    constructor(options: WatchOptions);
    open(): void;
    close(): void;
}

export function copy(
    source: string,
    dest: string,
    options?: AsyncOptions,
    callback?: (error: Error | null) => void,
): void;
export function copy(source: string, dest: string, callback?: (error: Error | null) => void): void;

export function copySync(source: string, dest: string, options?: SyncOptions): void;

export function watch(source: string, dest: string, options?: WatchOptions): Watcher;

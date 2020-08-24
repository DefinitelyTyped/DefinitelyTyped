// Type definitions for @parcel/fs 2.0
// Project: https://github.com/parcel-bundler/parcel#readme
// Definitions by: Arjun Barrett <https://github.com/101arrowz>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 3.7
/// <reference types="node" />

// All type literals are intentional to encourage exact types
// tslint:disable:interface-over-type-literal

import { Stats } from 'fs';
import { Readable, Writable } from 'stream';
import {
  ParcelWatcherOptions,
  ParcelWatcherEvent,
  ParcelWatcherSubscription
} from '@parcel/watcher';
import WorkerFarm from '@parcel/workers';

export interface Dirent {
    readonly name: string;
    isBlockDevice(): boolean;
    isCharacterDevice(): boolean;
    isDirectory(): boolean;
    isFIFO(): boolean;
    isFile(): boolean;
    isSocket(): boolean;
    isSymbolicLink(): boolean;
}

export type FileOptions = {
    mode?: number;
};

export type ReaddirOptions = {
  withFileTypes?: false
} | {
  withFileTypes: true
};

/**
 * A virtual (or real) filesystem used for Parcel IO operations
 */
export interface FileSystem {
    readFile(filePath: string): Promise<Buffer>;
    readFile(filePath: string, encoding: BufferEncoding): Promise<string>;
    readFileSync(filePath: string): Buffer;
    readFileSync(filePath: string, encoding: BufferEncoding): string;
    writeFile(
        filePath: string,
        contents: Buffer | string,
        options?: FileOptions
    ): Promise<void>;
    copyFile(
        source: string,
        destination: string,
        flags?: number
    ): Promise<void>;
    stat(filePath: string): Promise<Stats>;
    statSync(filePath: string): Stats;
    readdir(path: string, opts?: { withFileTypes?: false }): Promise<string[]>;
    readdir(path: string, opts: { withFileTypes: true }): Promise<Dirent[]>;
    readdirSync(
        path: string,
        opts?: { withFileTypes?: false }
    ): string[];
    readdirSync(
        path: string,
        opts: { withFileTypes: true }
    ): Dirent[];
    unlink(path: string): Promise<void>;
    realpath(path: string): Promise<string>;
    realpathSync(path: string): string;
    exists(path: string): Promise<boolean>;
    existsSync(path: string): boolean;
    mkdirp(path: string): Promise<void>;
    rimraf(path: string): Promise<void>;
    ncp(source: string, destination: string): Promise<void>;
    createReadStream(path: string, options?: FileOptions): Readable;
    createWriteStream(path: string, options?: FileOptions): Writable;
    cwd(): string;
    chdir(dir: string): void;
    watch(
      dir: string,
      fn: (err: Error | null, events: ParcelWatcherEvent[]) => unknown,
      opts: ParcelWatcherOptions,
    ): Promise<ParcelWatcherSubscription>;
    getEventsSince(
      dir: string,
      snapshot: string,
      opts: ParcelWatcherOptions,
    ): Promise<ParcelWatcherEvent[]>;
    writeSnapshot(
      dir: string,
      snapshot: string,
      opts: ParcelWatcherOptions,
    ): Promise<void>;
}

export const NodeFS: {
  new (): FileSystem;
};
export const MemoryFS: {
  new (farm: WorkerFarm): FileSystem;
};
export const OverlayFS: {
  new (writable: FileSystem, readable: FileSystem): FileSystem;
};

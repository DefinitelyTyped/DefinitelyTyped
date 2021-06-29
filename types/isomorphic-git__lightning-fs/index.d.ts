// Type definitions for @isomorphic-git/lightning-fs 4.4
// Project: https://github.com/isomorphic-git/lightning-fs#readme
// Definitions by: Progyan Bhattacharya <https://github.com/Progyan1997>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Stats } from 'fs';

declare class LightningFS {
    /** Collection of FS Operations that returns Promises */
    promises: LightningFS.PromisifedFS;

    /** Initialise File System Backend */
    init(name: string, opt?: LightningFS.FSConstructorOptions): void;
    /** Activates Cache */
    activate(): Promise<void>;
    /** Deactivates Cache */
    deactivate(): Promise<void>;
    /** Reads File Content from Disk */
    readFile(filePath: string, opts?: LightningFS.ReadFileOpts): Promise<Uint8Array>;
    /** Writes File Content to Disk */
    writeFile(filePath: string, data: Uint8Array, opts?: LightningFS.WriteFileOpts): Promise<void>;
    /** Remove File from Disk */
    unlink(filePath: string): Promise<void>;
    /** Lists all files and sub-directory in given directory Path */
    readdir(filePath: string): Promise<string[]>;
    /** Creates Directory in Disk for given Path */
    mkdir(filePath: string, opts?: LightningFS.DirOpts): Promise<void>;
    /** Remove Directory from Disk */
    rmdir(filePath: string): Promise<void>;
    /** Rename File Name in Disk */
    rename(oldFilepath: string, newFilepath: string): Promise<void>;
    /** Unix File Stat from Disk */
    stat(filePath: string): Promise<Stats>;
    /** Unix File Stat from Disk */
    lstat(filePath: string): Promise<Stats>;
    /** Read Content of file targeted by a Symbolic Link */
    readlink(filePath: string): Promise<string>;
    /** Create Symbolic Link to a target file */
    symlink(target: string, filePath: string): Promise<void>;

    constructor(id: string | number | symbol, opt?: LightningFS.FSConstructorOptions);
}

declare namespace LightningFS {
    interface FSConstructorOptions {
        /** Delete the database and start with an empty filesystem. Default: false */
        wipe: boolean;
        /** Let readFile requests fall back to an HTTP request to this base URL */
        url: string;
        /** Fall back to HTTP for every read of a missing file, even if unbacked. Default: false */
        urlauto: boolean;
        /** Customize the database name */
        fileDbName: string;
        /** Customize the store name */
        fileStoreName: string;
        /** Customize the database name for the lock mutex */
        lockDbName: string;
        /** Customize the store name for the lock mutex */
        lockStoreName: string;
        /** If true, avoids mutex contention during initialization. Default: false */
        defer: boolean;
        /**
         * If present, none of the other arguments(except `defer`) have any effect,
         * and instead of using the normal LightningFS stuff, LightningFS acts as a wrapper around the provided custom backend.
         */
        backend: FSBackend;
    }

    interface ReadFileOpts {
        /** Encoding of Data */
        encoding: 'utf8';
    }

    interface WriteFileOpts {
        /** Encoding of Data */
        encoding?: 'utf8';
        /** Unix Octet Represenation of File Mode */
        mode: number;
    }

    interface DirOpts {
        /** Unix Octet Represenation of File Mode */
        mode?: number;
    }

    interface FSBackend {
        /** Initialise File System Backend */
        init(name: string, opt?: FSConstructorOptions): void;
        /** Activates Cache */
        activate(): Promise<void>;
        /** Deactivates Cache */
        deactivate(): Promise<void>;
        /** Reads File Content from Disk */
        readFile(filePath: string, opts: ReadFileOpts): Promise<Uint8Array>;
        /** Writes File Content to Disk */
        writeFile(filePath: string, data: Uint8Array, opts: WriteFileOpts): Promise<void>;
        /** Remove File from Disk */
        unlink(filePath: string): Promise<void>;
        /** Lists all files and sub-directory in given directory Path */
        readdir(filePath: string): string[];
        /** Creates Directory in Disk for given Path */
        mkdir(filePath: string, opts: DirOpts): void;
        /** Remove Directory from Disk */
        rmdir(filePath: string): void;
        /** Rename File Name in Disk */
        rename(oldFilepath: string, newFilepath: string): void;
        /** Unix File Stat from Disk */
        stat(filePath: string): Stats;
        /** Unix File Stat from Disk */
        lstat(filePath: string): Stats;
        /** Read Content of file targeted by a Symbolic Link */
        readlink(filePath: string): string;
        /** Create Symbolic Link to a target file */
        symlink(target: string, filePath: string): void;
    }

    interface PromisifedFS {
        /** Initialise File System Backend */
        init(name: string, opt?: FSConstructorOptions): void;
        /** Activates Cache */
        activate(): Promise<void>;
        /** Deactivates Cache */
        deactivate(): Promise<void>;
        /** Reads File Content from Disk */
        readFile(filePath: string, opts?: ReadFileOpts): Promise<Uint8Array>;
        /** Writes File Content to Disk */
        writeFile(filePath: string, data: Uint8Array, opts?: WriteFileOpts): Promise<void>;
        /** Remove File from Disk */
        unlink(filePath: string): Promise<void>;
        /** Lists all files and sub-directory in given directory Path */
        readdir(filePath: string): Promise<string[]>;
        /** Creates Directory in Disk for given Path */
        mkdir(filePath: string, opts?: DirOpts): Promise<void>;
        /** Remove Directory from Disk */
        rmdir(filePath: string): Promise<void>;
        /** Rename File Name in Disk */
        rename(oldFilepath: string, newFilepath: string): Promise<void>;
        /** Unix File Stat from Disk */
        stat(filePath: string): Promise<Stats>;
        /** Unix File Stat from Disk */
        lstat(filePath: string): Promise<Stats>;
        /** Read Content of file targeted by a Symbolic Link */
        readlink(filePath: string): Promise<string>;
        /** Create Symbolic Link to a target file */
        symlink(target: string, filePath: string): Promise<void>;
    }
}

export = LightningFS;

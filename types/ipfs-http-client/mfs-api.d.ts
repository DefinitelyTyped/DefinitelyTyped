import { EntryType, NodeCallback } from './common.d';

export interface StatOptions {
    hash: boolean;
    size: boolean;
    withLocal: boolean;
    cidBase: string;
}

export interface StatResult {
    hash: string;
    size: number;
    cumulativeSize: number;
    type: EntryType;
    blocks: number;
    withLocality: boolean;
    local: boolean;
    sizeLocal: number;
}

export interface CpOptions {
    parents: boolean;
    format: string;
    hashAlg: string;
    flush: boolean;
}

export interface MvOptions extends CpOptions {}

export interface MkdirOptions extends CpOptions {}

export interface RmOptions {
    recursive: boolean;
}

export interface ReadOptions {
    offset: number;
    length: number;
}

export type WriteContent = Buffer | ReadableStream | Blob | string;

export interface WriteOptions {
    offset: number;
    create: boolean;
    truncate: boolean;
    parents: boolean;
    length: number;
    rawLeaves: boolean;
    cidVersion: boolean;
}

export interface LsOptions {
    long: boolean;
    cidBase: string;
}

export interface SortableLsOptions {
    sort: boolean;
}

export interface LsResult {
    name: string;
    type: EntryType;
    size: number;
    hash: string;
}

export interface Mfs {
    cp(from1: string, to: string, options?: Partial<CpOptions>): Promise<void>;
    cp(from1: string, from2: string, to: string, options?: Partial<CpOptions>): Promise<void>;
    cp(from1: string, from2: string, from3: string, to: string, options?: Partial<CpOptions>): Promise<void>;
    cp(from1: string, to: string, callback: NodeCallback<void>): void;
    cp(from1: string, from2: string, to: string, callback: NodeCallback<void>): void;
    cp(from1: string, from2: string, from3: string, to: string, callback: NodeCallback<void>): void;
    cp(from1: string, to: string, options: Partial<CpOptions>, callback: NodeCallback<void>): void;
    cp(from1: string, from2: string, to: string, options: Partial<CpOptions>, callback: NodeCallback<void>): void;
    cp(
        from1: string,
        from2: string,
        from3: string,
        to: string,
        options: Partial<CpOptions>,
        callback: NodeCallback<void>,
    ): void;
    cp(...args: any[]): Promise<void>;
    cp(...args: any[]): void;

    mkdir(path: string, options?: Partial<MkdirOptions>): Promise<void>;
    mkdir(path: string, callback: NodeCallback<void>): void;
    mkdir(path: string, options: Partial<MkdirOptions>, callback: NodeCallback<void>): void;

    stat(path: string, options?: Partial<StatOptions>): Promise<StatResult>;
    stat(path: string, callback: NodeCallback<StatResult>): void;
    stat(path: string, options: Partial<StatOptions>, callback: NodeCallback<StatResult>): void;

    rm(path1: string, options?: Partial<RmOptions>): Promise<void>;
    rm(path1: string, path2: string, options?: Partial<RmOptions>): Promise<void>;
    rm(path1: string, path2: string, path3: string, options?: Partial<RmOptions>): Promise<void>;
    rm(path1: string, callback: NodeCallback<void>): void;
    rm(path1: string, path2: string, callback: NodeCallback<void>): void;
    rm(path1: string, path2: string, path3: string, callback: NodeCallback<void>): void;
    rm(path1: string, options: Partial<RmOptions>, callback: NodeCallback<void>): void;
    rm(path1: string, path2: string, options: Partial<RmOptions>, callback: NodeCallback<void>): void;
    rm(path1: string, path2: string, path3: string, options: Partial<RmOptions>, callback: NodeCallback<void>): void;
    rm(...args: any[]): Promise<void>;
    rm(...args: any[]): void;

    read(path: string, options?: Partial<ReadOptions>): Promise<Buffer>;
    read(path: string, callback: NodeCallback<Buffer>): void;
    read(path: string, options: Partial<ReadOptions>, callback: NodeCallback<Buffer>): void;

    readReadableStream(path: string, options?: Partial<ReadOptions>): ReadableStream;

    write(path: string, content: WriteContent, options?: Partial<WriteOptions>): Promise<void>;
    write(path: string, content: WriteContent, callback: NodeCallback<void>): void;
    write(path: string, content: WriteContent, options: Partial<WriteOptions>, callback: NodeCallback<void>): void;

    mv(from1: string, to: string, options?: Partial<MvOptions>): Promise<void>;
    mv(from1: string, from2: string, to: string, options?: Partial<MvOptions>): Promise<void>;
    mv(from1: string, from2: string, from3: string, to: string, options?: Partial<MvOptions>): Promise<void>;
    mv(from1: string, to: string, callback: NodeCallback<void>): void;
    mv(from1: string, from2: string, to: string, callback: NodeCallback<void>): void;
    mv(from1: string, from2: string, from3: string, to: string, callback: NodeCallback<void>): void;
    mv(from1: string, to: string, options: Partial<MvOptions>, callback: NodeCallback<void>): void;
    mv(from1: string, from2: string, to: string, options: Partial<MvOptions>, callback: NodeCallback<void>): void;
    mv(
        from1: string,
        from2: string,
        from3: string,
        to: string,
        options: Partial<MvOptions>,
        callback: NodeCallback<void>,
    ): void;
    mv(...args: any[]): Promise<void>;
    mv(...args: any[]): void;

    flush(...paths: string[]): Promise<void>;
    flush(callback: NodeCallback<void>): void;
    flush(paths1: string, callback: NodeCallback<void>): void;
    flush(paths1: string, paths2: string, callback: NodeCallback<void>): void;
    flush(paths1: string, paths2: string, paths3: string, callback: NodeCallback<void>): void;
    flush(...args: any[]): void;

    ls(options?: Partial<SortableLsOptions>): Promise<LsResult[]>;
    ls(path: string, options?: Partial<SortableLsOptions>): Promise<LsResult[]>;
    ls(callback: NodeCallback<LsResult>): void;
    ls(path: string, callback: NodeCallback<LsResult>): void;
    ls(options: Partial<SortableLsOptions>, callback: NodeCallback<LsResult>): void;
    ls(path: string, options: Partial<SortableLsOptions>, callback: NodeCallback<LsResult>): void;

    lsReadableStream(options?: Partial<LsOptions>): ReadableStream;
    lsReadableStream(path: string, options?: Partial<LsOptions>): ReadableStream;

    /**
     * TODO: find/create proper typings for pull-stream package
     */
    lsPullStream(options?: Partial<LsOptions>): unknown;
    lsPullStream(path: string, options?: Partial<LsOptions>): unknown;
    readPullStream(path: string, options?: Partial<ReadOptions>): unknown;
}

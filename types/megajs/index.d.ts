/// <reference types="node" />

import { EventEmitter } from "events";
import { Readable, Stream, Writable } from "stream";

export interface AccountInfo {
    type: string;
    spaceUsed: number;
    spaceTotal: number;
    downloadBandwidthUsed: number;
    downloadBandwidthTotal: number;
    sharedBandwidthUsed: number;
    sharedBandwidthLimit: number;
}

export interface DownloadOptions {
    maxConnections?: number | undefined;
    initialChunkSize?: number | undefined;
    chunkSizeIncrement?: number | undefined;
    maxChunkSize?: number | undefined;
    returnCiphertext?: boolean | undefined;
    start?: any;
    end?: any;
}

export interface UploadOptions {
    name: string;
    attributes?: object | undefined;
    size?: any;
    thumbnailImage?: Buffer | Readable | undefined;
    previewImage?: Buffer | Readable | undefined;
}

export interface LinkOptions {
    noKey?: boolean | undefined;
    key?: string | Buffer | undefined;
}

export interface MakeDirectoryOptions {
    name: string;
    attributes?: object | undefined;
    key?: string | Buffer | undefined;
}

export interface FileOptions {
    downloadId: string;
    key: string;
    directory?: boolean | undefined;
}

export interface StorageOptions {
    email: string;
    password: string;
    keepalive?: boolean | undefined;
    autologin?: boolean | undefined;
    autoload?: boolean | undefined;
}

export class File extends EventEmitter {
    constructor(options: FileOptions | string);
    static fromURL(options: FileOptions | string): File;
    static unpackAttributes(at: any): JSON;
    name: string;
    attributes: object;
    size: number;
    key: Buffer;
    timestamp: number;
    nodeId: string;
    downloadId: string;
    directory: boolean;
    children: ReadonlyArray<MutableFile>;
    loadAttributes(cb?: any): Readable;
    download(options?: DownloadOptions, cb?: any): Readable;
}

export class Storage extends EventEmitter {
    constructor(options: StorageOptions, callback?: any);
    static fromJSON(json: JSON): Storage;
    name: string;
    key: Buffer;
    sid: string;
    files: { [id in string]: MutableFile };
    root: MutableFile;
    trash: MutableFile;
    inbox: MutableFile;
    mounts: ReadonlyArray<File>;
    upload(options: UploadOptions | string, buffer?: Buffer, cb?: any): Writable;
    mkdir(options: MakeDirectoryOptions | string, cb: (err: Error | undefined, file: MutableFile) => void): Readable;
    reload(cb: any): Readable;
    login(cb: any): Readable;
    getAccountInfo(cb: any): AccountInfo;
    toJSON(): JSON;
    on(event: "ready", listener: (storage: Storage) => void): this;
    on(event: "move", listener: (file: MutableFile, oldDir: MutableFile) => void): this;
    on(event: "add" | "delete" | "update", listener: (file: MutableFile) => void): this;
}

export class MutableFile extends File {
    constructor(options: FileOptions | string, storage: Storage);
    upload(options: UploadOptions | string, buffer?: Buffer, cb?: any): Writable;
    mkdir(options: MakeDirectoryOptions | string, cb?: any): Readable;
    importFile(file: File | string, cb: (err: Error | undefined, file: MutableFile) => void): Readable;
    link(options: LinkOptions | undefined, cb: (err: Error | undefined, url: string) => void): Readable;
    shareFolder(options: LinkOptions | undefined, cb: (err: Error | undefined, url: string) => void): Readable;
    delete(permanent: true | undefined, cb: (err: Error | undefined) => void): Readable;
    moveTo(target: MutableFile | string, cb: (err: Error | undefined) => void): Readable;
    setAttributes(attributes: object, cb: (err: Error | undefined) => void): Readable;
    uploadAttribute(type: string | number, opt?: Buffer | Stream, cb?: any): Readable;
    rename(newFileName: string, cb: (err: Error | undefined) => void): Readable;
    setLabel(label: string, cb: (err: Error | undefined) => void): Readable;
    setFavorite(isFavorite: boolean, cb: (err: Error | undefined) => void): Readable;
    on(event: "move", listener: (oldDir: MutableFile) => void): this;
    on(event: "delete" | "update", listener: () => void): this;
}

export default function mega(options: StorageOptions, cb?: any): Storage;

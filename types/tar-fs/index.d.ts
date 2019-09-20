// Type definitions for tar-fs 1.16
// Project: https://github.com/mafintosh/tar-fs
// Definitions by: Umoxfo <https://github.com/Umoxfo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.6

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import fs = require('fs');
import stream = require('stream');

// Replace these return values with the value of tar-stream when it becomes available
export function pack(cwd: string, opts?: PackOptions): stream.Readable;
export function extract(cwd: string, opts?: ExtractOptions): stream.Writable;

export interface Options {
    ignore?: (name: string) => boolean;
    filter?: (name: string) => boolean;
    map?: (header: Headers) => Headers;
    mapStream?: (fileStream: fs.ReadStream, header: Headers) => fs.ReadStream;
    dmode?: number;
    fmode?: number;
    readable?: boolean;
    writable?: boolean;
    strict?: boolean;
}

export interface PackOptions extends Options {
    entries?: string[];
    dereference?: boolean;
    finalize?: boolean;
    finish?: (pack: any) => void;
}

export interface ExtractOptions extends Options {
    ignore?: (name: string, header?: Headers) => boolean;
    filter?: (name: string, header?: Headers) => boolean;
}

export interface Headers {
    name: string;
    mode: number;
    mtime: Date;
    size: number;
    type: 'file' | 'directory' | 'link' | 'symlink';
    uid: number;
    gid: number;
}

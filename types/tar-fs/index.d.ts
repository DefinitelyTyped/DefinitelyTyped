// Type definitions for tar-fs 2.0
// Project: https://github.com/mafintosh/tar-fs
// Definitions by: Umoxfo <https://github.com/Umoxfo>
//                 Chris Wiggins <https://github.com/chriswiggins>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// Imported from: https://github.com/soywiz/typescript-node-definitions/d.ts

/// <reference types="node" />

import { ReadStream } from 'fs';
import * as tarStream from 'tar-stream';

export function pack(cwd: string, opts?: PackOptions): tarStream.Pack;
export function extract(cwd: string, opts?: ExtractOptions): tarStream.Extract;

export type Pack = tarStream.Pack;
export type Extract = tarStream.Extract;

export interface Options {
    ignore?: (name: string) => boolean;
    filter?: (name: string) => boolean;
    map?: (header: Headers) => Headers;
    mapStream?: (fileStream: ReadStream, header: Headers) => ReadStream;
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
    finish?: (pack: tarStream.Pack) => void;
    pack?: tarStream.Pack;
}

export interface ExtractOptions extends Options {
    ignore?: (name: string, header?: Headers) => boolean;
    filter?: (name: string, header?: Headers) => boolean;
    strip?: number;
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

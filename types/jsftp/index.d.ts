// Type definitions for jsftp 2.1
// Project: https://github.com/sergi/jsftp
// Definitions by: Konrad Księski <https://github.com/xyleen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Socket } from 'net';
import { EventEmitter } from 'events';

export interface JsftpOpts {
    host?: string | undefined;
    port?: number | undefined;
    user?: string | undefined;
    pass?: string | undefined;
    createSocket?: (({ port, host }: { port: number, host: string }, firstAction: () => {}) => Socket) | undefined;
    useList?: boolean | undefined;
}

export type ErrorCallback = (err: Error) => void;
export type RawCallback = (err: Error, data: { code: number, text: string }) => void;
export type ListCallback = (err: Error, dirContents: string) => void;
export type GetCallback = (err: Error, socket: Socket) => void;
export type LsCallback = (err: Error, res: [{ name: string }]) => void;

export default class Ftp extends EventEmitter {
    constructor(opts: JsftpOpts);

    ls(filePath: string, callback: LsCallback): void;

    list(filePath: string, callback: ListCallback): void;

    get(remotePath: string, callback: GetCallback): void;
    get(remotePath: string, localPath: string, callback: ErrorCallback): void;

    put(source: string | Buffer | NodeJS.ReadableStream, remotePath: string, callback: ErrorCallback): void;

    rename(from: string, to: string, callback: ErrorCallback): void;

    // Ftp.raw(command, params, callback)
    raw(command: string, callback: RawCallback): void;
    raw(command: string, arg1: any, callback: RawCallback): void;
    raw(command: string, arg1: any, arg2: any, callback: RawCallback): void;
    raw(command: string, arg1: any, arg2: any, arg3: any, callback: RawCallback): void;
    raw(command: string, arg1: any, arg2: any, arg3: any, arg4: any, callback: RawCallback): void;
    auth(user: string, pass: string, callback: RawCallback): void;
    keepAlive(timeInMs?: number): void;

    destroy(): void;
}

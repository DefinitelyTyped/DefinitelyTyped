// Type definitions for jsftp 2.1
// Project: https://github.com/sergi/jsftp
// Definitions by: Konrad Księski <https://github.com/xyleen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Socket } from 'net';
import { EventEmitter } from 'events';

export = Jsftp;

declare class Jsftp extends EventEmitter {
    constructor(opts: Jsftp.JsftpOpts);

    ls(filePath: string, callback: Jsftp.LsCallback): void;

    list(filePath: string, callback: Jsftp.ListCallback): void;

    get(remotePath: string, callback: Jsftp.GetCallback): void;
    get(remotePath: string, localPath: string, callback: Jsftp.ErrorCallback): void;

    put(source: string | Buffer | NodeJS.ReadableStream, remotePath: string, callback: Jsftp.ErrorCallback): void;

    rename(from: string, to: string, callback: Jsftp.ErrorCallback): void;

    // Ftp.raw(command, params, callback)
    raw(command: string, callback: Jsftp.RawCallback): void;
    raw(command: string, arg1: any, callback: Jsftp.RawCallback): void;
    raw(command: string, arg1: any, arg2: any, callback: Jsftp.RawCallback): void;
    raw(command: string, arg1: any, arg2: any, arg3: any, callback: Jsftp.RawCallback): void;
    raw(command: string, arg1: any, arg2: any, arg3: any, arg4: any, callback: Jsftp.RawCallback): void;

    keepAlive(timeInMs?: number): void;

    destroy(): void;
}

declare namespace Jsftp {
    interface JsftpOpts {
        host?: string;
        port?: number;
        user?: string;
        pass?: string;
        createSocket?: ({ port, host }: { port: number, host: string }, firstAction: () => {}) => Socket;
        useList?: boolean;
    }

    type ErrorCallback = (err: Error) => void;
    type RawCallback = (err: Error, data: { code: number, text: string }) => void;
    type ListCallback = (err: Error, dirContents: string) => void;
    type GetCallback = (err: Error, socket: Socket) => void;
    type LsCallback = (err: Error, res: [{ name: string }]) => void;
}

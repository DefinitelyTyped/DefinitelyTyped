// Type definitions for socket.io-file 2.0
// Project: https://github.com/rico345100/socket.io-file
// Definitions by: Dief Bell <https://github.com/merrickking>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import { Socket } from 'socket.io';

export = SocketIOFile;

declare class SocketIOFile {
    constructor(socket: Socket, options: Options);
    on(event: string, cb: (fileInfo: FileInfo) => void): void;
}

interface Options {
    uploadDir: string | { [dirId: string]: string };
    maxFileSize?: number;
    accepts?: string[];
    chunkSize?: number;
    transmissionDelay?: number;
    overwrite?: boolean;
    rename?: (fileName: string, fileInfo: FileInfo) => string | string;
    resume?: boolean;
}

interface FileInfo {
    name: string;
    size: number;
    path: string;
    wrote: number;
    uploadDir: string;
    data: any[];
    mime: string;
    estimated: number;
    uploadId: string;
    originalFileName: string;
}

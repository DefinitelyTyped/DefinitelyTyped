import { Socket } from "socket.io";

export = SocketIOFile;

declare class SocketIOFile {
    constructor(socket: Socket, options: Options);
    on(event: string, cb: (fileInfo: FileInfo) => void): void;
}

interface Options {
    uploadDir: string | { [dirId: string]: string };
    maxFileSize?: number | undefined;
    accepts?: string[] | undefined;
    chunkSize?: number | undefined;
    transmissionDelay?: number | undefined;
    overwrite?: boolean | undefined;
    rename?: ((fileName: string, fileInfo: FileInfo) => string | string) | undefined;
    resume?: boolean | undefined;
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

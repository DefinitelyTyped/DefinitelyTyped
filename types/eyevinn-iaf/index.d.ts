/// <reference types="node"/>

import { Readable } from "stream";

export interface Logger {
    verbose: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
}
export interface IafUploadModule {
    logger: Logger;
    playlistName: string;
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): any;
    progressDelegate: (result: any) => any;
    fileUploadedDelegate: (result: any, error?: any) => any;
}
export interface IafFileWatchModule {
    fileInput: string;
    logger: Logger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): any;
}

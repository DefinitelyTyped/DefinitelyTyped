// Type definitions for eyevinn-iaf 1.0
// Project: https://github.com/Eyevinn/ingest-application-framework
// Definitions by: Eyevinn Technology <https://github.com/Eyevinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Readable } from 'stream';
import winston from 'winston';


export interface IafUploadModule {
    logger: winston.Logger;
    playlistName: string;
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): any;
    progressDelegate: Function;
    fileUploadedDelegate: Function;
}
export interface IafFileWatchModule {
    fileInput: string;
    logger: winston.Logger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): any;
}

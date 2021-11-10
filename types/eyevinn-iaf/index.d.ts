// Type definitions for eyevinn-iaf 1.0
// Project: https://github.com/Eyevinn/ingest-application-framework
// Definitions by: Eyevinn Technology <https://github.com/Eyevinn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';
import { Logger } from 'winston';

export interface IafUploadModule {
    logger: Logger;
    playlistName: string;
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): any;
    progressDelegate: () => any;
    fileUploadedDelegate: () => any;
}
export interface IafFileWatchModule {
    fileInput: string;
    logger: Logger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): any;
}

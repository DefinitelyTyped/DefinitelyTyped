// Type definitions for non-npm package eyevinn-iaf 1.0
// Project: https://github.com/Eyevinn/ingest-application-framework
// Definitions by: Jonas Birmé <https://github.com/birme>
//                 Oscar Nord <https://github.com/oscnord>
//                 Nicholas Frederiksen <https://github.com/Nfrederiksen>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { Readable } from 'stream';

export interface ILogger {
    verbose: (message: string) => void;
    info: (message: string) => void;
    warn: (message: string) => void;
    error: (message: string) => void;
  }
export interface IafUploadModule {
    logger: ILogger;
    playlistName: string;
    onFileAdd(filePath: string, readStream: Readable, contentType?: string): any;
    progressDelegate: () => any;
    fileUploadedDelegate: () => any;
}
export interface IafFileWatchModule {
    fileInput: string;
    logger: ILogger;
    onAdd(callback: (filePath: string, readStream: Readable, contentType?: string) => any): any;
}

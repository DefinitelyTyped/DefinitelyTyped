// Type definitions for multer-gridfs-storage 1.1
// Project: https://github.com/devconcept/multer-gridfs-storage
// Definitions by: devconcept <https://github.com/devconcept>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version: 4.1

import { EventEmitter } from 'events';
import { Express } from 'express';
import * as Multer from 'multer';
import { Grid } from 'gridfs-stream';

type logConfig = 'file' | 'all';

interface StorageLog {
    message: string;
    extra: any;
}

type NodeCb<T> = (err: Error | null, value: T | null) => void;

type ConfigFn<T> = (req: Express.Request, file: Express.Multer.File, cb: T) => void;

// TODO: PR and add this interface to the mongodb types
interface GridFile {
    _id: any;
    filename: string;
    contentType: string;
    length: number;
    chunkSize: number;
    uploadDate: Date;
    aliases: any;
    metadata: any;
    md5: string;
}

interface MulterGfsOptions {
    filename?: ConfigFn<NodeCb<string>> | undefined;
    identifier?: ConfigFn<NodeCb<any>> | undefined;
    metadata?: ConfigFn<NodeCb<any>> | undefined;
    chunkSize?: number | ConfigFn<NodeCb<number>> | undefined;
    root?: string | ConfigFn<NodeCb<string>> | undefined;
    log?: boolean | NodeCb<StorageLog> | undefined;
    logLevel?: logConfig | undefined;
}

declare class MulterGridfsStorage extends EventEmitter implements Multer.StorageEngine {
    constructor(settings: MulterGridfsStorage.UrlStorageOptions | MulterGridfsStorage.GfsStorageOptions);

    _handleFile(req: Express.Request, file: Express.Multer.File, callback: (error?: any, info?: Express.Multer.File) => void): void;

    _removeFile(req: Express.Request, file: Express.Multer.File, callback: (error: Error) => void): void;
}

declare namespace MulterGridfsStorage {
    interface UrlStorageOptions extends MulterGfsOptions {
        url: string;
    }

    interface GfsStorageOptions extends MulterGfsOptions {
        gfs: Promise<Grid> | Grid;
    }
}

// Merge multer's file declaration with ours
declare global {
    namespace Express {
        namespace Multer {
            interface File {
                filename: string;
                metadata: any;
                id: any;
                grid: GridFile;
                size: number;
            }
        }
    }
}

export = MulterGridfsStorage;

import { EventEmitter } from "events";
import { Express } from "express";
import { Db } from "mongodb";
import * as Multer from "multer";

interface MulterGfsOptions {
    file?(req: Express.Request, file: Express.Multer.File): any;
}

declare class MulterGridfsStorage extends EventEmitter implements Multer.StorageEngine {
    constructor(settings: MulterGridfsStorage.UrlStorageOptions | MulterGridfsStorage.DbStorageOptions);

    _handleFile(
        req: Express.Request,
        file: Express.Multer.File,
        callback: (error?: any, info?: Express.Multer.File) => void,
    ): void;

    _removeFile(req: Express.Request, file: Express.Multer.File, callback: (error: Error) => void): void;
}

declare namespace MulterGridfsStorage {
    interface UrlStorageOptions extends MulterGfsOptions {
        url: string;
        connectionOpts?: any;
    }

    interface DbStorageOptions extends MulterGfsOptions {
        db: Promise<Db> | Db;
    }

    interface FileConfig {
        filename?: string | undefined;
        id?: any;
        metadata?: any;
        chunkSize?: number | undefined;
        bucketName?: string | undefined;
        contentType?: string | undefined;
    }
}

// Merge multer's file declaration with ours
declare global {
    namespace Express {
        namespace Multer {
            interface File {
                id: any;
                filename: string;
                metadata: any;
                contentType: string;
                chunkSize: number;
                bucketName: string;
                uploadDate: Date;
                md5: string;
                size: number;
            }
        }
    }
}

export = MulterGridfsStorage;

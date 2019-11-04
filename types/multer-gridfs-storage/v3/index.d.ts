// Type definitions for multer-gridfs-storage 3.1
// Project: https://github.com/devconcept/multer-gridfs-storage
// Definitions by: devconcept <https://github.com/devconcept>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { EventEmitter } from 'events';
import { Express } from 'express';
import * as Multer from 'multer';
import { Db, MongoClient } from 'mongodb';
import { Connection, Mongoose } from 'mongoose';

declare class Cache {
    initialize(opts: object): object;
    findUri(cacheName: string, url: string): string;
    has(cacheIndex: object): boolean;
    get(cacheIndex: object): object;
    set(cacheIndex: object, value: object): void;
    isPending(cacheIndex: object): boolean;
    isOpening(cacheIndex: object): boolean;
    resolve(cacheIndex: object, db: Db, client: MongoClient): void;
    reject(cacheIndex: object, err: Error): void;
    waitFor(cacheIndex: object): Promise<object>;
    connections(): number;
    remove(cacheIndex: object): void;
    clear(): void;
}

interface MulterGfsOptions {
    file?(req: Express.Request, file: Express.Multer.File): any;
}

declare class MulterGridfsStorage extends EventEmitter implements Multer.StorageEngine {
    db: Db;
    client: MongoClient;
    connected: boolean;
    connecting: boolean;
    configuration: MulterGridfsStorage.UrlStorageOptions | MulterGridfsStorage.DbStorageOptions;
    error: Error;
    caching: boolean;
    cacheName: string;
    cacheIndex: object;

    constructor(configuration: MulterGridfsStorage.UrlStorageOptions | MulterGridfsStorage.DbStorageOptions);

    _handleFile(req: Express.Request, file: Express.Multer.File, callback: (error?: any, info?: Express.Multer.File) => void): void;

    _removeFile(req: Express.Request, file: Express.Multer.File, callback: (error: Error) => void): void;

    ready: Promise<Db>;

    static cache: Cache;
}

declare namespace MulterGridfsStorage {
    interface UrlStorageOptions extends MulterGfsOptions {
        url: string;
        options?: any;
        cache?: boolean | string;
    }

    interface DbStorageOptions extends MulterGfsOptions {
        db: Mongoose | Connection | Db | Promise<Mongoose | Connection | Db>;
    }

    interface FileConfig {
        filename?: string;
        id?: any;
        metadata?: object;
        chunkSize?: number;
        bucketName?: string;
        contentType?: string;
        aliases?: string[];
        disableMD5?: boolean;
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

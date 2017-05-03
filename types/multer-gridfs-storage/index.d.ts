// Type definitions for multer-gridfs-storage 1.1.1
// Project: https://github.com/devconcept/multer-gridfs-storage
// Definitions by: devconcept <https://github.com/devconcept/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import {EventEmitter} from 'events';
import {Express} from 'express';
import * as Multer from 'multer';
import {Grid} from 'gridfs-stream';

type MongoId = number | string | object;

type logConfig = 'file' | 'all';

interface StorageLog {
	message: string,
	extra: any
}

interface NodeCb<T> {
	(err: Error | null, value: T | null): void
}

interface ConfigFn<T> {
	(req: Express.Request, file: Express.Multer.File, cb: T): void
}

// TODO: PR and add this interface to the mongodb types
interface GridFile {
	_id: MongoId,
	filename: string,
	contentType: string,
	length: number,
	chunkSize: number,
	uploadDate: Date,
	aliases: object,
	metadata: object
	md5: string;
}

interface MulterGfsOptions {
	filename?: ConfigFn<NodeCb<string>>,
	identifier?: ConfigFn<NodeCb<MongoId>>,
	metadata?: ConfigFn<NodeCb<object>>,
	chunkSize?: number | ConfigFn<NodeCb<number>>,
	root?: string | ConfigFn<NodeCb<string>>,
	log?: boolean | NodeCb<StorageLog>,
	logLevel?: logConfig
}

declare class MulterGridfsStorage extends EventEmitter implements Multer.StorageEngine {

	constructor(settings: MulterGridfsStorage.UrlStorageOptions | MulterGridfsStorage.GfsStorageOptions);

	_handleFile(req: Express.Request, file: Express.Multer.File, callback: (error?: any, info?: Express.Multer.File) => void): void

	_removeFile(req: Express.Request, file: Express.Multer.File, callback: (error: Error) => void): void

}

declare namespace MulterGridfsStorage {
	export interface UrlStorageOptions extends MulterGfsOptions {
		url: string
	}

	export interface GfsStorageOptions extends MulterGfsOptions {
		gfs: Promise<Grid> | Grid,
	}
}

// Merge multer's file declaration with ours
declare global {
	namespace Express {
		namespace Multer {
			export interface File {
				filename: string;
				metadata: object,
				id: MongoId,
				grid: GridFile,
				size: number
			}
		}
	}
}

export = MulterGridfsStorage;

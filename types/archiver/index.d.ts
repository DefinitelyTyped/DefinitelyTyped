// Type definitions for archiver v1.3.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

	import Archiver = require('archiver);
	var archiver = Archiver.create('zip');
	archiver.pipe(FS.createWriteStream('xxx'));
	archiver.append(FS.createReadStream('xxx'));
	archiver.finalize();

 =============================================== */

import * as FS from 'fs';
import * as STREAM from 'stream';


declare function archiver(format: string, options?: archiver.Options): archiver.Archiver;

declare namespace archiver {

	// allows anything to be set on the options object which could be passed to external modules
	export interface ExternalOptions {
		[keyName: string]: any
	}

	export interface CoreOptions extends ExternalOptions {
		 statConcurrency?: number;
	}

	export interface TarOptions extends ExternalOptions {
		gzip?: boolean;
		gzipOptions?: ExternalOptions;
	}

	export interface JsonOptions extends ExternalOptions  {
	}

	export interface TransformOptions  {
		allowHalfOpen?: boolean;
		readableObjectMode?: boolean;
		writableObjectMode?: boolean;
		decodeStrings?: boolean;
		encoding?: string;
		highWaterMark?: number;
		objectMode?: boolean;
	}
	export interface ZipOptions extends ExternalOptions {
		comment?: string;
		forceLocalTime?: boolean;
		forceZip64?: boolean;
		store?: boolean;
		zlib?: ExternalOptions;
	}

	export type Options = CoreOptions | TarOptions | JsonOptions | TransformOptions | ZipOptions;

	export interface module {
		(): any;
	}
	export interface IFormatter extends module {
		append(source: STREAM.Readable | Buffer | string, name: nameInterface): void;
		finalize(): void;
	}

	export function create(format: string, options?: Options): Archiver;
	export function registerFormat(format: string, module: IFormatter): void;

	export interface nameInterface {
		name?: string;
	}

	export interface EntryData {
		name: string;
		date?: string | any;
		mode?: number;
		prefix?: string;
		stats?: FS.Stats;
	}

	export interface ZipEntryData extends EntryData {
		store?: boolean;
	}

	export interface TarEntryData extends EntryData {
	}

	export type Data = EntryData | TarEntryData | ZipEntryData;

	export interface Archiver extends STREAM.Transform {
		append(source: STREAM.Readable | Buffer | string, name: nameInterface): Archiver;

		directory(dirpath: string, destpath: nameInterface | string): Archiver;
		directory(dirpath: string, destpath: nameInterface | string, data: Data): Archiver;

		file(filepath: string, data: Data): Archiver;
		glob(pattern: string, options: ExternalOptions, data: Data): Archiver;

		// Deprecated
		bulk(mappings: any): void;

		setFormat(format: string): Archiver;
		setModule(module: Function): Archiver;

		pointer(): number;
		abort(): void;
		finalize(): void;
	}
}

export = archiver;

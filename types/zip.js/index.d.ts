// Type definitions for zip.js 2.x
// Project: https://github.com/gildas-lormeau/zip.js
// Definitions by: Louis Grignon <https://github.com/lgrignon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface FileEntry {}

declare namespace zip {
	export var useWebWorkers: boolean;
	export var workerScriptsPath: string;
	export var workerScripts: {
		deflater?: string[];
		inflater?: string[];
	};

	export class Reader {
		public size: number;
		public init(callback: () => void, onerror: (error: any) => void): void;
		public readUint8Array(index: number, length: number, callback: (result: Uint8Array) => void, onerror?: (error: any) => void): void;
	}

	export class TextReader extends Reader {
		constructor(text: string);
	}

	export class BlobReader extends Reader {
		constructor(blob: Blob);
	}

	export class Data64URIReader extends Reader {
		constructor(dataURI: string);
	}

	export class HttpReader extends Reader {
		constructor(url: string);
	}

	export function createReader(reader: zip.Reader, callback: (zipReader: ZipReader) => void, onerror?: (error: any) => void): void;

	export class ZipReader {
		getEntries(callback: (entries: zip.Entry[]) => void): void;
		close(callback?: () => void): void;
	}

	export interface Entry {
		filename: string;
		directory: boolean;
		compressedSize: number;
		uncompressedSize: number;
		lastModDate: Date;
		lastModDateRaw: number;
		comment: string;
		crc32: number;

		getData(writer: zip.Writer, onend: (result: any) => void, onprogress?: (progress: number, total: number) => void, checkCrc32?: boolean): void;
	}

	export class Writer {
		public init(callback: () => void, onerror?: (error: any) => void): void;
		public writeUint8Array(array: Uint8Array, callback: () => void, onerror?: (error: any) => void): void;
		public getData(callback: (data: any) => void, onerror?: (error: any) => void) : void;
	}

	export class TextWriter extends Writer {
		constructor(encoding: string);
	}

	export class BlobWriter extends Writer {
		constructor(contentType: string);
	}

	export class FileWriter extends Writer {
		constructor(fileEntry: FileEntry);
	}

	export class Data64URIWriter extends Writer {
		constructor(mimeString?: string);
	}

	export function createWriter(writer: zip.Writer, callback: (zipWriter: zip.ZipWriter) => void, onerror?: (error: any) => void, dontDeflate?: boolean): void;

	export interface WriteOptions {
		directory?: boolean;
		level?: number;
		comment?: string;
		lastModDate?: Date;
		version?: number;
	}

	export class ZipWriter {
		public add(name: string, reader: zip.Reader, onend: () => void, onprogress?: (progress: number, total: number) => void, options?: WriteOptions): void;
		public close(callback: (result: any) => void): void;
	}
}

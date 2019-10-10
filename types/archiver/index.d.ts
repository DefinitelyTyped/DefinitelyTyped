// Type definitions for archiver 3.0.0
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>, Dolan Miu <https://github.com/dolanmiu>, Crevil <https://github.com/crevil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as fs from 'fs';
import * as stream from 'stream';
import * as glob from 'glob';
import { ZlibOptions } from 'zlib';

declare function archiver(format: archiver.Format, options?: archiver.ArchiverOptions): archiver.Archiver;

declare namespace archiver {
    type Format = 'zip' | 'tar';

    function create(format: string, options?: ArchiverOptions): Archiver;
    function registerFormat(format: string, module: Function): void;

    interface EntryData {
        name?: string;
        prefix?: string;
        stats?: fs.Stats;
        date?: Date | string;
        mode?: number;
    }

    interface ProgressData {
        entries: {
            total: number;
            processed: number;
        };
        fs: {
            totalBytes: number;
            processedBytes: number;
        };
    }

    /** A function that lets you either opt out of including an entry (by returning false), or modify the contents of an entry as it is added (by returning an EntryData) */
    type EntryDataFunction = (entry: EntryData) => false | EntryData;

    class ArchiverError extends Error {
        code: string;       // Since archiver format support is modular, we cannot enumerate all possible error codes, as the modules can throw arbitrary ones.
        data: any;
        path?: any;

        constructor(code: string, data: any);
    }

    interface Archiver extends stream.Transform {
        abort(): this;
        append(source: stream.Readable | Buffer | string, name?: EntryData): this;

        /** if false is passed for destpath, the path of a chunk of data in the archive is set to the root */
        directory(dirpath: string, destpath: false | string, data?: EntryData | EntryDataFunction): this;
        file(filename: string, data: EntryData): this;
        glob(pattern: string, options?: glob.IOptions, data?: EntryData): this;
        finalize(): Promise<void>;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;

        symlink(filepath: string, target: string): this;

        on(event: 'error' | 'warning', listener: (error: ArchiverError) => void): this;
        on(event: 'data', listener: (data: EntryData) => void): this;
        on(event: 'progress', listener: (progress: ProgressData) => void): this;
        on(event: 'close' | 'drain' | 'finish', listener: () => void): this;
        on(event: 'pipe' | 'unpipe', listener: (src: stream.Readable) => void): this;
        on(event: 'entry', listener: (entry: EntryData) => void): this;
        on(event: string, listener: (...args: any[]) => void): this;
    }

    type ArchiverOptions = CoreOptions & TransformOptions & ZipOptions & TarOptions;

    interface CoreOptions {
        statConcurrency?: number;
    }

    interface TransformOptions {
        allowHalfOpen?: boolean;
        readableObjectMode?: boolean;
        writeableObjectMode?: boolean;
        decodeStrings?: boolean;
        encoding?: string;
        highWaterMark?: number;
        objectmode?: boolean;
    }

    interface ZipOptions {
        comment?: string;
        forceLocalTime?: boolean;
        forceZip64?: boolean;
        store?: boolean;
        zlib?: ZlibOptions;
    }

    interface TarOptions {
        gzip?: boolean;
        gzipOptions?: ZlibOptions;
    }
}

export = archiver;

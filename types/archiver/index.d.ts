// Type definitions for archiver 1.3
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import Archiver = require('archiver);
    var archiver = Archiver.create('zip');
    archiver.pipe(fs.createWriteStream('xxx'));
    archiver.append(fs.createReadStream('xxx'));
    archiver.finalize();

 =============================================== */

import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';
import * as glob from 'glob';

declare function archiver(format: archiver.Format, options?: archiver.ArchiverOptions): archiver.Archiver;

declare namespace archiver {
    type Format = 'zip' | 'tar';
    function create(format: string, options?: ArchiverOptions): Archiver;

    interface EntryData {
        name?: string;
        prefix?: string;
        stats?: string;
    }

    interface Archiver extends stream.Transform {
        append(source: stream.Readable | Buffer | string, name?: EntryData): void;

        directory(dirpath: string, options: EntryData | string, data?: EntryData): void;

        bulk(mappings: any): void;
        finalize(): void;

        glob(pattern: string, options?: glob.IOptions, data?: EntryData): void;
        file(filename: string, data: EntryData): void;

        pipe(stream: fs.WriteStream | express.Response): void;
    }

    interface ArchiverOptions {
        store?: boolean;
        gzip?: boolean;
        gzipOptions?: {
            level: number,
        };
    }
}

export = archiver;

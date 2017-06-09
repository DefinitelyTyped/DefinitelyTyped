// Type definitions for archiver 1.3
// Project: https://github.com/archiverjs/node-archiver
// Definitions by: Esri <https://github.com/archiverjs/node-archiver>, Dolan Miu <https://github.com/dolanmiu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================

    import Archiver = require('archiver);
    var archiver = Archiver.create('zip');
    archiver.pipe(fs.createWriteStream('xxx'));
    archiver.append(fs.createReadStream('xxx'));
    archiver.finalize();

 =============================================== */

/// <reference types="node" />

import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';
import * as glob from 'glob';

declare function archiver(format: archiver.Format, options?: archiver.ArchiverOptions): archiver.Archiver;

declare namespace archiver {
    type Format = 'zip' | 'tar';

    function create(format: string, options?: ArchiverOptions): Archiver;
    function registerFormat(format: string, module: Function): void;

    interface EntryData {
        name?: string;
        prefix?: string;
        stats?: string;
    }

    interface Archiver extends stream.Transform {
        abort(): this;
        append(source: stream.Readable | Buffer | string, name?: EntryData): this;

        bulk(mappings: any): this;

        directory(dirpath: string, options: EntryData | string, data?: EntryData): this;

        file(filename: string, data: EntryData): this;
        glob(pattern: string, options?: glob.IOptions, data?: EntryData): this;
        finalize(): this;

        pipe(stream: fs.WriteStream | express.Response): void;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;
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

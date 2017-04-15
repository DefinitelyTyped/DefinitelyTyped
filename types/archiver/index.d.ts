// Type definitions for archiver v1.3.0
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

/// <reference types="node" />
/// <reference types="express" />

import * as fs from 'fs';
import * as stream from 'stream';
import * as express from 'express';

declare function archiver(format: archiver.Format, options?: archiver.Options): archiver.Archiver;

declare namespace archiver {

    type Format = 'zip' | 'tar';

    export interface FileParams {
        name?: string;
    }

    export interface Archiver extends stream.Transform {
        append(source: stream.Readable | Buffer | string, name: FileParams): void;

        directory(dirpath: string, options: FileParams | string): void;
        directory(dirpath: string, options: FileParams | string, data: any | Function): void;

        bulk(mappings: any): void;
        finalize(): void;

        glob(dirpath: string): void;
        file(filename: string, options: FileParams): void;

        pipe(stream: fs.WriteStream | express.Response): void;
    }

    export interface Options {
        store?: boolean;
        gzip?: boolean,
        gzipOptions?: {
            level: number,
        };
    }
}

export = archiver;

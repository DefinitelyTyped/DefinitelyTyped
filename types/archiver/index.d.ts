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

    interface ExternalOptions {
        [keyName: string]: any
    }

    interface CoreOptions extends ExternalOptions {
         statConcurrency?: number;
    }

    interface TarOptions extends ExternalOptions {
        gzip?: boolean;
        gzipOptions?: ExternalOptions;
    }

    interface JsonOptions extends ExternalOptions  {
    }

    interface TransformOptions  {
        allowHalfOpen?: boolean;
        readableObjectMode?: boolean;
        writableObjectMode?: boolean;
        decodeStrings?: boolean;
        encoding?: string;
        highWaterMark?: number;
        objectMode?: boolean;
    }
    
    interface ZipOptions extends ExternalOptions {
        comment?: string;
        forceLocalTime?: boolean;
        forceZip64?: boolean;
        store?: boolean;
        zlib?: ExternalOptions;
    }

    type Options = CoreOptions | TarOptions | JsonOptions | TransformOptions | ZipOptions;

    interface nameInterface {
        name?: string;
    }

    interface EntryData extends NameInterface {
        date?: string | any;
        mode?: number;
        prefix?: string;
        stats?: FS.Stats;
    }

    interface ZipEntryData extends EntryData {
   store?: boolean;
    }

    interface TarEntryData extends EntryData {
    }

    type Data = EntryData | TarEntryData | ZipEntryData;

    function create(format: string, options?: Options): Archiver;
    function registerFormat(format: string, module: Function): void;
  
    interface Archiver extends STREAM.Transform {
        abort(): this;
        append(source: STREAM.Readable | Buffer | string, name: nameInterface): this;

        bulk(mappings: any): this;

        directory(dirpath: string, destpath: nameInterface | string, data?: Data | Function): this;

        file(filepath: string, data: Data): this;
        glob(pattern: string, options: ExternalOptions, data: Data): this;
        finalize(): this;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;
    }
}

export = archiver;


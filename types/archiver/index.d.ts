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

/// <reference types="node" />

import * as FS from 'fs';
import * as STREAM from 'stream';

declare function archiver(format: string, options?: {}): archiver.Archiver;

declare namespace archiver {
    function create(format: string, options?: {}): Archiver;
    function registerFormat(format: string, module: Function): void;

    interface nameInterface {
        name?: string;
    }

    interface Archiver extends STREAM.Transform {
        abort(): this;
        append(source: STREAM.Readable | Buffer | string, name: nameInterface): this;

        bulk(mappings: any): this;

        directory(dirpath: string, destpath: nameInterface | string, data?: any | Function): this;

        file(filepath: string, data: any): this;
        glob(pattern: string, options: {}, data: any): this;
        finalize(): this;

        setFormat(format: string): this;
        setModule(module: Function): this;

        pointer(): number;
        use(plugin: Function): this;
    }
}

export = archiver;

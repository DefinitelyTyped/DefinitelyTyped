// Type definitions for archiver v0.15.0
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

/// <reference path="../node/node.d.ts" />
declare module "archiver" {
    import * as FS from 'fs';
    import * as STREAM from 'stream';
    
    interface nameInterface {
        name?: string;
    }
        
    interface Archiver extends STREAM.Transform {
        pipe(writeStream: FS.WriteStream): void;
        append(source: FS.ReadStream | Buffer | string, name: nameInterface): void;

        directory(dirpath: string, destpath: nameInterface | string): void;
        directory(dirpath: string, destpath: nameInterface | string, data: any | Function): void;

        bulk(mappings: any): void;
        finalize(): void;
    }
    
    interface Options {
        
    }
    
    function archiver(format: string, options?: Options): Archiver;
    
    namespace archiver {
        function create(format: string, options?: Options): Archiver;
    }
    
    export = archiver;
}

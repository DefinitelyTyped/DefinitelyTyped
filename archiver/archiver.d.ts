/// <reference path="../node/node.d.ts" />

declare module "archiver" {
    import FS = require('fs');
    
    interface nameInterface {
        name?: string;
    }
        
    interface Archiver {
        pipe(writeStream: FS.WriteStream): void;
        append(readStream: FS.ReadStream, name: nameInterface): void;
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
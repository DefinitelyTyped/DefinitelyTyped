// Type definitions for ghost-storage-base 0.0.3
// Project: https://github.com/TryGhost/Ghost-Storage-Base
// Definitions by: Demian <https://github.com/thde>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

import { Handler }  from 'express';

export interface Image {
    path: string;
    name: string;
    type: string;
}

export interface ReadOptions {
    path: string
}

export declare abstract class StorageBase { 
    constructor();

    abstract exists(fileName: string, targetDir: string): Promise<boolean>;
    abstract save(image: Image, targetDir: string): Promise<string>;
    abstract serve(): Handler;
    abstract delete(fileName: string, targetDir: string): Promise<boolean>;
    abstract read(options: ReadOptions): Promise<Buffer>;

    getTargetDir(baseDir: string): string;
    getUniqueFileName(image: Image, targetDir: string): string;
    getSanitizedFileName(fileName: string): string;
}

export default StorageBase;

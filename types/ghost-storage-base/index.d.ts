import { Handler } from "express";

declare namespace StorageBase {
    interface Image {
        path: string;
        name: string;
        type: string;
    }

    interface ReadOptions {
        path: string;
    }
}

declare abstract class StorageBase {
    constructor();

    abstract exists(fileName: string, targetDir?: string): Promise<boolean>;
    abstract save(image: StorageBase.Image, targetDir?: string): Promise<string>;
    abstract serve(): Handler;
    abstract delete(fileName: string, targetDir?: string): Promise<boolean>;
    abstract read(options?: StorageBase.ReadOptions): Promise<Buffer>;

    getTargetDir(baseDir?: string): string;
    getUniqueFileName(image: StorageBase.Image, targetDir: string): string;
    getSanitizedFileName(fileName: string): string;
}

export = StorageBase;

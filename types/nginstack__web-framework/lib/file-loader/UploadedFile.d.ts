export = UploadedFile;
declare function UploadedFile(...args: any[]): void;
declare class UploadedFile {
    constructor(...args: any[]);
    move(filePath: string): boolean;
    uploadToVfs(
        directory: string | number,
        options?: {
            name?: string;
            key?: number;
        },
    ): number;
    uploadToLobStorage(
        classKey: number | DBKey,
        options?: {
            name?: string;
            key?: number;
        },
    ): number;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");

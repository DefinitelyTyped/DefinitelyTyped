export = UploadedFile;
declare function UploadedFile(
    name: string,
    contentFileName: string,
    contentType: string,
    metadata?: Record<string, any>,
): void;
declare class UploadedFile {
    constructor(
        name: string,
        contentFileName: string,
        contentType: string,
        metadata?: Record<string, any>,
    );
    private metadata_;
    metadata: Record<string, any>;
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
    toText(encoding?: string): string;
    toBytes(): Uint8Array;
}
import DBKey = require("@nginstack/engine/lib/dbkey/DBKey.js");

export = FileStorage;
declare function FileStorage(classKey: number): void;
declare class FileStorage {
    constructor(classKey: number);
    classKey_: number;
    linkFieldName_: any;
    linkedTableName_: any;
    attributeNames_: string[];
    storageKind_: any;
    storageClassKey_: any;
    accept_: any;
    maxFiles_: any;
    maxFileSize_: any;
    maxTotalSize_: any;
    dataRel_: any;
    fileInfos_: Record<number, any>;
    fileFieldName_: string;
    storage_: LobFileStorage | VfsFileStorage;
    storageKind: StorageKind;
    storageClassKey: number;
    linkFieldName: string;
    linkedTableName: string;
    fileFieldName: string;
    accept: string[];
    maxFiles: number;
    maxFileSize: number;
    maxTotalSize: number;
    private tryGetFileInfo_;
    hasViewPermission(fileKey: number, userKey: number): string;
    tryGetFileUrl(fileKey: number): string;
    tryGetFileName(fileKey: number): string;
    getFileSize(fileKey: number): string;
    getExtraFileAttributes(fileKey: number): any;
    updateExtraFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    getFileAttributes(fileKey: number): any;
    updateFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    formatUniqueFileName(originalFileName: string, attributes: any): string;
    findLinkedFiles(key: number | DBKey, filters?: any): any[];
    getLinkedFilesSize(key: number | DBKey): number;
    getLinkedFilesCount(key: number | DBKey): number;
    findFileByName(fileName: string): any;
    relationshipExists(fileKey: number, targetKey: number): boolean;
    linkFile(fileKey: number, recordKey: number): void;
    addFile(
        originalFileName: string,
        content: string | File | MemoryStream,
        attributes: any
    ): number;
    updateFile(
        fileKey: number,
        content: string | File | MemoryStream,
        options?: {
            attributes?: any;
            originalFileName?: string;
        }
    ): void;
}
declare namespace FileStorage {
    export { StorageKind, DBKey };
}
import LobFileStorage = require('./LobFileStorage.js');
import VfsFileStorage = require('./VfsFileStorage.js');
type StorageKind = string;
declare namespace StorageKind {
    const VFS: string;
    const LOB: string;
}
type DBKey = import('../dbkey/DBKey');
import File = require('../io/File.js');
import MemoryStream = require('../io/MemoryStream.js');

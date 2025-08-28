export = FileStorage;
declare function FileStorage(classKey: number): void;
declare class FileStorage {
    constructor(classKey: number);
    private classKey_;
    private classDef_;
    private linkFieldName_;
    private linkedTableName_;
    private attributeNames_;
    private storageKind_;
    private storageClassKey_;
    private accept_;
    private maxFiles_;
    private maxFileSize_;
    private maxTotalSize_;
    private hasMain_;
    private dataRel_;
    private fileInfos_;
    private fileFieldName_;
    private storage_;
    storageKind: StorageKind;
    storageClassKey: number;
    linkFieldName: string;
    linkedTableName: string;
    fileFieldName: string;
    accept: string[];
    maxFiles: number;
    maxFileSize: number;
    maxTotalSize: number;
    cacheControl: string;
    private tryGetFileInfo_;
    userHasViewPermission(fileKey: number, userKey?: number): boolean;
    tryGetFileUrl(fileKey: number): string;
    tryGetFileName(fileKey: number): string;
    getFileSize(fileKey: number): string;
    getExtraFileAttributes(fileKey: number): any;
    updateExtraFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    getFileAttributes(fileKey: number): any;
    updateFileAttributes(fileKey: number, attributes: any, originalName?: string): void;
    formatUniqueFileName(originalFileName: string, attributes: any): string;
    findLinkedFiles(key: number | DBKey, filters?: any): FileInfo[];
    getLinkedFilesSize(key: number | DBKey): number;
    getLinkedFilesCount(key: number | DBKey): number;
    findFileByName(fileName: string): FileInfo;
    relationshipExists(fileKey: number, targetKey: number): boolean;
    defineRelationshipAsMain(fileKey: number, recordKey: number): void;
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
    export { StorageKind, FileInfo, DBKey, DataSet };
}
type StorageKind = string;
declare namespace StorageKind {
    let VFS: string;
    let LOB: string;
}
import File = require('../io/File.js');
import MemoryStream = require('../io/MemoryStream.js');
type FileInfo = import('./FileInfo');
type DBKey = import('../dbkey/DBKey');
type DataSet = import('../dataset/DataSet');

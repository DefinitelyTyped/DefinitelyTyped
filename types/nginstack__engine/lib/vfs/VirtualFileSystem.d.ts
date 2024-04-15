export = VirtualFileSystem;
declare function VirtualFileSystem(): void;
declare class VirtualFileSystem {
    createDirectory(name: string, parent: number): number;
    deleteDirectory(key: number): void;
    renameDirectory(key: number, newName: string): void;
    moveDirectory(key: number, newParent: number): void;
    directoryExists(path: string): number;
    forceDirectories(path: string): number;
    getDirectoryPath(key: number): string;
    createFile(
        fileName: string,
        content: string | File | MemoryStream,
        options?: {
            baseDirectory?: number | DBKey;
            contentType?: string;
            key?: number | DBKey;
        }
    ): number;
    deleteFile(key: number): void;
    moveFile(key: number, destinationDir: number): void;
    renameFile(key: number, newName: string): void;
    getFileContent(key: number, allowNullMimeType?: boolean): string;
    setFileContent(
        key: number,
        content: string | File | MemoryStream,
        opt_contentType?: string
    ): void;
    getFileSize(key: number | DBKey): number;
    getFilePath(key: number | DBKey): string;
    formatFilePath(name: string, directory: number | DBKey): string;
    fileExists(path: string, opt_baseDirectory?: number): number;
    startTransaction(): void;
    commitTransaction(): void;
    rollbackTransaction(): void;
    setXFileAttributes(fileKey: number, attributes: any): void;
    getXFileAttributes(fileKey: number): any;
    deleteXFileAttributes(fileKey: number, attributeNames: any[]): void;
}
declare namespace VirtualFileSystem {
    export { getInstance, File, MemoryStream, DBKey };
}
declare function getInstance(): VirtualFileSystem;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');
type DBKey = import('../dbkey/DBKey');

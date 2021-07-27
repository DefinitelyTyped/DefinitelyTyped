export = VfsFileStorage;
declare function VfsFileStorage(directory: number): void;
declare class VfsFileStorage {
    constructor(directory: number);
    targetDirectory_: number;
    vfs_: any;
    virtualFS_: VirtualFileSystem;
    tryGetFileInfo(fileKey: number): FileInfo;
    setExtraFileAttributes(fileKey: number, attributes: any): void;
    getExtraFileAttributes(fileKey: number): any;
    findFileByName(fileName: string): FileInfo;
    getFilesSize(fileKeys: number[]): number;
    addFile(fileName: string, content: string | File | MemoryStream): number;
    updateFile(fileKey: number, content: string | File | MemoryStream): void;
}
declare namespace VfsFileStorage {
    export { File, MemoryStream };
}
import VirtualFileSystem = require('../vfs/VirtualFileSystem.js');
import FileInfo = require('./FileInfo.js');
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

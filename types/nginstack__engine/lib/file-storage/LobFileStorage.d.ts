export = LobFileStorage;
declare function LobFileStorage(classKey: number): void;
declare class LobFileStorage {
    constructor(classKey: number);
    private classKey_;
    private lobStorage_;
    tryGetFileInfo(fileKey: number): FileInfo;
    setExtraFileAttributes(fileKey: number, attributes: any): void;
    getExtraFileAttributes(fileKey: number): any;
    findFileByName(fileName: string): FileInfo;
    getFilesSize(fileKeys: number[]): number;
    addFile(fileName: string, content: string | File | MemoryStream): number;
    updateFile(fileKey: number, content: string | File | MemoryStream): void;
}
import FileInfo = require('./FileInfo.js');
import File = require('../io/File.js');
import MemoryStream = require('../io/MemoryStream.js');

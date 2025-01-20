export = LobFileStorage;
declare function LobFileStorage(lobClassKey: number, relationClassKey: any): void;
declare class LobFileStorage {
    constructor(lobClassKey: number, relationClassKey: any);
    private lobClassKey_;
    private relationClassKey_;
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

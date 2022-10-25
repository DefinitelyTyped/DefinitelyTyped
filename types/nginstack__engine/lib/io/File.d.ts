export = File;
declare function File(fileName: string, opt_mode?: string, opt_encoding?: string): void;
declare class File {
    constructor(fileName: string, opt_mode?: string, opt_encoding?: string);
    write(data: string | ArrayBuffer): void;
    writeln(data: string): void;
    read(opt_count?: number): string;
    readln(): string;
    clear(): void;
    flush(): void;
    close(): void;
    position: number;
    size: number;
    modified: Date;
}
declare namespace File {
    export {
        fileExists,
        directoryExists,
        deleteFile,
        deleteDirectory,
        findFirst,
        findNext,
        findClose,
        createDirectory,
        moveFile,
        copyFile,
        getTempFileName,
        createTempFile,
        fileFromString,
        stringFromFile,
        pathAppend,
        pathSeparator,
        changeFileExtension,
        extractFileName,
        extractFilePath,
        getSize,
        createTempDirName,
        listEntries,
        copyDirectory,
        openForRead,
        SearchRecord,
        FileListEntry,
    };
}
declare function fileExists(fileName: string): boolean;
declare function directoryExists(dirName: string): boolean;
declare function deleteFile(fileName: string): boolean;
declare function deleteDirectory(dirName: string, recursive?: boolean): boolean;
declare function findFirst(fileName: string, opt_attributes?: string): SearchRecord;
declare function findNext(searchRecord: SearchRecord): boolean;
declare function findClose(searchRecord: SearchRecord): void;
declare function createDirectory(dirName: string): boolean;
declare function moveFile(existingFileName: string, newFileName: string): boolean;
declare function copyFile(existingFileName: string, newFileName: string): boolean;
declare function getTempFileName(): string;
declare function createTempFile(): File;
declare function fileFromString(fileName: string, content: string, opt_encoding?: string): void;
declare function stringFromFile(fileName: string, opt_encoding?: string): string;
declare function pathAppend(path: string, append: Array<string[] | string>): string;
declare var pathSeparator: string;
declare function changeFileExtension(fileName: string, extension: string): string;
declare function extractFileName(fileName: string): string;
declare function extractFilePath(fileName: string): string;
declare function getSize(fileName: string): number;
declare function createTempDirName(): string;
declare function listEntries(
    path: string,
    opt_options?: {
        recursive?: boolean;
        onlyFiles?: boolean;
    }
): FileListEntry[];
declare function copyDirectory(sourceDir: string, targetDir: string, opt_replace?: boolean): void;
declare function openForRead(path: string): File;
type SearchRecord = import('./SearchRecord');
interface FileListEntry {
    name: string;
    size: number;
    modified: Date;
    isDirectory: boolean;
    path: string;
    relativePath: string;
}

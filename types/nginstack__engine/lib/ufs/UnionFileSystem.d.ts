export = UnionFileSystem;
declare function UnionFileSystem(): void;
declare class UnionFileSystem {
    isFile(path: string): boolean;
    isDirectory(path: string): boolean;
    exists(path: string): boolean;
    list(path: string, entryFilter?: number): string[];
    readFileContent(path: string): string;
    getLastUpdateTimestamp(path: string): number;
    getFileOrigin(path: string): string;
    configureWithLocalSettings(): void;
}
declare namespace UnionFileSystem {
    let FILTER_FILES: number;
    let FILTER_DIRS: number;
    let FILTER_ALL: number;
    function getInstance(): UnionFileSystem;
}

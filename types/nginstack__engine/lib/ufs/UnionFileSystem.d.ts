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
    const FILTER_FILES: number;
    const FILTER_DIRS: number;
    const FILTER_ALL: number;
    function getInstance(): UnionFileSystem;
}

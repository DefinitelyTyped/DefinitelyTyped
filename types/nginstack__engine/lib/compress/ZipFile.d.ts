export = ZipFile;
declare function ZipFile(): void;
declare class ZipFile {
    open(path: string, mode: string): void;
    close(): void;
    write(paths: string | any[]): void;
    writeString(string: string, fileName: string): void;
    extract(path: string, pathToExtract: string): void;
    extractAll(path: string): void;
    getFileNames(): any[];
}

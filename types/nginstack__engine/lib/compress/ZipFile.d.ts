export = ZipFile;
declare function ZipFile(): void;
declare class ZipFile {
    open(path: string, mode: 'create' | 'zip' | 'unzip', options?: ZipFileOptions): void;
    close(): void;
    write(paths: string | string[]): void;
    writeString(string: string, fileName: string): void;
    extract(path: string, pathToExtract: string): void;
    extractAll(path: string): void;
    getFileNames(): string[];
}
declare namespace ZipFile {
    export { ZipFileOptions };
}
interface ZipFileOptions {
    method?: 'deflate' | 'bzip2' | 'zstd';
    level?: number;
}

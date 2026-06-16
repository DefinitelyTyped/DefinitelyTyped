export = ZipFile;
declare function ZipFile(): void;
declare class ZipFile {
    open(
        path: string,
        mode: 'create' | 'zip' | 'unzip',
        options?: {
            method?: 'deflate' | 'bzip2' | 'zstd';
            level?: number;
            password?: string | Uint8Array | ArrayBuffer;
            encryption?: 'aes256' | 'zipcrypto';
        }
    ): void;
    close(): void;
    write(paths: string | string[]): void;
    writeString(string: string, fileName: string): void;
    extract(path: string, pathToExtract: string): void;
    extractAll(path: string): void;
    getFileNames(): string[];
}

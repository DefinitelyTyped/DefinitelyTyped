// JSBox File API TypeScript Declaration

interface JBFile {
    read(path: string): NSData;
    download(path: string): Promise<NSData>;
    write(args: { data: NSData; path: string }): boolean;
    delete(path: string): boolean;
    list(path: string): string[] | undefined;
    copy(args: { src: string; dst: string }): boolean;
    move(args: { src: string; dst: string }): boolean;
    mkdir(path: string): boolean;
    exists(path: string): boolean;
    isDirectory(path: string): boolean;
    merge(args: { files: string[]; dest: string; chunkSize?: number }): void;
    split(args: { file: string; chunkSize?: number }): void;
    absolutePath(path: string): string;
    rootPath: string;
    extensions: string[];
}

declare const $file: JBFile;

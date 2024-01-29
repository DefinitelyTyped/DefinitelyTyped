export = GzipFile;
declare function GzipFile(fileName: string, mode: string, level: number): void;
declare class GzipFile {
    constructor(fileName: string, mode: string, level: number);
    write(content: string): void;
    writeln(content: string): void;
    read(size?: number): string;
    readln(): string;
    clear(): void;
    flush(): void;
    close(): void;
    position: number;
    eof: boolean;
    size: number;
}
declare namespace GzipFile {
    let NO_COMPRESSION: number;
    let BEST_SPEED: number;
    let BEST_COMPRESSION: number;
    let DEFAULT_COMPRESSION: number;
}

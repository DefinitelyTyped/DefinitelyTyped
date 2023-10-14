export = GzipFile;
declare function GzipFile(fileName: string, mode: string, level: number): void;
declare class GzipFile {
    constructor(fileName: string, mode: string, level: number);
    write(content: string): void;
    writeln(content: string): void;
    read(size?: number): string;
    readln(): void;
    clear(): void;
    flush(): void;
    close(): void;
    position: number;
    size: number;
}
declare namespace GzipFile {
    const NO_COMPRESSION: number;
    const BEST_SPEED: number;
    const BEST_COMPRESSION: number;
    const DEFAULT_COMPRESSION: number;
}

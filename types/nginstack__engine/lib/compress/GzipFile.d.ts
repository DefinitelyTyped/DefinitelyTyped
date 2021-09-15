export = GzipFile;
declare function GzipFile(fileName: string, mode: string, level: number): void;
declare class GzipFile {
    constructor(fileName: string, mode: string, level: number);
    write(content: string): void;
    writeln(content: string): void;
    read(opt_count?: number): string;
    readln(): void;
    clear(): void;
    flush(): void;
    close(): void;
    position: any;
    size: any;
    NO_COMPRESSION: any;
    BEST_SPEED: any;
    BEST_COMPRESSION: any;
    DEFAULT_COMPRESSION: any;
}

export = SMB2;

interface SMB2Options {
    share: string;

    domain: string;

    username: string;

    password: string;

    port?: number | undefined;

    packetConcurrency?: number | undefined;

    autoCloseTimeout?: number | undefined;
}

interface SMB2ReadFileOptions {
    encoding: string | null;
}

declare class SMB2 {
    constructor(options: SMB2Options);

    close(): void;

    exists(path: string, callback?: (error: unknown, exists: boolean) => void): void;

    rename(oldPath: string, newPath: string, callback?: (error: unknown) => void): void;

    readFile(fileName: string, options?: SMB2ReadFileOptions, callback?: (error: unknown, data: string) => void): void;

    readFile(fileName: string, callback?: (error: unknown, data: string) => void): void;

    writeFile(fileName: string, data: string, options?: SMB2ReadFileOptions, callback?: (error: unknown) => void): void;

    writeFile(fileName: string, data: string, callback?: (error: unknown) => void): void;

    unlink(fileName: string, callback?: (error: unknown) => void): void;

    readdir(dir: string, callback?: (error: unknown, files: string[]) => void): void;

    rmdir(dir: string, callback?: (error: unknown) => void): void;

    mkdir(dir: string, mode: string, callback?: (error: unknown) => void): void;

    mkdir(dir: string, callback?: (error: unknown) => void): void;
}

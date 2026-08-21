/// <reference types="node" />

interface IOptions {
    base?: string | undefined;
    cwd?: string | undefined;
    merge?: boolean | undefined;
}

interface IRev {
    (): NodeJS.ReadWriteStream;

    manifest(): NodeJS.ReadWriteStream;
    manifest(path?: string): NodeJS.ReadWriteStream;
    manifest(options?: IOptions): NodeJS.ReadWriteStream;
    manifest(path?: string, options?: IOptions): NodeJS.ReadWriteStream;
}

declare var rev: IRev;
export = rev;

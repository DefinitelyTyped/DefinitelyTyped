/// <reference types="node" />

interface IOptions {
    newLine: string;
}

interface IFsStats {
    dev?: number | undefined;
    ino?: number | undefined;
    mode?: number | undefined;
    nlink?: number | undefined;
    uid?: number | undefined;
    gid?: number | undefined;
    rdev?: number | undefined;
    size?: number | undefined;
    blksize?: number | undefined;
    blocks?: number | undefined;
    atime?: Date | undefined;
    mtime?: Date | undefined;
    ctime?: Date | undefined;
}

interface IVinylOptions {
    cwd?: string | undefined;
    base?: string | undefined;
    path?: string | undefined;
    stat?: IFsStats | undefined;
    contents?: NodeJS.ReadableStream | Buffer | undefined;
}

interface IConcat {
    (filename: string, options?: IOptions): NodeJS.ReadWriteStream;
    (options: IVinylOptions): NodeJS.ReadWriteStream;
}

declare var _tmp: IConcat;
export = _tmp;

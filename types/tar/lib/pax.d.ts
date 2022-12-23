declare namespace Pax {
    interface Options {
        atime?: Date;
        charset?: string;
        comment?: boolean;
        ctime?: Date;
        gid?: number;
        gname?: string;
        linkpath?: string;
        mtime?: Date;
        path?: string;
        size?: number;
        uid?: number;
        uname?: string;
        dev?: number;
        ino?: unknown;
        nlink?: boolean;
    }
}

declare class Pax {
    atime: Date | null;
    charset: string | null;
    comment: boolean | null;
    ctime: Date | null;
    gid: number | null;
    gname: string | null;
    linkpath: string | null;
    mtime: Date | null;
    path: string | null;
    size: number | null;
    uid: number | null;
    uname: string | null;
    dev: number | null;
    ino: unknown | null;
    nlink: boolean | null;
    global: boolean;

    static parse(string: string, ex: Pax.Options, g: boolean): Pax;

    constructor(obj: Pax.Options, global?: boolean);

    encode(): null | Buffer;

    encodeBody(): string;

    encodeField(field: string): string;
}

export = Pax;

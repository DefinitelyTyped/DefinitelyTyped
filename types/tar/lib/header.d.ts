declare namespace Header {
    interface Options {
        cksumValid?: boolean;
        needPax?: boolean;
        nullBlock?: boolean;
        block?: Buffer;
        path?: string;
        mode?: number;
        uid?: number;
        gid?: number;
        size?: number;
        mtime?: Date;
        cksum?: number;
        linkpath?: string;
        uname?: string;
        gname?: string;
        devmaj?: number;
        devmin?: number;
        atime?: Date;
        ctime?: Date;
    }
}

declare class Header {
    cksumValid: boolean;
    needPax: boolean;
    nullBlock: boolean;
    block: Buffer | null;
    path: string | null;
    mode: number | null;
    uid: number | null;
    gid: number | null;
    size: number | null;
    mtime: Date | null;
    cksum: number | null;
    linkpath: string | null;
    uname: string | null;
    gname: string | null;
    devmaj: number;
    devmin: number;
    atime: Date | null;
    ctime: Date | null;

    constructor(data: Header.Options | Buffer, off?: number, ex?: unknown, gex?: unknown);

    decode(buf: Buffer, off: number, ex?: unknown, gex?: unknown): void;

    slurp(ex: unknown, global?: boolean): void;

    encode(buf: Buffer, off: number): Header.Options['needPax'];

    set(data: Header.Options): void;

    get type(): string;
    set type(type: string);

    get typeKey(): string;
}

export = Header;

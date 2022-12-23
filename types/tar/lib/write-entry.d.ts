import MiniPass = require('minipass');
import fs = require('fs');
import ReadEntry = require('./read-entry');
import Warner = require('./warn-mixin');

declare namespace WriteEntry {
    interface Options {
        portable?: boolean;
        maxReadSize?: number;
        linkCache?: Map<string, string>;
        statCache?: Map<string, string>;
        preservePaths?: boolean;
        cwd?: string[];
        absolute?: string;
        strict?: boolean;
        win32?: boolean;
        onwarn?(code: string, message: string, data?: Buffer): void;
        noMtime?: boolean;
        umask?: boolean;
    }

    type Stat = fs.StatsBase<number>;
}

interface WriteEntry extends MiniPass<ReadEntry | string>, Warner {
    path: string;
    portable: boolean;
    myuid: number;
    myuser: string;
    maxReadSize: number;
    linkCache: Map<string, string>;
    statCache: Map<string, WriteEntry.Stat>;
    preservePaths: boolean;
    cwd: string;
    strict: boolean;
    noPax: boolean;
    noMtime: boolean;
    mtime: Date | null;
    prefix: string | null;
    fd: null;
    blockLen: null;
    blockRemain: null;
    buf: null;
    offset: null;
    length: null;
    pos: null;
    remain: null;
    win32: boolean;
    absolute: string;
    stat: WriteEntry.Stat;
    type: 'File' | 'Directory' | 'SymbolicLink' | 'Unsupported';

    emit(ev: string, ...data: unknown[]): boolean;
    write(writeBuf: MiniPass.ContiguousData): boolean;
}

declare const WriteEntry: {
    Sync: typeof WriteEntrySync;
    Tar: typeof WriteEntryTar;

    new (p: string, opt?: WriteEntry.Options): WriteEntry;
};

declare class WriteEntrySync extends WriteEntry {}

declare namespace WriteEntryTar {
    interface Options extends MiniPass.Options<Buffer> {
        preservePaths?: boolean;
        portable?: boolean;
        strict?: boolean;
        noPax?: boolean;
        noMtime?: boolean;
        prefix?: string;
        mtime?: Date;
        onwarn?(code: string, message: string, data: Buffer): void;
    }
}

interface WriteEntryTar extends MiniPass<ReadEntry | string>, Warner {
    write(data: MiniPass.ContiguousData): boolean;
    end(): this;
}

declare const WriteEntryTar: {
    new (readEntry: ReadEntry, opt?: WriteEntryTar.Options): WriteEntryTar;
};

export = WriteEntry;

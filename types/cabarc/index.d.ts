// Type definitions for cabarc 0.4
// Project: https://github.com/jhermsmeier/node-cabarc
// Definitions by: Zlatko Andonovski <https://github.com/Goldsmith42>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export namespace Cabinet {
    const SIGNATURE = 0x4643534D;
    const MSZIP_SIGNATURE = 0x4B43;
    enum COMPRESSION {
        NONE = 0x0000,
        MSZIP = 0x0100,
        QUANTUM = 0x0200,
        LZX = 0x0300
    }
}

export interface Callback<Result = void> {
    (error: any, result: Result): void;
}

export class Header {
    static readonly PREV_CABINET = 0x0001;
    static readonly NEXT_CABINET = 0x0002;
    static readonly RESERVE_PRESENT = 0x0004;
    static readonly size = 36;
    static readonly MAX_SIZE: number;

    readonly signature: typeof Cabinet.SIGNATURE;
    reserved1: number;
    archiveSize: number;
    reserved2: number;
    fileOffset: number;
    reserved3: number;
    versionMinor: number;
    versionMajor: number;
    folderCount: number;
    fileCount: number;
    flags: number;
    setId: number;
    number: number;

    headerData: number;
    folderData: number;
    blockData: number;

    data: Buffer;

    previous: string;
    previousDisk: string;
    next: string;
    nextDisk: string;

    byteLength: number;

    static parse(buffer: Buffer, offset?: number): Header;

    encodingLength(): number;
    parse(buffer: Buffer, offset?: number): Header;
    write(buffer?: Buffer, offset?: number): Buffer;
}

export class CFFolder {
    static readonly SIZE: 8;

    dataOffset: number;
    blockCount: number;
    compressionType: Cabinet.COMPRESSION;

    reserved: Buffer;
    appData: unknown;

    static parse(buffer: Buffer, offset?: number): CFFolder;

    parse(buffer: Buffer, offset?: number): CFFolder;
    write(buffer?: Buffer, offset?: number): never;
}

export class CFFile {
    static readonly RDONLY = 0x01;
    static readonly HIDDEN = 0x02;
    static readonly SYSTEM = 0x04;
    static readonly ARCH = 0x20;
    static readonly EXEC = 0x40;
    static readonly UNICODE = 0x80;

    static readonly INDEX_CONTINUED_FROM_PREV = 0xFFFD;
    static readonly INDEX_CONTINUED_TO_NEXT = 0xFFFE;
    static readonly INDEX_CONTINUED_PREV_AND_NEXT = 0xFFFF;

    static readonly SIZE = 16;
    static readonly MAX_SIZE: number;

    size: number;
    offset: number;
    folderIndex: number;
    date: number;
    time: number;
    flags: number;
    name: string;

    attributes: number;
    nameLength: number;

    static parse(buffer: Buffer, offset?: number): CFFile;

    readOnly: number;
    hidden: number;
    system: number;
    arch: number;
    exec: number;
    utfName: number;

    getFlag(mask: number): number;
    setFlag(mask: number, value: number): number;

    encodingLength(): number;
    parse(buffer: Buffer, offset?: number): CFFile;
    write(buffer?: Buffer, offset?: number): never;
}

export class Archive {
    header: Header;
    fd: number;
    path: string;
    flags: string;
    mode: number;
    folders: CFFolder[];
    files: CFFile[];

    readHeader(callback: Callback<Header>): void;
    readFileList(callback: Callback<CFFile[]>): void;
    readFolder(folderIndex: number, callback: Callback<CFFolder>): void;
    readFile(fileName: string, callback: Callback<Buffer>): void;
    open(fileName: string, callback: Callback): Archive;
    close(callback: Callback): void;
    createReadStream(filename: any, options: any): never;
}

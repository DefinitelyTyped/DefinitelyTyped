/// <reference types="node" />

import { OpenMode } from "fs";

declare class BinaryFile {
    constructor(path: string, mode: OpenMode, littleEndian?: boolean);

    open(): Promise<void>;
    size(): Promise<number>;
    tell(): number;
    seek(position: number): number;
    close(): Promise<void>;

    read(length: number, position?: number): Promise<Buffer>;
    readInt8(position?: number): Promise<number>;
    readUInt8(position?: number): Promise<number>;
    readInt16(position?: number): Promise<number>;
    readUInt16(position?: number): Promise<number>;
    readInt32(position?: number): Promise<number>;
    readUInt32(position?: number): Promise<number>;
    readInt64(position?: number): Promise<number>;
    readUInt64(position?: number): Promise<number>;
    readFloat(position?: number): Promise<number>;
    readDouble(position?: number): Promise<number>;
    readString(length: number, position?: number): Promise<string>;

    write(buffer: Buffer, position?: number): Promise<number>;
    writeInt8(value: number, position?: number): Promise<number>;
    writeUInt8(value: number, position?: number): Promise<number>;
    writeInt16(value: number, position?: number): Promise<number>;
    writeUInt16(value: number, position?: number): Promise<number>;
    writeInt32(value: number, position?: number): Promise<number>;
    writeUInt32(value: number, position?: number): Promise<number>;
    writeInt64(value: number, position?: number): Promise<number>;
    writeUInt64(value: number, position?: number): Promise<number>;
    writeFloat(value: number, position?: number): Promise<number>;
    writeDouble(value: number, position?: number): Promise<number>;
    writeString(string: string, position?: number): Promise<number>;
}

export = BinaryFile;

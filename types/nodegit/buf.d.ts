/// <reference types="node" />

export class Buf {
    containsNul(): number;

    grow(targetSize: number): Promise<Buf>;
    isBinary(): number;
    set(data: Buffer, datalen: number): Promise<Buf>;
    ptr: string;
    asize: number;
    size: number;
}

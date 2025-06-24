export = ZstdDecompressor;
declare function ZstdDecompressor(options?: {
    dictionary?: Uint8Array | ArrayBuffer | string;
}): void;
declare class ZstdDecompressor {
    constructor(options?: { dictionary?: Uint8Array | ArrayBuffer | string });
    decompress(
        data: string | Uint8Array | ArrayBuffer,
        options?: {
            resultType?: string;
        }
    ): Uint8Array | ArrayBuffer | string;
    decompressStream(
        src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
        dest: File | MemoryStream
    ): void;
}
declare namespace ZstdDecompressor {
    export { File, MemoryStream };
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

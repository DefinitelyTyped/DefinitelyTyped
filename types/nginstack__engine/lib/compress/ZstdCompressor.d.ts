export = ZstdCompressor;
declare function ZstdCompressor(options?: {
    level?: number;
    dictionary?: Uint8Array | ArrayBuffer | string;
}): void;
declare class ZstdCompressor {
    constructor(options?: { level?: number; dictionary?: Uint8Array | ArrayBuffer | string });
    compress(
        data: string | Uint8Array | ArrayBuffer,
        options?: {
            resultType?: string;
        }
    ): Uint8Array | ArrayBuffer | string;
    compressStream(
        src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
        dest: File | MemoryStream
    ): void;
}
declare namespace ZstdCompressor {
    export { File, MemoryStream };
}
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

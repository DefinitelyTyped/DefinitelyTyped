export = Zstd;
declare function Zstd(): void;
declare class Zstd {}
declare namespace Zstd {
    export {
        defaultCompressionLevel,
        minCompressionLevel,
        maxCompressionLevel,
        compress,
        compressStream,
        decompress,
        decompressStream,
        File,
        MemoryStream,
    };
}
declare let defaultCompressionLevel: number;
declare let minCompressionLevel: number;
declare let maxCompressionLevel: number;
declare function compress(
    data: string | Uint8Array | ArrayBuffer,
    options?: {
        level?: number;
        dictionary?: Uint8Array | ArrayBuffer | string;
        resultType?: string;
    }
): Uint8Array | ArrayBuffer | string;
declare function compressStream(
    src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
    dest: File | MemoryStream,
    options?: {
        level?: number;
        dictionary?: Uint8Array | ArrayBuffer | string;
    }
): void;
declare function decompress(
    content: any,
    options?: {
        dictionary?: Uint8Array | ArrayBuffer | string;
        resultType?: string;
    }
): Uint8Array | ArrayBuffer | string;
declare function decompressStream(
    src: File | MemoryStream | Uint8Array | ArrayBuffer | string,
    dest: File | MemoryStream
): void;
type File = import('../io/File');
type MemoryStream = import('../io/MemoryStream');

export = MD5;
declare function MD5(): void;
declare class MD5 {
    toString(): string;
    digest(resultType?: string | DigestType): string | Uint8Array | ArrayBuffer;
    hexDigest(): string;
    update(data: string | Uint8Array | ArrayBuffer): MD5;
}
declare namespace MD5 {
    export { digest, hexDigest, DigestType };
}
interface DigestType {
    BINARY_STRING: string;
    ARRAY_BUFFER: string;
    UINT8_ARRAY: string;
}
declare function digest(
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
declare function hexDigest(data: string | Uint8Array | ArrayBuffer): string;

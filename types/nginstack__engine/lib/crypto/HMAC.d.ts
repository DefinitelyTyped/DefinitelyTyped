export = HMAC;
declare function HMAC(hash: string, key: string | Uint8Array | ArrayBuffer): void;
declare class HMAC {
    constructor(hash: string, key: string | Uint8Array | ArrayBuffer);
    update(data: string | Uint8Array | ArrayBuffer): HMAC;
    digest(digestType: any): string;
    hexDigest(): string;
}
declare namespace HMAC {
    export { digest, hexDigest, DigestType };
}
declare function digest(
    hash: string,
    key: string | Uint8Array | ArrayBuffer,
    data: string | Uint8Array | ArrayBuffer,
    resultType?: string | DigestType
): string | Uint8Array | ArrayBuffer;
declare function hexDigest(
    hash: string,
    key: string | Uint8Array | ArrayBuffer,
    data: string | Uint8Array | ArrayBuffer
): string;
interface DigestType {
    BINARY_STRING: string;
    ARRAY_BUFFER: string;
    UINT8_ARRAY: string;
}

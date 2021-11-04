export = SHA512;
declare function SHA512(): void;
declare class SHA512 {
    toString(): string;
    digest(digestType?: string | DigestType): string;
    hexDigest(): string;
    update(data: string): SHA512;
}
declare namespace SHA512 {
    export { digest, hexDigest, DigestType };
}
interface DigestType {
    BINARY_STRING: string;
    ARRAY_BUFFER: string;
    UINT8_ARRAY: string;
}
declare function digest(data: string, digestType?: string | DigestType): string;
declare function hexDigest(data: string): string;

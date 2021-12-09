export = SHA256;
declare function SHA256(): void;
declare class SHA256 {
    toString(): string;
    digest(digestType?: string | DigestType): string;
    hexDigest(): string;
    update(data: string): SHA256;
}
declare namespace SHA256 {
    export { digest, hexDigest, DigestType };
}
interface DigestType {
    BINARY_STRING: string;
    ARRAY_BUFFER: string;
    UINT8_ARRAY: string;
}
declare function digest(data: string, digestType?: string | DigestType): string;
declare function hexDigest(data: string): string;

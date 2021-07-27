export = SHA1;
declare function SHA1(): void;
declare class SHA1 {
    toString(): string;
    digest(digestType?: string | DigestType): string;
    hexDigest(): string;
    update(data: string): object;
}
declare namespace SHA1 {
    export { digest, hexDigest, DigestType };
}
interface DigestType {
    BINARY_STRING: string;
    ARRAY_BUFFER: string;
    UINT8_ARRAY: string;
}
declare function digest(data: string, digestType?: string | DigestType): string;
declare function hexDigest(data: string): string;

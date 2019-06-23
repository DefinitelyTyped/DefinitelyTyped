import { bytes } from '.';

export type Algorithm =
    | 'md4'
    | 'md5'
    | 'sha1'
    | 'sha256'
    | 'sha384'
    | 'sha512'
    | 'sha512_224'
    | 'sha512_256'
    | 'ripemd160';
export type StringEncoding = 'hex' | 'base64' | 'base64url' | 'base64rawurl';
export type BinaryEncoding = 'binary';

export function hmac(algorithm: Algorithm, secret: string, data: string, outputEncoding: BinaryEncoding): bytes;
export function hmac(algorithm: Algorithm, secret: string, data: string, outputEncoding: StringEncoding): string;
export function md4(input: string, outputEncoding: BinaryEncoding): bytes;
export function md4(input: string, outputEncoding: StringEncoding): string;
export function md5(input: string, outputEncoding: BinaryEncoding): bytes;
export function md5(input: string, outputEncoding: StringEncoding): string;
export function sha1(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha1(input: string, outputEncoding: StringEncoding): string;
export function sha256(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha256(input: string, outputEncoding: StringEncoding): string;
export function sha384(input: string, outputEncoding: BinaryEncoding): bytes;
export function sha384(input: string, outputEncoding: StringEncoding): string;
export function sha512(input: string, outputEncoding: StringEncoding): string;
export function sha512_224(input: string, outputEncoding: StringEncoding): string;
export function sha512_256(input: string, outputEncoding: StringEncoding): string;
export function ripemd160(input: string, outputEncoding: StringEncoding): string;
export function createHash(algorithm: string): Hasher;
export function createHMAC(algorithm: string, secret: string): Hasher;

export interface Hasher {
    update: (input: string) => void;
    digest: (outputEncoding: StringEncoding) => string;
}

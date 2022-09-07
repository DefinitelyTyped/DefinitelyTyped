import { HashAlgorithm, SignatureAlgorithm } from './crypto';

export type ValueOf<T> = T[keyof T];

export type Address = string;

export type PublicKey = Buffer;

export interface AddressMap {
    [index: string]: Address;
}

export interface KeyObject {
    privateKey: string;
    hashAlgorithm?: ValueOf<HashAlgorithm>;
    signatureAlgorithm?: ValueOf<SignatureAlgorithm>;
    weight?: number;
}

export interface SignerInfo {
    addr: Address;
    hashAlgorithm?: ValueOf<HashAlgorithm>;
    keyId?: number;
    privateKey?: string;
    signatureAlgorithm?: ValueOf<SignatureAlgorithm>;
}

export function getAccountAddress(alias: string): Promise<string>;

export function createAccount(props: { name?: string; keys?: KeyObject[] | PublicKey[] }): Promise<string>;

import { KeyObject } from './account';

export interface HashAlgorithm {
    SHA2_256: 1;
    SHA3_256: 3;
}

export interface SignatureAlgorithm {
    ECDSA_P256: 2;
    ECDSA_secp256k1: 3;
}

export const HashAlgorithm: HashAlgorithm;

export const SignatureAlgorithm: SignatureAlgorithm;

export function pubFlowKey(keyObject: KeyObject): Promise<Buffer>;

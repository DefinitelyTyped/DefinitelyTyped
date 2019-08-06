export type PrivateKey = Buffer;
export type Csr = Buffer;
export interface CsrOptions {
    keySize?: number;
    commonName?: string;
    altNames?: string[];
}

export function createCsr(data: CsrOptions, key?: PrivateKey): Promise<[PrivateKey, Csr]>;
export function createPrivateKey(size?: number): Promise<PrivateKey>;

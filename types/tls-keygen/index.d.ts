/// <reference types="node" />

export function keygen(options: KeyGenOptions): Promise<KeyGenResult>;

interface KeyGenOptions {
    key?: string | undefined;
    cert?: string | undefined;
    commonName?: string | undefined;
    subjectAltName?: string[] | undefined;
    entrust?: boolean | undefined;
}

interface KeyGenResult {
    key: string;
    cert: string;
}

export const defaultKey: string;
export const defaultCert: string;
export const defaultCommonName: string;
export const defaultSubjectAltName: string[];

interface EphemeralResult {
    key: Buffer;
    cert: Buffer;
}

export function ephemeral(options: KeyGenOptions): Promise<EphemeralResult>;

export {};

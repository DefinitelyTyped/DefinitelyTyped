// Type definitions for tls-keygen 3.7
// Project: https://gitlab.com/sebdeckers/tls-keygen
// Definitions by: Yi Hong <https://github.com/hongyiweiwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export function keygen(options: KeyGenOptions): Promise<KeyGenResult>;

interface KeyGenOptions {
    key?: string;
    cert?: string;
    commonName?: string;
    subjectAltName?: string[];
    entrust?: boolean;
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

// Type definitions for tls-keygen 3.7.0
// Project: https://gitlab.com/sebdeckers/tls-keygen
// Definitions by: Yi Hong <https://github.com/hongyiweiwu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.8.3

/// <reference types="node" />

export declare function keygen(options: KeyGenOptions): Promise<KeyGenResult>;

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

export declare const defaultKey: string;
export declare const defaultCert: string;
export declare const defaultCommonName: string;
export declare const defaultSubjectAltName: string[];

interface EphemeralResult {
    key: Buffer;
    cert: Buffer;
}

export declare function ephemeral(options: KeyGenOptions): Promise<EphemeralResult>;
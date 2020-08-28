// Type definitions for saml 0.13
// Project: https://github.com/auth0/node-saml#readme
// Definitions by: Eric Heikes <https://github.com/eheikes>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SamlAttributes {
    [key: string]: string;
}

export interface KeyInfoProvider {
    getKeyInfo(key: string, prefix: string): string;
}

export interface SamlOpts {
    authnContextClassRef?: string;
    attributes?: SamlAttributes;
    audiences?: string | string[];
    cert: Buffer;
    digestAlgorithm?: string;
    encryptionAlgorithm?: string;
    encryptionCert?: Buffer;
    encryptionPublicKey?: Buffer;
    holderOfKeyProofSecret?: string;
    includeAttributeNameFormat?: boolean;
    inResponseTo?: string;
    issuer?: string;
    key: Buffer;
    keyEncryptionAlgorighm?: string; // sic https://github.com/auth0/node-xml-encryption/issues/17
    keyInfoProvider?: KeyInfoProvider;
    lifetimeInSeconds?: number;
    nameIdentifier?: string;
    nameIdentifierFormat?: string;
    prefix?: string;
    recipient?: string;
    sessionIndex?: string;
    signatureAlgorithm?: string;
    signatureNamespacePrefix?: string;
    subjectConfirmationMethod?: string;
    typedAttributes?: boolean;
    uid?: string;
    xpathToNodeBeforeSignature?: string;
}

export namespace Saml11 {
    function create(opts: SamlOpts, cb?: (err: Error | null, result: any[], proofSecret: Buffer) => void): any;
}

export namespace Saml20 {
    function create(opts: SamlOpts, cb?: (err: Error | null, signed: string) => void): any;
}

// Type definitions for saml 1.0
// Project: https://github.com/auth0/node-saml#readme
// Definitions by: Eric Heikes <https://github.com/eheikes>, Eva Sarafianou <https://github.com/esarafianou>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface SamlAttributes {
    [key: string]: string;
}

export interface KeyInfoProvider {
    getKeyInfo(key: string, prefix: string): string;
}

export interface SamlSignedOpts {
    authnContextClassRef?: string | undefined;
    attributes?: SamlAttributes | undefined;
    audiences?: string | string[] | undefined;
    cert: Buffer;
    digestAlgorithm?: string | undefined;
    encryptionAlgorithm?: string | undefined;
    encryptionCert?: Buffer | undefined;
    encryptionPublicKey?: Buffer | undefined;
    holderOfKeyProofSecret?: string | undefined;
    includeAttributeNameFormat?: boolean | undefined;
    inResponseTo?: string | undefined;
    issuer?: string | undefined;
    key: Buffer;
    keyEncryptionAlgorithm?: string | undefined;
    keyInfoProvider?: KeyInfoProvider | undefined;
    lifetimeInSeconds?: number | undefined;
    nameIdentifier?: string | undefined;
    nameIdentifierFormat?: string | undefined;
    prefix?: string | undefined;
    recipient?: string | undefined;
    sessionIndex?: string | undefined;
    signatureAlgorithm?: string | undefined;
    signatureNamespacePrefix?: string | undefined;
    subjectConfirmationMethod?: string | undefined;
    typedAttributes?: boolean | undefined;
    uid?: string | undefined;
    xpathToNodeBeforeSignature?: string | undefined;
}

export interface SamlUnassignedOpts {
    authnContextClassRef?: string | undefined;
    attributes?: SamlAttributes | undefined;
    audiences?: string | string[] | undefined;
    cert?: Buffer | undefined;
    digestAlgorithm?: string | undefined;
    encryptionAlgorithm?: string | undefined;
    encryptionCert?: Buffer | undefined;
    encryptionPublicKey?: Buffer | undefined;
    holderOfKeyProofSecret?: string | undefined;
    includeAttributeNameFormat?: boolean | undefined;
    inResponseTo?: string | undefined;
    issuer?: string | undefined;
    key?: Buffer | undefined;
    keyEncryptionAlgorithm?: string | undefined;
    keyInfoProvider?: KeyInfoProvider | undefined;
    lifetimeInSeconds?: number | undefined;
    nameIdentifier?: string | undefined;
    nameIdentifierFormat?: string | undefined;
    prefix?: string | undefined;
    recipient?: string | undefined;
    sessionIndex?: string | undefined;
    signatureAlgorithm?: string | undefined;
    signatureNamespacePrefix?: string | undefined;
    subjectConfirmationMethod?: string | undefined;
    typedAttributes?: boolean | undefined;
    uid?: string | undefined;
    xpathToNodeBeforeSignature?: string | undefined;
}
export namespace Saml11 {
    function create(opts: SamlSignedOpts, cb?: (err: Error | null, result: any[], proofSecret: Buffer) => void): any;
    function createUnsignedAssertion(
        opts: SamlUnassignedOpts,
        cb?: (err: Error | null, result: any[], proofSecret: Buffer) => void,
    ): any;
}

export namespace Saml20 {
    function create(opts: SamlUnassignedOpts, cb?: (err: Error | null, signed: string) => void): any;
    function createUnsignedAssertion(opts: SamlUnassignedOpts, cb?: (err: Error | null, signed: string) => void): any;
}

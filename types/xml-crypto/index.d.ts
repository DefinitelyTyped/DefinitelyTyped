// Type definitions for xml-crypto 1.4
// Project: https://github.com/yaronn/xml-crypto#readme
// Definitions by: Eric Heikes <https://github.com/eheikes>
//                 Max Chehab <https://github.com/maxchehab>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { SelectedValue } from 'xpath';

export class HashAlgorithm {
    getAlgorithmName(): string;
    getHash(xml: string): string;
}

export interface Reference {
    xpath: string;
    transforms?: ReadonlyArray<string>;
    digestAlgorithm?: string;
    uri?: string;
    digestValue?: string;
    inclusiveNamespacesPrefixList?: string;
    isEmptyUri?: boolean;
}

export class SignatureAlgorithm {
    getAlgorithmName(): string;
    getSignature(signedInfo: Node, signingKey: Buffer): string;
}

export class TransformationAlgorithm {
    getAlgorithmName(): string;
    process(node: Node): string;
}

export class SignedXml {
    static CanonicalizationAlgorithms: {[uri: string]: new () => TransformationAlgorithm };
    static HashAlgorithms: {[uri: string]: new () => HashAlgorithm};
    static SignatureAlgorithms: {[uri: string]: new () => SignatureAlgorithm};
    canonicalizationAlgorithm: string;
    keyInfoProvider: FileKeyInfo;
    references: Reference[];
    signatureAlgorithm: string;
    signingKey: Buffer | string;
    validationErrors: string[];
    constructor(idMode?: string | null, options?: {
        canonicalizationAlgorithm?: string
        idAttribute?: string
        implicitTransforms?: ReadonlyArray<string>
        signatureAlgorithm?: string
    })
    addReference(
        xpath: string,
        transforms?: ReadonlyArray<string>,
        digestAlgorithm?: string,
        uri?: string,
        digestValue?: string,
        inclusiveNamespacesPrefixList?: string,
        isEmptyUri?: boolean
    ): void;
    checkSignature(xml: string): boolean;
    computeSignature(
        xml: string,
        opts?: {
            prefix?: string,
            attrs?: {[key: string]: any},
            location?: {
                reference: string,
                action: 'append' | 'prepend' | 'before' |  'after'
            },
            existingPrefixes?: {[prefix: string]: string}
        }
    ): void;
    getOriginalXmlWithIds(): string;
    getSignatureXml(): string;
    getSignedXml(): string;
    loadSignature(signatureNode: string | Node): void;
}

export class FileKeyInfo {
    file: string;
    constructor(file?: string);
    getKey(keyInfo?: Node): Buffer;
    getKeyInfo(key?: string, prefix?: string): string;
}

export function xpath(node: Node, xpath: string): SelectedValue[];

// Type definitions for dkim-signer 0.2
// Project: https://github.com/andris9/dkim-signer
// Definitions by: Piotr Roszatycki <https://github.com/dex4er>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import * as crypto from "crypto";

export interface DKIMSignOptions {
    /** Header fields to sign (ie: 'from:to:cc:subject') */
    headerFieldNames?: string;
    /** DKIM private key */
    privateKey: crypto.SignPrivateKeyInput | crypto.KeyLike;
    /** Domain name to use for signing (ie: 'domain.com') */
    domainName: string;
    /** Selector for the DKMI public key (ie. 'dkim' if you have set up a TXT record for 'dkim._domainkey.domain.com') */
    keySelector: string;
}

/** Sign an email with provided DKIM key, uses RSA-SHA256. */
export function DKIMSign(email: Buffer | string, options: DKIMSignOptions): string;

/** Generates a DKIM-Signature header field without the signature part ('b=' is empty) */
export function generateDKIMHeader(domainName: string, keySelector: string, headerFieldNames: string, headers: string, body: string): string;

/** Generates a SHA-256 hash */
export function sha256(str: string, encoding?: crypto.HexBase64Latin1Encoding): string;

/** DKIM canonicalization functions */
export namespace DKIMCanonicalizer {
    /** Simple body canonicalization by rfc4871 #3.4.3 */
    function simpleBody(body: string): string;
    /** Relaxed body canonicalization by rfc4871 #3.4.4 */
    function relaxedBody(body: string): string;
    /** Relaxed headers canonicalization by rfc4871 #3.4.2 with filtering */
    function relaxedHeaders(headers: string, fieldNames?: string): { headers: string, fieldNames: string };
    /** Relaxed header canonicalization for single header line */
    function relaxedHeaderLine(line: string): { key: string, value: string };
}

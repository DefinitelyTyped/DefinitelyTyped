// Type definitions for strong-data-uri 1.0
// Project: github.com/strongloop/strong-data-uri
// Definitions by: Martin Heidegger <https://github.com/martinheidegger>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface DataURI extends Buffer {
    mimetype: string;
    mediatype: string;
    charset: string | null;
}

/**
 * Parser for retrieving data encoded in data: URIs specified by RFC2397.
 *
 * @param uri data URI
 * @see https://www.ietf.org/rfc/rfc2397.txt
 */
export function decode(uri: string): Buffer & DataURI;

/**
 * Encoder to create data URIs specified by RFC2397.
 *
 * @param uri data URI
 * @see https://www.ietf.org/rfc/rfc2397.txt
 */
export function encode(input: Buffer | string, mediatype?: string): string;

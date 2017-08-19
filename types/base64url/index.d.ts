// Type definitions for base64url v2.0.0
// Project: https://github.com/brianloveswords/base64url
// Definitions by: Stepan Miroshin <https://github.com/microshine>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="node" />

/**
 * For encoding and decoding base64url!
 * v2.0.0
 */

/**
 * Encoding type
 */
declare type Encoding = "ascii" | "utf8" | "utf16le" | "ucs2" | "utf16le" | "base64" | "binary" | "hex"

interface IBase64Url {
    /**
     * Encode input to base64url
     * @param {string} input Incoming input 
     * @param {Encoding} encoding Default 'utf8'
     * @return {string} 
     */
    (input: string, encoding?: Encoding): string;
    /**
     * Encode input to base64url
     * @param {Buffer} input Incoming value 
     */
    (inout: Buffer): string;
    /**
     * Encode input to base64url
     * 
     * @param {string} input Incoming input 
     * @param {Encoding} encoding Default 'utf8'
     * @returns {string}
     */
    encode(input: string, encoding?: Encoding): string;
    /**
     * Encode input to base64url
     * @param {Buffer} input Incoming value 
     */
    encode(input: Buffer): string;
    /**
     * Convert a base64url encoded string into a raw string.
     * @param {string} base64url base64url encoded string 
     * @param {Encoding} encoding Encoding defaults to 'utf8'
     * @returns {string}
     */
    decode(base64url: string, encoding?: string): string;
    /**
     * Convert a base64url encoded string to a base64 encoded string
     * @param {string | Buffer} base64url base64url encoded value 
     * @returns {string}
     */
    toBase64(base64url: string | Buffer): string;
    /**
     * Convert a base64 encoded string to a base64url encoded string
     * @param {string} base64 encoded string
     * @returns {string}
     */
    fromBase64(base64: string): string;
    /**
     * Convert a base64url encoded string to a Buffer
     * @param {string} base64url encoded string 
     * @returns {Buffer}
     */
    toBuffer(base64url: string): Buffer;
}

declare const base64url: IBase64Url;
export = base64url;
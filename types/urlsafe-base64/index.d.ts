/// <reference types="node"/>

/**
 * Library version.
 */
export declare var version: string;

/**
 * .encode
 *
 * return an encoded Buffer as URL Safe Base64
 *
 * Note: This function encodes to the RFC 4648 Spec where '+' is encoded
 *       as '-' and '/' is encoded as '_'. The padding character '=' is
 *       removed.
 *
 * @param {Buffer} buffer
 * @return {String}
 * @api public
 */
export declare function encode(buffer: Buffer): string;

/**
 * .decode
 *
 * return an decoded URL Safe Base64 as Buffer
 *
 * @param {String}
 * @return {Buffer}
 * @api public
 */
export declare function decode(base64: string): Buffer;

/**
 * .validate
 *
 * Validates a string if it is URL Safe Base64 encoded.
 *
 * @param {String}
 * @return {Boolean}
 * @api public
 */
export declare function validate(base64: string): boolean;

// Type definitions for multibase 0.6
// Project: https://github.com/multiformats/js-multibase#readme
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace multibase {
    type name =
        | 'base1'
        | 'base2'
        | 'base8'
        | 'base10'
        | 'base16'
        | 'base32'
        | 'base32pad'
        | 'base32hex'
        | 'base32hexpad'
        | 'base32z'
        | 'base58flickr'
        | 'base58btc'
        | 'base64'
        | 'base64pad'
        | 'base64url'
        | 'base64urlpad';
    type code = '1' | '0' | '7' | '9' | 'f' | 'b' | 'c' | 'v' | 't' | 'h' | 'Z' | 'z' | 'm' | 'M' | 'u' | 'U';
    /**
     * Encode data with the specified base and add the multibase prefix.
     *
     * @param nameOrCode The multibase name or code number.
     * @param buf The data to be encoded.
     */
    function encode(nameOrCode: name | code, buf: Buffer): Buffer;

    /**
     * Takes a buffer or string encoded with multibase header, decodes it and
     * returns the decoded buffer
     *
     * @param bufOrString The data to be decoded.
     *
     */
    function decode(bufOrString: Buffer | string): Buffer;

    /**
     * Is the given data multibase encoded?
     *
     * @param bufOrString The data to be checked.
     */
    function isEncoded(bufOrString: Buffer | string): name | false;

    /**
     * A frozen Array of supported base encoding names.
     */
    const names: ReadonlyArray<name>;
    /**
     * A frozen Array of supported base encoding codes.
     */
    const codes: ReadonlyArray<code>;
}

/**
 * Create a new buffer with the multibase varint+code.
 *
 * @param nameOrCode The multibase name or code number.
 * @param buf The data to be prefixed with multibase.
 */
declare function multibase(nameOrCode: multibase.name | multibase.code, buf: Buffer): Buffer;

export = multibase;

// Type definitions for multibase 0.6
// Project: https://github.com/multiformats/js-multibase#readme
// Definitions by: Carson Farmer <https://github.com/carsonfarmer>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
/// <reference types="node" />

declare namespace Multibase {
    /**
     * Encode data with the specified base and add the multibase prefix.
     *
     * @param nameOrCode The multibase name or code number.
     * @param buf The data to be encoded.
     */
    function encode(nameOrCode: string | number, buf: Buffer): Buffer;

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
    function isEncoded(bufOrString: Buffer | string): string | false;

    /**
     * A frozen Array of supported base encoding names.
     */
    const names: ReadonlyArray<string>;
    /**
     * A frozen Array of supported base encoding codes.
     */
    const codes: ReadonlyArray<string | number>;
}

/**
 * Create a new buffer with the multibase varint+code.
 *
 * @param nameOrCode The multibase name or code number.
 * @param buf The data to be prefixed with multibase.
 */
declare function Multibase(nameOrCode: string | number, buf: Buffer): Buffer;

export = Multibase;

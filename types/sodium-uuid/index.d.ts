/// <reference types="node" />

export = uuid;

/**
 * Generate v4 UUIDs using libsodium's RNG.
 *
 * Will fill the first 16 bytes of returned buffer with random bits but set the appropriate
 * bits to be recognised as a UUID v4. This leaves 122 bits of entropy. This method does not
 * insert dashes in the formatting, but this can be done with the `stringify()` method.
 *
 * @param buffer The buffer to generate the UUID to. Must be at least length 128 bits (16 bytes).
 *
 * @example
 * import uuid = require('sodium-uuid')
 *
 * uuid() // => Buffer
 * uuid(Buffer.allocUnsafe(uuid.BYTES)) // => allocUnsafe'ed 16 byte Buffer
 */
declare function uuid(buffer?: Buffer): Buffer;

declare namespace uuid {
    /**
     * Convert a buffer to string representation of UUID eg. 4a181507-72e2-45c7-a512-9d9601425b2d.
     * Will only read the first 16 bytes of `buffer`.
     */
    function stringify(buffer: Buffer): string;
    /**
     * Convert a string to a buffer representation of UUID. Will fail if str is not a valid UUIDv4.
     *
     * @param uuid The UUID to parse.
     * @param buffer The buffer to parse the UUID to. Must be at least length `BYTES`. Will be allocated if not given.
     */
    function parse(uuid: string, buffer?: Buffer): Buffer;
    /**
     * Check that `uuid` is a valid UUIDv4.
     */
    function isUUID(uuid: string | Buffer): boolean;
    /** The number of bytes a UUID buffer must be able to contain. */
    const BYTES: 16;
}

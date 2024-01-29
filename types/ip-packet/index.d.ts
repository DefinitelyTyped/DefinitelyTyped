/// <reference types="node" />

/**
 * Returns `ip-packet` configured with `options`.
 */
export function configure(options: Options): {
    configure: typeof configure;
    encode: typeof encode;
    decode: typeof decode;
    encodingLength: typeof encodingLength;
};

/**
 * An [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible packet encoder.
 *
 * @param packet The `Packet` to encode.
 * @param buffer The `Buffer` to encode the `packet` into.
 * @param [offset=0] The byte offset to encode `packet` at in `buffer`.
 *
 * @example
 * import * as ip from 'ip-packet'
 *
 * ip.encode({
 *   version: 4,
 *   protocol: 0,
 *   sourceIp: '127.0.0.1',
 *   destinationIp: '127.0.0.1',
 *   data: Buffer.from('some data')
 * })
 */
export function encode(packet: Packet, buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    /**
     * The amount of bytes used to encode the `Packet`. This property is set after each call to `encode()`.
     */
    const bytes: number | undefined;
}

/**
 * An [abstract-encoding](https://github.com/mafintosh/abstract-encoding) compatible packet decoder.
 *
 * @param buffer The `Buffer` to decode a `Packet` from.
 * @param [start=0] The byte offset into `buffer` to start decoding the encoded `Buffer`.
 *
 * @example
 * import * as ip from 'ip-packet'
 *
 * const buf = ip.encode({
 *   version: 4,
 *   protocol: 0,
 *   sourceIp: '127.0.0.1',
 *   destinationIp: '127.0.0.1',
 *   data: Buffer.from('some data')
 * })
 *
 * console.log(ip.decode(buf)) // prints out the decoded packet
 */
export function decode(buffer: Buffer, start?: number): DecodedPacket;
export namespace decode {
    const bytes: number | undefined;
}

/**
 * @returns The byte length of the `packet` encoded.
 */
export function encodingLength(packet: Packet): number;

export interface Options {
    /**
     * When decoding, ignore checksums set to `0x0000`.
     * @default false
     */
    allowNullChecksum?: boolean;
}

export interface Packet {
    version: 4;
    sourceIp: string;
    destinationIp: string;
    data: Buffer;
    /** @default 5 */
    ihl?: number | undefined;
    /** @default 0 */
    dscp?: number | undefined;
    /** @default 0 */
    ecn?: number | undefined;
    /** @default 0 */
    identification?: number | undefined;
    /** @default 0 */
    flags?: number | undefined;
    /** @default 0 */
    fragmentOffset?: number | undefined;
    /** @default 0 */
    ttl?: number | undefined;
    /** @default 0 */
    protocol?: number | undefined;
}

export interface DecodedPacket extends Required<Packet> {
    length: number;
    checksum: number;
}

/// <reference types="node" />

/**
 * Create a new ipv4-peers decoder that encodes/decodes a fixed size peer id in addition to host/port.
 * The peer id is exposed as the `.id` property on a peer object.
 */
declare function create(idLength?: number): {
    idLength: typeof create;
    encodingLength: typeof encodingLength;
    encode: typeof encode;
    decode: typeof decode;
};

export { create as idLength };

/**
 * @returns The amount of bytes needed to encode the peers into a buffer.
 */
export function encodingLength(peers: readonly Peer[]): number;

/**
 * Encode a list of ipv4 peers into a buffer.
 *
 * @example
 * import * as peers from 'ipv4-peers'
 *
 * const buf = peers.encode([{
 *   host: '127.0.0.1',
 *   port: 8080
 * }, {
 *   host: '127.0.0.1',
 *   port: 9090
 * }])
 *
 * console.log(buf) // 12 byte buffer
 */
export function encode(peers: readonly Peer[], buffer?: Buffer, offset?: number): Buffer;
export namespace encode {
    const bytes: number;
}

/**
 * Decode a buffer into a list of peers.
 *
 * @example
 * import * as peers from 'ipv4-peers'
 *
 * const buf = peers.encode([{
 *   host: '127.0.0.1',
 *   port: 8080
 * }, {
 *   host: '127.0.0.1',
 *   port: 9090
 * }])
 *
 * console.log(peers.decode(buf)) // the peer list
 */
export function decode(buffer: Buffer, offset?: number, end?: number): Peer[];
export namespace decode {
    const bytes: number;
}

export interface Peer {
    host: string;
    port: number;
    id?: Buffer | undefined;
}

// Type definitions for socket.io-parser 3.1
// Project: https://github.com/socketio/socket.io-parser
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>
//                 York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import Emitter = require('component-emitter');

export interface Packet {
    type: number;
    data: any;
    id: number;
    attachments?: number;
}
export type EncodedPacket = string | Buffer | ArrayBuffer | Blob;

/**
 * Packet types.
 */
export const types: string[];
/**
 * Protocol version.
 */
export const protocol: number;

/**
 * Packet type `connect`.
 */
export const CONNECT: number;
/**
 * Packet type `disconnect`.
 */
export const DISCONNECT: number;
/**
 * Packet type `event`.
 */
export const EVENT: number;

/**
 * Packet type `ack`.
 */
export const ACK: number;
/**
 * Packet type `error`.
 */
export const ERROR: number;
/**
 * Packet type 'binary event'
 */
export const BINARY_EVENT: number;
/**
 * Packet type `binary ack`. For acks with binary arguments.
 */
export const BINARY_ACK: number;

export class Encoder {
    /**
     * Encode a packet as a single string if non-binary, or as a
     * buffer sequence, depending on packet type.
     *
     * @param packet Packet object
     * @param callback Function to handle encodings (likely engine.write)
     * @return Calls callback with Array of encodings
     */
    encode(packet: Packet, callback: (encodedPackets: EncodedPacket[]) => void): void;
}

export class Decoder extends Emitter {
    /**
     * Decodes an ecoded packet string into packet JSON.
     *
     * @param encodedPacket Encoded packet
     */
    add(encodedPacket: EncodedPacket): void;
    /**
     * Deallocates a parser's resources
     */
    destroy(): void;
}

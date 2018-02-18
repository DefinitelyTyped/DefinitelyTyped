// Type definitions for socket.io-parser 3.1
// Project: https://github.com/socketio/socket.io-parser
// Definitions by: Corbin Crutchley <https://github.com/crutchcorn>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import {Packet} from './index';

/**
 * Replaces every Buffer | ArrayBuffer in packet with a numbered placeholder.
 * Anything with blobs or files should be fed through removeBlobs before coming
 * here.
 * @param packet Socket.io event packet
 * @return with deconstructed packet and list of buffers
 */
export function deconstructPacket (packet: Packet): {packet: Packet, buffers: Buffer[] | ArrayBuffer[]};
/**
 * Reconstructs a binary packet from its placeholder packet and buffers
 *
 * @param packet Event packet with placeholders
 * @param buffers Binary buffers to put in placeholder positions
 * @return reconstructed packet
 */
export function reconstructPacket(packet: Packet, buffers: Buffer[] | ArrayBuffer[]): Packet;

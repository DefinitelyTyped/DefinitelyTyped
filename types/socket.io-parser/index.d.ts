// Type definitions for socket.io-parser 2.2
// Project: https://github.com/socketio/socket.io-parser
// Definitions by: York Yao <https://github.com/plantain-00>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export interface Packet {
    type: number;
    data: any;
    id: number;
}
export type EncodedPacket = string | Buffer | ArrayBuffer | Blob;

export const types: string[];

export const CONNECT: number;
export const DISCONNECT: number;
export const EVENT: number;
export const ACK: number;
export const ERROR: number;
export const BINARY_EVENT: number;
export const BINARY_ACK: number;

export class Encoder {
    encode(packet: Packet, callback: (encodedPackets: EncodedPacket[]) => void): void;
}

export class Decoder {
    on(event: string, callback: (decodedPacket: Packet) => void): void;
    add(encodedPacket: EncodedPacket): void;
    destroy(): void;
}

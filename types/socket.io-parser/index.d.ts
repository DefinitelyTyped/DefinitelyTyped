// Type definitions for json-editor
// Project: https://github.com/socketio/socket.io-parser
// Definitions by: York Yao <https://github.com/plantain-00/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

///<reference types="node" />

declare module "socket.io-parser" {
    namespace Parser {
        type Packet = {
            type: number,
            data: any,
            id: number
        }
        type EncodedPacket = string | Buffer | ArrayBuffer | Blob;

        var types: string[];

        var CONNECT: number;
        var DISCONNECT: number;
        var EVENT: number;
        var ACK: number;
        var ERROR: number;
        var BINARY_EVENT: number;
        var BINARY_ACK: number;

        class Encoder {
            encode(packet: Packet, callback: (encodedPackets: EncodedPacket[]) => void): void;
        }

        class Decoder {
            on(event: string, callback: (decodedPacket: Packet) => void): void;
            add(encodedPacket: EncodedPacket): void;
            destroy(): void;
        }
    }

    export = Parser;
}

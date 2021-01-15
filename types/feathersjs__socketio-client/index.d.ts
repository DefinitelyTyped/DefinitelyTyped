// Type definitions for @feathersjs/socketio-client 1.0
// Project: https://feathersjs.com
// Definitions by: Jan Lohage <https://github.com/j2L4e>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

/// <reference types="socket.io-client" />

export default function feathersSocketIOClient(socket: SocketIOClient.Socket, options?: FeathersSocketIOClientOptions): () => void;

export interface FeathersSocketIOClientOptions {
    timeout?: number;
}
